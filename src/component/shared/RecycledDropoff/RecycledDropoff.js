import React from 'react'
import Styles from './RecycledDropoff.module.scss';
import Icon from '../Icon';
import Text from '../Text/Text';
import Heading from '../Heading';
import { useState } from 'react';

export default function RecycledDropoff() {
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
                                <Icon customClass={Styles.mainIcon} type="iconrecycle" />
                            </div>
                            <div className={Styles.middle}>
                                <div><Text variant={"xsText"} color={"grayPrimary"}>6/28/2021</Text></div>
                                <Heading headingType={"h4"}>Recycled</Heading >
                                <div><Text variant={"xsText"} color={"grayPrimary"}><b>26 items</b> - 10xPlastic   •   31xAluminum   •   60xGlass</Text></div>
                                <div className={Styles.donatedText}>
                                    <Text className={Styles.dollarText} variant={"xsText"} color={"ecoPrimary"} strong={"strong4"}><b> $18 </b></Text>
                                    <Icon type="iconforward" />
                                    <Text className={Styles.donateText} variant={"xsText"}> deposited </Text>
                                    <Text className={Styles.pointText} variant={"xsText"} color={"ecoPrimary"} strong={"strong4"}>+ 206 EcoPoints</Text>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.RecycledMiddle} >
                            <div className={Styles.middleRight} >
                                <div className={Styles.top} ><Text variant={"msmText"} strong={"strong6"} >Dropoff</Text> </div>
                                <div><Text variant={"xsText"} color={"grayPrimary"} strong={"strong4"}>Transaction ID 2378462</Text></div>
                            </div>
                        </div>
                    </div>
                </div >
            }
            {show && (
                <div className={Styles.Recycleds} onClick={hideInfo}>
                    <div className={Styles.Recycled} >
                        <div className={Styles.recycledLeft}>
                            <div className={Styles.left}>
                                <Icon customClass={Styles.mainIcon} type="iconrecycle" />
                            </div>
                            <div className={Styles.middle}>
                                <Heading headingType={"h4"} >Recycled</Heading >
                                <div className={Styles.itemText}><Text variant={"smText"} color={"primary2"} strong={"strong7"}>101 items</Text></div>
                                <div><Text variant={"xsText"} color={"grayPrimary"}>10xPlastic   •   31xAluminum   •   60xGlass</Text></div>
                                <div className={Styles.moreText}><Text variant={"xsText"} color={"primary2"} strong={"strong6"}>see more metrics</Text></div>
                            </div>
                        </div>
                        <div className={Styles.RecycledMiddle}>
                            <div className={Styles.middleRight}>

                                <div className={Styles.recycledRight}>
                                    <div className={Styles.checkCircleicon}>
                                        <Icon customClass={Styles.tick} type="iconGreentick" />
                                    </div>
                                    <div className={Styles.noText}><Text variant={"xsText"} color={"grayPrimary"} strong={"strong4"}>no contaminated items</Text></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.clickbottom}>
                        <div className={Styles.pickup}>
                            <Text variant={"msmText"} color={"greenPrimary"} strong={"strong7"}> Pickup </Text>
                            <Text variant={"xsText"} color={"grayPrimary"}> from </Text>
                            <Text  variant={"msmText"}> 201 Evtek Drive, Brooklyn NY 11224 (home) </Text>
                            <div className={Styles.dateTime}>
                                <Text variant={"xsText"} color={"grayPrimary"}> at </Text>
                                <Text variant={"msmText"}> 5:00 pm on Monday, June 28 2021 </Text>
                            </div>
                        </div>
                        <div className={Styles.donated}>
                            <div className={Styles.donatedBoxmain}>
                                <div className={Styles.donatedBox}>
                                    <div className={Styles.dollarText}><Text variant={"msmText"}> $18 </Text></div>
                                    <Text className={Styles.pointText} variant={"xsText"} color={"primary2"} strong={"strong4"}> + 206 EcoPoints </Text>
                                </div>
                                <div className={Styles.donatedText}>
                                    <Icon type="iconforward" />
                                    <Text variant={"msmText"} color={"ecoPrimary"} strong={"strong7"}> donated </Text>
                                </div>
                            </div>
                            <div><Text variant={"xsText"} color={"grayPrimary"} strong={"strong4"}>Transaction ID 2378462</Text></div>
                        </div>
                    </div>
                </div>
            )}


        </>
    )
}
