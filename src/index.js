import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
