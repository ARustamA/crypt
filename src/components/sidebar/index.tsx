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
  colors,
  useTheme,
} from '@mui/material';
import { ChevronLeftOutlined, ChevronRightOutlined, LogoutOutlined } from '@mui/icons-material/';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/sidebar/logo.svg';
import { FlexBetween } from '../flex-between';
import { navMenu } from '../mocks/navigate';
import { tokens } from '../../theme';
import { useStyles } from './styles';
import { useState } from 'react';

export const SideBarComponent = (props: any) => {
  const [active, setActive] = useState('');
  const { isNoneMobile, drawerWidth, setIsOpen, isOpen } = props;
  const classes = useStyles();

  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
        '&.MuiDrawer-paper': {
          color: theme.palette.secondary.main,
          backgroundColor: theme.palette.primary.main,
          boxSizing: 'border-box',
          width: drawerWidth,
        },
      }}>
      <Box width="100%">
        <Box>
          <FlexBetween>
            <Box className={classes.brand}>
              <img src={logo} alt="logo" />
              <Typography
                variant="h1"
                fontSize="32px"
                color={theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT}>
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
        <List>{renderMenu}</List>
      </Box>
    </Drawer>
  );
};
