import { TextField } from '@mui/material';
import '../styles.scss';
export const Login = () => {
  return (
    <div className="login">
      <TextField label="Outlined" variant="outlined" placeholder="Введите email" />
      <TextField label="Outlined" variant="outlined" />
    </div>
  );
};
