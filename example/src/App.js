import React from 'react'
import { SimplyUIProvider, Header } from 'simply-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

const App = () => {
  return (
    <SimplyUIProvider>
      <Header
        title="Oaxacarifa"
        sidebarButton
        position="fixed"
        items={[
          {
            label: 'Test'
          },
          {
            label: 'Test'
          }
        ]}
      />
      <div className="h-screen" />
      <div className="h-screen" />
    </SimplyUIProvider>
  )
}

export default App
