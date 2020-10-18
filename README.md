# simply-react-ui-components

> A Simple and Minimalist React Components Library

[![NPM](https://img.shields.io/npm/v/simply-react-ui-components.svg)](https://www.npmjs.com/package/simply-react-ui-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

This library needs the tailwindcss stylesheet to work

```bash
npm install --save simply-react-ui-components tailwindcss
```

## Usage

We need to wrap our App into SimplyUIProvider to config some thinigs as the Link component that we're going to use to move around our application.

## Provider

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

### Properties

| name | Type | Description |
| - | - | - |
| Link | String, node or function | Set the Link element that is going to be used to move in the application. Default: 'a' |
| library | String | If your going to use an extra library like NextJS, this is were you need to specify it. Default: undefined

## Components

I'm starting this development as a hobby so feel free to make changes and I'll review them to merge with the main project.

### Button

The Button component has just necessary to look good and work good taking the role of a simply button or a Link, if you use an internal Link the it's going to use Link component provided at SimplyUIProvider, otherwhise it's going to use an a tag.

```js
import { Button } from 'simply-react-ui-components'

export default function Layout() {
  return (
    <>
      <Button
        background="e53e3e"
        color="white"
        href="/contact"
      >
        Let's start
      </Button>
    </>
  )
}
```

#### Properties

| Name | Type | Description |
| - | - | - |
| children | ReactNode | Content from the button, you can pass just a string or a whole component if you want something like an icon with the text or something like that. |
| onClick | function | The function to trigger when button it's clicked. Default: () => {}. |
| href | String | The path which you're going to be moved when button it's clicked if you want to. Default: undefined |
| background | String | Color background of the button. Default: undefined |
| color | String | Color of the text of the button in case that you pass only a String as children. Default: undefined |
| rounded | Boolean or String | This is to add rounded courners to Button. Default: undefined |
| className | String | If you want to add a class to add margin or something. Default: undefined |

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

#### Properties

| Name | Type | Description |
| - | - | - |
| position | String | Define the Header position. Default: 'relative' |
| title | String or function | Define the Header title, usually is the platfform name, allow you to pass a function to fully personalize this part. Default: '' |
| shadow | Boolean, Object or String | This enable a small elevation, can be shown when there's scroll or always, also let you set a custom shadow to match your background. Default: false |
| background | String or object | Set the Header background, allow to set a static solid background, a translucent background or even a background who changes depending on scroll. Default: undefined |
| color | String or object | Set the color from label items, allow you to set a static value, a value from labels and title or event an initial color and a scroll color for both, title and labels. Default: undefined |
| items | Array | Here you can set the header item labels like a blog label or a sign in button. The array must receive objects with a label item, allow you to set an href or onClick action also accepts the button item to make item look like a button. Default: [] |
| sidebarButton | Boolean, function or String | Choose if you want to display a sidebar button always, only in small devices or big devices, also allow you to pass a function to fully customize the sidebar button, when you use a function, the function receive this values to let you interact with header internal state: isSidebarOpen, setIsSidebarOpen, scrolled. Default: false |
| hideItemsOnSmallDevices | Boolean | This let the header items intact even in small devices, in false then the items will hide on small devices. Default: true |
| withCart | Object, Boolean or String | Show a cart icon if true, show a cart icon with link if value is a String. Also have the possibility to show it only on specific screen size. Default: false |
| cartCount | Number | This allow you to display a count of the items in the cart. Default: undefined |
| sidebarState | Boolean | Sync internal state with external. Default: undefined |

### Footer

The Footer componnent has the necessary to make your site comfortable to your users.

```js
import { Footer } from 'simply-react-ui-components'

export default function Layout() {
  return (
    <>
      <Footer
        brand={{
          short: 'Simply Development',
          long: 'Simply Development',
          withCopyright: true,
          withYear: true
        }}
        background="black"
        color={{
          title: 'white',
          item: 'white'
        }}
        social={{
          facebook: 'https://www.facebook.com/simplydevelopmnt',
          instagram: 'https://www.instagram.com/simplydevelopmnt/',
          twitter: 'https://twitter.com/SimplyDvelopmnt',
          linkedin: 'https://www.linkedin.com/company/simply-development',
          github: 'https://github.com/Simply-Development'
        }}
        items={[
          {
            label: 'Privacy',
            href: '/privacy'
          },
          {
            label: 'Terms of use',
            href: '/terms-of-use'
          }
        ]}
      />
    </>
  )
}
```

#### Properties

| Name | Type | Description |
| - | - | - |
| brand | String, function or object | You can pass a simple String, or be more explicit passing and object with copyright and year to look more profesional, you can also can have total control passing a custom component as a function |
| background | String | Here you can set the footer background. Default: undefined |
| color | String or object | Set the color of the footer elements, you can als set a color for brand and for other elements. Default: undefined |
| items | Array | Set the footer elements, like privacy page, terms and conditions and stuffs like that. Default: [] |
| social | object | Set your social networks. Default: undefined |

### Banner

The Banner component it's useful to start a page, write your pitch and show your brand to your users.

```js
import { Banner } from 'simply-react-ui-components'

export default function Layout() {
  return (
    <>
      <Banner
        background="black"
        title="Lo que necesitas, cuando lo necesitas"
        color="white"
        message="Encargate de lo que amas, nosotros nos encargamos del desarrollo y la estrategía para ayudarte a crecer"
        button={{
          text: 'Comencemos',
          rounded: true
        }}
      />
    </>
  )
}
```

#### Properties

| Name | Type | Description |
| - | - | - |
| background | String or object | Set the background of the banner with a solid color, a linear gradient or an image. Default: undefined |
| contentPosition | String or object | Set the position of the main content, also let you set a position for small devices and for big ones. Default: 'left' |
| title | String | Title of the banner, this is were you begin your pitch. |
| message | String | Here you can complete your pitch. Default: undefined |
| button | String or object | Call to action, use this to move your users to another page or execute some action. default: undefined |
| image | String, object or function | Complete your banner putting some image of your products or pass a custom component to fully customize it. Default: undefined |

### CookieConsent

This component let you show a simple cookie consent for your users to accept it.

```js
import { CookieConsent } from 'simply-react-ui-components'

export default function Layout() {
  return (
    <>
      <CookieConsent
        translucent
        acceptance="Accept"
        accent={() => {}}
      >
        <>
          We use cookies and other technologies to collect data about your browser, device and location. For more information see our Privacy Policy.
        </>
      </CookieConsent>
    </>
  )
}
```

#### Properties

| Name | Type | Description |
| - | - | - |
| background | String | Background of the container. Default: undefined |
| translucent | Boolean | If you want the container to be a little bit translucent. Default: false |
| children | ReactNode | The content to display as message, it's a React node instead of a simple String cause of this way you can set by example an a tag inside to move your users to your privacy policy. |
| color | String | Color of the the acceptance message. Default: undefined |
| acceptance | String or Object | This it's the button in the right side, pass a string or an object with text, color an action to trigger when it's clicked. |

## License

MIT © [Simply Development](https://github.com/Simply-Development)
