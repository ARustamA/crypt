import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAppSelector } from '../../utils/hook/insex';
import { ColorModeContext, tokens } from '../../theme';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from './styles';
import { useContext } from 'react';

export const TopBarComponent = () => {
  const { user } = useAppSelector((state) => state.auth.user);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between" px="32px" py="24px" alignItems="center">
      <Grid>hello {user ? user.firstName : ''}</Grid>
      <Box display="flex">
        <Grid
          onClick={colorMode.toggleColorMode}
          sx={{ pr: '37px', borderRight: `1px solid ${colors.borderColor}` }}>
          <IconButton sx={{ mr: '45px' }}>
            {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            backgroundColor: `${colors.primary[600]}`,
            borderRadius: '8px',
            ml: '28px',
          }}>
          <IconButton>
            <SearchIcon className={classes.root} />
          </IconButton>
          <InputBase sx={{ px: '18px', py: '8px' }} placeholder="Поиск..." />
        </Grid>
      </Box>
    </Box>
  );
};
