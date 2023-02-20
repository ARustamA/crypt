import { Home } from './components/Home';

import { PrivateRoute } from './utils/router/PrivateRoute';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthRootComponent } from './components/auth';
import { ColorModeContext, useMode } from './theme';

import { CssBaseline, ThemeProvider } from '@mui/material';
import './index.css';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<AuthRootComponent />} />
            <Route path="/register" element={<AuthRootComponent />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
