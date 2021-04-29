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
import Link from '../Link'
import { getAccordingScrollValue } from '../../lib/scroll'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default function HorizontalMenuItem({
  label,
  last,
  href,
  as,
  onClick,
  color,
  accentColor,
  scrolled
}) {
  const containerClass = classnames({
    'py-2 px-3': true,
    'text-gray-800': !color,
    'pr-12 md:pr-0': last,
    'border-b-4 font-bold': href === window.location.pathname,
    'border-red-500 text-red-500':
      href === window.location.pathname && !accentColor
  })

  return (
    <li
      style={{
        color:
          (color || accentColor) &&
          getAccordingScrollValue(
            href === window.location.pathname ? accentColor : color,
            scrolled
          )
      }}
      onClick={onClick}
      className={!href && containerClass}
    >
      {href ? (
        <Link
          href={href}
          as={as}
          className={containerClass}
          style={{
            borderColor:
              href === window.location.pathname &&
              accentColor &&
              getAccordingScrollValue(accentColor, scrolled)
          }}
        >
          {label}
        </Link>
      ) : (
        label
      )}
    </li>
  )
}

HorizontalMenuItem.defaultProps = {
  last: false,
  onClick: function () {},
  color: undefined,
  accentColor: undefined,
  scrolled: false
}

HorizontalMenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  last: PropTypes.bool,
  onClick: PropTypes.func,
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      initial: PropTypes.string,
      onScroll: PropTypes.string
    })
  ]),
  accentColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      initial: PropTypes.string,
      onScroll: PropTypes.string
    })
  ]),
  scrolled: PropTypes.bool
}
