import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Grid, IconButton, useTheme } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { ColorModeContext } from '@/theme';
import React, { useContext } from 'react';
import { useStyles } from './style';

const ThemeSwitcherComponent = () => {
  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <Grid onClick={colorMode.toggleColorMode} className={classes.iconBlock}>
      <IconButton className={classes.themeIcon}>
        {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
      </IconButton>
      <IconButton>
        <NotificationsNoneIcon />
      </IconButton>
    </Grid>
  );
};

export default ThemeSwitcherComponent;
