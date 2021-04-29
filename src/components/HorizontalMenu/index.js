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

import React, { useEffect, useState } from 'react'
import Item from './Item'
import { getAccordingScrollValue } from '../../lib/scroll'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default function HorizontalMenu({
  items,
  sticky,
  shadow,
  background,
  color,
  accentColor
}) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (sticky) {
      window.addEventListener(
        'scroll',
        () => {
          if (window.scrollY > 20) {
            setScrolled(true)
          } else {
            setScrolled(false)
          }
        },
        { passive: true }
      )
    }

    return () => {
      if (sticky) {
        window.removeEventListener('scroll', null)
      }
    }
  }, [])

  const containerClass = classnames({
    'flex items-center space-x-1 overflow-x-scroll px-12': true,
    'sticky top-0': sticky,
    shadow:
      typeof shadow === 'string'
        ? (shadow === 'onScroll' && scrolled) || shadow === 'always'
        : scrolled
  })

  if (items.length) {
    return (
      <ol
        className={containerClass}
        style={{
          backgroundColor:
            background && getAccordingScrollValue(background, scrolled)
        }}
      >
        {items.map((item, index) => (
          <Item
            key={index}
            {...item}
            last={index === items.length - 1}
            color={color}
            accentColor={accentColor}
            scrolled={scrolled}
          />
        ))}
      </ol>
    )
  }

  return null
}

HorizontalMenu.defaultProps = {
  items: [],
  sticky: false,
  background: undefined,
  color: undefined,
  accentColor: undefined
}

HorizontalMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      href: PropTypes.string,
      as: PropTypes.string
    })
  ),
  sticky: PropTypes.bool,
  shadow: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['onScroll', 'always'])
  ]),
  background: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      initial: PropTypes.string,
      onScroll: PropTypes.string
    })
  ]),
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
  ])
}
