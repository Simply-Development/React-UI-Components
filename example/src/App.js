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
        color={{
          title: {
            initial: 'black',
            onScroll: '#e92f2d'
          },
          item: {
            initial: 'red',
            onScroll: '#1F2937'
          }
        }}
        background={{
          initial: 'transparent',
          onScroll: 'white'
        }}
      />
      <div className="h-screen" />
      <div className="h-screen" />
    </SimplyUIProvider>
  )
}

export default App
