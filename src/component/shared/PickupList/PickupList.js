import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import Styles from './PickupList.module.scss';
import { useState } from "react";
import {

  Text,
  Icon,
  Heading,
  Input,
  Button



} from '../index'


function PickupList() {
  const [show, setShowInfo] = useState(false);

  return (
    <>
      <div className={Styles.pickupScheduled}>
        <div className={Styles.sScheduled}>
          <div className={Styles.border}></div>
          <div className={Styles.firstText}>
            <Text className={Styles.headText}  family="raleway" variant="mdText" strong='strong5'>
              6.18.2021 - Thursday
            </Text>
            <Heading className={Styles.headText} family="raleway" variant="smText" strong={"strong7"} headingType={"h6"}>
              one-time
            </Heading>
          </div>
          <div className={Styles.mainText}>
            <div>
              <Text variant="xxxlText" className={Styles.bulkText} >Curbside Pickup</Text>
            </div>
            <div className={Styles.editMain} onClick={() => setShowInfo(!show)}>
              <Text variant="smText" className={Styles.editText} >edit details</Text>
              <Icon
                type={"iconarrowdrop"}
                customClass={Styles.headText}
              />
            </div>
          </div>
        </div>
        <div className={Styles.Scheduled}>
          <Text className={Styles.Text} family='raleway' strong='strong7' variant="smText" color="greyPrimary">
            Not Confirmed
          </Text>
          <Tooltip title="Currently, Click event is not developed">

            <div className={Styles.iconEditTwo}>

              <Icon type={"iconi"} iconClass={"icon-web-app"} />
            </div>

          </Tooltip>
        </div>
      </div>
      {show && (
        <div className={Styles.second}>
          <div className={Styles.secondContent}>
            <Heading className={Styles.headText} family="raleway" headingType={"h6"}>
              Items
            </Heading>
            <Text className={Styles.headText} family="raleway" variant="smText">
              6.17.2021 - Wednesday
            </Text>
            <div className={Styles.InptText}>
              <Heading className={Styles.headText} family="raleway" headingType={"h6"}>
                Time
              </Heading>
              <Text className={Styles.headText} family="raleway" variant="smText">
                Night (6 pm - 12 am)
              </Text>
            </div>
            <div className={Styles.InptText}>
              <div className={Styles.Drive}>
                <Heading className={Styles.headText} family="raleway" strong={"strong6"} variant={"lgText"} headingType={"h6"}>Instructions for driver</Heading>
              </div>
              <Input
                type={"password"}
                className={Styles.passInput} placeholder={"Bins are at the side of the house..."}

              />
            </div>
            <div className={Styles.InptText}>
              <Heading className={Styles.headText} family="raleway" headingType={"h6"}>Payment method</Heading>
              <div className={Styles.donateText}>
                <Text className={Styles.headText} family="raleway" variant="smText">
                  Donate to Charity
                </Text>
                <div className={Styles.sureText}>
                  <Text className={Styles.myText} variant={"mdText"} strong={"strong6"} color={"greenPrimary"}>
                    Sure We Can
                  </Text>
                  <div className={Styles.fillIcon}>
                    <Icon type={"iconFill"} iconClass={"icon-web-app"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.buttons}>
            <div>
              <Button size={"btnLg"} color={"pinkPrimary02"}>Cancel Pickup</Button>
            </div>
            <Button size={"btnLg"} color={"primary02"}>Reschedule Pickup</Button>
          </div>
        </div>)}


    </>
  )
}

export default PickupList