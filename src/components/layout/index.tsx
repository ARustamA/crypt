import { ILayout } from '../../common/types/auth/layout';
import { TopBarComponent } from '../top-bar';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocation } from 'react-router-dom';
import { SideBarComponent } from '../sidebar';
import { Box } from '@mui/material';
import { useState } from 'react';

export const LayoutComponent = ({ children }: ILayout) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const isNoneMobile = useMediaQuery('(min-width:600px)');
  return location.pathname === '/login' || location.pathname === '/register' ? (
    <>{children}</>
  ) : (
    <Box display={!isNoneMobile ? 'flex' : 'block'} width="100%" height="100%">
      <SideBarComponent
        isNoneMobile={isNoneMobile}
        drawerWidth="250px"
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <Box>
        <TopBarComponent />
        {children}
      </Box>
    </Box>
  );
};
