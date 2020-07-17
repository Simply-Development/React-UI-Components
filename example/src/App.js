import React from 'react'
import { Header, SimpleUIProvider } from 'simple-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

const App = () => {
  return <SimpleUIProvider>
    <Header
      title="AzaChii"
      position="fixed"
      shadow="onScroll"
    />
    <div style={{height: '100vh'}} />
    <div style={{height: '100vh'}} />
  </SimpleUIProvider>
}

export default App
