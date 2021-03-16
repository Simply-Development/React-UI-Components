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

export default function Input({
  label,
  required,
  name,
  autoComplete,
  disabled,
  maxLength,
  minLength,
  placeholder,
  type,
  value,
  onChange,
  rows,
  error,
  scale,
  border,
  min,
  max,
  inlineActionLabel,
  color
}) {
  const labelClass = classnames({
    'text-sm w-full': true,
    'text-gray-600': !error && !color.label,
    'text-red-600': error && !color.error
  })
  const inputClass = classnames({
    'w-full px-3 py-2': true,
    'text-black': !color.value,
    'mt-2 border rounded': border === 'full',
    'outline-none bg-transparent border-b': border === 'underline',
    'text-lg': scale === 1,
    'text-xl': scale === 2,
    'text-2xl': scale === 3,
    'border-gray-600': !error && !color.label,
    'mb-4': !error,
    'border-red-600': error && !color.error
  })
  const errorClass = classnames({
    'mb-4 mt-2': true,
    'text-red-600': !color.error
  })

  return (
    <label
      htmlFor={name}
      className={labelClass}
      style={color.label && { color: color.label }}
    >
      {label &&
        (inlineActionLabel ? (
          <div className='flex items-center justify-between'>
            <p>{required ? `*${label}` : label}</p>
            <button
              onClick={inlineActionLabel.onClick}
              className={!color.accent && 'text-red-600'}
              style={color.accent && { color: color.accent }}
              type='button'
            >
              {inlineActionLabel.label}
            </button>
          </div>
        ) : required ? (
          `*${label}`
        ) : (
          label
        ))}
      {rows && rows > 1 ? (
        <textarea
          className={inputClass}
          required={required}
          name={name}
          autoComplete={autoComplete}
          disabled={disabled}
          maxLength={maxLength}
          minLength={minLength}
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={onChange}
          style={
            (Object.assign(
              {},
              color.label && { borderColor: color.label },
              color.value && { color: color.value }
            ),
            color.input && { backgroundColor: color.input })
          }
        />
      ) : (
        <input
          className={inputClass}
          required={required}
          name={name}
          autoComplete={autoComplete}
          disabled={disabled}
          maxLength={maxLength}
          minLength={minLength}
          placeholder={placeholder}
          type={type}
          value={value}
          min={min}
          max={max}
          onChange={onChange}
          style={
            (Object.assign(
              {},
              color.label && { borderColor: color.label },
              color.value && { color: color.value }
            ),
            color.input && { backgroundColor: color.input })
          }
        />
      )}
      {error && (
        <p className={errorClass} style={color.error && { color: color.error }}>
          {error}
        </p>
      )}
    </label>
  )
}

Input.defaultProps = {
  label: '',
  required: false,
  autoComplete: 'off',
  disabled: false,
  maxLength: 180,
  minLength: 0,
  placeholder: '',
  type: 'text',
  rows: 1,
  error: null,
  scale: 1,
  border: 'full',
  min: 0,
  max: 10000,
  inlineActionLabel: null,
  color: {}
}

Input.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number,
  error: PropTypes.string,
  scale: PropTypes.number,
  border: PropTypes.oneOf(['full', 'underline']),
  min: PropTypes.number,
  max: PropTypes.number,
  inlineActionLabel: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }),
  color: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    input: PropTypes.string
  })
}
