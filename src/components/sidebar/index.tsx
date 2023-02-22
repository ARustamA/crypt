import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { ChevronLeftOutlined, ChevronRightOutlined, LogoutOutlined } from '@mui/icons-material/';
import { useNavigate } from 'react-router-dom';

import logo from '@/assets/images/sidebar/logo.svg';
import { FlexBetween } from './flex-between';
import { navMenu } from '../mocks/navigate';
import { useStyles } from './styles';
import { useState } from 'react';

export const SideBarComponent = (props: any) => {
  const [active, setActive] = useState('');
  const { isNoneMobile, drawerWidth, setIsOpen, isOpen } = props;
  const classes = useStyles();
  // const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const theme = useTheme();

  const renderMenu = navMenu.map((item): JSX.Element => {
    return (
      <ListItem key={item.id}>
        <ListItemButton onClick={() => navigate(`${item.path}`)} className={classes.navItem}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>
            <Typography variant="body1">{item.name}</Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    );
  });

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => setIsOpen(false)}
      variant="persistent"
      sx={{
        width: drawerWidth,
        '& .MuiDrawer-paper': {
          color: theme.palette.secondary.main,
          backgroundColor: theme.palette.primary.main,
          boxSizing: 'border-box',
          width: drawerWidth,
        },
      }}>
      <Box className={classes.boxBorder}>
        <Box>
          <FlexBetween>
            <Box className={classes.brand}>
              <img src={logo} alt="logo" />
              <Typography variant="h1" className={classes.logoText}>
                Demo
              </Typography>
            </Box>
            {!isNoneMobile && (
              <IconButton onClick={() => setIsOpen(true)}>
                {isOpen ? <ChevronLeftOutlined /> : <ChevronRightOutlined />}
              </IconButton>
            )}
          </FlexBetween>
        </Box>
        <List className={classes.navList}>{renderMenu}</List>
      </Box>
      <Box width="100%">
        <List>
          <ListItem>
            <ListItemButton className={classes.navItem}>
              <ListItemIcon>
                <LogoutOutlined />
              </ListItemIcon>
              <ListItemText>
                <Typography>Logout</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
