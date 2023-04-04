import React from 'react'
import Styles from './PrivateLeaderBoard.module.scss'
import Layout from '../../../Container/Layout'
import { CopyToClipboard } from 'pivotal-ui/react/copy-to-clipboard';
import { PageTitle, Text, Checkbox, Button, Radio, Image } from '../../../../component/shared'

const PrivateLeaderBoard = () => {
    return (
        <Layout>
            <div className={Styles.wrapper}>
                <div>
                    <div className={Styles.JoinLeaderboards}>
                        <div className={Styles.headerMain}>
                            <PageTitle type="iconchevron" pagename="Recycle" modulename="Join an Private Leaderboard" />
                        </div>
                        <div className={Styles.topBox}>
                            <div className={Styles.codeText}>
                                <Text variant="xx3Text" strong="strong6" className={Styles.first}>Enter code</Text>
                                <Text>We sent you a code in your invitation email</Text>
                            </div>
                            <div className={Styles.codeSection}>
                                <CopyToClipboard className={Styles.text} text="SAM87263" tooltip="copied!">5476</CopyToClipboard>
                            </div>
                        </div>

                    </div>
                </div>
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
                        <Button variant="solidPrimary" size={"btnSm"} >Join</Button>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default PrivateLeaderBoard
