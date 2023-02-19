import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hook/insex';
import React, { useState } from 'react';

const PrivateRoute = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="login" />;
};

export { PrivateRoute };
