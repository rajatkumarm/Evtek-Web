import React from 'react'
import Styles from './OrderList.module.scss'
import propTypes from 'prop-types'
import {Text} from '../../shared'

const OrderList = ({textFirst,textSecond,textThird,textFour,onclick }) => {
  return (
    <div className={Styles.container}>
     <Text strong='strong6'>{textFirst}</Text>
     <Text>{textSecond}</Text>
     <Text>{textThird}</Text>
     <Text handleClick={onclick} className={Styles.seeDetails} color={"primary2"}>{textFour}</Text>
       
    </div>
  )
}

OrderList.propTypes = {
    textFirst:propTypes.string,
    textSecond:propTypes.string,
    textThird:propTypes.string,
    textFour:propTypes.string,
    onclick:propTypes.func,
}

export default OrderList
