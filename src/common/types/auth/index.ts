import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form/dist/types';

export interface IRegisterProps {
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setRepeatPassword: (value: string) => void;
  setUsername: (value: string) => void;
  setFirstName: (value: string) => void;
  navigate: (to: string) => void;
}
export interface ILoginProps<TFieldValues extends FieldValues = FieldValues, TContext = any> {
  navigate: (to: string) => void;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<FieldValues>;
}
export interface IAuthState {
  user: IPublicUser;
  isLogged: boolean;
  // isSuccess: boolean;
  // isLoading: boolean;
}

export interface IPublicUser {
  id: number | null;
  firstName: string;
  userName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  watchlist: [IWatchlist];
}

export interface IWatchlist {
  id: number | null;
  name: string;
  assetId: string;
  createdAt: string;
  updatedAt: string;
  userId: number | null;
}
