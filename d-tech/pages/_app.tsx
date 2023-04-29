import type { AppProps } from 'next/app';

import { Box, ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box bg="tomato" w="100%" p={10}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
