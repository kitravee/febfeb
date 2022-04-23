import MenuIcon from '@mui/icons-material/Menu';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import router from 'next/router';

import { SwipeableSlideDrawer } from './swipeable-slide-drawer';

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

          <Box sx={{ flexGrow: 0 }}>
            <Button color="primary" variant="contained">
              Connect Wallet
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
