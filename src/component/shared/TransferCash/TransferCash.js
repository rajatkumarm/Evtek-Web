import React from 'react'
import propTypes from 'prop-types'
import Styles from './TransferCash.module.scss'
import { Text, Icon } from '../../shared/index'
const TransferCash = ({ children, textChild }) => {
    return (
        <div className={Styles.transferFund}>
            <div className={Styles.cashFund}>
                <Text variant={"xxlText"}>Cash Balance</Text><br />
                <div className={Styles.dollarTxt}>
                    <Icon type='iconDollar' customClass={Styles.iconDolllar} />
                    <Text family='raleway' strong='strong5' className={Styles.dollarTxt}>{textChild}</Text>
                </div>
            </div>
            <div>
                {children}
            </div>


        </div>
    )
}

TransferCash.propTypes = {
    children: propTypes.any,
    textChild: propTypes.string,
}

export default TransferCash
