import { Home } from './components/Home';

import { PrivateRoute } from './utils/router/PrivateRoute';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthRootComponent } from './components/auth';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<AuthRootComponent />} />
        <Route path="/register" element={<AuthRootComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
