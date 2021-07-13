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

import React from 'react'
import { getAccordingScrollValue } from '../../../utils/scroll'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Content inside Item Header
 *
 * Render content according to if it's a button or not
 *
 * @component
 */
export default function ContentItemHeader({ button, label, scrolled }) {
	const buttonClass = classNames({
		'text-sm px-6 py-2': true,
		'rounded-full': typeof button === 'object' && button.rounded,
		'bg-black':
			typeof button === 'object' ? button.background === undefined : true,
		'text-white': typeof button === 'object' ? button.color === undefined : true
	})

	if (button) {
		return (
			<span
				className={buttonClass}
				style={{
					backgroundColor:
						typeof button === 'object' &&
						getAccordingScrollValue(button.background, scrolled),
					color:
						typeof button === 'object' &&
						getAccordingScrollValue(button.color, scrolled)
				}}
			>
				{label}
			</span>
		)
	}

	return label
}

ContentItemHeader.defaultProps = {
	scrolled: false,
	button: false,
	items: undefined
}

ContentItemHeader.propTypes = {
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
	label: PropTypes.string.isRequired,
	scrolled: PropTypes.bool
}
