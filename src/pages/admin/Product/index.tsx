/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef } from "@tanstack/react-table";
import DynamicTable from "../../../components/common/Table";
import {
  ActionIcon,
  Button,
  Center,
  Container,
  Group,
  Title,
} from "@mantine/core";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { useFetch } from "../../../hooks/usefetch";
import { Link } from "react-router-dom";
import DeleteDialog from "../../../components/common/DeleteDoialog";
import { useDisclosure } from "@mantine/hooks";
import { useDelete } from "../../../hooks/usedelete";
import { useState } from "react";

type Product = {
  productId: number;
  productName: string;
  price: number;
  description: string;
  manufacturer: string;
  quantity: number;
  category: string;
  status: string;
};

const Products = () => {
  const fetchData = useFetch("/product");
  const [opened, { open, close }] = useDisclosure(false);
  console.log({ fetchData });
  const { deleteData, loading } = useDelete();

  const deleteProduct = () => {
    console.log({ activRow });
    deleteData("/product/" + activRow.productId)
      .then((resp) => {
        console.log({ resp });
      })
      .catch((err) => {
        console.log({ err });
      })
      .finally(() => {
        close();
      });
  };

  const handleNavigation = (id: string | number) => {
    window.location.href = `/admin/product/${id}/edit`;
  };
  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "productId",
      header: "Product ID",
    },
    {
      accessorKey: "productName",
      header: "Product Name",
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: (info) => `$${info.getValue()}`, // Optional: Format price with a dollar sign
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "manufacturer",
      header: "Manufacturer",
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      header: "Actions",
      cell: (cell) => {
        console.log({ cell });
        return (
          <div>
            <ActionIcon variant="subtle" onClick={() => handleNavigation(123)}>
              <MdEdit />
            </ActionIcon>

            <ActionIcon variant="subtle" color="red" onClick={open}>
              <MdDelete />
            </ActionIcon>
          </div>
        );
      },
    },
  ];

  // Sample data (rows) based on the product structure
  const data: Product[] = [
    {
      productId: 1,
      productName: "Book A",
      price: 20,
      description: "A great book",
      manufacturer: "Publisher A",
      quantity: 100,
      category: "BOOKS",
      status: "AVAILABLE",
    },
    {
      productId: 2,
      productName: "Book B",
      price: 25,
      description: "Another great book",
      manufacturer: "Publisher B",
      quantity: 50,
      category: "BOOKS",
      status: "AVAILABLE",
    },
  ];

  const [activRow, setActiveRow] = useState<any>(null);

  const handleRowClick = (rowData: any, cellId: any) => {
    console.log("Clicked cell:", { cellId, rowData });
    if (cellId.column.id === "Actions") {
      setActiveRow(cellId.row.original);
    }
  };

  return (
    <Container pb={"xl"}>
      {opened ? (
        <DeleteDialog isOpened={opened} onClose={close}>
          <Center>
            <ActionIcon variant="subtle" size={120} color="red">
              <FaRegTrashAlt size={80} color="red" />
            </ActionIcon>
          </Center>
          <Title size="md" my="lg" style={{ textAlign: "center" }}>
            This action cannot be undone. Do you want to proceed?
          </Title>
          <Group justify="flex-end">
            <Button variant="filled" onClick={close}>
              Cancel
            </Button>
            <Button
              variant="subtle"
              color="red"
              onClick={deleteProduct}
              loading={loading}
            >
              Delete
            </Button>
          </Group>
        </DeleteDialog>
      ) : null}

      <Group justify="space-between">
        <Title my={"lg"}>Products</Title>
        <Link to={"add"}>
          <Button>Add Product</Button>
        </Link>
      </Group>
      <DynamicTable
        columns={columns}
        data={fetchData?.data || data}
        loading={fetchData?.loading}
        // pageSize={2} // Display 2 rows per page
        onRowClick={handleRowClick} // Handle row and cell click
      />
    </Container>
  );
};

export default Products;
