import { instance } from '../../utils/axios/axios';
import { useLocation } from 'react-router-dom';
import { Register } from './register';
import { FC, useState } from 'react';
import { Box } from '@mui/material';
import { Login } from './login';
import './styles.scss';

export const AuthRootComponent: FC = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const location = useLocation();
  const onHandleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (location.pathname === '/login') {
      const userData = {
        email: email,
        password: password,
      };
      // try {
      const user = await instance.post('auth/login', userData);
      //   return user;
      // } catch (error: any) {
      //   throw new Error(error);
      // }
    } else {
      if (password === repeatPassword) {
        const userData = {
          email: email,
          password: password,
          repeatPassword: repeatPassword,
          userName: username,
          firstName: firstName,
        };
        const newUser = await instance.post('auth/register', userData);
      } else {
        throw new Error('Несовпадают пароли!');
      }
    }
  };
  return (
    <div className="root">
      <form className="form" onSubmit={onHandleSubmit}>
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
            <Login setEmail={setEmail} setPassword={setPassword} />
          ) : location.pathname === '/register' ? (
            <Register
              // email={email}
              setEmail={setEmail}
              // password={password}
              setPassword={setPassword}
              setRepeatPassword={setRepeatPassword}
              setUsername={setUsername}
              setFirstName={setFirstName}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
  // return
};
