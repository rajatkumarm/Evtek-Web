import React from 'react'
import Styles from './Reward.module.scss';
import Icon from '../Icon';
import Text from '../Text/Text';
import Heading from '../Heading';
import { useState } from 'react';


export default function Reward() {
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
        <>
            {showHide &&

                <div className={Styles.Recycleds}>
                    <div className={Styles.Recycled} onClick={showInfo}>
                        <div className={Styles.recycledLeft}>
                            <div className={Styles.left}>
                                <Icon customClass={Styles.leftIcon} type="iconReward" />
                            </div>
                            <div className={Styles.middle}>
                                <div><Text variant={"xsText"} color={"grayPrimary"}>6/2/2021</Text></div>
                                <Heading headingType={"h4"} > Reward: Create Leaderboard </Heading>
                                <div className={Styles.middleRight}>
                                    <div className={Styles.donatedText}>
                                        <Text className={Styles.dollarText} variant={"xsText"} color={"ecoPrimary"} strong={"strong4"}><b> 100 EcoPoints</b></Text>
                                        <Icon type="iconforward" />
                                        <Text className={Styles.donateText} variant={"msmText"}>EcoPoint balance</Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div><Text variant={"xsText"} color={"grayPrimary"} strong={"strong4"}>Transaction ID 2378462</Text></div>
                    </div>
                </div>
            }

            {show && (

                <div className={Styles.Recycleds}>

                    <div className={Styles.Recycled} onClick={hideInfo}>
                        <div className={Styles.recycledLeft}>
                            <div className={Styles.left}>
                                <Icon customClass={Styles.leftIcon} type="iconReward" />
                            </div>
                            <div className={Styles.middle}>
                                <div><Text variant={"xsText"} color={"grayPrimary"}>6/2/2021</Text></div>
                                <Heading headingType={"h4"} > Reward: Create Leaderboard </Heading>
                                <div className={Styles.middleRight}>
                                    <div className={Styles.donatedText}>
                                        <Text className={Styles.dollarText} variant={"xsText"} color={"ecoPrimary"} strong={"strong4"}><b> 100 EcoPoints</b></Text>
                                        <Icon type="iconforward" />
                                        <Text className={Styles.donateText} variant={"msmText"}>EcoPoint balance</Text>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>
                    <div className={Styles.clickbottom}>
                        <div className={Styles.pickup}>
                            <Text variant={"xsText"} color={"grayPrimary"}> at </Text>
                            <Text className={Styles.timeText} variant={"msmText"}> 5:00 pm on Monday, June 28 2021 </Text>
                        </div>
                        <div><Text variant={"xsText"} color={"grayPrimary"} strong={"strong4"}>Transaction ID 2378462</Text></div>
                    </div>
                </div>
            )}


        </>

    )
}
