import React from 'react'
import { Header, SimplyUIProvider } from 'simply-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

const App = () => {
  return <SimplyUIProvider>
    <Header
      title="Domit Express"
      items={[
        {
          label: 'Ingresar',
          button: {
            rounded: true,
            color: {
              initial: 'red',
              onScroll: 'blue'
            }
          },
        }
      ]}
      position="fixed"
      shadow="onScroll"
      background="white"
      hideItemsOnSmallDevices={false}
    />
    <div style={{height: '100vh'}} />
    <div style={{height: '100vh'}} />
  </SimplyUIProvider>
}

export default App
