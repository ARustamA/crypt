import { PrivateRoute } from '@/utils/router/PrivateRoute';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ColorModeContext, useMode } from '@/theme';

import {
  AuthRootComponent,
  Home,
  LayoutComponent,
  NewsComponent,
  SettingComponent,
  WatchlistComponent,
} from './utils/exportsComponents';
import { CircularProgress, CssBaseline, ThemeProvider } from '@mui/material';
import ErrorFallback from './common/errors/ErrorFallback';
import { withErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import '@/index.css';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<CircularProgress />}>
          <Router>
            <Routes>
              <Route element={<LayoutComponent />}>
                <Route element={<PrivateRoute />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/watchlist" element={<WatchlistComponent />} />
                  <Route path="/news" element={<NewsComponent />} />
                  <Route path="/setting" element={<SettingComponent />} />
                </Route>
                <Route path="/login" element={<AuthRootComponent />} />
                <Route path="/register" element={<AuthRootComponent />} />
              </Route>
            </Routes>
          </Router>
        </Suspense>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default withErrorBoundary(App, {
  fallbackRender: () => ErrorFallback(),
});
