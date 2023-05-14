import DescriptionIcon from "@mui/icons-material/Description";
import { Box, Button, Card, Paper, Typography } from "@mui/material";
import Container from "components/container";
import ShopIcon from "@mui/icons-material/Shop";
import { isEmpty } from "lodash";
import { useCallback } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import SimpleBar from "simplebar-react";
import "simplebar/src/simplebar.css";

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
    technical: ["ReactJS", "C#", "SQL"],
    image: require("assets/images/ebay.png"),
    url: "https://haistore.vn",
    isPublic: true,
  },
  {
    name: "WMS Project",
    description: "A WMS system being management by Regal",
    technical: ["Angular", "C#", "SQL"],
    image: require("assets/images/ebay.png"),
    isPublic: false,
  },
  {
    name: "Elanco Project",
    description: "A WMS system, QR code management by piece of product",
    technical: ["React Native", "NextJs", "SQL"],
    image: require("assets/images/ebay.png"),
    isPublic: false,
  },
  {
    name: "WAIRE Program",
    description: "A Check-in app with mobile camera",
    technical: ["React Native", "SQL"],
    image: require("assets/images/ebay.png"),
    isPublic: false,
    chPlayUrl:
      "https://play.google.com/store/apps/details?id=com.regal.Waire&hl=vi&gl=US",
  },
  {
    name: "Smart Salon",
    description:
      "A Employee app which check-in, create + check booking, working process",
    technical: ["React Native", "NextJs", "SQL", "Firebase"],
    image: require("assets/images/ebay.png"),
    isPublic: false,
    chPlayUrl:
      " https://play.google.com/store/apps/details?id=com.smartSalonStylist&hl=en",
  },
];

const Project = () => {
  const handelOpenUrButtonClick = (project: any, index: number) => {
    if (index === 0) {
      return;
    }
    if (!isEmpty(project.chPlayUrl)) {
      window.open(project.chPlayUrl, "_blank", "noreferrer");
    } else {
      window.open(project.url, "_blank", "noreferrer");
    }
  };

  const renderItem = useCallback((project: any, index: number) => {
    return (
      <Card
        sx={(theme) => ({
          width: "100%",
          mb: 5,
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          height: "100%",
          backgroundColor: theme.palette.background.default,
        })}
      >
        <Box display={"flex"} flex={1} flexDirection={"column"} sx={{ p: 4 }}>
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
                textAlign: "center",
              })}
            >
              {project.isPublic ? "Public" : "Private"}
            </Typography>
            <Typography variant="h2" fontWeight={"600"} sx={{ mr: 3 }}>
              {project.name}
            </Typography>

            <Typography variant="h6">{project.description}</Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            sx={{
              flexWrap: "wrap",
              pb: 2,
            }}
          >
            {project.technical.map((item: any) => {
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
          <Box display={"flex"} flexDirection={"row"}>
            <Button
              disabled={!project.isPublic && isEmpty(project.chPlayUrl)}
              variant={"contained"}
              sx={{
                width: "300px",
              }}
              startIcon={project.chPlayUrl ? <ShopIcon /> : <DescriptionIcon />}
              onClick={() => handelOpenUrButtonClick(project, index)}
            >
              {project.chPlayUrl
                ? "Get on Google Play"
                : index === 0
                ? "You are here"
                : "Show me"}
            </Button>
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
  }, []);

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
        {PROJECTS.map((project, index) => {
          return renderItem(project, index);
        })}
      </SimpleBar>
    </Container>
  );
};

export default Project;
