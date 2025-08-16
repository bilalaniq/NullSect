// index.tsx or main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from './contexts/ThemeContext'; // your custom theme context
import App from './App';
import theme from './theme'; // the Chakra theme you created

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
);
