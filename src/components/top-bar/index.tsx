import {
  AppBar,
  Box,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import SearchIcon from '@mui/icons-material/Search';
import { ColorModeContext } from '@/theme';

import { useAppSelector } from '@/utils/hook';

import { useStyles } from './styles';
import { useContext } from 'react';

export const TopBarComponent = () => {
  const user = useAppSelector((state) => state.auth.user);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.toolbar}>
        <Grid>
          <Typography>hello {user ? user.firstName : ''}</Typography>
        </Grid>
        <Box display="flex">
          <Grid className={classes.iconBlock}>
            <IconButton className={classes.themeIcon} onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
          </Grid>
          <Grid className={classes.searchBlock}>
            <IconButton className={classes.searchIcon}>
              <SearchIcon />
            </IconButton>
            <InputBase className={classes.searchInput} placeholder="Поиск..." />
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
