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
import classnames from 'classnames'
import Link from '../Link'
import { FiChevronRight } from 'react-icons/fi'
import PropTypes from 'prop-types'

export default function Breadcrumb({ color, items }) {
  const containerClass = classnames({
    'flex items-center space-x-1 text-sm': true,
    'text-gray-800': !color
  })

  if (items.length < 1) {
    return null
  }

  return (
    <ul style={color && { color }} className={containerClass}>
      {items.map((item, index) => (
        <li key={index} className='space-x-1 flex items-center'>
          {index > 0 && <FiChevronRight color={color} />}
          {typeof item === 'object' && item.href ? (
            <Link href={item.href} as={item.as}>
              {item.label}
            </Link>
          ) : (
            <span>{item}</span>
          )}
        </li>
      ))}
    </ul>
  )
}

Breadcrumb.defaultProps = {
  color: undefined,
  items: []
}

Breadcrumb.propTypess = {
  color: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string,
        as: PropTypes.string
      })
    ])
  )
}
