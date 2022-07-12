import { Flex, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { HeaderLogoProps } from './HeaderInterface';
const { motion } = require('framer-motion');

import { NavBar } from './NavBar';

const Logo = ({ logo }: HeaderLogoProps) => {
  return (
    <Box
      as={motion.div}
      fontSize='2rem'
      fontWeight='bold'
      whileHover={{ y: -5.0, color: '#FFFFFF', scale: 1.1 }}
      transition='0.1s linear'
    >
      <Link href='/'>{logo}</Link>
    </Box>
  );
};

export function Header() {
  return (
    <Flex as='header' layerStyle='header_footer' direction={{ base: 'column', lg: 'row' }}>
      <Logo logo='Usama Lodhi' />
      <NavBar />
    </Flex>
  );
}
