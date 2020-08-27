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
      title="Lo que necesitas, cuando lo necesitas"
      color={{
        title: 'white',
        message: 'white',
        accent: 'red'
      }}
      contentPosition={{
        small: 'center',
        big: 'left'
      }}
      message="Encargate de lo que amas, nosotros nos encargamos del desarrollo y la estrategía para ayudarte a crecer"
      button={{
        text: 'Comencemos',
        color: 'white',
        rounded: true
      }}
    />
  </SimplyUIProvider>
}

export default App
