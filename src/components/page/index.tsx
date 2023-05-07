import { forwardRef } from "react";
import { Helmet } from "react-helmet-async";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

const Page = forwardRef(
  ({ children, title = "", meta, ...other }: any, ref) => (
    <>
      <Helmet>
        <title>{`${title} | Raumahu`}</title>
        {meta}
      </Helmet>

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  )
);

export default Page;
