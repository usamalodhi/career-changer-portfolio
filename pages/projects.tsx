import type { NextPage } from 'next';
import { HeadComponent } from '../src/components/HeadComponent/HeadComponent';
import { Box, Text } from '@chakra-ui/react';
import { Project } from '../src/components/Project/Project';
const { motion } = require('framer-motion');
import { VARIANTS } from '../src/constants/constants';

const Projects: NextPage = () => {
  return (
    <Box as={motion.div} variants={VARIANTS} initial='hidden' animate='enter' exit='exit'>
      <HeadComponent contentTitle='Usama Lodhi | Front End Web Developer' contentDescription='Portfolio Projects' />
      <Box>
        <Text as='h1'>View Projects</Text>
      </Box>
      <Project />
    </Box>
  );
};

export default Projects;
