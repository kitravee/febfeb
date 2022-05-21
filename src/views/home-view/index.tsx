import { Box } from '@mui/system';

import { Hero } from './hero';
import { SubScribe } from './sub-scribe';

const HomeView: React.FC = () => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Hero />
      <SubScribe />
    </Box>
  );
};

export default HomeView;
