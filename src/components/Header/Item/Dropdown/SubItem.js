/*
 * Copyright 2021 Simply Development
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React from 'react'
import Link from '../../../Link'
import classnames from 'classnames'
import { getAccordingScrollValue } from '../../../../lib/scroll'

export default function SubItemDropdownItemHeader({
  href,
  as,
  onClick,
  label,
  color,
  scrolled
}) {
  const subItemClass = classnames({
    'text-base font-normal': true,
    'text-gray-800': !color,
    'mb-1 px-3': !href
  })

  return (
    <li
      style={{
        color: getAccordingScrollValue(color, scrolled)
      }}
      className={subItemClass}
      onClick={onClick}
    >
      {href ? (
        <Link href={href} as={as} className='px-3 mb-1 block'>
          {label}
        </Link>
      ) : (
        label
      )}
    </li>
  )
}
