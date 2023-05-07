import { styled, alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

const CalendarStyle = styled("div")(({ theme }: any) => ({
  flexGrow: 1,
  height: "calc(100vh - 150px)",
  flex: 1,
  "& .rbc-toolbar": {
    padding: "20px",
  },
}));

export default CalendarStyle;
