import { Flex, Text, Box, Link } from '@chakra-ui/react';
import { MdOutlineMail, MdMobileFriendly } from 'react-icons/md';
import { MailtoProps, ContactProps } from './ContactInterface';
const { motion } = require('framer-motion');

const Mailto = ({ email, subject = '', body = '', children }: MailtoProps) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <Link href={`mailto:${email}${params}`}>{children}</Link>;
};

const ContactInfo = ({ heading, email, subject, body, children, message, tel }: ContactProps) => {
  return (
    <Flex pt='1em' direction='row' alignItems='center' justifyContent='flex-start'>
      <Box borderTop='0.25em solid black'>
        <Box pb='8px'>
          <Text as='h2'>{heading}</Text>
          <Text fontWeight='bold' as='p'>
            {message}
          </Text>
        </Box>
        <Box
          as={motion.div}
          whileHover={{ color: '#FFFAFA', backgroundColor: '#000000' }}
          transition='0.05s linear'
          layerStyle='ButtonContactStyle'
          fontWeight='bold'
          marginBottom='1em'
        >
          <MdOutlineMail />
          <Mailto email={email} subject={subject} body={body} children={children} />
        </Box>
        <Box
          as={motion.div}
          whileHover={{ color: '#FFFAFA', backgroundColor: '#000000' }}
          transition='0.05s linear'
          layerStyle='ButtonContactStyle'
          fontWeight='bold'
        >
          <MdMobileFriendly />
          <Link href={`tel:${tel}`}>{tel}</Link>
        </Box>
      </Box>
    </Flex>
  );
};

const Contact = () => {
  return (
    <ContactInfo
      heading='Contact Info'
      message={`Let's build something today!`}
      email='lodhius@gmail.com'
      subject='Hello'
      body='write email here'
      children='lodhius@gmail.com'
      tel='07455964444'
    />
  );
};

export default Contact;
