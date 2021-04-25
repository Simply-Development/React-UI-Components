import React from 'react'
import { SimplyUIProvider, Breadcrumb } from 'simply-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

const App = () => {
  return (
    <SimplyUIProvider>
      <Breadcrumb
        items={[
          'Item',
          {
            label: 'Label',
            description: 'Description',
            href: '/',
            items: []
          }
        ]}
      />
    </SimplyUIProvider>
  )
}

export default App
