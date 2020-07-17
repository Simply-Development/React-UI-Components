import React from 'react'
import { Header, SimpleUIProvider } from 'simple-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

const App = () => {
  return <SimpleUIProvider>
    <Header
      title="AzaChii"
      position="fixed"
      shadow="onScroll"
      items={[
        {
          label: 'Verificador de placas',
          href: '/plate-checker'
        },
        {
          label: 'Noticias'
        },
        {
          label: 'BLog'
        },
        {
          label: 'Ingresar',
          button: {
            background: 'blue'
          }
        }
      ]}
    />
    <div style={{height: '100vh'}} />
    <div style={{height: '100vh'}} />
  </SimpleUIProvider>
}

export default App
