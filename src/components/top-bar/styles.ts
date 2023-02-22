import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '@/theme';
export const useStyles = makeStyles(() => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return {
    appBar: {
      position: 'static',
      borderBottom: ` 1px solid ${colors.borderColor}`,
      background: `${colors.primary.DEFAULT}`,
      boxShadow: 'none !important',
    },
    toolbar: {
      justifyContent: 'space-between',
      padding: '10px 30px',
    },

    themeIcon: {
      marginRight: '45px',
    },
    searchBlock: {
      display: 'flex',
      gap: '16px',
      borderRadius: '8px',
      marginLeft: '28px',
      backgroundColor: `${colors.primary[600]}`,
    },
    menuIcon: {
      cursor: 'pointer',
      marginRight: '10px',
    },
    searchIcon: {
      '&:hover': {
        backgroundColor: 'transparent !important',
      },
    },
    searchInput: {
      padding: '6px 10px',
    },
    iconBlock: {
      paddingRight: '35px',
      paddingTop: '6px',
      borderRight: `1px solid ${colors.borderColor} `,
    },
  };
});
