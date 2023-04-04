import React from 'react'
import Styles from './Coupon.module.scss'
import propTypes from 'prop-types'
import {Image,Text,Heading,} from '../../shared'

const Coupon = ({src,headingText,headingTwo,textOne}) => {
  return (
    <div className={Styles.main}>
        <div className={Styles.couponMain}>
            <div className={Styles.coupon}>
                 <Image src={src} alt="coupon" className={Styles.image} />

                  <div className={Styles.textMain}>
                    <Heading headingType={"h2"} className={Styles.heading}>{headingText}</Heading>
                    <div className={Styles.textMain}>
                        <Text variant={"smText"}>{textOne}</Text>
                    </div>
                    <Heading className={Styles.headingTwo} headingType={"h6"} color={"pinkPrimary"}>{headingTwo}</Heading>
                    <div className={Styles.codeMain}>
                        <Text variant={"smText"}>online code:</Text>
                        <Heading className={Styles.onlinecodeHeading} headingType={"h6"}>GUDEWFGIEW2T1</Heading>
                       <div>
                        <Image src='images/QRcode.png' className={Styles.imageQR}/>
                       </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

Coupon.propTypes = {
    src:propTypes.string,
    headingText:propTypes.string,
    textOne:propTypes.string,
    headingTwo:propTypes.string
}

export default Coupon
