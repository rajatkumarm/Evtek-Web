import React from 'react'
import Styles from './Transaction.module.scss';
import Icon from '../Icon';
import Text from '../Text/Text';
import Heading from '../Heading';
import { useState } from 'react';
export default function Transaction() {
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
                                <Icon customClass={Styles.leftIcon} type="iconUnion" />
                            </div>
                            <div className={Styles.middle}>
                                <div><Text variant={"xsText"} color={"grayPrimary"}>6/28/2021</Text></div>
                                <Heading headingType={"h4"}> Transaction </Heading >
                                <div className={Styles.middleRight}>
                                    <div className={Styles.donatedText}>
                                        <Text className={Styles.dollarText} variant={"xsText"} color={"ecoPrimary"} strong={"strong4"}><b> $34</b></Text>
                                        <Icon type="iconforward" />
                                        <Text variant={"msmText"}> deposited to bank acct 000X </Text>
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
                                <Icon customClass={Styles.leftIcon} type="iconUnion" />
                            </div>
                            <div className={Styles.middle}>
                                <div><Text variant={"xsText"} color={"grayPrimary"}>6/28/2021</Text></div>
                                <Heading headingType={"h4"} > Transaction </Heading >
                                <div className={Styles.middleRight}>
                                    <div className={Styles.donatedText}>
                                        <Text className={Styles.dollarText} variant={"xsText"} color={"ecoPrimary"} strong={"strong4"}><b> $34</b></Text>
                                        <Icon type="iconforward" />
                                        <Text variant={"msmText"}> deposited to bank acct 000X </Text>
                                    </div>
                                    <div className={Styles.dateTime}>
                                        <Text variant={"xsText"} color={"grayPrimary"}> at </Text>
                                        <Text variant={"msmText"}> 5:00 pm on Monday, June 28 2021 </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div><Text variant={"xsText"} color={"grayPrimary"} strong={"strong4"}>Transaction ID 2378462</Text></div>
                    </div>
                </div>
            )}
        </>
    )
}
