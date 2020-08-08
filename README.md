# simple-react-ui-components

> A Simple and Minimalist React Components Library

[![NPM](https://img.shields.io/npm/v/simply-react-ui-components.svg)](https://www.npmjs.com/package/simple-react-ui-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

This library needs the tailwindcss stylesheet to work

```bash
npm install --save simply-react-ui-components tailwindcss
```

## Usage

We need to wrap our App into SimplyUIProvider to config some thinigs as the Link component that we're going to use to move around our application.

```js
import { SimplyUIProvider } from 'simply-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';
import Link from 'next/Link';

export default function App() {
  return (
    <SimplyUIProvider Link={Link} library="nextjs">
      <MyApp />
    </SimplyUIProvider>
  )
}
```

## Components

I'm starting this development as a hobby so feel free to make changes and I'll review them to merge with the main project.

### Header

The Header component has a couple but useful personalizations, like keep header items on small devices, add a shadow when exists scroll, change the background when there's no scroll and when there's is.

```js
import { Header } from 'simply-react-ui-components'

export default function Layout() {
  return (
    <>
      <Header
        title="Simply"
        position="fixed"
        shadow="onScroll"
        items={[
          {
            label: "Blog",
            button: {
              rounded: true
            }
          }
        ]}
      />
    </>
  )
}
```

## License

MIT © [schorts99](https://github.com/Schorts99)
