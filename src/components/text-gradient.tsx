import { Typography, TypographyProps } from '@mui/material';
import { FC } from 'react';

interface TextGradientProps extends TypographyProps {
  children: React.ReactNode;
}

export const TextGradient: FC<TextGradientProps> = ({ children }) => {
  return (
    <Typography component="h1" fontWeight="fontWeightMedium" variant="h2">
      <span
        style={{
          background: 'linear-gradient(to right, #3a2f86, #7b1fa2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {children}
      </span>
    </Typography>
  );
};
