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
import { SectionWithItem, SimplyUIProvider } from 'simply-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

const App = () => {
  return <SimplyUIProvider>
    <SectionWithItem
      title={() => <img src={`${process.env.PUBLIC_URL}/oaxacarifa_logo.jpg`} className="h-8 mb-5 mx-auto md:mx-0" alt="Oaxacarifa" />}
      pitch="Marca 100% Oaxaqueña en busca de compartir el espiritu oaxaqueño"
      position={{
        small: 'center',
        big: 'left'
      }}
      color={{
        pitch: 'black',
        description: '',
        accent: '#e92f2d'
      }}
      description="Al adquirir productos Oaxacarifa, apoyas a deportistas y artistas urbanos a que sigan con su increíble trabajo."
      action={{
        label: 'Ir al sitio',
        color: 'white',
        rounded: true,
      }}
      item={{
        type: 'image',
        src: `${process.env.PUBLIC_URL}/oaxacarifa.jpg`,
        alt: 'Oaxacarifa'
      }}
    />
  </SimplyUIProvider>
}

export default App
