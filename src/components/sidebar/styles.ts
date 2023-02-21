import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { tokens } from '@/theme';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    root: {
      '&:hover': {
        backgroundColor: '#1900D5 !important',
        color: 'fff',
      },
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '30px 15px',
      cursor: 'pointer',
    },
    drawer: {
      '&.MuiDrawer-paper': {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
        boxSizing: 'border-box',
        width: 250,
      },
    },
    boxBorder: {
      width: '100%',
      borderBottom: `1px solid ${colors.borderColor}`,
    },
    logoText: {
      fontSize: '32px',
      color: theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT,
    },
    navList: { marginBottom: '55px' },
    navItem: {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#1900D5 !important',
        color: '#fff !important',
        borderRadius: '4px',
        '& .MuiSvgIcon-root': {
          color: `${colors.white.DEFAULT} !important`,
        },
      },
    },
  };
});
