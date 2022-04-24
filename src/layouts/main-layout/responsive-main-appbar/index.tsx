import MenuIcon from '@mui/icons-material/Menu';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { signIn, signOut, useSession } from 'next-auth/react';
import router from 'next/router';
import { useCallback } from 'react';

import { useAnchorElement } from '@/hooks/useAnchorElement';

import { SwipeableSlideDrawer } from './swipeable-slide-drawer';

const settings = ['Logout'];

export type NavMenuList = {
  href: string;
  icon?: React.ReactNode;
  name: string;
};

const list: NavMenuList[] = [
  { href: '/team', icon: <PeopleOutlineIcon />, name: 'Team' },
];

interface ResponsiveMainAppBarProps {
  className?: string;
}

export const ResponsiveMainAppBar: React.FC<ResponsiveMainAppBarProps> = ({
  className,
}) => {
  const onScrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const { data: session, status } = useSession();

  const handleSignOut = useCallback(async () => {
    const data = await signOut({
      redirect: false,
    });

    router.push(data.url);
  }, []);

  const {
    open: openAnchorElUser,
    close: closeAnchorElUser,
    isOpen: anchorElUser,
  } = useAnchorElement();

  return (
    <AppBar
      className={className}
      color="inherit"
      position="sticky"
      sx={{
        boxShadow: onScrollTrigger ? 1 : 'none',
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="div"
            sx={{ display: { md: 'flex', xs: 'none' } }}
            variant="h6"
          >
            Store
          </Typography>

          <Box sx={{ display: { md: 'none', xs: 'flex' }, flexGrow: 1 }}>
            <SwipeableSlideDrawer anchor="left" list={list}>
              <IconButton aria-haspopup="true" color="inherit" size="large">
                <MenuIcon />
              </IconButton>
            </SwipeableSlideDrawer>
          </Box>

          <Typography
            noWrap
            component="div"
            sx={{ display: { md: 'none', xs: 'flex' }, flexGrow: 1 }}
            variant="h6"
          >
            Store
          </Typography>

          <Box sx={{ display: { md: 'flex', xs: 'none' }, flexGrow: 1 }}>
            {list.map(({ name, href }) => (
              <Button
                key={name}
                size="large"
                sx={{ color: 'primary', display: 'block' }}
                onClick={() => {
                  router.push(href);
                }}
              >
                {name}
              </Button>
            ))}
          </Box>

          {status === 'loading' ? (
            <Box>loading</Box>
          ) : status === 'authenticated' ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }} onClick={openAnchorElUser}>
                  <Avatar
                    alt="Remy Sharp"
                    src={session?.user?.image as string}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                keepMounted
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                id="menu-appbar"
                open={Boolean(anchorElUser)}
                sx={{ mt: '45px' }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                onClose={closeAnchorElUser}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => {
                      closeAnchorElUser();
                      handleSignOut();
                    }}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : status === 'unauthenticated' ? (
            <Box
              sx={{ flexGrow: 0 }}
              onClick={() => {
                signIn('google', { callbackUrl: `/team`, redirect: false });
              }}
            >
              <Button color="primary" variant="contained">
                Google Login
              </Button>
            </Box>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
