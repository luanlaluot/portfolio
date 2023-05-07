import DescriptionIcon from "@mui/icons-material/Description";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  IconButton,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import Container from "components/container";
import Scrollbar from "components/scrollbar/Scrollbar";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import SimpleBar from "simplebar-react";
import "simplebar/src/simplebar.css";
import { bgBlur } from "utils/cssStyles";
const SocialButton = styled(IconButton)(({ theme }) => ({
  marginRight: "10px",
  color: "black",
  borderRadius: "5px",
  ":hover": {
    backgroundColor: theme?.palette.primary.main,
    color: "white",
  },
}));

const PROJECTS = [
  {
    name: "Portfolio Project",
    description: "Simple CV create by me",
    technical: ["ReactJS"],
    image: require("assets/images/portfolio.png"),
    url: "",
    isPublic: true,
  },
  {
    name: "Ebay Project",
    description:
      "An Ecommerce project, have 2 role on 1 project: Client vs Admin. ",
    technical: ["ReactJS", "C#"],
    image: require("assets/images/ebay.png"),
    url: "https//:haistore.vn",
    isPublic: true,
  },
  {
    name: "Elanco Project",
    description: "A WMS system, QR code management by piece of product",
    technical: ["React Native", "NextJs"],
    image: require("assets/images/ebay.png"),
    url: "",
    isPublic: false,
  },
  {
    name: "WAIRE Program",
    description: "A Check-in app with mobile camera",
    technical: ["React Native"],
    image: require("assets/images/ebay.png"),
    url: "",
    isPublic: false,
  },
  {
    name: "Smart Salon",
    description:
      "A Employee app which check-in, create + check booking, working process",
    technical: ["React Native", "NextJs"],
    image: require("assets/images/ebay.png"),
    url: "",
    isPublic: false,
  },
];

const Project = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SimpleBar
        style={{
          maxHeight: "calc(100vh - 128px)",
          width: "100%",
          padding: "0 20px 0 20px",
        }}
      >
        {PROJECTS.map((project) => {
          return (
            <Card
              sx={(theme) => ({
                width: "100%",
                mb: 3,
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                height: "100%",
              })}
            >
              <Box
                display={"flex"}
                flex={1}
                flexDirection={"column"}
                sx={{ p: 4 }}
              >
                <Box
                  sx={{
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={(theme) => ({
                      p: "10px",
                      mr: 2,
                      mb: 2,
                      borderRadius: "6px",
                      fontWeight: "bold",
                      color: "white",
                      backgroundColor: project.isPublic
                        ? theme.palette.success.main
                        : theme.palette.error.main,
                      width: "100px",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    })}
                  >
                    {project.isPublic ? "Public" : "Private"}
                  </Typography>
                  <Typography variant="h2" fontWeight={"600"} sx={{ mr: 3 }}>
                    {project.name}
                  </Typography>

                  <Typography variant="h5">{project.description}</Typography>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  sx={{
                    flexWrap: "wrap",
                    pb: 2,
                  }}
                >
                  {project.technical.map((item) => {
                    return (
                      <Typography
                        sx={(theme) => ({
                          p: "10px",
                          mr: 2,
                          mb: 2,
                          borderRadius: "6px",
                          border: `1px solid ${theme.palette.primary.main}`,
                        })}
                      >
                        {item}
                      </Typography>
                    );
                  })}
                </Box>
              </Box>
              <Box display={"flex"} justifyContent={"flex-end"} sx={{}}>
                <Paper elevation={3}>
                  {project.isPublic ? (
                    <img
                      src={project.image}
                      srcSet={project.image}
                      alt={"portfolio-avatar"}
                      loading="lazy"
                      style={{
                        width: "600px",
                        borderRadius: "6px",
                        height: "400px",
                      }}
                    />
                  ) : (
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        width: "600px",
                        height: "400px",
                        borderRadius: "6px",
                        backgroundColor: "#00000010",
                      }}
                    >
                      <Typography
                        variant="h2"
                        sx={(theme) => ({
                          color: theme.palette.grey[500],
                          textTransform: "capitalize",
                          transform: "rotate(45deg)",
                        })}
                      >
                        Private
                      </Typography>
                    </Box>
                  )}
                </Paper>
              </Box>
            </Card>
          );
        })}
      </SimpleBar>
    </Container>
  );
};

export default Project;
