import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import { motion } from 'framer-motion';
import NextImage from 'next/image';

export const Hero: React.FC = () => {
  return (
    <Container sx={{ mb: 8, mt: 8 }}>
      <Grid container alignItems="center" justifyContent="center" spacing={4}>
        <Grid item md={6} sm={6}>
          <Box>
            <Typography
              gutterBottom
              component="h1"
              fontWeight="fontWeightMedium"
              variant="h2"
            >
              Discover Digital Art, Collect and Sell Your Specific NFTs.
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
            <Button color="primary" size="large" variant="contained">
              Our team
            </Button>
          </Box>
        </Grid>

        <Grid item md={6} sm={6} xs={12}>
          <Box component={motion.div} transition={{ delay: 1 }}>
            <NextImage
              alt="crypto-hero"
              height={500}
              src="/home/crypto-hero.png"
              width={500}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
