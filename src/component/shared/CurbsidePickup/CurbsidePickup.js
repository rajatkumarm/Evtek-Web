import React from 'react'
import Styles from './CurbsidePickup.module.scss';
import { useState } from "react";
import {
    Text,
    Icon,
    Heading,
    Input,
    Button



} from '../index'


function CurbsidePickup() {
    const [show, setShowInfo] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [hideConfirm, setHideConfirm] = useState(true);
const  ShowConfirm = () => {
    setShowConfirm(true)
    setHideConfirm(false)
}


    return (

        <div className={Styles.CurbSideWrapper}>
            <div className={Styles.pickupScheduled}>
                <div className={Styles.sScheduled}>
                    <div className={Styles.border}></div>
                    <div className={Styles.firstText}>
                        <Text className={Styles.headText} strong={"strong5"} variant="mdText">
                            6.17.2021 - Wednesday
                        </Text>
                        <Heading className={Styles.headText} variant="smText" strong={"strong7"} headingType={"h6"}>
                            recurring
                        </Heading>
                    </div>
                    <div className={Styles.mainText}>
                        <div>
                            <Text variant="xxxlText" className={Styles.bulkText} handleClick={() => setShowInfo(!show)} >Curbside Pickup</Text>
                        </div>
                        <div className={Styles.editMain}>
                            <Text variant="smText" className={Styles.editText}  >edit details</Text>
                            <Icon
                                type={"iconarrowdrop"}
                                customClass={Styles.headText}
                            />
                        </div>
                    </div>
                </div>
                <div className={Styles.Scheduled}>
                    {hideConfirm &&
                <>
                    <div className={Styles.notConfirmed}>
                        <Text variant="smText" family='raleway' strong='strong7' color="greyPrimary">
                            Not Confirmed
                        </Text>
                    </div>
                        <div className={Styles.confirm} onClick={ShowConfirm}>
                            <Button size={"btnMd03"} customClass={Styles.confirmBtn}> confirm
                                <Icon
                                    type={"iconFill"}
                                    customClass={Styles.headText}
                                />
                            </Button>
                        </div>
                </>}
                    {showConfirm &&
                        <div className={Styles.Scheduled}>
                            <div className={Styles.Confirmed}>
                                <Text family='raleway' color={"primary2"} variant="lgText" strong="strong7">Confirmed</Text>
                            </div>

                        </div>}
                </div>

            </div>
            { hideConfirm && (
            <>            {show && (
                <div className={Styles.second}>
                    <div className={Styles.secondContent}>
                        <Heading className={Styles.headText} headingType={"h6"}>
                            Items
                        </Heading>
                        <Text className={Styles.headText} variant="smText">
                            6.17.2021 - Wednesday
                        </Text>
                        <div className={Styles.inputText}>
                            <Heading className={Styles.headText} headingType={"h6"}>
                                Time
                            </Heading>
                            <Text className={Styles.headText} variant="smText">
                                Night (6 pm - 12 am)
                            </Text>
                        </div>
                        <div className={Styles.inputText}>
                            <div>
                                <Heading className={Styles.headText} headingType={"h6"}> Instructions for driver</Heading>
                            </div>
                            <div>
                                <Input
                                    type={"password"}
                                    className={Styles.passInput} placeholder={"Bins are at the side of the house..."}

                                /></div>
                        </div>
                        <div className={Styles.InptText}>
                            <Heading className={Styles.headText}>Payment method</Heading>
                            <div className={Styles.mainContent}>
                                <Text className={Styles.headText} variant="smText">
                                    Donate to Charity
                                </Text>
                                <div className={Styles.sureText}>
                                    <Text className={Styles.myText} variant={"mdText"} strong={"strong6"} color={"greenPrimary"}>
                                        Sure We Can
                                    </Text>
                                    <div className={Styles.fillIcon}>
                                        <Icon type={"iconFill"}  iconClass={"icon-web-app"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.buttons}>
                        <div>
                            <Button size={"btnLg"} color={"pinkPrimary02"}>Cancel Pickup</Button>
                        </div>
                        <Button size={"btnLg"} color={"primary02"}>Skip Pickup</Button>
                    </div>
                </div>)}
                </>
            )}

        
        </div>



    )
}

export default CurbsidePickup