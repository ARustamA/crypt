import { useLocation, useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { instance } from '@/utils/axios/axios';
import { useAppDispatch } from '@/utils/hook';
import { AppErrors } from '@/common/errors';
import { login } from '@/store/slice/auth';
import { useForm } from 'react-hook-form';
import { LoginSchema } from '@/utils/yup';
import { Register } from './register';
import { FC, useState } from 'react';
import { Box } from '@mui/material';
import { Login } from './login';

const AuthRootComponent: FC = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(LoginSchema),
  });
  const onHandleSubmitForm = async (data: any) => {
    if (location.pathname === '/login') {
      try {
        const userData = {
          email: data.email,
          password: data.password,
        };
        const user = await instance.post('auth/login', userData);
        await dispatch(login(user.data));
        navigate('/');
      } catch (error) {
        return error;
      }
    } else {
      if (password === repeatPassword) {
        try {
          const userData = {
            email: email,
            password: password,
            repeatPassword: repeatPassword,
            userName: username,
            firstName: firstName,
          };
          const newUser = await instance.post('auth/register', userData);
          await dispatch(login(newUser.data));
          navigate('/');
        } catch (error) {
          return error;
        }
      } else {
        throw new Error(AppErrors.PasswordDoNotMatch);
      }
    }
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100vw"
      height="100vh">
      <form className="form" onSubmit={handleSubmit(onHandleSubmitForm)}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          margin="auto"
          maxWidth={720}
          padding={7}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}>
          {location.pathname === '/login' ? (
            <Login navigate={navigate} register={register} errors={errors} />
          ) : location.pathname === '/register' ? (
            <Register
              // email={email}
              setEmail={setEmail}
              // password={password}
              setPassword={setPassword}
              setRepeatPassword={setRepeatPassword}
              setUsername={setUsername}
              setFirstName={setFirstName}
              navigate={navigate}
            />
          ) : null}
        </Box>
      </form>
    </Box>
  );
  // return
};
export default AuthRootComponent;
