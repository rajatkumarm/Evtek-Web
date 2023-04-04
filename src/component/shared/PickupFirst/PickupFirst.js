import React from 'react'
import Styles from './PickupFirst.module.scss';
import { useState } from "react";
import {
    Text,
    Icon,
    } from '../../shared/index'

const PickupFirst = () =>  {
    const [show, setShowInfo] = useState(false);
  return (
    <div>
         <div className={Styles.pickupAlert}>
            <div className={Styles.fisrtIcon}>
              <Icon className={Styles.pickupBox} type={"iconi"} />
            </div>
            <Text className={Styles.textAlert} variant="xxl" color={"secondary"} handleClick={() => setShowInfo(!show)}>
              First Pickup? Tap to learn more
            </Text>
          </div>

          {show && (
            <div className={Styles.main}>
              <div className={Styles.icons}>
                <div className={Styles.iconFirst}>
                  <Icon type={"iconi"} />
                </div>
                <div className={Styles.iconSecond}>
                  <Icon type={"iconclose"} />
                </div>
              </div>
              <div className={Styles.feelContent}>
                <Text variant="xlText" color="primary" >  Feel free to use standard clear recycling bags for your first pickup
                  (remember to separate aluminum and plastic into different bags).
                  Glass bottles must be boxed in the original 24-pack case it was purchased in.
                  Evtek will deliver 10 complementary EcoSacks (recyclable bags) for future pickups.
                  Additional supplies can be purchased in the <span className={Styles.shopHead}>Shop.</span></Text>
              </div>
              <div className={Styles.bottomBorder}></div>

              <div className={Styles.firstText}>
                <Text variant="xxlText" color="greenPrimary">What can you recycle?</Text>
                <div className={Styles.iconColor}>
                  <Icon type={"iconFill"} />
                </div>
              </div>
              <div className={Styles.secondText}>
                <Text variant="xxlText" color="greenPrimary">How to prepare for a Pickup</Text>
                <div className={Styles.iconColor}>
                  <Icon type={"iconFill"} />
                </div>
              </div>


            </div>)}
           
    </div>
  )
}

export default PickupFirst