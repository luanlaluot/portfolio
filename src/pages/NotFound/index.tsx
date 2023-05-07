import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import Page from "components/page";
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

export default function NotFound() {
  return (
    <Page title="404 Page Not Found" sx={{ height: 1 }}>
      <RootStyle>
        <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
          <Typography variant="h3" paragraph>
            Sorry, page not found!
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
