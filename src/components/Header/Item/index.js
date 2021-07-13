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
import Link from '../../Link'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { getAccordingScrollValue } from '../../../utils/scroll'
import Content from './Content'
import Dropdown from './Dropdown'

/**
 * Item of the Header, allow to use Link and a simple onClick action
 *
 * @component
 * */
export default function HeaderItem({
	label,
	href,
	onClick,
	scrolled,
	color,
	button,
	hideOnSmallDevice,
	as,
	items,
	background
}) {
	const containerClass = classNames({
		'hidden md:block': true,
		dropdown: items && !button
	})
	const itemClass = classNames({
		'text-sm cursor-pointer': true,
		'py-3 md:py-4': !scrolled,
		'py-2 md:py-3': scrolled,
		'text-gray-800': !color,
		'hidden md:block': hideOnSmallDevice
	})

	if (href) {
		return (
			<div className={containerClass}>
				<Link
					href={href}
					as={as}
					className={itemClass}
					style={{
						color: !button && getAccordingScrollValue(color, scrolled),
						alignSelf: button && 'center'
					}}
				>
					<Content button={button} label={label} scrolled={scrolled} />
				</Link>
				<Dropdown
					items={items}
					background={background}
					scrolled={scrolled}
					color={color}
				/>
			</div>
		)
	}

	return (
		<div className={containerClass}>
			<p
				onClick={onClick}
				className={itemClass}
				style={{
					color: !button && getAccordingScrollValue(color, scrolled),
					alignSelf: button && 'center'
				}}
			>
				<Content button={button} label={label} scrolled={scrolled} />
			</p>
			<Dropdown
				items={items}
				background={background}
				scrolled={scrolled}
				color={color}
			/>
		</div>
	)
}

HeaderItem.propTypes = {
	href: undefined,
	onClick: () => {},
	scrolled: false,
	color: undefined,
	button: false,
	background: undefined
}

HeaderItem.propTypes = {
	background: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.shape({
			initial: PropTypes.string,
			onScroll: PropTypes.string
		})
	]),
	label: PropTypes.string.isRequired,
	href: PropTypes.string,
	as: PropTypes.string,
	onClick: PropTypes.func,
	scrolled: PropTypes.bool,
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
	button: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.shape({
			rounded: PropTypes.bool,
			background: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.shape({
					initial: PropTypes.string,
					onScroll: PropTypes.string
				})
			])
		})
	]),
	items: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.shape({
				title: PropTypes.string.isRequired,
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
				)
			}),
			PropTypes.shape({
				label: PropTypes.string.isRequired,
				href: PropTypes.string,
				as: PropTypes.string,
				onClick: PropTypes.func
			})
		])
	)
}
