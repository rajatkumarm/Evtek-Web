import React from 'react'
import Styles from  '../Alert/Alert.module.scss'
import PropTypes from 'prop-types';
import Icon from '../Icon/index'

function Alert({heading,type,para,paraFirst,paraSecond,variant,paraClass,iconClass}) {
  return (
    <div className={`${Styles.alert} ${Styles[variant]}`}>
    <Icon className={`${Styles[variant]} `} type={type} customClass={iconClass}/>
    <p className={paraClass}>{para}</p>
    <div className={Styles.successList}>
      {paraFirst}
     <span>{heading}</span>  
     {paraSecond}
     
     </div>
    </div>
  )
}

export default Alert

Alert.propTypes = {
    className: PropTypes.string,
    heading: PropTypes.string,
    para: PropTypes.string,
    type: PropTypes.string,
    variant:PropTypes.string
    
}