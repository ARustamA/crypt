import useMediaQuery from '@mui/material/useMediaQuery';
import { Outlet, useLocation } from 'react-router-dom';

import { SidebarComponent } from '../sidebar';
import { TopBarComponent } from '../top-bar';
import { useStyles } from './styles';
import { FC, useState } from 'react';
import { Box } from '@mui/material';

const LayoutComponent: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isNoneMobile = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  return location.pathname === '/login' || location.pathname === '/register' ? (
    <>
      <Outlet />
    </>
  ) : (
    <Box
      display={isNoneMobile ? 'flex' : 'block'}
      width="100%"
      height="100%"
      justifyContent="space-between">
      <SidebarComponent
        drawerWidth="250px"
        isNoneMobile={isNoneMobile}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <Box className={classes.mainSection}>
        <TopBarComponent setIsOpen={setIsOpen} isOpen={isOpen} isNoneMobile={isNoneMobile} />
        <Outlet />
      </Box>
    </Box>
  );
};
export default LayoutComponent;
