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
 * This component is perfect to start your page and show
 * what you have.
 */
export default function Banner({
  background,
  title,
  contentPosition,
  color,
  message,
  button,
  item
}) {
  const mainContainer = classnames({
    'grid grid-cols-12 md:h-screen items-center md:gap-10': true,
    'bg-center':
      background &&
      background.type === 'image' &&
      background.position === undefined,
    'bg-no-repeat':
      background &&
      background.type === 'image' &&
      background.repeat === undefined,
    'bg-cover':
      background && background.type === 'image' && background.size === undefined
  })
  const contentClass = classnames({
    'col-start-2 col-span-7 py-10 md:py-0':
      contentPosition === 'left' || contentPosition.small === 'left',
    'md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-5':
      contentPosition === 'left' ||
      contentPosition.big === 'left' ||
      contentPosition.big === undefined,
    'col-end-12 col-span-7':
      contentPosition === 'right' || contentPosition.small === 'right',
    'md:col-end-12 md:col-span-6 lg:col-end-12 lg:col-span-5 md:order-2':
      contentPosition === 'right' || contentPosition.big === 'right',
    'col-span-10 col-start-2':
      contentPosition === 'center' || contentPosition.small === 'center',
    'md:col-span-6 md:col-start-4 lg:col-start-5 lg:col-span-4':
      contentPosition === 'center' || contentPosition.big === 'center'
  })
  const imageClass = classnames({
    'col-span-12 w-full mb-10 md:mb-0': true,
    'md:col-span-5 lg:col-span-6':
      ['left', 'right'].includes(contentPosition) ||
      ['left', 'right'].includes(contentPosition.big) ||
      contentPosition.big === undefined
  })
  const justifyContainerClass = classnames({
    flex: true,
    'justify-end':
      contentPosition === 'right' || contentPosition.small === 'right',
    'md:justify-end':
      contentPosition === 'right' || contentPosition.big === 'right',
    'justify-center':
      contentPosition === 'center' || contentPosition.small === 'center',
    'md:justify-center':
      contentPosition === 'center' || contentPosition.big === 'center',
    'md:justify-start':
      contentPosition.big === 'left' || contentPosition.big === undefined
  })
  const justifyTextClass = classnames({
    'text-right':
      contentPosition === 'right' || contentPosition.small === 'right',
    'md:text-right':
      contentPosition === 'right' || contentPosition.big === 'right',
    'text-center':
      contentPosition === 'center' || contentPosition.small === 'center',
    'md:text-center':
      contentPosition === 'center' || contentPosition.big === 'center',
    'md:text-left':
      contentPosition.big === 'left' || contentPosition.big === undefined
  })
  const titleClass = classnames({
    [justifyTextClass]: true,
    'text-3xl font-bold': true
  })
  const buttonClass = classnames({
    'mt-8': true,
    'text-center':
      contentPosition.small === 'center' || contentPosition === 'center',
    'md:text-center':
      contentPosition.big === 'center' || contentPosition === 'center',
    'text-right':
      contentPosition.small === 'right' || contentPosition === 'right',
    'md:text-right':
      contentPosition.big === 'right' || contentPosition === 'right'
  })

  return (
    <div
      className={mainContainer}
      style={
        typeof background === 'object'
          ? background.type === 'linear-gradient'
            ? {
                background: Array.isArray(background.value)
                  ? background.value
                      .map((value) => `linear-gradient(${value})`)
                      .join(',')
                  : `linear-gradient(${background.value})`
              }
            : background.type === 'image'
            ? {
                backgroundImage: `url(${background.value})`,
                backgroundPosition: background.position,
                backgroundAttachment: background.attachment,
                backgroundColor: background.color,
                backgroundRepeat: background.repeat,
                backgroundSize: background.size
              }
            : {}
          : {
              backgroundColor: background
            }
      }
    >
      <div className={contentClass}>
        <h1
          style={{
            color: typeof color === 'object' ? color.title : color
          }}
          className={titleClass}
        >
          {title}
        </h1>
        {message && (
          <Fragment>
            <div className={justifyContainerClass}>
              <div
                className='h-2 w-10 my-4 rounded-full'
                style={{
                  backgroundColor:
                    typeof color === 'object' ? color.accent : color
                }}
              />
            </div>
            <p
              className={justifyTextClass}
              style={{
                color: typeof color === 'object' ? color.message : color
              }}
            >
              {message}
            </p>
          </Fragment>
        )}
        {button && (
          <div className={justifyContainerClass}>
            <Button
              background={color && (color.accent || color)}
              color={button.color}
              rounded={button.rounded}
              className={buttonClass}
              href={button.href}
              onClick={button.onClick}
            >
              {button.text}
            </Button>
          </div>
        )}
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

Banner.propTypes = {
  background: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      type: PropTypes.oneOf(['image', 'linear-gradient']).isRequired,
      value: PropTypes.string.isRequired,
      position: PropTypes.string,
      attachment: PropTypes.string,
      color: PropTypes.string,
      repeat: PropTypes.string,
      size: PropTypes.string
    })
  ]),
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      title: PropTypes.string,
      message: PropTypes.string,
      accent: PropTypes.string
    })
  ]),
  contentPosition: PropTypes.oneOfType([
    PropTypes.oneOf(['left', 'right', 'center']),
    PropTypes.shape({
      small: PropTypes.oneOf(['left', 'right', 'center']),
      medium: PropTypes.oneOf(['left', 'right', 'center'])
    })
  ]),
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    rounded: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['full'])]),
    color: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func
  }),
  item: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    type: 'image'
  })
}

Banner.defaultProps = {
  contentPosition: 'left',
  background: undefined,
  message: undefined,
  button: undefined,
  item: undefined
}
