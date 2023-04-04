import React from 'react';
import { PageTitle, Text, Radio, Input, Button,Image } from '../../../../component/shared';
import Layout from '../../../Container/Layout';
import Styles from './RedeemEcoPoint.module.scss';
import { useState } from "react"

const RedeemEcoPoint = () => {
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
            <Layout>

                <div className={Styles.redeemMain}>
                    <div className={Styles.pageTitle}>
                        <PageTitle type={"iconcurrency"} pagename={"Wallet"} modulename={"Redeem EcoPoints"} />
                    </div>

                    {showHide &&

                        <div className={Styles.transferFund}>
                            <div className={Styles.cashFund}>
                                <div className={Styles.donateHeadText}>
                                    <Text variant={"xxlText"}>EcoPoints</Text>
                                    <Image src='images/homeIcon.jpg' alt={"EcoPoints"} className={Styles.homeIconImg} />
                                </div>
                                <div className={Styles.ecoTxtMain}>
                                    <Text className={Styles.ecoTxt}>1,423 pts</Text>
                                </div>
                            </div>
                            <div className={Styles.amountBtm}>
                                <div className={Styles.amtInput}>
                                    <label className={Styles.labelBank}>Enter Cash Back Amount</label>
                                    <div className={Styles.inputMarg}>
                                        <Input className={Styles.ecoPointsTxt} placeholder={"$14.23"} variant={"radioInput"} />
                                    </div>
                                    <div className={Styles.maxDiv}>
                                        <Text className={Styles.maxText}>Max Cash Back</Text>
                                    </div>
                                </div>
                                <div className={Styles.middleIcon}>
                                    {/* <Icon type={"equalIcon"}/> */}
                                    <Image src='images/equalImg.svg' alt={"Logo"} />
                                </div>
                                <div className={Styles.amtInput}>
                                    <label className={Styles.ecoText}>EcoPoints</label>
                                    <div className={Styles.inputMarg}>
                                        <Input className={Styles.ecoPointsTxt} placeholder={"1,423"} variant={"radioInput"} />
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.methodFund}>
                                <Text className={Styles.methodTxt}>Where do you want it to go?</Text>
                                <div className={Styles.paypalMain}>
                                    <Radio className={Styles.radioBtnTWo} variant={"xxlgRadio"} id="radio0" checked />
                                    <div className={Styles.paypalBtm0}>
                                        <div>
                                            <Text >Transfer to bank</Text>
                                        </div>
                                        <div>
                                            <Text className={Styles.tranferTxt}>Account ending in 0111</Text>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.paypalBtm}>
                                    <Radio variant={"xxlgRadio"} id="radio" />
                                    <div className={Styles.paypal}>
                                        <Image src='images/paypal.png' alt={"Paypal"} />
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.walletBtn} onClick={showInfo}>
                                <Button size="md01" variant="solidPrimary">Confirm</Button>
                            </div>

                        </div>
                    }

                    {show && (

                        <div>
                            <div className={Styles.transferFund}>
                                <div className={Styles.cashFund}>
                                    <div className={Styles.donateHeadText}>
                                        <Text variant={"xxlText"}>EcoPoints</Text>
                                        <Image src='images/homeIcon.jpg' alt={"EcoPoints"} className={Styles.homeIconImg} />
                                    </div>
                                    <div className={Styles.ecoTxtMain}>
                                        <Text className={Styles.ecoTxt}> 0 pts</Text>
                                    </div>
                                </div>
                                <div className={Styles.methodFund}>
                                    <div className={Styles.methodHead}>
                                        <Text className={Styles.methodTxt}>Confirmation</Text>
                                    </div>
                                    <div className={Styles.methodPara}>
                                        <Text className={Styles.paraTxt}>$14.23 have been transferred to your bank account. Please allow 5-6 days for processing</Text>
                                        <div className={Styles.methodMail}><Text className={Styles.MailTxt}>Email confirmation sent to</Text></div>
                                        <Text className={Styles.methodTxt}>samdavid12@gmail.com</Text>


                                    </div>

                                </div>
                                <div className={Styles.walletBtnTwo} onClick={hideInfo}>
                                    <Button size="md01" variant="primaryDisable">Done</Button>
                                </div>

                            </div>
                        </div>
                    )}

                </div>
            </Layout>
        </>

    );
}

export default RedeemEcoPoint;
