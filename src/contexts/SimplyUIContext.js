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

import React, { createContext } from 'react'
import PropTypes from 'prop-types'

/** Create the context with an empty object */
const SimplyUIContext = createContext({})

/**
 * This allow us to get global access to config provided
 * by the user
 *
 * @param children The App Component
 * @param Link The component to move around the application
 * @param library The React complementary library like NextJS or Gatsby
 * */
function SimplyUIProvider({ children, Link, library }) {
	return (
		<SimplyUIContext.Provider value={{ Link, library }}>
			{children}
		</SimplyUIContext.Provider>
	)
}

SimplyUIProvider.defaultProps = {
	Link: undefined,
	library: undefined
}

SimplyUIProvider.propTypes = {
	Link: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
	library: PropTypes.oneOf(['nextjs'])
}

export default SimplyUIContext
export { SimplyUIProvider }
