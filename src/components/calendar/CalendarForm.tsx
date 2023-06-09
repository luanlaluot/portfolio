import PropTypes from "prop-types";
import * as Yup from "yup";
import merge from "lodash/merge";
import { isBefore } from "date-fns";
import { useSnackbar } from "notistack";
// form
import { useForm, Controller } from "react-hook-form";
// @mui
import {
  Box,
  Stack,
  Button,
  Tooltip,
  TextField,
  IconButton,
  DialogActions,
} from "@mui/material";
import { LoadingButton, MobileDateTimePicker } from "@mui/lab";

// components

import Iconify from "components/iconify";
import { FormProvider } from "components/hook-form";

// ----------------------------------------------------------------------

const COLOR_OPTIONS = [
  "#00AB55", // theme.palette.primary.main,
  "#1890FF", // theme.palette.info.main,
  "#54D62C", // theme.palette.success.main,
  "#FFC107", // theme.palette.warning.main,
  "#FF4842", // theme.palette.error.main
  "#04297A", // theme.palette.info.darker
  "#7A0C2E", // theme.palette.error.darker
];

const getInitialValues = (event: any, range: any) => {
  const _event = {
    title: "",
    description: "",
    textColor: "#1890FF",
    allDay: false,
    start: range ? new Date(range.start) : new Date(),
    end: range ? new Date(range.end) : new Date(),
  };

  if (event || range) {
    return merge({}, _event, event);
  }

  return _event;
};

// ----------------------------------------------------------------------

CalendarForm.propTypes = {
  event: PropTypes.object,
  range: PropTypes.object,
  onCancel: PropTypes.func,
};

export default function CalendarForm({ event, range, onCancel }: any) {
  const { enqueueSnackbar } = useSnackbar();

  const isCreating = Object.keys(event).length === 0;

  const EventSchema = Yup.object().shape({
    title: Yup.string().max(255).required("Title is required"),
    description: Yup.string().max(5000),
  });

  const methods = useForm({
    // resolver: yupResolver(EventSchema),
    defaultValues: getInitialValues(event, range),
  });

  const {
    reset,
    watch,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {};

  const handleDelete = async () => {};

  const values = watch();

  const isDateError = isBefore(new Date(values.end), new Date(values.start));

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} sx={{ p: 3 }}>
        {/* <RHFTextField name="title" label="Title" />

        <RHFTextField
          name="description"
          label="Description"
          multiline
          rows={4}
        /> */}

        {/* <RHFSwitch name="allDay" label="All day" /> */}

        <Controller
          name="start"
          control={control}
          render={({ field }) => (
            <MobileDateTimePicker
              {...field}
              label="Start date"
              inputFormat="dd/MM/yyyy hh:mm a"
              renderInput={(params: any) => <TextField {...params} fullWidth />}
            />
          )}
        />

        <Controller
          name="end"
          control={control}
          render={({ field }) => (
            <MobileDateTimePicker
              {...field}
              label="End date"
              inputFormat="dd/MM/yyyy hh:mm a"
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  fullWidth
                  error={!!isDateError}
                  helperText={
                    isDateError && "End date must be later than start date"
                  }
                />
              )}
            />
          )}
        />

        {/* <Controller
          name="textColor"
          control={control}
          render={({ field }) => (
            <ColorSinglePicker
              value={field.value}
              onChange={field.onChange}
              colors={COLOR_OPTIONS}
            />
          )}
        /> */}
      </Stack>

      <DialogActions>
        {!isCreating && (
          <Tooltip title="Delete Event">
            <IconButton onClick={handleDelete}>
              <Iconify icon="eva:trash-2-outline" width={20} height={20} />
            </IconButton>
          </Tooltip>
        )}
        <Box sx={{ flexGrow: 1 }} />

        <Button variant="outlined" color="inherit" onClick={onCancel}>
          Cancel
        </Button>

        <LoadingButton
          type="submit"
          variant="contained"
          loading={isSubmitting}
          loadingIndicator="Loading..."
        >
          Add
        </LoadingButton>
      </DialogActions>
    </FormProvider>
  );
}
