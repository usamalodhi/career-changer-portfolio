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

const HIGHLIGHT = ['#A7F3D0', '#BAE6FD', '#C7D2FE', '#FDE68A'];

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
      <Divider borderColor='black' />
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
        <Text as='p'>
          I'm a graduate of the{' '}
          <Highlighter backgroundColor={HIGHLIGHT[0]} children='Boolean Software Developer Academy ' />
          learning the fundamentals of frontend and backend web development. A strong emphasis was placed on programming
          in <Highlighter backgroundColor={HIGHLIGHT[1]} children='Javascript/Typescript' /> to build full stack
          applications using <Highlighter backgroundColor={HIGHLIGHT[2]} children='React,' />{' '}
          <Highlighter backgroundColor={HIGHLIGHT[3]} children='Node/Express,' />{' '}
          <Highlighter backgroundColor={HIGHLIGHT[0]} children='PostgresSQL' /> and{' '}
          <Highlighter backgroundColor={HIGHLIGHT[2]} children='Prisma ORM.' />
        </Text>
        <Text as='p'>
          Outside of the academy I've been bolstering my skills in the latest frontend technologies utilising frameworks
          including <Highlighter backgroundColor={HIGHLIGHT[3]} children='Gatsby' /> and{' '}
          <Highlighter backgroundColor={HIGHLIGHT[2]} children='Next JS,' /> CSS Libraries including{' '}
          <Highlighter backgroundColor={HIGHLIGHT[1]} children='Chakra UI,' />{' '}
          <Highlighter backgroundColor={HIGHLIGHT[3]} children='Material UI' /> and{' '}
          <Highlighter backgroundColor={HIGHLIGHT[0]} children='Framer Motion.' /> I would love to work with you in an
          exciting Frontend role.
        </Text>
        <Text as='p'>
          Prior to web development, I've worked as an analyst in financial services; most notably in the{' '}
          <Highlighter backgroundColor={HIGHLIGHT[3]} children='programming of credit strategies' /> in the specialist
          lending market and as a PhD researcher. I've had the opportunity to work with both small and large,
          specialised and cross-functional teams and developed a working style that is suited for a{' '}
          <Highlighter backgroundColor={HIGHLIGHT[0]} children='fast-paced, self-directed environment' />
        </Text>
        <Text as='h2'>Services</Text>
        <Stack>
          <Feature
            service={<Highlighter backgroundColor={HIGHLIGHT[2]} children='Frontend Development' />}
            text={
              'Design, Build and Deployment of responsive web applications made within the React eco-system of frontend frameworks (React, Gatsby, Next JS) and production ready CSS libraries with Chakra UI, Material UI, Styled Components and Framer Motion amongst my favorite tools.'
            }
          />
          <Feature
            service={<Highlighter backgroundColor={HIGHLIGHT[3]} children='Backend Development' />}
            text={
              'Create RESTful server-side applications to handle HTTP requests using Node/Express with connections to relational data stores such as PostgresSQL.'
            }
          />
          <Feature
            service={<Highlighter backgroundColor={HIGHLIGHT[1]} children='UI & UX Design' />}
            text={
              'A keen eye for the latest trends in web development design to create engaging and user-friendly interfaces with prototyping in design tools including Figma.'
            }
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
