import React from 'react'
import { SimplyUIProvider, Header } from 'simply-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

const App = () => {
  return (
    <SimplyUIProvider>
      <Header
        title="Simply Development"
      />
    </SimplyUIProvider>
  )
}

export default App
