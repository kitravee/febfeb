import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import type { FC } from 'react';

import { HideOnScroll } from './HideOnScroll';

interface NavbarContainerProps {
  children?: ReactNode;
}

export const NavbarContainer: FC<NavbarContainerProps> = ({ children }) => {
  const onScrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <Container>
      <HideOnScroll>
        <AppBar
          sx={{
            alignItems: 'center',
            backgroundColor: 'transparent',
            display: 'flex',
          }}
        >
          <motion.div
            animate={{ width: onScrollTrigger ? '80%' : '100%' }}
            transition={{ duration: 0.25 }}
          >
            <Toolbar
              sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                borderRadius: '1rem',
                boxShadow: (theme) => theme.shadows[2],
                margin: '24px',
              }}
            >
              {children}
            </Toolbar>
          </motion.div>
        </AppBar>
      </HideOnScroll>
    </Container>
  );
};
