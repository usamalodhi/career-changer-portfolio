import { SimpleGrid, Image, Flex, Text, Stack, Box, Divider, Button, Link } from '@chakra-ui/react';
import AboutImg from '../../../public/assets/AboutImage.jpeg';
import Contact from '../Contact/Contact';
const { motion } = require('framer-motion');

interface FeatureProps {
  service: JSX.Element;
  text: string;
}

interface HighlighterProps {
  backgroundColor: string;
  children: string;
}

const HIGHLIGHT = ['#FFA500'];

const Highlighter = ({ backgroundColor, children }: HighlighterProps) => {
  return (
    <Text as='span' fontWeight='bold' backgroundColor={backgroundColor}>
      {children}
    </Text>
  );
};

const Feature = ({ service, text }: FeatureProps) => {
  return (
    <Flex direction='column'>
      <Text as='h3'>{service}</Text>
      <Divider borderColor='white' />
      <Text as='p'>{text}</Text>
    </Flex>
  );
};

export function AboutMe() {
  return (
    <SimpleGrid
      textAlign='justify'
      wordBreak='break-word'
      columns={{ base: 1, md: 2 }}
      spacing='24px'
      padding='16px 24px'
    >
      <Stack>
        <Flex direction='column'>
          <Box>
            <Text as='h1'>About Me</Text>
          </Box>
          <Flex gap='24px'>
            <Link
              as={motion.a}
              whileHover={{ color: '#000000', backgroundColor: '#FFFAFA' }}
              transition='0.05s linear'
              href='/files/BooleanCertificate.pdf'
              target='_blank'
              rel='noopener noreferrer'
              width='max-content'
              textStyle='ButtonStyle'
              layerStyle='ButtonStyle'
              color='brand.secondary'
            >
              View CV
            </Link>
            <Link
              as={motion.a}
              whileHover={{ color: '#000000', backgroundColor: '#FFFAFA' }}
              transition='0.05s linear'
              href='/files/BooleanCertificate.pdf'
              target='_blank'
              rel='noopener noreferrer'
              width='max-content'
              textStyle='ButtonStyle'
              layerStyle='ButtonStyle'
              color='brand.secondary'
            >
              View Certificate
            </Link>
          </Flex>
        </Flex>
        <Text as='p'>Text For Paragraph One</Text>
        <Text as='p'>Text For Paragraph Two</Text>
        <Text as='p'>Text For Paragraph Three</Text>

        <Text as='h2'>Services</Text>
        <Stack>
          <Feature
            service={<Highlighter backgroundColor={HIGHLIGHT[0]} children='Service 1' />}
            text={'Write Decription for Service 1 you provide'}
          />
          <Feature
            service={<Highlighter backgroundColor={HIGHLIGHT[0]} children='Service 2' />}
            text={'Write Decription for Service 2 you provide'}
          />
          <Feature
            service={<Highlighter backgroundColor={HIGHLIGHT[0]} children='Service 3' />}
            text={'Write Decription for Service 3 you provide'}
          />
        </Stack>

        <Contact />
      </Stack>
      <Flex>
        <Image rounded='md' alt='feature image' src={AboutImg.src} objectFit='cover' />
      </Flex>
    </SimpleGrid>
  );
}
