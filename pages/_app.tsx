import { ChakraProvider, theme } from '@chakra-ui/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component key={router.route} {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
