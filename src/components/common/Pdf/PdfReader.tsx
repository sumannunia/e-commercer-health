import { useCallback, useRef, useState, useEffect } from "react";
import * as PDFJS from "pdfjs-dist";
import type {
  PDFDocumentProxy,
  RenderParameters,
} from "pdfjs-dist/types/src/display/api";
import { ActionIcon, Group } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
export interface PdfProps {
  src: string;
  height?: number;
}

export default function PdfJs(props: PdfProps) {
  PDFJS.GlobalWorkerOptions.workerSrc =
    "https://unpkg.com/pdfjs-dist@4.7.76/build/pdf.worker.min.mjs";

  const { src } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [pdfDoc, setPdfDoc] = useState<PDFDocumentProxy>();
  const [currentPage, setCurrentPage] = useState(1);
  let renderTask: PDFJS.RenderTask;

  const renderPage = useCallback(
    (pageNum: number, pdf = pdfDoc) => {
      const canvas = canvasRef.current;
      if (!canvas || !pdf) return;
      canvas.height = 0;
      canvas.width = 0;
      // canvas.hidden = true;
      pdf
        .getPage(pageNum)
        .then((page) => {
          const viewport = page.getViewport({ scale: 0.7 });
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          const renderContext: RenderParameters = {
            canvasContext: canvas.getContext("2d")!,
            viewport: viewport,
          };
          try {
            if (renderTask) {
              renderTask.cancel();
            }
            renderTask = page.render(renderContext);
            return renderTask.promise;
          } catch (error: any) {
            console.log({ error });
          }
        })
        .catch((error) => console.log(error));
    },
    [pdfDoc]
  );

  useEffect(() => {
    renderPage(currentPage, pdfDoc);
  }, [pdfDoc, currentPage, renderPage]);

  useEffect(() => {
    const loadingTask = PDFJS.getDocument(src);
    loadingTask.promise.then(
      (loadedDoc) => {
        setPdfDoc(loadedDoc);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [src]);

  const nextPage = () =>
    pdfDoc && currentPage < pdfDoc.numPages && setCurrentPage(currentPage + 1);

  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div>
      <Group mb={"sm"} align="center" justify="center" gap={"xs"}>
        <ActionIcon
          onClick={prevPage}
          disabled={currentPage <= 1}
          color="black"
        >
          <IconChevronLeft />
        </ActionIcon>
        <ActionIcon
          color="black"
          onClick={nextPage}
          disabled={currentPage >= (pdfDoc?.numPages ?? -1)}
        >
          <IconChevronRight />
        </ActionIcon>{" "}
      </Group>
      <Group mb={"lg"} justify="center">
        <canvas ref={canvasRef}></canvas>
      </Group>
    </div>
  );
}
