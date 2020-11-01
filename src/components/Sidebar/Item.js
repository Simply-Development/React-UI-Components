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
import Link from '../Link'

/**
 * Basic item of the Sidebar
 *
 * @component
 */
export default function SidebarItem({
  href,
  as,
  onClick,
  label,
  closeSidebar,
  color
}) {
  if (href) {
    return (
      <Link
        href={href}
        as={as}
        onClick={() => {
          onClick()
          closeSidebar()
        }}
        style={color ? { color } : {}}
        className='grid grid-cols-12 py-2'
      >
        <p className='col-start-2 col-span-10 text-lg'>{label}</p>
      </Link>
    )
  }

  return (
    <div
      className='grid grid-cols-12 py-2'
      style={color ? { color } : {}}
      onClick={() => {
        onClick()
        closeSidebar()
      }}
    >
      <p className='col-start-2 col-span-10 text-lg'>{label}</p>
    </div>
  )
}
