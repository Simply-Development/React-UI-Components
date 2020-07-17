import React, { useContext } from 'react'
import SimpleUIContext from '../../contexts/SimpleUIContext'
import PropTypes from 'prop-types'

/**
 * The Link to move around the application, return a simple a html tag
 * or a custom Component provided at SimpleUIProvider
 *
 * @param children The content of the component
 * @param href The href a property
 * @param className The className to stylish the component
 * @param style The styles object
 * */
export default function LinkComponent({ children, href, className, style }) {
  const { Link, library } = useContext(SimpleUIContext)

  if (Link === undefined) {
    return (
      <a href={href} className={className} style={style}>
        {children}
      </a>
    )
  }
  switch (library) {
    case 'nextjs':
      return (
        <Link href={href}>
          <a className={className} style={style}>{children}</a>
        </Link>
      )
    default:
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      )
  }
}

LinkComponent.defaultProps = {
  className: undefined,
  style: undefined
}

LinkComponent.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}
