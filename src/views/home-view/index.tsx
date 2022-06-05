import { Box } from '@mui/system';

import { Contribution } from './contribution';
import { Hero } from './hero';
// import { SubScribe } from './sub-scribe';
// import { ValuableTool } from './valueable-tool.tsx';
import { Marquee } from './valueable-tool/marquee';

const HomeView: React.FC = () => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Hero />
      {/* <SubScribe /> */}
      <Marquee />
      <Contribution />
    </Box>
  );
};

export default HomeView;
