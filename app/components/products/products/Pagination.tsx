"use client";

import Pagination from "@mui/material/Pagination";
import { FC } from "react";
import { parseAsIndex, useQueryState } from "nuqs";
import { Box } from "@mui/material";

interface ProductsPaginationProps {
  total: number;
}

const ProductsPagination: FC<ProductsPaginationProps> = ({ total }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setPageIndex] = useQueryState(
    "page",
    parseAsIndex.withOptions({ shallow: false }).withDefault(0)
  );
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageIndex(value - 1);
  };
  return (
    <Box justifyItems={"center"} flex={1} mt={3}>
      <Pagination count={Math.ceil(total / 6)} onChange={handleChange} />
    </Box>
  );
};

export default ProductsPagination;
