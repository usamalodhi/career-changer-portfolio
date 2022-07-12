import { List, ListItem, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { HeaderNavProps } from './HeaderInterface';
const { motion } = require('framer-motion');

export const NavLink = ({ linkTo, name }: HeaderNavProps) => {
  return (
    <ListItem
      as={motion.li}
      whileHover={{ y: -5.0, color: '#FFFFFF', scale: 1.2 }}
      transition='0.1s linear'
      textAlign='center'
    >
      <Link href={linkTo}>{name}</Link>
    </ListItem>
  );
};

export function NavBar() {
  return (
    <Box as='nav'>
      <List
        display={{ base: 'block', sm: 'flex' }}
        listStyleType='none'
        w={{ base: '100%', sm: 'min-content' }}
        paddingRight={{ base: '0px', lg: '24px' }}
        paddingBottom={{ base: '24px', lg: '0px' }}
      >
        <NavLink linkTo='/' name='Home' />
        <NavLink linkTo='/projects' name='Projects' />
        <NavLink linkTo='/about' name='About' />
      </List>
    </Box>
  );
}
