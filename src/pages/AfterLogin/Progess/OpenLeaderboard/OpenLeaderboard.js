import React from 'react'
import Styles from './OpenLeaderboard.module.scss'
import Layout from '../../../Container/Layout'
import { useState } from "react";
import { PageTitle, LeaderList, Input, Text, Heading, Checkbox, Button, Radio, Image,Select,SelectItem } from '../../../../component/shared'


const OpenLeaderBoard = () => {
    const [show, setShowInfo] = useState(false);
    const [showHide, setHide] = useState(true);
    const [showjoined, setShowjoined] = useState(false);

    const ShowInfo = () => {
        setShowInfo(true)
        setHide(false)
    }
    const HideJoined = () => {
        setShowInfo(false)
        setShowjoined(true)
    }
    return (

        <Layout>
            <div className={Styles.openLeader}>
                <div className={Styles.JoinLeaderboards}>
                    <div className={Styles.headerMain}>
                        <PageTitle type="iconchevron" pagename="Recycle" modulename="Join an Open Leaderboard" />
                    </div>
                    {showHide && (
                        <div className={Styles.joinMain}>
                            <div className={Styles.heading}>
                                <Heading variant={"smText"} className={Styles.headSearch} >Search for a Leaderboard </Heading>
                                <div>
                                    <Input className={Styles.textInput} placeholder={"green, animal wellfare, homeless shelter ..."} />
                                </div>
                            </div>
                            <div className={Styles.dropBox}>
                                  <Select className={Styles.dropDown}>
                                    <SelectItem className={Styles.Item}>Show all time periods</SelectItem>
                                    <SelectItem className={Styles.Item}>Show all time periods</SelectItem>
                                </Select>
                                <div className={Styles.texttwo}>
                                    <Text variant={"smText"} color={"grayPrimary"} className={Styles.first} >sort by: </Text>
                                    <Select className={Styles.sortDrop}>
                                    <SelectItem className={Styles.Item}>date</SelectItem>
                                    <SelectItem className={Styles.Item}>date</SelectItem>
                                </Select>
                                </div>
                            </div>
                            <div className={Styles.MixText}>
                                <Text variant={"smText"} className={Styles.first} > Showing near you </Text>
                                <Text variant={"smText"} color={"primary2"} className={Styles.first} > 13 Leaderboards </Text>
                                <Text variant={"smText"} className={Styles.first} > (zipcode 11223)</Text>
                                <div className={Styles.editText}  >
                                    <Text variant={"smText"}> edit </Text>
                                </div>
                            </div>
                            <div className={Styles.LeaderBox} onClick={ShowInfo} >
                                <LeaderList src='images/Rectangles.png' heading={"Tillary Street"} para={"12 members • 1 month period duration"}
                                    textTwo={"Reward: Membership fee pool"} textThird={"Current period ending 8.15.2021"}
                                    textFourth={"Membership fee "} textFifth={" 500 EcoPoints"} type={"iconarrowdrop"} />
                            </div>
                            <div className={Styles.LeaderBox}>
                                <LeaderList src='images/Boyscount.png' heading={"Boyscouts"} para={"12 members • 1 month period duration"}
                                    textTwo={"Reward: Membership fee pool"} textThird={"Current period ending 8.15.2021"}
                                    textFourth={"Membership fee "} textFifth={" 500 EcoPoints"} type={"iconarrowdrop"} />
                            </div>
                            <div className={Styles.LeaderBox}>
                                <LeaderList src='images/Beach.png' heading={"Beach Cleanup"} para={"12 members • 1 month period duration"}
                                    textTwo={"Reward: Membership fee pool"} textThird={"Current period ending 8.15.2021"}
                                    textFourth={"Membership fee "} textFifth={" 500 EcoPoints"} type={"iconarrowdrop"} />
                            </div>
                        </div>)}
                </div>
                {show && (

                    <div className={Styles.secondBox}>
                        <div className={Styles.imageCount}>
                            <Image src='images/Rectangles.png' />
                            <div className={Styles.texBox}>
                                <div>
                                    <div>
                                        <Text variant="big03Text" strong="strong6" className={Styles.first}> Tillary Street</Text>
                                    </div>
                                    <Text variant={"xxlText"} color={"primary2"} className={Styles.first} >  20 member limit </Text></div>
                                <div className={Styles.monthText}><Text variant={"xxlText"} className={Styles.first} >  12 members • 1 month period duration </Text></div>
                                <Text variant={"xxlText"} className={Styles.first} >  Reward: Membership fee pool </Text>
                                <div className={Styles.currentText}><Text variant={"xxlText"} strong={"strong6"} className={Styles.first} >  Current period ending 8.15.2021 </Text></div>

                            </div>
                        </div>
                        <div className={Styles.FeesBox}>

                            <Text variant={"xxlText"} strong={"strong6"} className={Styles.first} >  Membership fee </Text>
                            <div><Text variant={"xx5Text"} color={"primary2"} strong={"strong7"} className={Styles.first} >  500 EcoPoints </Text></div>
                            <div className={Styles.methodtext}>
                                <Text variant={"xxlText"} strong={"strong5"} className={Styles.first} >  Select payment method: </Text>
                            </div>
                            <div className={Styles.radiobtnOne}>
                                <Radio size={"lgRadio"} id={"radioOne"} className={Styles.radioOne} label={"EcoPoint balance"} />
                            </div>
                            <div className={Styles.radiobtnTwo}>
                                <Radio checked="checked" size={"lgRadio"} id={"radioTwo"} className={Styles.radioTwo} label={"Curbside Pickup"} />
                                <Text variant={"smText"} color={"primary2"} className={Styles.ecoPointText} > (500 EcoPoints = $5)</Text>
                            </div>
                            <div className={Styles.radiobtnThree}>
                                <Radio checked="checked" size={"lgRadio"} id={"radioThree"} className={Styles.radioThree} label={"Other"} />

                            </div>
                        </div>
                        <div className={Styles.Checksection}>
                            <Checkbox id="okay" onChange="onChange" />
                            <Text color="grayPrimary" variant="smText" strong="strong4" className={Styles.pickupText}>  I understand that a Bulk Pickup requires at least 2500 items.</Text>
                        </div>
                        <div className={Styles.mainBtn}>
                            <Button variant="solidPrimary" size={"btnSm"} btnHandler={HideJoined}>Join</Button>
                        </div>
                    </div>)}

                {showjoined && (
                    <div className={Styles.thirdOpenLeaderBoard}>

                        <div>
                            <div className={Styles.imageBox}>
                                <Image src='images/Rectangles.png' alt='leaves' />
                                <div className={Styles.texBox}>
                                    <div>
                                        <div>
                                            <Text variant="big03Text" strong="strong6" className={Styles.first}> Tillary Street</Text>
                                        </div>
                                        <Text variant={"xxlText"} color={"primary2"} className={Styles.first} >  20 member limit </Text></div>
                                    <div className={Styles.monthText}><Text color="grayPrimary" variant={"xxlText"} className={Styles.first} >  12 members • 1 month period duration </Text></div>
                                    <Text variant={"xxlText"} color="greySecondary" className={Styles.first} >  Reward: Membership fee pool </Text>
                                    <div className={Styles.currentText}><Text variant={"xxlText"} strong={"strong6"} className={Styles.first} >  Current period ending 8.15.2021 </Text></div>

                                </div>
                            </div>
                            <div className={Styles.openText}>

                                <Text variant="big03Text" color="primary2" strong="strong6" className={Styles.first}> Joined!</Text>
                                <div className={Styles.closeText}>
                                    <Text variant="smText" strong="strong4" className={Styles.pickupText}>
                                        You are now a member of the Tillary Street Leaderboard!
                                    </Text>
                                </div>

                                <div>
                                    <Text variant="smText" strong="strong4" className={Styles.pickupText}>The Leaderboard closes on </Text>
                                    <Text variant="smText" strong="strong6" className={Styles.pickupText}> 8.15.2021</Text>
                                </div>
                                <div className={Styles.confirmText}>
                                    <Text variant="smText" strong="strong4" className={Styles.pickupText}> Email confirmation sent to</Text>
                                    <Text variant="smText" strong="strong6" className={Styles.pickupText}> samdavid12@gmail.com </Text>

                                </div>
                            </div>
                            <div className={Styles.openBtn}>
                                <Button variant="solidPrimary" size={"btnMd06"}>See Your Leaderboards</Button>
                            </div>
                        </div>

                    </div>)}
            </div>
        </Layout>
    )
}

export default OpenLeaderBoard
