import type { NextPage } from 'next';
import { HeadComponent } from '../src/components/HeadComponent/HeadComponent';
import { AboutMe } from '../src/components/AboutMe/AboutMe';
const { motion } = require('framer-motion');
import { VARIANTS } from '../src/constants/constants';
import { Box } from '@chakra-ui/react';

const About: NextPage = () => {
  return (
    <Box as={motion.div} variants={VARIANTS} initial='hidden' animate='enter' exit='exit'>
      <HeadComponent contentTitle='Usama Lodhi | Front End Web Developer' contentDescription='About Me' />
      <AboutMe />
    </Box>
  );
};

export default About;
