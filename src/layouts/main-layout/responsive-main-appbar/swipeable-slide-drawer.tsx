import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import router from 'next/router';
import * as React from 'react';

import { NavMenuList } from '.';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface SwipeableSlideDrawerProp {
  children: React.ReactNode;
  anchor?: Anchor;
  list: NavMenuList[];
}

export const SwipeableSlideDrawer: React.FC<SwipeableSlideDrawerProp> = ({
  anchor = 'left',
  children,
  list,
}) => {
  const [state, setState] = React.useState({
    bottom: false,
    left: false,
    right: false,
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const renderList = (anchor: Anchor) => (
    <Box
      role="presentation"
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {list?.map(({ name, href, icon }) => (
          <ListItem
            key={name}
            button
            href={href}
            onClick={() => {
              router.push(href);
            }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        {React.Children.map(children, (child) => (
          <div onClick={toggleDrawer(anchor, true)}>{child}</div>
        ))}
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {renderList(anchor)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};
