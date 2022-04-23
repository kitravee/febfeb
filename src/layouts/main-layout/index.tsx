import { Footer } from './footer';
import { ResponsiveMainAppBar } from './responsive-main-appbar';

interface MainLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <ResponsiveMainAppBar />
      {children}
      <Footer />
    </>
  );
};
