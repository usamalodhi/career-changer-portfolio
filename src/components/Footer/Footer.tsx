import { Flex, Box, Link, List, ListItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FooterProps, SocialProps } from './FooterInterface';
const { motion } = require('framer-motion');
import Github from '/public/social/github.svg';
import LinkedIn from '/public/social/linkedin.svg';

const FooterText = ({ copyright, email, tel }: FooterProps) => {
  return (
    <Box pb='8px'>
      <Text fontWeight='bold'>{copyright}</Text>
      <Text fontWeight='bold'>{email}</Text>
      <Text fontWeight='bold'>{tel}</Text>
    </Box>
  );
};

const SocialLinks = ({ name, linkTo, image }: SocialProps) => {
  return (
    <ListItem
      as={motion.li}
      whileHover={{ y: -5.0, color: '#FFFFFF', scale: 1.2 }}
      transition='0.1s linear'
      textAlign='center'
    >
      <Link href={linkTo} isExternal>
        <Image src={image} alt={name} width={40} height={40} />
      </Link>
    </ListItem>
  );
};

export function Footer() {
  return (
    <Flex as='footer' layerStyle='header_footer' direction={{ base: 'column', lg: 'row' }}>
      <FooterText copyright='© 2022 Usama Lodhi' email='Email: lodhius@gmail.com' tel='Tel: 07455964444' />
      <List display='flex' listStyleType='none' paddingRight={{ base: '0px', lg: '24px' }}>
        <SocialLinks image={Github} name='Github' linkTo='https://github.com/usamalodhi/' />
        <SocialLinks image={LinkedIn} name='LinkedIn' linkTo='https://www.linkedin.com/in/usama-lodhi//' />
      </List>
    </Flex>
  );
}
