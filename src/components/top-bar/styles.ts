import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '@/theme';
export const useStyles = makeStyles(() => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '16px 24px',
      alignItems: 'center',
      backgroundColor: colors.primary.DEFAULT,

      borderBottom: `1px solid ${colors.borderColor}`,
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
    searchIcon: {
      '&:hover': {
        backgroundColor: 'transparent !important',
      },
    },
    searchInput: {
      padding: '12px 10px',
    },
    iconBlock: {
      paddingRight: '35px',
      paddingTop: '10px',
      borderRight: `1px solid ${colors.borderColor}`,
    },
  };
});
