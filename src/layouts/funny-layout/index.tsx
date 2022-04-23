import React, { ReactNode } from 'react';
import type { FC } from 'react';

import { NavbarContainer } from '@/layouts/funny-layout/navbar-container';

import { NavContent } from './nav-content';

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <NavbarContainer>
        <NavContent />
      </NavbarContainer>
      <div>{children}</div>
    </>
  );
};
