import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
// import { motion } from 'framer-motion';
import NextImage from 'next/image';

import { TextGradient } from '@/components/text-gradient';

export const Hero: React.FC = () => {
  return (
    <Container sx={{ mb: 8, mt: 8 }}>
      <Grid container alignItems="center" justifyContent="center" spacing={4}>
        <Grid item md={6} sm={6}>
          <Box>
            <TextGradient>Let us know </TextGradient>
            <Typography
              gutterBottom
              component="h1"
              fontWeight="fontWeightMedium"
              variant="h2"
            >
              who you are and combined it with febfeb team
            </Typography>
            <Typography
              color={(theme) => theme.palette.grey[800]}
              variant="body1"
            >
              Partner with one of the world’s largest retailers to showcase your
              brand and products.
            </Typography>
          </Box>

          <Box mb={3} mt={3}>
            <Button
              color="primary"
              size="large"
              sx={{ marginRight: 1 }}
              variant="outlined"
            >
              Be our partner
            </Button>
            {/* <Button color="primary" size="large" variant="contained">
              Our team
            </Button> */}
          </Box>
        </Grid>

        <Grid item md={6} sm={6} xs={12}>
          <Box
            // component={motion.div}
            // position="absolute"
            // sx={{ top: 0 }}
            // transition={{ delay: 1 }}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <NextImage
              alt="crypto-hero"
              height={500}
              layout="fixed"
              src="/home/undraw_explore_re_8l4v.svg"
              width={733}
            />
          </Box>
          <Box
            // component={motion.div}
            // position="absolute"
            // sx={{ top: 0 }}
            // transition={{ delay: 1 }}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <NextImage
              alt="crypto-hero"
              height={300}
              layout="fixed"
              src="/home/undraw_explore_re_8l4v.svg"
              width={480}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
