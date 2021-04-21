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

import React, { Fragment } from 'react'
import classnames from 'classnames'
import Item from './Item'
import PropTypes from 'prop-types'
import { getAccordingScrollValue } from '../../../../lib/scroll'

/**
 * Dropdown items inside Header Item
 *
 * Display the items inside a Header Item into a Dropdown
 *
 * @component
 */
export default function DropdownItemHeader({
  items,
  background,
  scrolled,
  color
}) {
  const listClass = classnames({
    'rounded shadow': true,
    'bg-white': !background
  })

  if (items && items.length > 0) {
    return (
      <Fragment>
        <ol
          style={
            background && {
              backgroundColor:
                background && getAccordingScrollValue(background, scrolled)
            }
          }
          className={listClass}
        >
          {items.map((item, index) => (
            <Item key={index} {...item} color={color} scrolled={scrolled} />
          ))}
        </ol>
        <style jsx>{`
          .dropdown ol {
            display: none;
            position: absolute;
          }
          .dropdown:hover ol {
            display: block;
          }
        `}</style>
      </Fragment>
    )
  }

  return null
}

DropdownItemHeader.defaultProps = {
  items: undefined,
  background: undefined,
  scrolled: false
}

DropdownItemHeader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string,
        as: PropTypes.string,
        onClick: PropTypes.func,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string,
            as: PropTypes.string,
            onClick: PropTypes.func
          })
        )
      }),
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string,
        as: PropTypes.string,
        onClick: PropTypes.func
      })
    ])
  ),
  background: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      initial: PropTypes.string,
      onScroll: PropTypes.string
    })
  ]),
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
  ])
}
