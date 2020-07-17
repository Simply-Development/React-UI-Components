import React, { useEffect, useState } from 'react'
import Link from '../Link'
import classNames from 'classnames'
import PropTypes from 'prop-types'

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
 * */
export default function Header({
  position,
  title,
  shadow,
  background,
  color,
  items
}) {
  const [scrolled, setScrolled] = useState(false)

  /**
   * Add scroll listener to add shadow on user scroll if shadow
   * prop = 'onScroll' or background has onScroll property
   * */
  useEffect(() => {
    if (
      (typeof shadow === 'string' && shadow === 'onScroll') ||
      (typeof background === 'object' && background.onScroll)
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
  const titleClass = classNames(
    {
      'font-bold': true,
      'text-xl': !scrolled,
      'text-lg': scrolled,
      'py-3': items.length < 1 && !scrolled,
      'py-2': items.length < 1 && scrolled
    },
    typeof title === 'object' &&
      title.className && {
        [title.className]: true
      }
  )

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
        <div className='grid'>
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
                          ? color.initial &&
                            (!scrolled || color.onScroll === undefined)
                            ? color.initial
                            : color.onScroll && scrolled && color.onScroll
                          : color
                    }
                  }
                >
                  {typeof title === 'object' ? title.text : title}
                </h2>
              </Link>
            )}
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
  items: []
}

Header.propTypes = {
  position: PropTypes.oneOf(['relative', 'fixed', 'absolute']),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      className: PropTypes.string
    })
  ]),
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
        initial: PropTypes.string,
        onScroll: PropTypes.string
      })
    ])
  ]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      action: PropTypes.func
    })
  )
}
