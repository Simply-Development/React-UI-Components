/**
 * Copyright 2021 Simply Development
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

export default function SwitchInput({
  label,
  required,
  color,
  onChange,
  checked
}) {
  const labelClass = classnames({
    'text-sm w-full flex items-center justify-between': true,
    'text-gray-600': !color.label
  })
  const dotContainerClass = classnames({
    'w-10 h-4 rounded-full shadow-inner': true,
    'bg-gray-400': !color.input?.background
  })
  const dotClass = classnames({
    'simply_input_switch_dot absolute w-6 h-6 rounded-full shadow inset-y-0 left-0': true,
    'bg-white': !color.input?.dot?.off
  })

  return (
    <label className={labelClass} style={color.label && { color: color.label }}>
      {label && `${required ? '*' : ''}${label}`}
      <div className='relative'>
        <input
          type='checkbox'
          className='hidden'
          checked={checked}
          onChange={onChange}
        />
        <div
          className={dotContainerClass}
          style={
            color.input?.background && {
              backgroundColor: checked
                ? color.input.background.on
                : color.input.background.off
            }
          }
        />
        <div
          style={
            color.input?.dot?.off && { backgroundColor: color.input.dot.off }
          }
          className={dotClass}
        />
      </div>
      <style jsx>{`
        .simply_input_switch_dot {
          top: -0.25rem;
          left: -0.25rem;
          transition: all 0.3s ease-in-out;
        }

        input:checked ~ .simply_input_switch_dot {
          transform: translateX(100%);
          background-color: ${color.input?.dot?.on ||
          'rgb(220, 38, 38)'} !important;
        }
      `}</style>
    </label>
  )
}

SwitchInput.defaultProps = {
  required: false,
  label: null,
  color: {}
}

SwitchInput.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  color: PropTypes.shape({
    label: PropTypes.string,
    input: PropTypes.shape({
      background: PropTypes.shape({
        on: PropTypes.string,
        off: PropTypes.string
      }),
      dot: PropTypes.shape({
        on: PropTypes.string,
        off: PropTypes.string
      })
    })
  }),
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}
