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

export default function App() {
  return (
    <SimplyUIProvider>
      <MyApp />
    </SimplyUIProvider>
  )
}
```

## License

MIT © [schorts99](https://github.com/Schorts99)
