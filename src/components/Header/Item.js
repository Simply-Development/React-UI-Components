import React from 'react'
import Link from '../Link'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Item of the Header, allow to use Link and a simple onClick action
 *
 * @param label String label to show
 * @param href Url to move into the application
 * @param onClick Function
 * @param scrolled To set padding size
 * @param color Item text color
 * */
export default function HeaderItem({
  label,
  href,
  onClick,
  scrolled,
  color,
  button
}) {
  const itemClass = classNames({
    'text-sm cursor-pointer': true,
    'py-3 md:py-4': !scrolled,
    'py-2 md:py-3': scrolled,
    'text-gray-600': !color
  })
  const buttonClass = classNames({
    'text-sm px-6 py-2': true,
    'rounded-full': typeof button === 'object' && button.rounded,
    'bg-black':
      typeof button === 'object' ? button.background === undefined : true,
    'text-white': typeof button === 'object' ? button.color === undefined : true
  })

  if (href) {
    return (
      <Link
        href={href}
        className={!button && itemClass}
        style={
          color &&
          !button && {
            color:
              typeof color === 'object'
                ? color.initial && (!scrolled || color.onScroll === undefined)
                  ? color.initial
                  : color.onScroll && scrolled && color.onScroll
                : color
          }
        }
      >
        {button ? (
          <span
            className={buttonClass}
            style={{
              backgroundColor: typeof button === 'object' && button.background,
              color: typeof button === 'object' && button.color
            }}
          >
            {label}
          </span>
        ) : (
          label
        )}
      </Link>
    )
  }

  return (
    <p
      onClick={onClick}
      className={`${button ? scrolled && 'py-2' : itemClass}`}
      style={{
        color:
          !button && typeof color === 'object'
            ? color.initial && (!scrolled || color.onScroll === undefined)
              ? color.initial
              : color.onScroll && scrolled && color.onScroll
            : color,
        alignSelf: button && 'center'
      }}
    >
      {button ? (
        <span
          className={buttonClass}
          style={{
            backgroundColor: typeof button === 'object' && button.background,
            color: typeof button === 'object' && button.color
          }}
        >
          {label}
        </span>
      ) : (
        label
      )}
    </p>
  )
}

HeaderItem.propTypes = {
  href: undefined,
  onClick: () => {},
  scrolled: false,
  color: undefined,
  button: false
}

HeaderItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  scrolled: PropTypes.bool,
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
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
    ])
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
}
