/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { CacheProvider } from "@emotion/react";
import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import createCache from '@emotion/cache'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from "@mui/material";
import { blue } from "@mui/material/colors";

function createEmotionCache() {
  return createCache({ key: 'css' })
}

const cache = createEmotionCache();
const theme = createTheme({
  palette: { primary: blue }
});


startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <RemixBrowser />
        </ThemeProvider>
      </CacheProvider>
    </StrictMode>
  );
});
