import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: {
      main: '#5964E0',
      light: '#939BF4',
      dark: '#19202D',
      black: '#121721',
    },
    secondary: {
      main: '#FFFFFF',
      light: '#F4F6F8',
      dark: '#9DAEC2',
      gray: '#6E8098',
    },
    typography: {
      headings: {
        h1: '28px',
        h2: '24px',
        h3: '20px',
        h4: '14px',
      },
      text: {
        body: '16px',
      },
    },
  },
};

// eslint-disable-next-line react/prop-types
export default function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
}
