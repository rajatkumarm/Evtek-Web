import React from 'react'
import {
  Icon,
  Text,
  Heading,
  Button,
  Image
} from "../index"
import Styles from './Brentwood.module.scss';
import { useState } from "react"

export default function Brentwood() {
  const [show, setShow] = useState(false)
  const [showHide, setShowHide] = useState(true);


  const showInfo = () => {
    setShow(true)
    setShowHide(false)
  }
  const hideInfo = () => {
    setShow(false)
    setShowHide(true)
  }
  return (
    <div className={Styles.Brentmain}>
      {showHide &&
        <div className={Styles.BrentwoodMain} onClick={showInfo}>
          <div className={Styles.Brentwood}>
            <div className={Styles.circleBg}>
              <Text className={Styles.circleNumber} variant="smText" color={"secondary"}>
                1
              </Text>
            </div>

            <div className={Styles.Brentwoodtext}>
              <Heading className={Styles.BrentText} headingType={"h2"}>Brentwood Center</Heading>
              <Text  variant="smText">40 Wicks Rd, Brooklyn NY</Text>
              <div className={Styles.star}>
                <Icon type='star' />
                <Text variant={"smText"}>3.5/5</Text>
              </div>
              <div className={Styles.downbText}>
                <Text variant="lgText">Full Service</Text>
              </div>
              <div className={Styles.BrentTime}>
                <div className={Styles.Timing}>
                  <Text variant={"md"}>  Timings </Text>
                  <div className={Styles.time}>
                    <Text variant={"md"}>  Thu 9am - 6pm</Text>

                  </div>
                </div>
                <div className={Styles.Phone}>
                  <Text variant={"md"}>Phone </Text>
                  <div className={Styles.Number}>
                    <Text variant={"md"}>  646.870.9392</Text>
                  </div>

                </div>
              </div>
            </div>
            <div >
              <Button btnClass={Styles.btnwood} color="">Drop-off</Button>
            </div>
          </div>
          <div className={Styles.BrentwoodRight}>
            <Text className={Styles.textMiles} variant="mdText" color="grayPrimary"> 0.5 miles </Text>
            <div className={Styles.heart}>
              <Icon type="iconHeart" />
            </div>
            <div className={Styles.bgicon}>
              <div className={Styles.direction}>
                <Icon type='iconarrowDirection' />
              </div>
            </div>

          </div>

        </div>
      }
      {show && (
        <div className={Styles.Brentbox}>
          <div className={Styles.circleBg}>
            <Text className={Styles.circleNumber} variant="smText" color={"secondary"}>
              1
            </Text>
          </div>
          <div className={Styles.Brentwoods}>
            <div className={Styles.Brentwoodtext}>
              <Heading className={Styles.BrentText} headingType={"h2"} onClick={hideInfo}>Brentwood Center <Icon type="iconHeart" customClass={Styles.brentHeart} /></Heading>

              <div className={Styles.open}> <Text variant="xsText" color="primary2" strong="strong6">Full-Service   •   Open   </Text></div>
              <div className={Styles.live}>
                <Heading className={Styles.rentText} headingType={"h6"}>Live Status</Heading>
                <div className={Styles.busy}>
                <Text variant="xlText" color="orangePrimary" strong="strong7">  Moderately Busy</Text>
                </div>
              </div>
              <div className={Styles.Dys}>
                <div className={Styles.live}>
                  <Heading className={Styles.dayAlign} headingType={"h6"}>Monday</Heading>
                  <div className={Styles.time}>
                  <Text variant="mdText" strong="strong6" color="primary2">9am - 7pm</Text>
                  </div>
                </div>
                <div className={Styles.Day}>
                  <Text variant={"md"} className={Styles.dayAlign}>Tuesday</Text>
                  <div className={Styles.time}>
                    <Text variant={"md"}>9am - 7pm</Text>
                  </div>
                </div>
                <div className={Styles.Day}>
                  <Text variant={"md"} className={Styles.dayAlign}>Wednesday</Text>
                  <div className={Styles.time}>
                    <Text variant={"md"}>9am - 7pm</Text>
                  </div>
                </div>
                <div className={Styles.Day}>
                  <Text variant={"md"} className={Styles.dayAlign}>Thursday</Text>
                  <div className={Styles.time}>
                    <Text variant={"md"}>9am - 7pm</Text>
                  </div>
                </div>
                <div className={Styles.Day}>
                  <Text variant={"md"} className={Styles.dayAlign}>Friday</Text>
                  <div className={Styles.time}>
                    <Text variant={"md"}>9am - 7pm</Text>
                  </div>
                </div>
                <div className={Styles.Day}>
                  <Text variant={"md"} className={Styles.dayAlign}>Saturday</Text>
                  <div className={Styles.time}>
                    <Text variant={"md"}>11am - 3pm</Text>
                  </div>
                </div>
                <div className={Styles.Day}>
                  <Text variant={"md"} className={Styles.dayAlign}>Sunday</Text>
                  <div className={Styles.time}>
                    <Text variant={"md"}>Closed</Text>
                  </div>
                </div>
              </div>
              <div className={Styles.BrentAdd}>
                <div className={Styles.Address}>
                  <Heading className={Styles.rentText} headingType={"h6"}>Address</Heading>

                  <div className={Styles.away}><Text variant={"md"}>0.5 miles away</Text></div>

                </div>
                <div className={Styles.BrentRight}>
                  <Text variant={"sm"}>40 Wicks Rd, Brooklyn NY</Text>
                  <div className={Styles.direction}>
                    <Icon type='iconarrowDirection' className={Styles.ico} />

                  </div>
                </div>
              </div>
              <div className={Styles.Rating}>
                <Heading className={Styles.rentText} headingType={"h6"}>Reviews</Heading>
                <div className={Styles.star}>
                  <Icon type='star' /></div>
                <div className={Styles.time}>
                  <Text variant={"sm"}>3.5/5</Text>
                </div>
              </div>
              <div className={Styles.link}>
                <Text variant={"md"}>see more reviews on Google Maps</Text>
              </div>
              <div className={Styles.row}>
                <Image src='images/Image.svg' alt={"Logo"} />
                <Image src='images/Image1.svg' alt={"Logo"} />
                <Image src='images/Image3.svg' alt={"Logo"} />
              </div>
            </div>
          </div>


          <div >
            <Button btnClass={Styles.btnDropCall} color="bluePrimary" size={""} >Drop-off</Button>
            < Button btnClass={Styles.btnDropCall} color="solidPrimary" size="">
              <Icon type="iconphone" customClass={Styles.btnicon} />
              Call
            </Button>
          </div>
        </div>
      )}

    </div>
  )
}

