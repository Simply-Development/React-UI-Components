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
import PropTypes from 'prop-types'
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaLinkedin,
	FaGithub
} from 'react-icons/fa'
import Link from '../Link'

export default function Footer({
	brand,
	background,
	color,
	items,
	social,
	sendLove
}) {
	return (
		<footer
			className='grid grid-cols-12 py-5'
			style={
				background && {
					backgroundColor: background
				}
			}
		>
			<div className='col-start-2 col-span-10'>
				<div className='flex items-center justify-between flex-wrap'>
					<div className='flex items-center flex-wrap justify-center lg:justify-start w-full lg:w-auto'>
						{typeof brand === 'string' ? (
							<div className='lg:mr-16 order-2 lg:order-none w-full lg:w-auto mt-5 lg:mt-0'>
								{typeof social === 'object' && (
									<div className='flex justify-center mb-5 lg:hidden'>
										{social.facebook && (
											<a
												href={social.facebook}
												target='_blank'
												rel='noreferrer'
												className='footer_social_item'
											>
												<FaFacebookF
													color={typeof color === 'object' ? color.item : color}
													size='1.5em'
												/>
											</a>
										)}
										{social.instagram && (
											<a
												href={social.instagram}
												target='_blank'
												rel='noreferrer'
												className='footer_social_item'
											>
												<FaInstagram
													color={typeof color === 'object' ? color.item : color}
													size='1.5em'
												/>
											</a>
										)}
										{social.twitter && (
											<a
												href={social.twitter}
												target='_blank'
												rel='noreferrer'
												className='footer_social_item'
											>
												<FaTwitter
													color={typeof color === 'object' ? color.item : color}
													size='1.5em'
												/>
											</a>
										)}
										{social.linkedin && (
											<a
												href={social.linkedin}
												target='_blank'
												rel='noreferrer'
												className='footer_social_item'
											>
												<FaLinkedin
													color={typeof color === 'object' ? color.item : color}
													size='1.5em'
												/>
											</a>
										)}
										{social.github && (
											<a
												href={social.github}
												target='_blank'
												rel='noreferrer'
												className='footer_social_item'
											>
												<FaGithub
													color={typeof color === 'object' ? color.item : color}
													size='1.5em'
												/>
											</a>
										)}
									</div>
								)}
								<h2
									className='text-center lg:text-left'
									style={
										color && {
											color: typeof color === 'object' ? color.title : color
										}
									}
								>
									{brand}
								</h2>
							</div>
						) : typeof brand === 'function' ? (
							brand()
						) : (
							typeof brand === 'object' && (
								<div className='lg:mr-16 w-full lg:order-none lg:w-auto lg:mt-0 order-2 mt-5'>
									{typeof social === 'object' && (
										<div className='flex justify-center mb-5 lg:hidden'>
											{social.facebook && (
												<a
													href={social.facebook}
													target='_blank'
													rel='noreferrer'
													className='footer_social_item'
												>
													<FaFacebookF
														color={
															typeof color === 'object' ? color.item : color
														}
														size='1.5em'
													/>
												</a>
											)}
											{social.instagram && (
												<a
													href={social.instagram}
													target='_blank'
													rel='noreferrer'
													className='footer_social_item'
												>
													<FaInstagram
														color={
															typeof color === 'object' ? color.item : color
														}
														size='1.5em'
													/>
												</a>
											)}
											{social.twitter && (
												<a
													href={social.twitter}
													target='_blank'
													rel='noreferrer'
													className='footer_social_item'
												>
													<FaTwitter
														color={
															typeof color === 'object' ? color.item : color
														}
														size='1.5em'
													/>
												</a>
											)}
											{social.linkedin && (
												<a
													href={social.linkedin}
													target='_blank'
													rel='noreferrer'
													className='footer_social_item'
												>
													<FaLinkedin
														color={
															typeof color === 'object' ? color.item : color
														}
														size='1.5em'
													/>
												</a>
											)}
											{social.github && (
												<a
													href={social.github}
													target='_blank'
													rel='noreferrer'
													className='footer_social_item'
												>
													<FaGithub
														color={
															typeof color === 'object' ? color.item : color
														}
														size='1.5em'
													/>
												</a>
											)}
										</div>
									)}
									<h3
										className='text-center lg:text-left'
										style={
											color && {
												color: typeof color === 'object' ? color.title : color
											}
										}
									>
										{brand.short}
									</h3>
									{brand.long && (
										<h2
											className='text-sm text-center'
											style={
												color && {
													color: typeof color === 'object' ? color.item : color
												}
											}
										>
											{brand.withCopyright ? '© ' : ''}
											{brand.withYear
												? typeof brand.withYear === 'string'
													? `${brand.withYear} `
													: `${new Date().getFullYear()} `
												: ''}
											{brand.long}
										</h2>
									)}
								</div>
							)
						)}
						{items.map((item, index) => (
							<Link href={item.href} key={index} className='footer_item'>
								<h2
									style={
										color && {
											color: typeof color === 'object' ? color.item : color
										}
									}
								>
									{item.label}
								</h2>
							</Link>
						))}
					</div>
					{typeof social === 'object' && (
						<div className='hidden lg:flex'>
							{social.facebook && (
								<a
									href={social.facebook}
									target='_blank'
									rel='noreferrer'
									className='footer_social_item'
								>
									<FaFacebookF
										className='footer_social_item'
										color={typeof color === 'object' ? color.item : color}
										size='1.3em'
									/>
								</a>
							)}
							{social.instagram && (
								<a
									href={social.instagram}
									target='_blank'
									rel='noreferrer'
									className='footer_social_item'
								>
									<FaInstagram
										color={typeof color === 'object' ? color.item : color}
										size='1.3em'
									/>
								</a>
							)}
							{social.twitter && (
								<a
									href={social.twitter}
									target='_blank'
									rel='noreferrer'
									className='footer_social_item'
								>
									<FaTwitter
										color={typeof color === 'object' ? color.item : color}
										size='1.3em'
									/>
								</a>
							)}
							{social.linkedin && (
								<a
									href={social.linkedin}
									target='_blank'
									rel='noreferrer'
									className='footer_social_item'
								>
									<FaLinkedin
										color={typeof color === 'object' ? color.item : color}
										size='1.3em'
									/>
								</a>
							)}
							{social.github && (
								<a
									href={social.github}
									target='_blank'
									rel='noreferrer'
									className='footer_social_item'
								>
									<FaGithub
										color={typeof color === 'object' ? color.item : color}
										size='1.3em'
									/>
								</a>
							)}
						</div>
					)}
					{sendLove && (
						<div className='w-full justify-center flex mt-3'>
							<a
								className='text-gray-600 text-sm'
								href='https://simply-development.com'
								// eslint-disable-next-line react/jsx-no-target-blank
								target='_blank'
							>
								Developed with ❤️ by{' '}
								<span className='text-red-500'>Simply Development</span>
							</a>
						</div>
					)}
				</div>
			</div>
			<style jsx='true'>{`
				.footer_item + .footer_item {
					margin-left: 2.5rem;
				}
				.footer_social_item + .footer_social_item {
					margin-left: 2.5rem;
				}
				@media (min-width: 1024px) {
					.footer_social_item + .footer_social_item {
						margin-left: 1rem;
					}
				}
			`}</style>
		</footer>
	)
}

Footer.defaultProps = {
	background: undefined,
	color: undefined,
	items: [],
	social: undefined,
	sendLove: true
}

Footer.propTypes = {
	brand: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.shape({
			short: PropTypes.string.isRequired,
			long: PropTypes.string,
			withCopyright: PropTypes.bool,
			withYear: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
		})
	]).isRequired,
	background: PropTypes.string,
	color: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.shape({
			title: PropTypes.string,
			item: PropTypes.string
		})
	]),
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			href: PropTypes.string.isRequired
		})
	),
	social: PropTypes.shape({
		facebook: PropTypes.string,
		instagram: PropTypes.string,
		twitter: PropTypes.string,
		linkedin: PropTypes.string,
		github: PropTypes.string
	}),
	sendLove: PropTypes.bool
}
