import { Navigate, Outlet } from 'react-router-dom';

import React, { useState } from 'react';

const PrivateRoute = () => {
  const [auth, setAuth] = useState(true);
  return auth ? <Outlet /> : <Navigate to="login" />;
};

export { PrivateRoute };
