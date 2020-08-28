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
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default function Button({
  children,
  onClick,
  href,
  background,
  color,
  rounded,
  className
}) {
  const mainContainerClass = classnames({
    'px-5 py-3 font-bold uppercase w-full md:w-auto': true,
    rounded: typeof rounded === 'boolean' && rounded,
    'rounded-full': rounded === 'full',
    [className]: className
  })

  if (href) {
    return (
      <Link
        href={href}
        className={mainContainerClass}
        style={{
          backgroundColor: background,
          color
        }}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      type='button'
      className={mainContainerClass}
      style={{
        backgroundColor: background,
        color
      }}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  rounded: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['full'])]),
  className: PropTypes.string
}

Button.defaultProps = {
  className: undefined
}
