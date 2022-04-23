import { styled } from '@mui/material';
import Box, { BoxProps } from '@mui/system/Box';

interface BoxGradientProps extends BoxProps {
  className?: string;
  children?: React.ReactNode;
}

const StyledBoxGredient = styled(Box)<{ active_route?: string }>(() => ({
  background:
    'linear-gradient( 90deg, rgba(45,31,115,1) 0%, rgba(24,3,82,1) 100%)',
}));

const BoxGradient: React.FC<BoxGradientProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <StyledBoxGredient {...rest} className={className}>
      {children}
    </StyledBoxGredient>
  );
};

export default BoxGradient;
