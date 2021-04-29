import React  from 'react'
import { SimplyUIProvider, HorizontalMenu, Header } from 'simply-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

const App = () => {
  return (
    <SimplyUIProvider>
      <Header
        title="Simply Development"
      />
      <HorizontalMenu

      />
    </SimplyUIProvider>
  )
}

export default App
