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

import SimplyUIContext, { SimplyUIProvider } from './contexts/SimplyUIContext'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Button from './components/Button'
import CookieConsent from './components/CookieConsent'
import SectionWithItem from './components/SectionWithItem'
import Sidebar from './components/Sidebar'
import Input from './components/Input'
import InputSelect from './components/Input/Select'
import InputSwitch from './components/Input/Switch'

export default SimplyUIContext
export {
  SimplyUIProvider,
  Header,
  Banner,
  Footer,
  Button,
  CookieConsent,
  SectionWithItem,
  Sidebar,
  Input,
  InputSelect,
  InputSwitch
}
