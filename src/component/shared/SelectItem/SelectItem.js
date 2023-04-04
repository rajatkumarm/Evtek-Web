import React from 'react'
import PropTypes from 'prop-types'

const SelectItem = ({ value, children,className,selected }) => {
  return (
<option className={className} selected={selected} value={value} >
      {children}
    </option>
  )
}

SelectItem.propTypes = {
    value: PropTypes.string,
    children: PropTypes.string,
    className: PropTypes.string,
  }

export default SelectItem
