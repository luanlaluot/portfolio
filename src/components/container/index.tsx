import { forwardRef } from "react";
// @mui
import { ContainerProps, Container as MUIContainer } from "@mui/material";

// ----------------------------------------------------------------------

type TContainerProps = {} & ContainerProps;

const Container = forwardRef((props: TContainerProps, ref) => {
  return <MUIContainer maxWidth="lg" {...props} />;
});

export default Container;
