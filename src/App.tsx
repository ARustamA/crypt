import { Home } from '@/components/Home';

import { PrivateRoute } from '@/utils/router/PrivateRoute';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthRootComponent } from '@/components/auth';
import { ColorModeContext, useMode } from '@/theme';

import { WatchlistComponent } from '@/components/watchlist';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SettingComponent } from '@/components/settings';
import { LayoutComponent } from '@/components/layout';
import { NewsComponent } from '@/components/news';
import '@/index.css';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <LayoutComponent>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/watchlist" element={<WatchlistComponent />} />
                <Route path="/news" element={<NewsComponent />} />
                <Route path="/setting" element={<SettingComponent />} />
              </Route>
              <Route path="/login" element={<AuthRootComponent />} />
              <Route path="/register" element={<AuthRootComponent />} />
            </Routes>
          </LayoutComponent>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
