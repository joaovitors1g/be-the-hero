import React from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import Routes from './routes';
import GlobalStyle from './global';

import ThemeChangerContext from './context/ThemeChangerContext';
import usePersistedState from './utils/usePersistedState';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <ThemeChangerContext.Provider value={toggleTheme}>
      <ThemeProvider theme={theme}>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Be The Hero</title>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap'
          />
        </Helmet>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </ThemeChangerContext.Provider>
  );
}

export default App;
