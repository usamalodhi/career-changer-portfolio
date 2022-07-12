import { Text, Flex, Box } from '@chakra-ui/react';
import { HeroProps } from './HeroInterface';
const { motion } = require('framer-motion');
import { VARIANTS } from '../../constants/constants';
import Link from 'next/link';

const HeroText = ({ heading, headingSpan, subHeading }: HeroProps) => {
  return (
    <>
      <Text pb='1em' as='h1'>
        {heading} <br />
        <Text as={'span'}>{headingSpan}</Text>
      </Text>
      <Text pb='1em' as='h2'>
        {subHeading}
      </Text>
    </>
  );
};

export function Hero() {
  return (
    <Flex
      as={motion.div}
      variants={VARIANTS}
      initial='hidden'
      animate='enter'
      exit='exit'
      layerStyle='Hero'
      background='linear-gradient(to right, #FFFFFF, #FFEFBA)'
    >
      <HeroText
        heading={`Hi there, I'm Usama`}
        headingSpan={`I'm a Frontend Developer`}
        subHeading='I love building responsive web applications that are user-friendly, simple and delightful'
      />
      <Box
        as={motion.div}
        whileHover={{ color: '#000000', backgroundColor: '#FFFAFA' }}
        transition='0.05s linear'
        color='brand.secondary'
        width='max-content'
        textStyle='ButtonStyle'
        layerStyle='ButtonStyle'
      >
        <Link href='/projects'>View Projects</Link>
      </Box>
    </Flex>
  );
}
