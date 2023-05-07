import {
  Box,
  Button,
  Grid,
  IconButton,
  Theme,
  Typography,
  styled,
} from "@mui/material";
import Container from "components/container";
import React from "react";
import { pxToRem, responsiveFontSizes } from "theme/typography";
import DescriptionIcon from "@mui/icons-material/Description";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialButton = styled(IconButton)(({ theme }) => ({
  marginRight: "10px",
  color: "black",
  borderRadius: "5px",
  ":hover": {
    backgroundColor: theme?.palette.primary.main,
    color: "white",
  },
}));

const Home = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container>
        <Grid
          item
          lg={6}
          display={"flex"}
          direction={"column"}
          justifyContent={"center"}
        >
          <Typography
            variant="h4"
            fontWeight={"600"}
            sx={(theme: Theme) => ({
              p: 1,
              backgroundColor: theme.palette.primary.main,
              borderRadius: "20px 20px 20px 0",
              width: "140px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            })}
          >
            Hi, I'm
          </Typography>
          <Box
            sx={{
              pb: 3,
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                lineHeight: 80 / 64,
                fontSize: pxToRem(50),
                ...responsiveFontSizes({ sm: 62, md: 68, lg: 74 }),
              }}
              fontWeight={"600"}
            >
              Nguyen A Luan
            </Typography>
            <Typography variant="h3" fontWeight={"600"}>
              Front-End Developer
            </Typography>
          </Box>
          <Box
            sx={{
              pb: 3,
            }}
          >
            <Box display={"flex"} flexDirection={"row"} sx={{ pb: 1 }}>
              <EmailIcon sx={{ fontSize: 20, mr: 2 }} />
              <Typography>luanlaluot@gmail.com</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"row"}>
              <PhoneIcon sx={{ fontSize: 20, mr: 2 }} />
              <Typography>+84 966 644 939</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              pb: 3,
            }}
          >
            <SocialButton>
              <FacebookIcon />
            </SocialButton>
            <SocialButton>
              <PhoneIcon />
            </SocialButton>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                width: "300px",
              }}
              startIcon={<DescriptionIcon />}
            >
              Download CV
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          display={"flex"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"flex-end"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              borderRadius: "50%",
              border: "20px solid rgba(0, 0, 0, 0.07)",
            }}
          >
            <img
              src={require("assets/images/avatar.jpg")}
              srcSet={require("assets/images/avatar.jpg")}
              alt={"portfolio-avatar"}
              loading="lazy"
              style={{
                borderRadius: "50%",
                height: "460px",
                width: "460px",
                border: "20px solid rgba(0, 0, 0, 0.17)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
