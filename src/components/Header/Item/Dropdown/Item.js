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

import React, { Fragment, useState, useEffect } from 'react'
import Link from '../../../Link'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { getAccordingScrollValue } from '../../../../utils/scroll'
import SubItem from './SubItem'

export default function ItemDropdownItemHeader({
	title,
	label,
	href,
	as,
	onClick,
	items,
	color,
	scrolled
}) {
	const [colorProcessed, setColorProcessed] = useState(
		color &&
			(color === 'transparent' || color.initial
				? color.onScroll || '#1F2937'
				: color.initial || color)
	)

	useEffect(() => {
		if (!scrolled && (color || color.initial) === 'transparent') {
			setColorProcessed(color.onScroll || '#1F2937')
		} else {
			getAccordingScrollValue(color, scrolled)
		}
	}, [scrolled])

	const itemClass = classnames({
		'text-gray-800': !color,
		'font-bold text-sm': title,
		'px-3': !href,
		'my-1': !href && !title,
		'mt-2 pb-1': !href && title
	})
	const itemLinkClass = classnames({
		'px-3 block': true,
		'my-1': !title,
		'mt-2 pb-1': title
	})

	return (
		<Fragment>
			<li
				style={
					colorProcessed && {
						color: colorProcessed
					}
				}
				onClick={onClick}
				className={itemClass}
			>
				{href ? (
					<Link href={href} as={as} className={itemLinkClass}>
						{title || label}
					</Link>
				) : (
					title || label
				)}
			</li>
			{items &&
				items.length > 0 &&
				items.map((item, index) => (
					<SubItem
						key={index}
						{...item}
						color={colorProcessed}
						scrolled={scrolled}
					/>
				))}
		</Fragment>
	)
}

ItemDropdownItemHeader.propTypes = {
	title: PropTypes.string,
	label: PropTypes.string,
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
	),
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
	]),
	scrolled: PropTypes.bool
}
