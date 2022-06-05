import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

import Link from '@/components/link';

export const Contribution: React.FC = () => {
  return (
    <Container sx={{ pb: 8, pt: 8 }}>
      <Grid container spacing={2}>
        <Grid item md={7} sm={6} xs={12}>
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': {
                m: 1,
                width: '100%',
                height: 400,
              },
              position: 'relative',
            }}
          >
            <Image
              alt="bg-contribute"
              layout="fill"
              objectFit="cover"
              src="/valueable-tool/skiking-photos-unsplash.jpg"
              style={{ borderRadius: '12px', zIndex: 1 }}
            />

            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p={2}
              sx={{ zIndex: 1 }}
            >
              <Box>
                <Box>
                  <Typography color="white" variant="h6">
                    OUR PROGRESS
                  </Typography>
                </Box>
                <Box pt={1} width="200px">
                  <Typography color="white" component="div" variant="body1">
                    Partner with one of the world’s largest retailers to
                    showcase your brand and products.
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  color="primary"
                  component={Link}
                  href="/"
                  variant="outlined"
                >
                  Say hi to the team
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={5} sm={6} xs={12}>
          <Box height="50%" pb={1}>
            <Box borderRadius={4} component={Paper} height="100%" p={2}>
              <Typography color="primary" fontSize={14} variant="h6">
                RELEASE
              </Typography>
              <Typography color="">new release at</Typography>
              <Typography color="">new release at new release at </Typography>
            </Box>
          </Box>
          <Box height="50%" pb={1}>
            <Box borderRadius={4} component={Paper} height="100%" p={2}>
              <Typography color="primary" fontSize={14} variant="h6">
                RELEASE
              </Typography>
              <Typography color="">new release at</Typography>
              <Typography color="">new release at new release at </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
