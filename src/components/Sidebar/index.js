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

import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Item from './Item'

/**
 * Simple Sidebar component to mainly display header items on small screens
 *
 * @component
 */
export default function Sidebar({
	isOpen,
	close,
	background,
	shadowColor,
	position,
	items,
	color
}) {
	const mainContainer = classnames({
		'grid grid-cols-12 w-full h-full transition-all duration-300 ease-in-out top-0': true,
		fixed: position === 'fixed',
		absolute: position === 'absolute',
		'bg-white': background === undefined,
		shadow: shadowColor === undefined
	})

	return (
		<div
			className={mainContainer}
			style={
				['fixed', 'absolute'].includes(position)
					? {
							left: isOpen ? 0 : '-100%',
							zIndex: 19,
							backgroundColor: background,
							boxShadow: shadowColor
					  }
					: {
							backgroundColor: background,
							boxShadow: shadowColor
					  }
			}
		>
			<div className='col-span-12 mt-12 md:mt-16'>
				{items.map((item, index) => (
					<Item key={index} closeSidebar={close} color={color} {...item} />
				))}
			</div>
		</div>
	)
}

Sidebar.defaultProps = {
	isOpen: true,
	position: 'relative',
	background: undefined,
	shadowColor: undefined,
	items: [],
	close: () => {},
	color: undefined
}

Sidebar.propTypes = {
	isOpen: PropTypes.bool,
	background: PropTypes.string,
	shadowColor: PropTypes.string,
	position: PropTypes.oneOf(['fixed', 'absolute', 'relative']),
	close: PropTypes.func,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			href: PropTypes.string,
			as: PropTypes.string,
			onClick: PropTypes.func,
			label: PropTypes.string.isRequired,
			closeSidebar: PropTypes.func
		})
	),
	color: PropTypes.string
}
