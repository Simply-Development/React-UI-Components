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

import React, { useState } from 'react'
import { SimplyUIProvider, Header, Sidebar } from 'simply-react-ui-components'
import 'tailwindcss/dist/tailwind.min.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <SimplyUIProvider>
      <Header
        title="Simply Development"
        color="white"
        sidebarButton
        position="fixed"
        setSidebarState={setIsSidebarOpen}
        sidebarState={isSidebarOpen}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        position="fixed"
        background="black"
        color="white"
        items={[
          {
            label: 'Services'
          }
        ]}
      />
    </SimplyUIProvider>
  )
}

export default App
