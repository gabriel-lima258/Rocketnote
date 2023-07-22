import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components' // tema compartilhado com toda aplicação
import GlobalStyles from './Styles/global'; // aplicação css global

import theme from './Styles/theme'; // importando o css global

import {Routes} from './routes' // importando as paginas dentro do routes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
