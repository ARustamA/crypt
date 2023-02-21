import { Button, TextField, Typography } from '@mui/material';
import { IRegisterProps } from '@/common/types/auth';

import { FC } from 'react';

export const Register: FC<IRegisterProps> = ({
  setEmail,
  setPassword,
  setFirstName,
  setRepeatPassword,
  setUsername,
  navigate,
}): JSX.Element => {
  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center" fontSize={32}>
        Регистрация
      </Typography>
      <Typography variant="body1" fontFamily="Poppins" textAlign="center">
        Введите данные для регистрации
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        margin="normal"
        placeholder="Введите имя"
        fullWidth={true}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Username"
        variant="outlined"
        margin="normal"
        placeholder="Введите username"
        fullWidth={true}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        type="email"
        label="Email"
        variant="outlined"
        margin="normal"
        placeholder="Введите email"
        fullWidth={true}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Введите пароль"
        fullWidth={true}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        type="password"
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Повторите пароль"
        fullWidth={true}
        onChange={(e) => setRepeatPassword(e.target.value)}
      />

      <Button
        type="submit"
        variant="outlined"
        fullWidth={true}
        sx={{
          fontFamily: 'Poppins',
          marginTop: 2,
          marginBottom: 1,
          width: '90%',
          color: 'white',
          border: '1px solid white',
        }}>
        Зарегистрироваться
      </Button>
      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        У вас есть аккаунт?
        <span
          role="button"
          tabIndex={0}
          className="inciting-text"
          onClick={() => navigate('/login')}
          onKeyDown={() => navigate('/login')}>
          Авторизация
        </span>
      </Typography>
    </>
  );
};
