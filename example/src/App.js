import React from 'react'
import { Header, SimpleUIProvider } from 'simple-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

const App = () => {
  return <SimpleUIProvider>
    <Header
      title="Domit Express"
      items={[
        {
          label: 'Ingresar',
          button: {
            rounded: true,
          },
        },
        {
          label: 'putas'
        }
      ]}
      position="fixed"
      shadow="onScroll"
      background="white"
      hideItemsOnSmallDevices={false}
    />
    <div style={{height: '100vh'}} />
    <div style={{height: '100vh'}} />
  </SimpleUIProvider>
}

export default App
