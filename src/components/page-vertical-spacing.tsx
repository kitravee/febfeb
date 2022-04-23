import Box from '@mui/system/Box';

interface PageVerticalSpacingProps {
  className?: string;
  children?: React.ReactNode;
}

export const PageVerticalSpacing: React.FC<PageVerticalSpacingProps> = ({
  children,
}) => {
  return <Box p={1}>{children}</Box>;
};
