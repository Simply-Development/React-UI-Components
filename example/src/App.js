import React from 'react'
import { SimplyUIProvider, Banner } from 'simply-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

const App = () => {
  return (
    <SimplyUIProvider>
      <Banner
        title="Simply Development"
      />
    </SimplyUIProvider>
  )
}

export default App
