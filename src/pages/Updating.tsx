import { Link as RouterLink, useParams } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Container } from "@mui/material";
import Page from "components/page";
import HeaderBreadcrumbs from "components/header-breadcrumbs";
// components
// assets

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Updating() {
  let { id } = useParams();
  console.log(id);

  return (
    <Page title="Updating!!!" sx={{ height: 1 }}>
      <RootStyle>
        <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
          <image />
          <Typography variant="h3" paragraph>
            Updating!
          </Typography>
          <Button
            to="/"
            size="large"
            variant="contained"
            component={RouterLink}
          >
            Go to Home
          </Button>
        </Box>
      </RootStyle>
    </Page>
  );
}
