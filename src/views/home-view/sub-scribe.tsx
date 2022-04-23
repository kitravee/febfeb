import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export const SubScribe: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Container sx={{ pb: 8, pt: 8 }}>
        <Grid container alignItems="center" spacing={4}>
          <Grid item md={7} sm={12} xs={12}>
            <Typography
              gutterBottom
              color={(theme) => theme.palette.primary.main}
              component="h2"
              fontSize="1.8rem"
              textAlign="center"
              variant="h6"
            >
              FebLuffy is getting better every day
            </Typography>
            <Typography
              component="h3"
              fontSize="1rem"
              textAlign="center"
              variant="body1"
            >
              Join the FebLuffy newsletter and stay updated on new releases
            </Typography>
          </Grid>

          <Grid
            container
            item
            md={5}
            sm={12}
            sx={{ justifyContent: { xs: 'center' } }}
            xs={12}
          >
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              p={2}
              width={400}
            >
              <FormControl fullWidth sx={{ mb: 1 }} variant="outlined">
                <OutlinedInput
                  id="standard-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">
                      <MailOutlineIcon color="primary" />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button fullWidth color="primary" variant="outlined">
                SubScribe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
