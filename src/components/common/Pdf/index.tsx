import * as React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Set the workerSrc
import { GlobalWorkerOptions, version } from "pdfjs-dist"; // Import pdfjs-dist
GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.js`;

interface CustomizeNavigationButtonsExampleProps {
  fileUrl: string;
}

const CustomizeNavigationButtonsExample: React.FC<
  CustomizeNavigationButtonsExampleProps
> = ({ fileUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        maxWidth: "1200px",
        padding: "1rem",
        margin: " auto",
      }}
    >
      {/* Navigation Buttons */}
      {/* <div
        style={{
          alignItems: "center",
          backgroundColor: "#eeeeee",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "center",
          padding: "4px",
        }}
      >
        <div style={{ padding: "0 2px" }}>
          <GoToFirstPage>
            {(props: RenderGoToPageProps) => (
              <button
                style={{
                  backgroundColor: "#357edd",
                  border: "none",
                  borderRadius: "4px",
                  color: "#ffffff",
                  cursor: "pointer",
                  padding: "8px",
                }}
                onClick={props.onClick}
              >
                First page
              </button>
            )}
          </GoToFirstPage>
        </div>
        <div style={{ padding: "0 2px" }}>
          <GoToPreviousPage>
            {(props: RenderGoToPageProps) => (
              <button
                style={{
                  backgroundColor: props.isDisabled ? "#96ccff" : "#357edd",
                  border: "none",
                  borderRadius: "4px",
                  color: "#ffffff",
                  cursor: props.isDisabled ? "not-allowed" : "pointer",
                  padding: "8px",
                }}
                disabled={props.isDisabled}
                onClick={props.onClick}
              >
                Previous page
              </button>
            )}
          </GoToPreviousPage>
        </div>
        <div style={{ padding: "0 2px" }}>
          <GoToNextPage>
            {(props: RenderGoToPageProps) => (
              <button
                style={{
                  backgroundColor: props.isDisabled ? "#96ccff" : "#357edd",
                  border: "none",
                  borderRadius: "4px",
                  color: "#ffffff",
                  cursor: props.isDisabled ? "not-allowed" : "pointer",
                  padding: "8px",
                }}
                disabled={props.isDisabled}
                onClick={props.onClick}
              >
                Next page
              </button>
            )}
          </GoToNextPage>
        </div>
        <div style={{ padding: "0 2px" }}>
          <GoToLastPage>
            {(props: RenderGoToPageProps) => (
              <button
                style={{
                  backgroundColor: "#357edd",
                  border: "none",
                  borderRadius: "4px",
                  color: "#ffffff",
                  cursor: "pointer",
                  padding: "8px",
                }}
                onClick={props.onClick}
              >
                Last page
              </button>
            )}
          </GoToLastPage>
        </div>
      </div> */}

      {/* PDF Viewer */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </div>
  );
};

export default CustomizeNavigationButtonsExample;
