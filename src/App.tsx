import React, {useContext, useState} from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Switch from 'react-switch';
import { shade } from 'polished'
import { ThemeContext, ThemeProvider } from 'styled-components'
import { dark, light } from './theme';
import {SW} from './styles/components/switch'

function App() {
  // const [theme, setTheme] = useState(light)

  // function toggleTheme() {
  //   setTheme(theme.title === 'light' ? dark : light )
  // };

  return (
    <ThemeProvider theme={dark}>
      <Routes />
      <GlobalStyle />
      {/* <SW 
        onChange={toggleTheme}
        checked={theme.title === 'dark' ? true : false}
        checkedIcon={false}
        uncheckedIcon={false}
        offColor={shade(0.15, theme.colors.primary)}
        onColor={theme.colors.secundary}
        style={{position: 'absolute', right: 10, top: 10}}
      /> */}
    </ThemeProvider>
  );
}

export default App;
