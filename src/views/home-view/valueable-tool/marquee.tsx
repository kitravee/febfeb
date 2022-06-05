import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

import styles from './marquee.module.css';

export const Marquee: FC = () => {
  return (
    <Box sx={{ bgcolor: 'white' }}>
      <div className={styles.marquee}>
        <div className={styles.marqueeinner}>
          <div
            style={{
              float: 'left',
              width: '50%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              alt="vercel"
              className={styles.orb}
              src="/valueable-tool/vercel.svg"
            />
            <img
              alt="nextjs"
              className={styles.orb}
              src="/valueable-tool/nextjs.svg"
            />
            <img
              alt="axios"
              className={styles.orb}
              src="/valueable-tool/axios.svg"
            />
            <img
              alt="graphcms"
              className={styles.orb}
              src="/valueable-tool/graphcms.svg"
            />

            <img
              alt="react-query"
              className={styles.orb}
              src="/valueable-tool/react-query.svg"
            />

            <div className={styles.orb2}>
              <Typography fontWeight="bold" variant="h5">
                NextAuth.js
              </Typography>
            </div>

            <div className={styles.orb2}>
              <Typography fontWeight="bold" variant="h5">
                Undraw
              </Typography>
            </div>
          </div>
          <div
            style={{
              float: 'left',
              width: '50%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              alt="vercel"
              className={styles.orb}
              src="/valueable-tool/vercel.svg"
            />
            <img
              alt="nextjs"
              className={styles.orb}
              src="/valueable-tool/nextjs.svg"
            />
            <img
              alt="axios"
              className={styles.orb}
              src="/valueable-tool/axios.svg"
            />
            <img
              alt="graphcms"
              className={styles.orb}
              src="/valueable-tool/graphcms.svg"
            />

            <img
              alt="react-query"
              className={styles.orb}
              src="/valueable-tool/react-query.svg"
            />

            <div className={styles.orb2}>
              <Typography fontWeight="bold" variant="h5">
                NextAuth.js
              </Typography>
            </div>

            <div className={styles.orb2}>
              <Typography fontWeight="bold" variant="h5">
                Undraw
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};
