import React from 'react'
import PropTypes from "prop-types"

export default function Button({children, handleClick, type='button' }) {
  return (
      <div>
          <button onClick={handleClick} type={type} >
              {children}
          </button>
    </div>
  )
}

Button.propTypes = {
    children: PropTypes.any,
    handleClick: PropTypes.func,
    type: PropTypes.string

}
