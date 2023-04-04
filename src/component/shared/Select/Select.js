import React from 'react'
import PropTypes from 'prop-types'

const Select = ({children,className,id,onChange}) => {
  return (
    <select className={className} id={id}  onChange={onChange}>
      {children} 
    
    </select>
    
  )
}

Select.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    id:PropTypes.string,
    onChange:PropTypes.string

}

export default Select

