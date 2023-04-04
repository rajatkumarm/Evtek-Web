import React from 'react';
import Styles from './SureDonate.module.scss'
import { useState } from "react";
import { Button, Icon, Image, Input, PageTitle, Radio, Text } from '../../../../component/shared'
import Layout from "../../../Container/Layout";
import { Link} from 'react-router-dom';
const SureDonate = () => {
    
    const [show, setShowInfo] = useState(false);
    const [showHide, setHide] = useState(true);
   
    const ShowInfo = () => {
        setShowInfo(true)
        setHide(false)



    }
    return (
        <>
            <Layout>
                <div className={Styles.donateMain}>
                    <div className={Styles.pageTitle}>
                        <PageTitle type={"iconheand"} pagename={"Wallet"} modulename={"Donate Funds"} />
                    </div>
                    
                    <div className={Styles.donateFund}>
                    {showHide && (
                            <div>
                        <div className={Styles.cashFund}>
                            <div>
                                <div className={Styles.donateHeadText}>
                                    <Text variant={"xxlText"}>Cash Balance</Text>
                                </div>
                                <div className={Styles.dollarTxt}>
                                    <Text className={Styles.dollarTxt}><Icon type='iconDollar' customClass={Styles.dollar} />30.28</Text>
                                </div>
                            </div>
                            <div>
                                <div className={Styles.donateHeadText}>
                                    <Text variant={"xxlText"}>EcoPoints</Text>
                                    <Image src='images/homeIcon.jpg' alt={"EcoPoints"} className={Styles.homeIconImg} />
                                </div>
                                <div className={Styles.ecoTxt}>
                                    <Text className={Styles.ecoTxt}>1,423 pts</Text>
                                </div>
                            </div>

                        </div>
                        
                                <div className={Styles.methodFund}>
                                    <Text className={Styles.methodTxt}>Use funds</Text>
                                    <div className={Styles.radioFirst}>
                                        <Radio checked="checked" size={"lgRadio"} id={"radioTwo"} className={Styles.radioOne} />
                                        <div>
                                            <Text>Use cash balance</Text>
                                        </div>
                                    </div>
                                    <div className={Styles.radioFirst}>
                                        <Radio size={"lgRadio"} id={"radioTwo"} className={Styles.radioOne} />
                                        <div>
                                            <Text>Use EcoPoints balance</Text>
                                        </div>
                                    </div>

                                    <div className={Styles.charity} >
                                        <div>
                                            <Text variant={"xxxlText"} className={Styles.amountTxt} strong={"strong6"}>Choose Charity<Icon type='iconi' customClass={Styles.iconCircle} /></Text>
                                        </div>
                                        <div className={Styles.charityBtm}>
                                            <Link>Sure We Can<Icon customClass={Styles.iconFill} type='iconFill' /></Link>
                                        </div>
                                    </div>

                                </div>
                                <div className={Styles.amountBtm}>
                                    <Text variant={"xxxlText"} strong={"strong6"} className={Styles.amountTxt}>Donation Amount</Text>
                                    <div className={Styles.amtInput} >
                                        <Input variant={'textInput'} placeholder="$10.28" />
                                    </div>
                                </div>
                                <div className={Styles.walletBtn}>
                                    <Button size="md01" variant="solidPrimary" btnHandler={ShowInfo}>Next</Button>
                                </div>
                            </div>)}



                        {show && (<div>
                              <div className={Styles.cashFund}>
                              <div>
                                  <div className={Styles.donateHeadText}>
                                      <Text variant={"xxlText"}>Cash Balance</Text>
                                  </div>
                                  <div className={Styles.dollarTxt}>
                                      <Text className={Styles.dollarTxt}><Icon type='iconDollar' customClass={Styles.dollar} />20.28</Text>
                                  </div>
                              </div>
                              <div>
                                  <div className={Styles.donateHeadText}>
                                      <Text variant={"xxlText"}>EcoPoints</Text>
                                      <Image src='images/homeIcon.jpg' alt={"EcoPoints"} className={Styles.homeIconImg} />
                                  </div>
                                  <div className={Styles.ecoTxt}>
                                      <Text className={Styles.ecoTxt}>1,423 pts</Text>
                                  </div>
                              </div>
  
                          </div>
                            <div className={Styles.doneBox}>
                                
                                <div className={Styles.doneText}>
                                    <Text variant="xxlText" strong="strong7">Confirmation</Text>
                                    <div className={Styles.sureText}>
                                        <Text variant="xxlText" strong="strong4">Thank you for donating $10.28 to </Text>
                                        <Text variant="xxlText" strong="strong7">Sure We Can </Text>
                                    </div>
                                    <div className={Styles.emailText}>
                                        <Text variant="xxlText" strong="strong4">Email confirmation sent to </Text>
                                        <Text variant="xxlText" strong="strong7">samdavid12@gmail.com</Text>
                                    </div>
                                </div>
                                <div className={Styles.walletBtn}>
                                    <Button size="md01" variant="primaryDisable">Done</Button>
                                </div>
                            </div>
                            </div>)}

                    </div>
                </div>
            </Layout>
        </>
    );
}

export default SureDonate;
