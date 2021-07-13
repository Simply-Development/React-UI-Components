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

/**
 * This functions return the correct value according if exists
 * scroll or not and if the value passed has onScrollValue or just
 * a regular value.
 *
 * @param {Object} value Object with initil and onScroll properties.
 * @param {String} value String with color.
 * @param {Boolean} scrolled Value to know if user scrolled the page.
 *
 *
 * @return {object} The value according to scroll.
 */
export function getAccordingScrollValue(value, scrolled) {
	if (typeof value === 'object') {
		if (value.color) {
			return value.color
		}

		if (value.initial && (!scrolled || value.onScroll === undefined)) {
			return value.initial
		}

		if (value.onScroll && scrolled) {
			return value.onScroll
		}
	}

	return value
}
