# simple-react-ui-components

> A Simple and Minimalist React Components Library

[![NPM](https://img.shields.io/npm/v/simple-react-ui-components.svg)](https://www.npmjs.com/package/simple-react-ui-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

This library needs the tailwindcss stylesheet to work

```bash
npm install --save simple-react-ui-components tailwindcss
```

## Usage

We need to wrap our App into SimpleUIProvider to config some thinigs as the Link component that we're going to use to move around our application.

```js
import { SimpleUIProvider } from 'simple-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

export default function App() {
  return (
    <SimpleUIProvider>
      <MyApp />
    </SimpleUIProvider>
  )
}
```

## License

MIT © [schorts99](https://github.com/Schorts99)
