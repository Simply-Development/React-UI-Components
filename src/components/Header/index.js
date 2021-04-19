import React, { useEffect, useState } from 'react'
import Link from '../Link'
import Item from './Item'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { getAccordingScrollValue } from '../../lib/scroll'
import HamburgerMenu from 'react-hamburger-menu'
import { FiShoppingCart } from 'react-icons/fi'
import NotificationBadge from 'react-notification-badge'

/**
 * Header component with shadow on scroll and tabs with sub tabs
 *
 * @component
 * */
export default function Header({
  position,
  title,
  shadow,
  background,
  color,
  sidebarButton,
  items,
  hideItemsOnSmallDevices,
  setSidebarState,
  sidebarState,
  withCart,
  cartCount
}) {
  const [scrolled, setScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  /**
   * Sync internal sidebar state with internal state
   */
  useEffect(() => {
    if (typeof sidebarState === 'boolean') {
      setIsSidebarOpen(sidebarState)
    }
  }, [sidebarState])

  /**
   * Add scroll listener to add shadow on user scroll if any prop includes
   * 'onScroll'
   * */
  useEffect(() => {
    if (position === 'fixed' || position === 'sticky') {
      window.addEventListener(
        'scroll',
        () => {
          if (window.scrollY > 20) {
            setScrolled(true)
          } else {
            setScrolled(false)
          }
        },
        { passive: true }
      )
    }

    return () => {
      if (position === 'fixed' || position === 'sticky') {
        window.removeEventListener('scroll', null)
      }
    }
  }, [])

  /**
   * Expose sidebar state
   */
  useEffect(() => {
    if (typeof setSidebarState === 'function') {
      setSidebarState(isSidebarOpen)
    }
  }, [isSidebarOpen])

  const headerClass = classNames({
    'grid grid-cols-12 z-20': true,
    fixed: position === 'fixed',
    absolute: position === 'absolute',
    'top-0': ['fixed', 'absolute', 'sticky'].includes(position),
    'w-full': ['fixed', 'absolute'].includes(position),
    shadow:
      typeof shadow === 'object'
        ? shadow.value === undefined
          ? shadow.when === 'always' || scrolled
          : false
        : typeof shadow === 'string'
        ? shadow === 'always' || scrolled
        : shadow,
    'transition-all duration-100 ease-in-out':
      typeof shadow === 'string' && shadow === 'onScroll'
  })
  const titleClass = classNames({
    'font-bold inline-block': true,
    'text-xl': !scrolled,
    'text-lg': scrolled,
    'md:py-3': items.length < 1 && !scrolled,
    'md:py-2': items.length < 1 && scrolled,
    'py-2': !sidebarButton && hideItemsOnSmallDevices && !scrolled,
    'py-1': !sidebarButton && hideItemsOnSmallDevices && scrolled
  })
  const sidebarButtonClass = classNames({
    'cursor-pointer': true,
    'my-3': !scrolled,
    'my-2': scrolled,
    'md:hidden':
      typeof sidebarButton === 'string' && sidebarButton === 'onlySmall',
    'hidden md:block':
      typeof sidebarButton === 'string' && sidebarButton === 'onlyBig'
  })
  const cartContainerClass = classNames({
    relative: true,
    flex: typeof withCart !== 'object' || withCart.showOn === undefined,
    'md:hidden':
      typeof withCart === 'object' && withCart.showOn === 'onlySmall',
    'hidden md:flex':
      typeof withCart === 'object' && withCart.showOn === 'onlyBig'
  })

  return (
    <header
      className={headerClass}
      style={{
        backgroundColor:
          background && getAccordingScrollValue(background, scrolled),
        boxShadow:
          typeof shadow === 'object' && shadow.when === 'always'
            ? shadow.value
            : scrolled && shadow.value
      }}
    >
      <div className='col-start-2 col-span-10'>
        <div className='grid items-center'>
          <div className='col-start-1'>
            {typeof title === 'function' ? (
              title({ scrolled })
            ) : (
              <Link href='/'>
                <h2
                  className={titleClass}
                  style={
                    color && {
                      color:
                        typeof color === 'object'
                          ? getAccordingScrollValue(
                              color.title || color,
                              scrolled
                            )
                          : color
                    }
                  }
                >
                  {title}
                </h2>
              </Link>
            )}
          </div>
          <div className='col-end-12' style={{ justifySelf: 'flex-end' }}>
            <div className='grid grid-flow-col col-gap-10 lg:col-gap-12 items-center'>
              {items.map((item, index) => (
                <Item
                  hideOnSmallDevice={hideItemsOnSmallDevices}
                  {...item}
                  scrolled={scrolled}
                  key={index}
                  color={
                    typeof color === 'object' && color.item ? color.item : color
                  }
                />
              ))}
              {typeof withCart === 'boolean' && withCart ? (
                <div className={cartContainerClass}>
                  <FiShoppingCart
                    size='1.5em'
                    color={
                      color &&
                      getAccordingScrollValue(color.item || color, scrolled)
                    }
                  />
                  {cartCount > 0 && (
                    <NotificationBadge
                      count={cartCount}
                      containerStyle={{
                        position: 'absolute',
                        top: '-3px',
                        right: '-6px'
                      }}
                    />
                  )}
                </div>
              ) : typeof withCart === 'string' ? (
                <Link href={withCart} className={cartContainerClass}>
                  <FiShoppingCart
                    size='1.5em'
                    color={
                      color &&
                      getAccordingScrollValue(color.item || color, scrolled)
                    }
                  />
                  {cartCount > 0 && (
                    <NotificationBadge
                      count={cartCount}
                      containerStyle={{
                        position: 'absolute',
                        top: '-3px',
                        right: '-6px'
                      }}
                    />
                  )}
                </Link>
              ) : (
                typeof withCart === 'object' && (
                  <Link href={withCart.href} className={cartContainerClass}>
                    <FiShoppingCart
                      size='1.5em'
                      color={
                        color &&
                        getAccordingScrollValue(color.item || color, scrolled)
                      }
                    />
                    {cartCount > 0 && (
                      <NotificationBadge
                        count={cartCount}
                        containerStyle={{
                          position: 'absolute',
                          top: '-3px',
                          right: '-6px'
                        }}
                      />
                    )}
                  </Link>
                )
              )}
              {sidebarButton &&
                (typeof sidebarButton === 'function' ? (
                  sidebarButton({ isSidebarOpen, setIsSidebarOpen, scrolled })
                ) : (
                  <HamburgerMenu
                    isOpen={isSidebarOpen}
                    menuClicked={() => setIsSidebarOpen(!isSidebarOpen)}
                    width={27}
                    height={17}
                    strokeWidth={2}
                    className={sidebarButtonClass}
                    rotate={0}
                    color={
                      color &&
                      getAccordingScrollValue(color.item || color, scrolled)
                    }
                    borderRadius={0}
                    animationDuration={0.5}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  position: 'relative',
  title: '',
  shadow: false,
  background: undefined,
  color: undefined,
  items: [],
  sidebarButton: false,
  hideItemsOnSmallDevices: true,
  setSidebarState: undefined,
  withCart: false,
  cartCount: undefined,
  sidebarState: undefined
}

Header.propTypes = {
  position: PropTypes.oneOf(['relative', 'fixed', 'absolute', 'sticky']),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  shadow: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['onScroll', 'always']),
    PropTypes.shape({
      when: PropTypes.oneOf(['onScroll', 'always']),
      value: PropTypes.string
    })
  ]),
  background: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      initial: PropTypes.string,
      onScroll: PropTypes.string
    })
  ]),
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          initial: PropTypes.string,
          onScroll: PropTypes.string
        })
      ]),
      item: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          initial: PropTypes.string,
          onScroll: PropTypes.string
        })
      ])
    })
  ]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      as: PropTypes.string,
      onClick: PropTypes.func,
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
      ])
    })
  ),
  sidebarButton: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.oneOf(['onlySmall', 'onlyBig'])
  ]),
  hideItemsOnSmallDevices: PropTypes.bool,
  setSidebarState: PropTypes.func,
  withCart: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.shape({
      href: PropTypes.string,
      showOn: PropTypes.oneOf(['onlySmall', 'onlyBig'])
    })
  ]),
  cartCount: PropTypes.number,
  sidebarState: PropTypes.bool
}
