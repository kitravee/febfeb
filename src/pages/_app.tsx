import { EmotionCache } from '@emotion/cache';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import nProgress from 'nprogress';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { EmotionCacheProvider } from '@/lib/emotion';
import { queryConfig } from '@/lib/react-query';
import { PageComponent } from '@/types/next-page';
import { MainThemeProvider } from '~/theme/main-theme-provider';

import 'nprogress/nprogress.css';

// Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache();

// Binding events.
Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());
nProgress.configure({ showSpinner: false });

interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: PageComponent;
}

function MyApp({ Component, pageProps, emotionCache }: CustomAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const renderComponent = getLayout(<Component {...pageProps} />);
  const [queryClient] = useState(() => {
    return new QueryClient({ defaultOptions: queryConfig });
  });

  return (
    <EmotionCacheProvider emotionCache={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <MainThemeProvider>{renderComponent}</MainThemeProvider>
      </QueryClientProvider>
    </EmotionCacheProvider>
  );
}

export default MyApp;
