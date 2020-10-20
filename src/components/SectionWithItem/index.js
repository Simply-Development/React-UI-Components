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

import React, { Fragment } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Button from '../Button'

/**
 * Display something important alongisde an item
 *
 * @component
 */
export default function SectionWithItem({
  position,
  title,
  pitch,
  description,
  color,
  action,
  item
}) {
  const contentClass = classnames({
    'py-10 md:py-0': true,
    'col-start-2 col-span-7': position === 'left' || position.small === 'left',
    'md:col-start-2 md:col-span-5 md:order-none':
      position === 'left' || position.big === 'left',
    'col-end-12 col-span-7 order-1':
      position === 'right' || position.small === 'right',
    'md:col-end-12 md:col-span-6 lg:col-end-12 lg:col-span-5 md:order-1':
      position === 'right' || position.big === 'right',
    'col-start-2 col-span-10':
      position === 'center' || position.small === 'center',
    'md:col-start-4 md:col-span-6 lg:col-start-5 lg:col-span-4':
      position === 'center' || position.big === 'center'
  })
  const titleClass = classnames({
    'text-xl font-bold mb-5': true,
    'md:text-left': position.big === 'left' || position.big === undefined,
    'text-right': position === 'right' || position.small === 'right',
    'md:text-right': position === 'right' || position.big === 'right',
    'text-center': position === 'center' || position.small === 'center',
    'md:text-center': position === 'center' || position.big === 'center'
  })
  const pitchClass = classnames({
    'text-2xl font-bold': true,
    'md:text-left': position.big === 'left' || position.big === undefined,
    'text-right': position === 'right' || position.small === 'right',
    'md:text-right': position === 'right' || position.big === 'right',
    'text-center': position === 'center' || position.small === 'center',
    'md:text-center': position === 'center' || position.big === 'center'
  })
  const justifyContainerClass = classnames({
    flex: true,
    'justify-end': position === 'right' || position.small === 'right',
    'md:justify-end': position === 'right' || position.big === 'right',
    'justify-center': position === 'center' || position.small === 'center',
    'md:justify-center': position === 'center' || position.big === 'center',
    'md:justify-start': position.big === 'left' || position.big === undefined
  })
  const justifyTextClass = classnames({
    'text-right': position === 'right' || position.small === 'right',
    'md:text-right': position === 'right' || position.big === 'right',
    'text-center': position === 'center' || position.small === 'center',
    'md:text-center': position === 'center' || position.big === 'center',
    'md:text-left': position.big === 'left' || position.big === undefined
  })
  const buttonClass = classnames({
    'mt-6': true,
    'text-center': position.small === 'center' || position === 'center',
    'md:text-center': position.big === 'center' || position === 'center',
    'text-right': position.small === 'right' || position === 'right',
    'md:text-right': position.big === 'right' || position === 'right'
  })
  const imageClass = classnames({
    'col-span-12 w-full mb-10 md:mb-0': true,
    'md:col-span-6':
      ['left', 'right'].includes(position) ||
      ['left', 'right'].includes(position.big)
  })

  return (
    <div className='grid grid-cols-12 md:h-screen items-center md:gap-10'>
      <div className={contentClass}>
        {title &&
          (typeof title === 'function' ? (
            title()
          ) : (
            <h2
              className={titleClass}
              style={
                color && {
                  color:
                    typeof color === 'object'
                      ? color.accent || color.normal
                      : color
                }
              }
            >
              {title}
            </h2>
          ))}
        <p
          className={pitchClass}
          style={
            color && {
              color:
                typeof color === 'object' ? color.pitch || color.normal : color
            }
          }
        >
          {pitch}
        </p>
        {description && (
          <Fragment>
            <div className={justifyContainerClass}>
              <div
                className='h-2 w-10 my-4 rounded-full'
                style={{
                  backgroundColor:
                    typeof color === 'object'
                      ? color.accent || color.pitch || color.normal
                      : color
                }}
              />
            </div>
            <p
              className={justifyTextClass}
              style={{
                color: typeof color === 'object' ? color.normal : color
              }}
            >
              {description}
            </p>
          </Fragment>
        )}
        {action &&
          (typeof action === 'function' ? (
            action()
          ) : (
            <div className={justifyContainerClass}>
              <Button
                background={color && (color.accent || color)}
                color={action.color}
                rounded={action.rounded}
                className={buttonClass}
                href={action.href}
                onClick={action.onClick}
              >
                {typeof action.label === 'function'
                  ? action.label()
                  : action.label}
              </Button>
            </div>
          ))}
      </div>
      {item && item.type === 'image' && (
        <img
          src={item.src}
          alt={item.alt}
          className={imageClass}
          draggable='false'
        />
      )}
    </div>
  )
}

SectionWithItem.defaultProps = {
  position: 'left',
  title: undefined,
  description: undefined
}

SectionWithItem.propTypes = {
  position: PropTypes.oneOfType([
    PropTypes.oneOf(['left', 'right']),
    PropTypes.shape({
      small: PropTypes.oneOf(['left', 'right', 'center']),
      big: PropTypes.oneOf(['left', 'right', 'center'])
    })
  ]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  pitch: PropTypes.string.isRequired,
  description: PropTypes.string,
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      normal: PropTypes.string,
      accent: PropTypes.string
    })
  ]),
  action: PropTypes.oneOfType([
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
      href: PropTypes.string,
      onClick: PropTypes.func,
      color: PropTypes.string
    }),
    PropTypes.func
  ]),
  item: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      type: PropTypes.oneOf(['image']),
      src: PropTypes.string,
      alt: PropTypes.string
    })
  ])
}
