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
import { Banner, SimplyUIProvider } from 'simply-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

const App = () => {
  return <SimplyUIProvider>
    <Banner
      background="black"
      title="Title"
      contentPosition={{
        small: 'center',
        big: 'left',
      }}
      color={{
        title: 'white',
        accent: '#e53e3e',
        message: '#f7fafc',
      }}
      message="Cool message"
      button={{
        text: 'Action',
        color: 'white',
        rounded: true,
        href: '/'
      }}
    />
  </SimplyUIProvider>
}

export default App
