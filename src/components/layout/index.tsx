import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocation } from 'react-router-dom';

import { ILayout } from '@/common/types/auth/layout';
import { SideBarComponent } from '../sidebar';
import { TopBarComponent } from '../top-bar';
import { useStyles } from './styles';
import { Box } from '@mui/material';
import { useState } from 'react';

export const LayoutComponent = ({ children }: ILayout) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const isNoneMobile = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  return location.pathname === '/login' || location.pathname === '/register' ? (
    <>{children}</>
  ) : (
    <Box
      display={isNoneMobile ? 'flex' : 'block'}
      width="100%"
      height="100%"
      justifyContent="space-between">
      <SideBarComponent
        isNoneMobile={isNoneMobile}
        drawerWidth="250px"
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <Box className={classes.mainSection}>
        <TopBarComponent />
        {children}
      </Box>
    </Box>
  );
};
