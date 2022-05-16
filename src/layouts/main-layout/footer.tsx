import GitHubIcon from '@mui/icons-material/GitHub';
import { Container, Grid, IconButton, Typography } from '@mui/material';
import Box from '@mui/system/Box';

import BoxGradient from '@/components/box-gradient';
import Link from '@/components/link';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <BoxGradient>
        <Container sx={{ pb: 2, pt: 4 }}>
          <Grid container>
            <Grid item sm={4} xs={12}>
              <Typography
                color={(theme) => theme.palette.primary.contrastText}
                variant="h3"
              >
                FebFeb
              </Typography>
            </Grid>
            <Grid item sm={8} xs={12}>
              <Grid
                container
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
              >
                <Grid
                  item
                  alignItems="flex-start"
                  direction="column"
                  sm={3}
                  xs={6}
                >
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        noWrap
                        color="primary.contrastText"
                        component="div"
                        fontWeight="bold"
                      >
                        Customer
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Link color="grey.600" href="/" underline="hover">
                        Customer2
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  alignItems="flex-start"
                  direction="column"
                  sm={3}
                  xs={6}
                >
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        noWrap
                        color="primary.contrastText"
                        component="div"
                        fontWeight="bold"
                      >
                        Customer
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Link color="grey.600" href="/" underline="hover">
                        Customer2
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  alignItems="flex-start"
                  direction="column"
                  sm={3}
                  xs={6}
                >
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        noWrap
                        color="primary.contrastText"
                        component="div"
                        fontWeight="bold"
                      >
                        Customer
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Link color="grey.600" href="/" underline="hover">
                        Customer2
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  alignItems="flex-start"
                  direction="column"
                  sm={3}
                  xs={6}
                >
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        noWrap
                        color="primary.contrastText"
                        component="div"
                        fontWeight="bold"
                      >
                        Customer
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Link color="grey.600" href="/" underline="hover">
                        Customer2
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </BoxGradient>

      <Box sx={{ backgroundColor: 'primary.dark' }}>
        <Container sx={{ pb: 1, pt: 1 }}>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
          >
            <Box>
              <Typography color={(theme) => theme.palette.primary.contrastText}>
                FebFeb &reg; {new Date().getFullYear()}
              </Typography>
              <Typography
                color={(theme) => theme.palette.primary.contrastText}
                fontSize="12px"
                variant="subtitle1"
              >
                Bangkok, Thailand
              </Typography>
            </Box>

            <IconButton aria-label="add an alarm" style={{ color: 'white' }}>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};
