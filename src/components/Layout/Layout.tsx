import { ReactNode } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Flex h='100vh' direction='column'>
      <Header />
      <Box as='main' flex='1'>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};
export default Layout;
