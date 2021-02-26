import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component key={router.route} {...pageProps} />
    </GeistProvider>
  );
};

export default App;
