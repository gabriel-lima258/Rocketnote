import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components' // tema compartilhado com toda aplicação
import GlobalStyles from './Styles/global'; // aplicação css global

import theme from './Styles/theme'; // importando o css global

import {Home} from './Pages/Home/index' // importando a pagina details

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
