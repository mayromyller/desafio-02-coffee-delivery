import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/themes/global'

import { Header } from './components/Header'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { CartContextProvider } from './contexts/CartContext'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Header />
          <Router />
        </CartContextProvider>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
