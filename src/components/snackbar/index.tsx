import { SnackbarProvider as Provider } from "notistack";
import { useRef } from "react";
// @mui
import Iconify from "components/iconify";

// ----------------------------------------------------------------------

// function SnackbarStyles() {
//   const theme = useTheme();
//   const isLight = theme.palette.mode === "light";

//   return (
//     <GlobalStyles
//       styles={{
//         "#root": {
//           "& .SnackbarContent-root": {
//             width: "100%",
//             padding: theme.spacing(1),
//             margin: theme.spacing(0.25, 0),
//             boxShadow: theme.customShadows.z8,
//             borderRadius: theme.shape.borderRadius,
//             color: theme.palette.grey[isLight ? 0 : 800],
//             backgroundColor: theme.palette.grey[isLight ? 900 : 0],
//             "&.SnackbarItem-variantSuccess, &.SnackbarItem-variantError, &.SnackbarItem-variantWarning, &.SnackbarItem-variantInfo":
//               {
//                 color: theme.palette.text.primary,
//                 backgroundColor: theme.palette.background.paper,
//               },
//             [theme.breakpoints.up("md")]: {
//               minWidth: 240,
//             },
//           },
//           "& .SnackbarItem-message": {
//             padding: "0 !important",
//             fontWeight: theme.typography.fontWeightMedium,
//           },
//           "& .SnackbarItem-action": {
//             marginRight: 0,
//             color: theme.palette.action.active,
//             "& svg": { width: 20, height: 20 },
//           },
//         },
//       }}
//     />
//   );
// }

// ----------------------------------------------------------------------

export default function SnackbarProvider({ children }: any) {
  const snackbarRef = useRef<Provider>(null);

  const onClose = (key: any) => () => {
    snackbarRef?.current?.closeSnackbar(key);
  };

  return (
    <>
      <Provider
        ref={snackbarRef}
        dense
        maxSnack={5}
        preventDuplicate
        autoHideDuration={3000}
        variant="success" // Set default variant
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        iconVariant={{
          info: <Iconify icon={"eva:info-fill"} sx={{ mr: 2 }} />,
          success: (
            <Iconify icon={"eva:checkmark-circle-2-fill"} sx={{ mr: 2 }} />
          ),
          warning: <Iconify icon={"eva:alert-triangle-fill"} sx={{ mr: 2 }} />,
          error: <Iconify icon={"eva:alert-circle-fill"} sx={{ mr: 2 }} />,
        }}
        // With close as default
        action={(key) => <Iconify icon={"eva:close-fill"} />}
      >
        {children}
      </Provider>
    </>
  );
}

// ----------------------------------------------------------------------
