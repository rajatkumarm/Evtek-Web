import React from 'react'
import Styles from './EcoPoint.module.scss'
import {
    Icon,
    Text,
  } from "../index"

export const EcoPoint = () => {
    return (
        <div className={Styles.progressEco}>
            <div className={Styles.ecoText}>
            <Text className={Styles.positionText} variant={"msmText"}  >EcoPoints pool</Text>
            <div><Text className={Styles.positioText} variant={"xlText "}  >10,281 EcoPoints</Text></div>
            </div>
            <div className={Styles.ecoPoints}>
                <div className={Styles.strOne}><Icon type='star' /></div>
                <div className={Styles.strTwo}><Icon type='star' /></div>
                <div className={Styles.strThree}><Icon type='star' /></div>
                <div className={Styles.strFour}><Icon type='star' /></div>
                <div className={Styles.strFive}><Icon type='star' /></div>
                <div className={Styles.strSix}><Icon type='star' /></div>
                <div className={Styles.strSeven}><Icon type='star' /></div>
                <div className={Styles.strEight}><Icon type='star' /></div>
                <div className={Styles.strNine}><Icon type='star' /></div>
                <div className={Styles.strTen}><Icon type='star' /></div>
            </div>
        </div>
    )
}
