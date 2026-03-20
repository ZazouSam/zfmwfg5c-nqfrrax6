import * as React from "react"

import { cn } from "@/lib/utils"

type Cols = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type Rows = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
type RowSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: Cols | number
  rows?: Rows | number
}

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  spanCols?: ColSpan | number
  spanRows?: RowSpan | number
}

const Grid = React.forwardRef<
  HTMLDivElement,
  GridProps
>(({ className, cols, rows, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("grid grid-flow-row w-full gap-1", className, cols && gridCols[cols as Cols], rows && gridRows[rows as Rows])}
      {...props}
    />
  )
});
Grid.displayName = "Grid";

const GridItem = React.forwardRef<
  HTMLDivElement,
  ColProps
>(({ className, spanCols = 1, spanRows = 1, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("place-content-center", className, spanCols && colSpan[spanCols as ColSpan], spanRows && rowSpan[spanRows as RowSpan])}
    {...props}
  />
));
GridItem.displayName = "GridItem";

export { Grid, GridItem }

const gridCols: { [_ in Cols]: string } = {
  0: "grid-cols-none",
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12"
}

const gridRows: { [_ in Rows]: string } = {
  0: "grid-rows-none",
  1: "grid-rows-1",
  2: "grid-rows-2",
  3: "grid-rows-3",
  4: "grid-rows-4",
  5: "grid-rows-5",
  6: "grid-rows-6",
  7: "grid-rows-7",
  8: "grid-rows-8",
  9: "grid-rows-9",
  10: "grid-rows-10",
  11: "grid-rows-11",
  12: "grid-rows-12"
}

/* const gridColsSm: { [key in Cols]: string } = {
  0: "sm:grid-cols-none",
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
  6: "sm:grid-cols-6",
  7: "sm:grid-cols-7",
  8: "sm:grid-cols-8",
  9: "sm:grid-cols-9",
  10: "sm:grid-cols-10",
  11: "sm:grid-cols-11",
  12: "sm:grid-cols-12"
}

const gridColsMd: { [key in Cols]: string } = {
  0: "md:grid-cols-none",
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
  7: "md:grid-cols-7",
  8: "md:grid-cols-8",
  9: "md:grid-cols-9",
  10: "md:grid-cols-10",
  11: "md:grid-cols-11",
  12: "md:grid-cols-12"
}

const gridColsLg: { [key in Cols]: string } = {
  0: "lg:grid-cols-none",
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
  8: "lg:grid-cols-8",
  9: "lg:grid-cols-9",
  10: "lg:grid-cols-10",
  11: "lg:grid-cols-11",
  12: "lg:grid-cols-12"
} */

const colSpan: { [_ in ColSpan]: string } = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
  13: "col-span-13"
}

const rowSpan: { [_ in RowSpan]: string } = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
  4: "row-span-4",
  5: "row-span-5",
  6: "row-span-6",
  7: "row-span-7",
  8: "row-span-8",
  9: "row-span-9",
  10: "row-span-10",
  11: "row-span-11",
  12: "row-span-12",
  13: "row-span-13"
}

/* const colSpanSm: { [key in ColSpan]: string } = {
  1: "sm:col-span-1",
  2: "sm:col-span-2",
  3: "sm:col-span-3",
  4: "sm:col-span-4",
  5: "sm:col-span-5",
  6: "sm:col-span-6",
  7: "sm:col-span-7",
  8: "sm:col-span-8",
  9: "sm:col-span-9",
  10: "sm:col-span-10",
  11: "sm:col-span-11",
  12: "sm:col-span-12",
  13: "sm:col-span-13"
}

const colSpanMd: { [key in ColSpan]: string } = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
  9: "md:col-span-9",
  10: "md:col-span-10",
  11: "md:col-span-11",
  12: "md:col-span-12",
  13: "md:col-span-13"
}

const colSpanLg: { [key in ColSpan]: string } = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  9: "lg:col-span-9",
  10: "lg:col-span-10",
  11: "lg:col-span-11",
  12: "lg:col-span-12",
  13: "lg:col-span-13"
} */