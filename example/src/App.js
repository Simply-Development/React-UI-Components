/**
 * Copyright 2020 Simply Development
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react'
import { Footer, SimplyUIProvider } from 'simply-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

const App = () => {
  return <SimplyUIProvider>
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
  </SimplyUIProvider>
}

export default App
