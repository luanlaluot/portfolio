import DescriptionIcon from "@mui/icons-material/Description";
import { Box, Button, Grid, Typography } from "@mui/material";
import Container from "components/container";

const TECHNICAL = [
  "ReactJs",
  "React Native",
  "SQL",
  "Angular",
  "Java",
  "Kotlin",
  "Adobe xD",
];

const AboutMe = () => {
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
          <img
            src={require("assets/images/about.png")}
            srcSet={require("assets/images/about.png")}
            alt={"portfolio-avatar"}
            loading="lazy"
            style={{
              height: "500px",
              width: "500px",
            }}
          />
        </Grid>
        <Grid
          item
          lg={6}
          position={"relative"}
          display={"flex"}
          direction={"column"}
          justifyContent={"center"}
        >
          <Typography
            variant="h3"
            fontWeight={"bold"}
            sx={{
              pb: 3,
            }}
          >
            About me
          </Typography>
          <Typography
            sx={{
              pb: 3,
            }}
          >
            I'm Nguyen A Luan, a front-end developer based in Ho Chi Minh. With
            2 years of working, I have many experiences from multi projects
            mainly about WMS, and Ecommerce. And some techniques have been used:
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"row"}
            sx={{
              flexWrap: "wrap",
              pb: 3,
            }}
          >
            {TECHNICAL.map((item) => {
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
          <Button
            variant="contained"
            sx={{
              width: "300px",
            }}
            startIcon={<DescriptionIcon />}
          >
            Bú CV ngay
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
