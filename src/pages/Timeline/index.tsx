import { Card, Typography } from "@mui/material";
import Container from "components/container";

import ApartmentIcon from "@mui/icons-material/Apartment";
import { Timeline as MUITimeline } from "@mui/lab";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import WorkIcon from "@mui/icons-material/Work";

const TIME_LINE = [
  {
    time: "01/2019",
    title: "School",
    description:
      "Start Studying in FPT Polytechnic College at Ho Chi Minh city",
    isWorking: false,
    icon: <ApartmentIcon />,
  },
  {
    time: "02/2021",
    title: "Work",
    description: "Become a probation fresher at Unit Corp.",
    isWorking: false,
    icon: <WorkIcon />,
  },
  {
    time: "04/2021",
    title: "Work",
    description: "End of work with Unit Corp.",
    isWorking: false,
    icon: <WorkIcon />,
  },
  {
    time: "05/2021",
    title: "Work",
    description: "Start working at SCS Solutions in Junior role",
    isWorking: false,
    icon: <WorkIcon />,
  },
  {
    time: "01/2022",
    title: "School",
    description: "Graduate from FPT Polytechnic College",
    isWorking: false,
    icon: <ApartmentIcon />,
  },
  {
    time: "Now",
    title: "Work",
    description: "Still working at SCS Solutions",
    isWorking: true,
    icon: <WorkIcon />,
  },
];

const Timeline = () => {
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
      <MUITimeline
        position="right"
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {TIME_LINE.map((line) => {
          return (
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body1"
                fontWeight={line.isWorking ? 600 : 500}
              >
                {line.time}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                  color="primary"
                  variant={line.isWorking ? "filled" : "outlined"}
                >
                  {line.icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Card
                  sx={(theme) => ({
                    px: 4,
                    py: 3,
                    backgroundColor: line.isWorking
                      ? "white"
                      : theme.palette.grey[300],
                  })}
                >
                  {/* <Typography variant="h5" fontWeight={600} component="span">
                    {line.title}
                  </Typography> */}
                  <Typography>{line.description}</Typography>
                </Card>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </MUITimeline>
    </Container>
  );
};

export default Timeline;
