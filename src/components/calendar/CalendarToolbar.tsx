import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import {
  Stack,
  Button,
  Tooltip,
  Typography,
  IconButton,
  ToggleButton,
} from "@mui/material";
// utils
import Iconify from "components/iconify";
import useResponsive from "hooks/useResponsive";
import { fDate } from "utils/formatTime";
// hooks
// components

// ----------------------------------------------------------------------

const VIEW_OPTIONS: { value: TCalendarView; label: string; icon: string }[] = [
  { value: "month", label: "Month", icon: "ic:round-view-module" },
  { value: "week", label: "Week", icon: "ic:round-view-week" },
  // { value: "work_week", label: "Work Week", icon: "ic:round-view-day" },
  { value: "day", label: "Day", icon: "ic:round-view-day" },
  { value: "agenda", label: "Agenda", icon: "ic:round-view-agenda" },
];

const RootStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: theme.spacing(2.5),
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

// ----------------------------------------------------------------------
export type TCalendarView = "month" | "week" | "work_week" | "day" | "agenda";

type TCalendarToolbar = {
  date: Date;
  onToday: () => void;
  onNextMonth: () => void;
  onPrevMonth: () => void;
  onChangeView: (view: TCalendarView) => void;
  view: TCalendarView;
};

export default function CalendarToolbar(props: TCalendarToolbar) {
  const { date, view, onToday, onNextMonth, onPrevMonth, onChangeView } = props;
  const isDesktop = useResponsive("up", "sm");

  return (
    <RootStyle>
      {isDesktop && (
        <Stack direction="row" spacing={0.5}>
          {VIEW_OPTIONS.map((viewOption) => (
            <Tooltip key={viewOption.value} title={viewOption.label}>
              <ToggleButton
                value={view}
                selected={viewOption.value === view}
                onChange={() => onChangeView(viewOption.value)}
                sx={{ width: 32, height: 32, padding: 0, border: 0 }}
              >
                <Iconify icon={viewOption.icon} width={20} height={20} />
              </ToggleButton>
            </Tooltip>
          ))}
        </Stack>
      )}

      <Stack direction="row" alignItems="center" spacing={2}>
        <IconButton onClick={onPrevMonth}>
          <Iconify icon="eva:arrow-ios-back-fill" width={20} height={20} />
        </IconButton>

        <Typography variant="h5">{fDate(date)}</Typography>

        <IconButton onClick={onNextMonth}>
          <Iconify icon="eva:arrow-ios-forward-fill" width={20} height={20} />
        </IconButton>
      </Stack>

      {isDesktop && (
        <Button
          size="small"
          color="error"
          variant="contained"
          onClick={onToday}
        >
          Today
        </Button>
      )}
    </RootStyle>
  );
}
