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
                title: 'Ropa',
                href: 'https://facebook.com',
                items: [
                  {
                    label: 'Playeras y Polos'
                  },
                  {
                    label: 'Playeras y Tops',
                    href: 'https://facebook.com',
                  }
                ]
              },
              {
                title: 'Ropa',
                href: 'https://facebook.com',
                items: [
                  {
                    label: 'Playeras y Polos'
                  },
                  {
                    label: 'Playeras y Tops',
                    href: 'https://facebook.com',
                  }
                ]
              }
            ]
          },
          {
            label: 'Mujeres',
            items: [
              {
                label: 'Playeras y Tops',
                href: 'https://facebook.com',
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
