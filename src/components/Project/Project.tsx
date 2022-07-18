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

import projectImageOne from '../../../public/assets/ProjectImage.jpg';

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
        projectTitle='Project Title'
        /* @ts-ignore */
        projectImage={projectImageOne}
        projectImageAlt='Project Image Alt Title'
        projectDescription='Write Project Description Here'
        tags={['Gatsby', 'Chakra UI', 'Framer Motion', 'CMS']}
        liveURL='https://chakra-ui.com'
        codeURL='https://chakra-ui.com'
      />
    </SimpleGrid>
  );
}
