import { SnackbarProvider as Provider } from "notistack";
import { useRef } from "react";
// @mui
import Iconify from "components/iconify";

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
