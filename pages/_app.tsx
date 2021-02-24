import { Provider as BumbagProvider } from 'bumbag';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <BumbagProvider isSSR>
      <Component key={router.route} {...pageProps} />
    </BumbagProvider>
  );
};

export default App;
