import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  HStack,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  Link,
} from '@chakra-ui/react';
const { motion } = require('framer-motion');

import { LiveLinkProps, CodeLinkProps, TagProps, ProjectDataProps } from './ProjectInterface';
import { BiLinkExternal } from 'react-icons/bi';

import projectImageOne from '../../../public/assets/4thurlestone.jpg';
import projectImageTwo from '../../../public/assets/website.jpg';

const LiveLink = ({ liveLinkURL }: LiveLinkProps): React.ReactElement => {
  return (
    <>
      <Link
        as={motion.a}
        whileHover={{ color: '#000000', backgroundColor: '#FFFAFA' }}
        transition='0.05s linear'
        display='flex'
        justifyContent='space-evenly'
        alignItems='center'
        gap='0.25em'
        color='brand.secondary'
        layerStyle='ButtonStyle'
        textStyle='ButtonStyle'
        isExternal
        href={liveLinkURL}
      >
        LIVE <BiLinkExternal />
      </Link>
    </>
  );
};

const CodeLink = ({ codeLinkURL }: CodeLinkProps): React.ReactElement => {
  return (
    <Link
      as={motion.a}
      whileHover={{ color: '#000000', backgroundColor: '#FFFAFA' }}
      transition='0.05s linear'
      display='flex'
      justifyContent='space-evenly'
      alignItems='center'
      gap='0.25em'
      color='brand.secondary'
      layerStyle='ButtonStyle'
      textStyle='ButtonStyle'
      isExternal
      href={codeLinkURL}
    >
      CODE <BiLinkExternal />
    </Link>
  );
};

const Tag = ({ tagText }: TagProps): React.ReactElement => {
  return (
    <Box backgroundColor='brand.secondary' color='brand.primary' padding='8px 16px'>
      <Text fontWeight='bold' as='p'>
        {tagText}
      </Text>
    </Box>
  );
};

const ProjectData = ({
  projectTitle,
  projectImage,
  projectImageAlt,
  projectDescription,
  tags,
  liveURL,
  codeURL,
}: ProjectDataProps) => {
  return (
    <>
      <Flex pl='24px' pr='24px'>
        <Image
          rounded='base'
          alt={projectImageAlt}
          src={projectImage.src}
          fit='cover'
          align='center'
          w={'100%'}
          h={{ base: '100%', sm: '400px', lg: '500px' }}
        />
      </Flex>
      <Stack padding='16px 24px'>
        <Box pb='8px' as={'header'}>
          <Text as='h2'>{projectTitle}</Text>
        </Box>

        <Stack direction={'column'} divider={<StackDivider borderColor='black' />}>
          <HStack pb='8px'>
            <Text as='p' textAlign='justify' wordBreak='break-word'>
              {projectDescription}
            </Text>
          </HStack>
          <List pt='8px' pb='8px'>
            <ListItem>
              <Flex gap='0.25em' wrap='wrap'>
                {tags.map((tag, index) => {
                  return <Tag key={index} tagText={tag} />;
                })}
              </Flex>
            </ListItem>
          </List>
        </Stack>

        <Flex gap='0.25em'>
          <LiveLink liveLinkURL={liveURL} />
          <CodeLink codeLinkURL={codeURL} />
        </Flex>
      </Stack>
    </>
  );
};

export function Project() {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py='16px'>
      <ProjectData
        projectTitle='4 Thurlestone'
        /* @ts-ignore */
        projectImage={projectImageOne}
        projectImageAlt='4 Thurlestone Restaurant Website'
        projectDescription='The chef and owner of 4 Thurlestone Cafe and Restaurant approached me to design and build a website for his restaurant.
        Additionally, he sought my consultation on marketing strategies using Trip Advisor and other platforms businesses in the service
        industry capitalise on. I built him a website on the JAMstack using Gatsby GraphQL and the Contentful CMS to allow for easy editing of
        data through updating Contentful Models.'
        tags={['Gatsby', 'Chakra UI', 'Framer Motion', 'CMS']}
        liveURL='https://chakra-ui.com'
        codeURL='https://chakra-ui.com'
      />
      <ProjectData
        projectTitle='Career Changer Portfolio'
        /* @ts-ignore */
        projectImage={projectImageTwo}
        projectImageAlt='Career Changer Portfolio'
        projectDescription='One of the first obstacles an aspiring web developer faces is building a portfolio site, which can distract them from working on their projects. My portfolio website is built using Next JS, Typescript and Chakra UI which come together to make a portfolio highly customisable and easy for someone to clone and use as is or modify for their needs. I have created a template based of my portfolio specificially for a career changer or graduate to get things going'
        tags={['Next JS', 'TypeScript', 'Chakra UI', 'Framer Motion']}
        liveURL='https://chakra-ui.com'
        codeURL='https://chakra-ui.com'
      />
    </SimpleGrid>
  );
}
