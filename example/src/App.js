import React from 'react'
import { SimplyUIProvider, Header } from 'simply-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

const App = () => {
  return (
    <SimplyUIProvider>
      <Header
        title="Simply Development"
        sidebarButton
        position="fixed"
      />
      <div className="h-screen" />
      <div className="h-screen" />
    </SimplyUIProvider>
  )
}

export default App
