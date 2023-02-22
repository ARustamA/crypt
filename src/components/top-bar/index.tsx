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
import { DarkMode, LightMode, MenuOutlined, NotificationsNone, Search } from '@mui/icons-material';

import { ColorModeContext } from '@/theme';

import { useAppSelector } from '@/utils/hook';

import { FlexBetween } from '../sidebar/flex-between';
import { useStyles } from './styles';
import { useContext } from 'react';

export const TopBarComponent = (props: any) => {
  const user = useAppSelector((state) => state.auth.user);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const classes = useStyles();
  const { isNoneMobile, drawerWidth, setIsOpen, isOpen } = props;

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.toolbar}>
        <FlexBetween>
          <MenuOutlined className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)} />
          <Typography variant="h3">hello {user ? user.firstName : ''}</Typography>
        </FlexBetween>
        <Box display="flex">
          <Grid className={classes.iconBlock}>
            <IconButton className={classes.themeIcon} onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
            </IconButton>
            <IconButton>
              <NotificationsNone />
            </IconButton>
          </Grid>
          <Grid className={classes.searchBlock}>
            <IconButton className={classes.searchIcon}>
              <Search />
            </IconButton>
            <InputBase className={classes.searchInput} placeholder="Поиск..." />
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
