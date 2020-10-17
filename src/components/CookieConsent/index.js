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
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default function CookieConsent({
  background,
  translucent,
  children,
  acceptance,
  color
}) {
  const mainClass = classnames({
    'grid grid-cols-12 py-3 fixed bottom-0 w-full': true,
    'bg-black': background === undefined,
    'bg-opacity-75': translucent
  })
  const textClass = classnames({
    'w-11/12 text-xs': true,
    'text-gray-500': color === undefined
  })
  const buttonClass = classnames({
    'text-sm uppercase px-2 py-1 border': true,
    'text-white':
      typeof acceptance !== 'object' || acceptance.color === undefined
  })

  return (
    <div
      className={mainClass}
      style={background && { backgroundColor: background }}
    >
      <div className='col-start-2 col-span-10'>
        <div className='flex justify-between items-center'>
          <p className={textClass} style={color && { color }}>
            {children}
          </p>
          <button
            type='button'
            onClick={
              typeof acceptance === 'object' ? acceptance.accept : () => {}
            }
            className={buttonClass}
            style={
              typeof acceptance === 'object'
                ? acceptance.color && {
                    borderColor: acceptance.color,
                    color: acceptance.color
                  }
                : {}
            }
          >
            {typeof acceptance === 'object' ? acceptance.text : acceptance}
          </button>
        </div>
      </div>
    </div>
  )
}

CookieConsent.defaultProps = {
  background: undefined,
  translucent: false,
  color: undefined
}

CookieConsent.propTypes = {
  background: PropTypes.string,
  translucent: PropTypes.bool,
  acceptance: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      color: PropTypes.string,
      accept: PropTypes.func.isRequired
    })
  ]).isRequired,
  color: PropTypes.string
}
