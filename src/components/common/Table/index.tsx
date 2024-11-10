/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  useReactTable,
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  Table as ReactTable,
} from "@tanstack/react-table";
import { Button, Group, NumberInput, Select, Table } from "@mantine/core";
import classes from "./styles.module.css";
import {
  FiChevronLeft,
  FiChevronsRight,
  FiChevronsLeft,
  FiChevronRight,
} from "react-icons/fi";
import { RiSortAsc, RiSortDesc } from "react-icons/ri";
import { Loader } from "@mantine/core";

type RowData = { [key: string]: any };

interface TableProps {
  columns: ColumnDef<any>[];
  data: RowData[] | any;
  loading: boolean;
  onRowClick?: (row: any, cell?: any) => void;
}

const DynamicTable: React.FC<TableProps> = ({
  columns,
  data,
  loading,
  onRowClick,
}) => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  //   if (loading) {
  //     return <Loader />;
  //   }

  if (data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="p-2">
      <Table striped>
        <Table.Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.Th key={header.id} colSpan={header.colSpan}>
                  <div
                    {...{
                      className: header.column.getCanSort()
                        ? classes.selectAble
                        : "",
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <span style={{ width: "40px" }}>
                      {{
                        asc: <RiSortAsc />,
                        desc: <RiSortDesc />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </span>
                    {header.column.columnDef.enableColumnFilter ? (
                      <div>
                        <Filter column={header.column} table={table} />
                      </div>
                    ) : null}
                  </div>
                </Table.Th>
              ))}
            </Table.Tr>
          ))}
        </Table.Thead>
        {loading ? (
          <Group justify="center" my={"lg"}>
            <Loader />
          </Group>
        ) : (
          <Table.Tbody>
            {loading ? (
              <Group justify="center" my={"lg"}>
                <Loader />
              </Group>
            ) : (
              table.getRowModel().rows.map((row) => (
                <Table.Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <Table.Td
                      key={cell.id}
                      onClick={() => onRowClick && onRowClick(row, cell)}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Table.Td>
                  ))}
                </Table.Tr>
              ))
            )}
            {}
          </Table.Tbody>
        )}
      </Table>
      <Group className={classes.paginationWrapper} gap={"xs"}>
        <Group className="">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </Group>
        <Group gap={"xs"}>
          | Go to page:
          <NumberInput
            w={"100"}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e ? Number(e) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </Group>
        <Group gap={"xs"}>
          <Select
            w={"100"}
            value={table.getState().pagination.pageSize.toString()}
            onChange={(e) => {
              table.setPageSize(Number(e));
            }}
            data={[10, 20, 30, 40, 50].map((pageSize) => ({
              label: pageSize.toString(),
              value: pageSize.toString(),
            }))}
          ></Select>
          <Button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <FiChevronsLeft />
          </Button>
          <Button
            className="border rounded p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <FiChevronLeft />
          </Button>
          <Button
            className="border rounded p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <FiChevronRight />
          </Button>
          <Button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <FiChevronsRight />
          </Button>
        </Group>
      </Group>
    </div>
  );
};

function Filter({ column, table }: { column: any; table: ReactTable<any> }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === "number" ? (
    <div className="flex space-x-2" onClick={(e) => e.stopPropagation()}>
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      />
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      />
    </div>
  ) : (
    <input
      className="w-36 border shadow rounded"
      onChange={(e) => column.setFilterValue(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      placeholder={`Search...`}
      type="text"
      value={(columnFilterValue ?? "") as string}
    />
  );
}

export default DynamicTable;
