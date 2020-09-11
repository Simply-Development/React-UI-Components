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

import React, { useContext } from 'react'
import SimplyUIContext from '../../contexts/SimplyUIContext'
import PropTypes from 'prop-types'

/**
 * The Link to move around the application, return a simple a html tag
 * or a custom Component provided at SimpleUIProvider
 *
 * @param children The content of the component
 * @param href The href a property
 * @param className The className to stylish the component
 * @param style The styles object
 * */
export default function LinkComponent({
  children,
  href,
  className,
  style,
  as
}) {
  const { Link, library } = useContext(SimplyUIContext)

  if (Link === undefined) {
    return (
      <a href={href} className={className} style={style}>
        {children}
      </a>
    )
  }
  switch (library) {
    case 'nextjs':
      return (
        <Link href={href} as={as}>
          <a className={className} style={style}>
            {children}
          </a>
        </Link>
      )
    default:
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      )
  }
}

LinkComponent.defaultProps = {
  className: undefined,
  style: undefined
}

LinkComponent.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}
