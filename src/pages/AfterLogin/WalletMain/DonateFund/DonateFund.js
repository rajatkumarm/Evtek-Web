import React from 'react';
import Styles from './DonateFund.module.scss'
import { Button, Icon, Image, Input, PageTitle, Radio, Text } from '../../../../component/shared'
import Layout from "../../../Container/Layout";
import { Link, useHistory } from 'react-router-dom';
const DonateFund = () => {
    const history = useHistory();
    const gotoChooseChairity = () => {
        history.push("/choose-charity");
    };
    return (
        <>
            <Layout>
                <div className={Styles.donateMain}>
                    <div className={Styles.pageTitle}>
                        <PageTitle type={"iconheand"} pagename={"Wallet"} modulename={"Donate Funds"} />
                    </div>
                    <div className={Styles.donateFund}>
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
                           
                            <div className={Styles.charity} onClick={gotoChooseChairity}>
                                <div>
                                    <Text variant={"xxxlText"} className={Styles.amountTxt} strong={"strong6"}  >Choose Charity <Icon type='iconi' customClass={Styles.iconCircle} /></Text>
                                </div>
                                <div className={Styles.charityBtm}>
                                    <Link>Choose a Charity<Icon customClass={Styles.iconFill} type='iconFill' /></Link>
                                </div>
                            </div>

                        </div>
                        <div className={Styles.amountBtm}>
                            <Text variant={"xxxlText"} strong={"strong6"} className={Styles.amountTxt}>Donation Amount</Text>
                            <div className={Styles.amtInput} >
                                <Input variant={'textInput'} />
                            </div>
                        </div>
                        <div className={Styles.walletBtn}>
                            <Button size="md01" variant="solidPrimary">Next</Button>
                        </div>

                    </div>
                </div>
            </Layout>
        </>
    );
}

export default DonateFund;
