import { Button, TextField, Typography } from '@mui/material';
import { ILoginProps } from '@/common/types/auth';

import { Box } from '@mui/system';
import { FC } from 'react';

export const Login: FC<ILoginProps> = ({ setEmail, setPassword, navigate }): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h2" fontFamily="Poppins" textAlign="center" fontSize={32}>
        Авторизация
      </Typography>
      <Typography variant="body1" fontFamily="Poppins" textAlign="center">
        Введите логин и пароль
      </Typography>
      <TextField
        type="email"
        label="Email"
        variant="outlined"
        margin="normal"
        placeholder="Введите email"
        fullWidth={true}
        //value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Введите пароль"
        fullWidth={true}
        //value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        type="submit"
        variant="outlined"
        fullWidth={true}
        sx={{
          fontFamily: 'Poppins',
          marginTop: 2,
          marginBottom: 1,
          width: '60%',
          color: 'white',
          border: '1px solid white',
        }}>
        Войти
      </Button>
      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        У вас нет аккаунта?
        <span
          onClick={() => navigate('/register')}
          role="button"
          tabIndex={0}
          onKeyDown={() => navigate('/login')}>
          Регистрация
        </span>
      </Typography>
    </Box>
  );
};
