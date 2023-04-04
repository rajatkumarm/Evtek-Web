import React from 'react'
import propTypes from 'prop-types'
import Styles from './AddCartAlert.module.scss'
import {Text} from '../../shared/index'
const AddCartAlert = ({className,textPrimary}) => {
  return (
    <div className={`${className} ${Styles.container}`}>
    <Text strong='strong6' variant={"xxxlText"} color={"secondary"}>{textPrimary}</Text>
    </div>
  )
}

AddCartAlert.propTypes = {
    className:propTypes.string,
}

export default AddCartAlert
