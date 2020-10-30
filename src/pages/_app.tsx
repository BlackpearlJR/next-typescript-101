import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import DefaultTheme from '@/styles/themes/default';
import GlobalStyle from '@/styles/normalize';

import { configureStore } from '@/application/redux/store';

const store = configureStore();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}
