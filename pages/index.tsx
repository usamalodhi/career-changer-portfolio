import type { NextPage } from 'next';
import { HeadComponent } from '../src/components/HeadComponent/HeadComponent';
import { Hero } from '../src/components/Hero/Hero';

const Home: NextPage = () => {
  return (
    <>
      <HeadComponent contentTitle='NAME | Front End Web Developer' contentDescription='React wizard, CSS Mysfit' />
      <Hero />
    </>
  );
};

export default Home;
