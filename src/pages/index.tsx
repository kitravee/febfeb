import Head from 'next/head';

import { MainLayout } from '@/layouts/main-layout';
import { PageComponent } from '@/types/next-page';
import HomeView from '@/views/home-view';

const Home: PageComponent = () => {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <HomeView />
    </>
  );
};

Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

Home.auth = false;

export default Home;
