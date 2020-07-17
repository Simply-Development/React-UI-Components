import React, { createContext } from 'react'
import PropTypes from 'prop-types'

/** Create the context with an empty object */
const SimpleUIContext = createContext({})

/**
 * This allow us to get global access to config provided
 * by the user
 *
 * @param children The App Component
 * @param Link The component to move around the application
 * @param library The React complementary library like NextJS or Gatsby
 * */
function SimpleUIProvider({ children, Link, library }) {
  return (
    <SimpleUIContext.Provider value={{ Link, library }}>
      {children}
    </SimpleUIContext.Provider>
  )
}

SimpleUIProvider.defaultProps = {
  Link: undefined,
  library: undefined,
}

SimpleUIProvider.propTypes = {
  Link: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  library: PropTypes.oneOf(['nextjs'])
}

export default SimpleUIContext
export { SimpleUIProvider }
