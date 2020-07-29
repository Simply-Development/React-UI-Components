import React, { useEffect, useState } from 'react'
import Link from '../Link'
import Item from './Item'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// TODO: Add SidebarButton

/**
 * Header component with shadow on scroll and tabs with sub tabs
 *
 * @param position The header position, default: relative
 * @param title Can pass just a text, object with className to personalize or
 * function for full customization
 * @param shadow A string or bool to define if shadow is present always or
 * just when page has been scrolled
 * @param background A string or object with the color and variant of the
 * header background
 * @param color A string or object with the color of the texts when page have been
 * scrolled and when not
 * @param items An array of objects with the data of the tabs to render
 * @param sidebarButton A bool value, function or node to determine if the
 * sidebar button is shown
 * */
export default function Header({
  position,
  title,
  shadow,
  background,
  color,
  sidebarButton,
  items,
  hideItemsOnSmallDevices
}) {
  const [scrolled, setScrolled] = useState(false)

  /**
   * Add scroll listener to add shadow on user scroll if shadow
   * prop = 'onScroll' or background has onScroll property
   * */
  useEffect(() => {
    if (
      (typeof shadow === 'string' && shadow === 'onScroll') ||
      (typeof background === 'object' && background.onScroll) ||
      (typeof color === 'object' &&
        (color.onScroll ||
          (typeof color.title === 'object' && color.title.onScroll) ||
          (typeof color.item === 'object' && color.item.onScroll)))
    ) {
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
      if (
        (typeof shadow === 'string' && shadow === 'onScroll') ||
        (typeof background === 'object' && background.onScroll)
      ) {
        window.removeEventListener('scroll', null)
      }
    }
  }, [])

  const headerClass = classNames({
    'grid grid-cols-12 z-20': true,
    fixed: position === 'fixed',
    absolute: position === 'absolute',
    'top-0 w-full': position === 'fixed' || position === 'absolute',
    shadow:
      typeof shadow === 'string' ? shadow === 'always' || scrolled : shadow,
    'transition-all duration-100 ease-in-out':
      typeof shadow === 'string' && shadow === 'onScroll',
    'bg-opacity-75':
      typeof background === 'object'
        ? background.type === 'translucent'
          ? true
          : background.initial &&
            (!scrolled || background.onScroll === undefined)
          ? background.initial.type === 'translucent'
          : background.onScroll &&
            scrolled &&
            background.onScroll.type === 'translucent'
        : background
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
  const headerItemsClass = classNames({
    'hidden md:grid md:grid-flow-col md:col-gap-10 lg:col-gap-12': hideItemsOnSmallDevices,
    'grid grid-flow-col col-gap-8 sm:col-gap-10 lg:col-gap-12': !hideItemsOnSmallDevices
  })

  return (
    <header
      className={headerClass}
      style={
        background && {
          backgroundColor:
            typeof background === 'object'
              ? background.color
                ? background.color
                : background.initial &&
                  (!scrolled || background.onScroll === undefined)
                ? background.initial.color
                : background.onScroll && scrolled && background.onScroll.color
              : background
        }
      }
    >
      <div className='col-start-2 col-span-10'>
        <div className='grid items-center'>
          <div className='col-start-1'>
            {typeof title === 'function' ? (
              title({ scrolled, className: titleClass })
            ) : (
              <Link href='/'>
                <h2
                  className={titleClass}
                  style={
                    color && {
                      color:
                        typeof color === 'object'
                          ? typeof color.title === 'object'
                            ? color.title.initial &&
                              (!scrolled || color.title.onScroll === undefined)
                              ? color.title.initial
                              : color.title.onScroll &&
                                scrolled &&
                                color.title.onScroll
                            : color.title
                            ? color.title
                            : color.initial &&
                              (!scrolled || color.onScroll === undefined)
                            ? color.initial
                            : color.onScroll && scrolled && color.onScroll
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
            <div className={headerItemsClass}>
              {items.map((item, index) => (
                <Item
                  {...item}
                  scrolled={scrolled}
                  key={index}
                  color={
                    typeof color === 'object' && color.item ? color.item : color
                  }
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
  hideItemsOnSmallDevices: true
}

Header.propTypes = {
  position: PropTypes.oneOf(['relative', 'fixed', 'absolute']),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  shadow: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['onScroll', 'always'])
  ]),
  background: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      type: PropTypes.oneOf(['solid', 'translucent']),
      color: PropTypes.string
    }),
    PropTypes.shape({
      initial: PropTypes.shape({
        type: PropTypes.oneOf(['solid', 'translucent']),
        color: PropTypes.string
      }),
      onScroll: PropTypes.shape({
        type: PropTypes.oneOf(['solid', 'translucent']),
        color: PropTypes.string
      })
    })
  ]),
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
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
    ])
  ]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
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
    PropTypes.node
  ]),
  hideItemsOnSmallDevices: PropTypes.bool
}
