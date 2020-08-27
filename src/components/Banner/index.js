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
  button
}) {
  const mainContainer = classnames({
    'grid grid-cols-12 h-screen items-center': true,
    'bg-center':
      background.type === 'image' && background.position === undefined,
    'bg-no-repeat':
      background.type === 'image' && background.repeat === undefined,
    'bg-cover': background.type === 'image' && background.size === undefined
  })
  const contentClass = classnames({
    'col-start-2 col-span-7':
      contentPosition === 'left' || contentPosition.small === 'left',
    'md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-5':
      contentPosition === 'left' || contentPosition.big === 'left',
    'col-end-12 col-span-7':
      contentPosition === 'right' || contentPosition.small === 'right',
    'md:col-end-12 md:col-span-6 lg:col-end-12 lg:col-span-5':
      contentPosition === 'right' || contentPosition.big === 'right',
    'col-span-8 col-start-3':
      contentPosition === 'center' || contentPosition.small === 'center',
    'md:col-span-6 md:col-start-4 lg:col-start-5 lg:col-span-4':
      contentPosition === 'center' || contentPosition.big === 'center'
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
            color: typeof color === 'object' ? color.title : color,
            textAlign: contentPosition
          }}
          className='text-3xl font-bold'
        >
          {title}
        </h1>
        {message && (
          <Fragment>
            <div
              className='h-2 w-10 my-4 rounded-full'
              style={{
                backgroundColor:
                  typeof color === 'object' ? color.accent : color
              }}
            />
            <p
              style={{
                color: typeof color === 'object' ? color.message : color,
                textAlign: contentPosition
              }}
            >
              {message}
            </p>
          </Fragment>
        )}
        {button && (
          <Button
            background={color.accent}
            color={button.color}
            rounded={button.rounded}
            className='mt-8'
          >
            {button.text}
          </Button>
        )}
      </div>
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
    text: PropTypes.string.isRequired
  })
}

Banner.defaultProps = {
  contentPosition: 'left',
  background: undefined,
  message: undefined,
  button: undefined
}
