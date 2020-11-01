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
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { getAccordingScrollValue } from '../../lib/scroll'

/**
 * Item of the Header, allow to use Link and a simple onClick action
 *
 * @component
 * */
export default function HeaderItem({
  label,
  href,
  onClick,
  scrolled,
  color,
  button,
  hideOnSmallDevice,
  as
}) {
  const itemClass = classNames({
    'text-sm cursor-pointer': true,
    'py-3 md:py-4': !scrolled,
    'py-2 md:py-3': scrolled,
    'text-gray-600': !color,
    'hidden md:block': hideOnSmallDevice
  })
  const buttonClass = classNames({
    'text-sm px-6 py-2': true,
    'rounded-full': typeof button === 'object' && button.rounded,
    'bg-black':
      typeof button === 'object' ? button.background === undefined : true,
    'text-white': typeof button === 'object' ? button.color === undefined : true
  })

  if (href) {
    return (
      <Link
        href={href}
        as={as}
        className={itemClass}
        style={{
          color: !button && getAccordingScrollValue(color, scrolled),
          alignSelf: button && 'center'
        }}
      >
        {button ? (
          <span
            className={buttonClass}
            style={{
              backgroundColor:
                typeof button === 'object' &&
                getAccordingScrollValue(button.background, scrolled),
              color:
                typeof button === 'object' &&
                getAccordingScrollValue(button.color, scrolled)
            }}
          >
            {label}
          </span>
        ) : (
          label
        )}
      </Link>
    )
  }

  return (
    <p
      onClick={onClick}
      className={itemClass}
      style={{
        color: !button && getAccordingScrollValue(color, scrolled),
        alignSelf: button && 'center'
      }}
    >
      {button ? (
        <span
          className={buttonClass}
          style={{
            backgroundColor:
              typeof button === 'object' &&
              getAccordingScrollValue(button.background, scrolled),
            color:
              typeof button === 'object' &&
              getAccordingScrollValue(button.color, scrolled)
          }}
        >
          {label}
        </span>
      ) : (
        label
      )}
    </p>
  )
}

HeaderItem.propTypes = {
  href: undefined,
  onClick: () => {},
  scrolled: false,
  color: undefined,
  button: false
}

HeaderItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  as: PropTypes.string,
  onClick: PropTypes.func,
  scrolled: PropTypes.bool,
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      initial: PropTypes.string,
      onScroll: PropTypes.string
    }),
    PropTypes.shape({
      title: PropTypes.shape({
        initial: PropTypes.string,
        onScroll: PropTypes.string
      }),
      item: PropTypes.shape({
        initial: PropTypes.string,
        onScroll: PropTypes.string
      })
    })
  ]),
  button: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      rounded: PropTypes.bool,
      background: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          initial: PropTypes.string,
          onScroll: PropTypes.string
        })
      ])
    })
  ])
}
