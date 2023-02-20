import {
  ChevronLeftOutlined,
  ChevronRightOutlined,
  HomeOutlined,
  InsightsOutlined,
  LogoutOutlined,
  MenuBookOutlined,
  SettingsOutlined,
} from '@mui/icons-material/';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  useTheme,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { FlexBetween } from '../flex-between';
import { useStyles } from './styles';
import { useState } from 'react';

export const SideBarComponent = (props: any) => {
  const [active, setActive] = useState('');
  const { isNoneMobile, drawerWidth, setIsOpen, isOpen } = props;
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

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
            <Box display="flex" alignItems="center" gap="10px">
              <Typography>Demo</Typography>
            </Box>
            {!isNoneMobile && (
              <IconButton onClick={() => setIsOpen(true)}>
                {isOpen ? <ChevronLeftOutlined /> : <ChevronRightOutlined />}
              </IconButton>
            )}
          </FlexBetween>
        </Box>
      </Box>
    </Drawer>
  );
};
