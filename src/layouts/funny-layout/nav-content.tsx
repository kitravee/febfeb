import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import type { FC } from 'react';

interface NavContentProps {
  className?: string;
}

export const NavContent: FC<NavContentProps> = () => {
  return (
    <Grid container>
      <Grid item xs={5}>
        <Box>
          <Typography display="inline" variant="subtitle2">
            Home
          </Typography>

          <Typography display="inline" variant="subtitle2">
            About us
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={2}>
        <Box display="flex" justifyContent="center">
          <Typography display="inline" variant="h4">
            JanLuffy
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Box alignItems="center" display="flex" justifyContent="flex-end">
          <Typography display="inline" variant="subtitle2">
            Contact
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
