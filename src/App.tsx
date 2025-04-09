import React from 'react'
import { Header } from './components/Header'
import GlobalStyle from './styles/globalStyles'; 

const App: React.FC = () => {
  return (
    <>
    <GlobalStyle />
      <Header />
    </>
  )
}

export default App
