import { useLocation } from 'react-router-dom';
import { Register } from './register';
import { Box } from '@mui/material';
import { Login } from './login';
import './styles.scss';

export const AuthRootComponent = () => {
  const location = useLocation();
  return (
    <div className="root">
      <div className="form">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          margin="auto"
          maxWidth={640}
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}>
          {location.pathname === '/login' ? (
            <Login />
          ) : location.pathname === '/register' ? (
            <Register />
          ) : null}
        </Box>
      </div>
    </div>
  );
  // return
};
