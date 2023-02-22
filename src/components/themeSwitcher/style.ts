import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    iconBlock: {
      paddingRight: '35px',
      paddingTop: '10px',
    },
    themeIcon: {
      marginRight: '45px',
    },
  };
});
