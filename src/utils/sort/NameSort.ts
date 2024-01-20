import { ColumnSortFunction } from "react-data-table-component/dist/DataTable/types";

export const NameSort: ColumnSortFunction<{ name: string }> = (rowA, rowB) => {
  return rowA.name.localeCompare(rowB.name);
};
