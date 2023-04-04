import React from 'react'
import propTypes  from 'prop-types'



function Label({className,value,htmlFor}) {
  return (
    <label htmlFor={htmlFor} className={className}>{value}</label>
      
     )
}


Label.propTypes={
  className:propTypes.string,
}

export default Label