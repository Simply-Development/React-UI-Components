import React from 'react'
import { SimplyUIProvider, Header } from 'simply-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

const App = () => {
  return (
    <SimplyUIProvider>
      <Header
        title="Simply Development"
        items={[
          {
            label: 'Hombres',
            items: [
              {
                label: 'Ropa',
                items: [
                  {
                    label: 'Playeras y Polos'
                  }
                ]
              }
            ]
          },
          {
            label: 'Mujeres',
            items: [
              {
                label: 'Playeras y Tops'
              }
            ]
          },
          {
            label: 'Otros'
          }
        ]}
      />
    </SimplyUIProvider>
  )
}

export default App
