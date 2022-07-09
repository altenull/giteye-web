import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <SWRConfig
          value={{
            refreshInterval: 0,
            fetcher: (url: string) => fetch(url).then((res) => res.json()),
          }}
        >
          <Head>
            <link
              rel="stylesheet"
              as="style"
              href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/static/pretendard-dynamic-subset.css"
            />
          </Head>
          <Component {...pageProps} />
        </SWRConfig>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
