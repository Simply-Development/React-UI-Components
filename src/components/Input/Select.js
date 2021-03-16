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

export default function SelectInput({
  value,
  name,
  disabled,
  onChange,
  options,
  label,
  error,
  required,
  border,
  color
}) {
  const labelClass = classnames({
    'text-sm w-full': true,
    'text-gray-600': !error && !color.label,
    'text-red-600': error && !color.error
  })
  const selectClass = classnames({
    'bg-white text-black rounded p-2 text-lg block w-full': true,
    border: border,
    'border-gray-600': !error && !color.label,
    'border-red-600': error && !color.error,
    'mt-2': label,
    'mb-3': !error
  })
  const errorClass = classnames({
    'my-2': true,
    'text-red-600': !color.error
  })

  if (label) {
    return (
      <label
        className={labelClass}
        style={color.label && { color: color.label }}
      >
        {required && '*'}
        {label}
        <select
          required={required}
          disabled={disabled}
          name={name}
          value={!value ? 'null' : value}
          onChange={onChange}
          className={selectClass}
          style={Object.assign(
            {},
            color.label && { borderColor: color.label },
            color.value && { color: color.value }
          )}
        >
          {options.map((option) => (
            <option
              key={!option.value ? 'null' : option.value}
              value={!option.value ? 'null' : option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p
            className={errorClass}
            style={color.error && { color: color.error }}
          >
            {error}
          </p>
        )}
      </label>
    )
  }

  return (
    <>
      <select
        required={required}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={selectClass}
        style={Object.assign(
          {},
          color.label && { borderColor: color.label },
          color.value && { color: color.value }
        )}
      >
        {options.map((option) => (
          <option
            key={!option.value ? 'null' : option.value}
            value={!option.value ? 'null' : option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className={errorClass} style={color.error && { color: color.error }}>
          {error}
        </p>
      )}
    </>
  )
}

SelectInput.defaultProps = {
  disabled: false,
  label: null,
  error: null,
  border: true,
  color: {}
}

SelectInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string
    }).isRequired
  ).isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  border: PropTypes.bool,
  color: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    input: PropTypes.string
  })
}
