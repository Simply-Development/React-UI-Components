import React, { useState } from 'react'
import { SimplyUIProvider, Header } from 'simply-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const header = {
    color: {
      title: {
        initial: 'white'
      },
      item: {
        initial: 'white'
      }
    },
    items: [
      {
        label: 'Test'
      }
    ]
  }

  return (
    <SimplyUIProvider>
      <Header
        color={{
          title: {
            initial: header.color?.title?.initial || '#e92f2d',
            onScroll: '#e92f2d'
          },
          item: {
            initial: header.color?.item?.initial || '#1F2937',
            onScroll: '#1F2937'
          }
        }}
        background={{
          initial: 'transparent',
          onScroll: 'white'
        }}
        title="Oaxacarifa"
        position="fixed"
        shadow="onScroll"
        items={header.items}
        sidebarState={isSidebarOpen}
        setSidebarState={setIsSidebarOpen}
        sidebarButton
      />
      <div className="h-screen" />
      <div className="h-screen" />
    </SimplyUIProvider>
  )
}

export default App
