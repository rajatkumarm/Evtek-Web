import React, { useEffect } from 'react';
import Styles from './TranferFund.module.scss'
import { Button, Icon, Image, Input, PageTitle, Radio, Text, TransferCash } from '../../../../component/shared'
import Layout from "../../../Container/Layout";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Spinner from '../../../Email/Spinner/Spinner';
import Tooltip from '@mui/material/Tooltip';

const TranferFund = () => {
    const [showCitifund, setShowCitifund] = useState(false)
    const [transferHide, setShowTransferHide] = useState(true)
    const [loading, setLoading] = useState(false);
    const [hideInput, setHideInput] = useState(true);
    const [showConnect, setShowConnect] = useState(false);
    const [showTransferring, setShowTransferring] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    useEffect(() => {
        if (loading) {
            setInterval(() => {
                setLoading(false);
                setShowCitifund(false)
            }, 1000);
        }
    }, [loading]);

    const onConnect = () => {
        setLoading(!loading);
        setTimeout(() => {
            setLoading(!loading);
            setHideInput(false);
        }, 0);
        setTimeout(() => {
            setShowTransferring(true)
        },1000);

    }
    const showCiti = () => {
        setShowCitifund(true)
        setShowTransferHide(false)
    }
    const forget = () => {
        setHideInput(false)
        setShowEmail(true)
    }
    const onNext = () => {
        setHideInput(true)
        setShowEmail(false)
        setShowCitifund(false)
        setShowTransferHide(true)

    }
    
    return (

        <Layout>
            <div className={Styles.tranferMain}>
                <div className={Styles.pageTitle}>
                    <PageTitle type={"iconXMLID"} pagename={"Wallet"} modulename={"Transfer Funds"} />
                </div>
                {transferHide &&
                    <div className={Styles.transferFund}>
                        <div className={Styles.cashFund}>
                            <Text variant={"xxlText"}>Cash Balance</Text><br />
                            <div className={Styles.dollarTxt}>
                                <Text family='raleway' strong='strong5' className={Styles.dollarTxt}>$30.28</Text>
                            </div>
                        </div>
                        <div className={Styles.methodFund}>
                            <Text variant={"xxxlText"} strong="strong6">Select a method</Text>
                            <div className={Styles.paypalMain}>
                                <Radio size={"xxxlgRadio"} variant={"radioBtnTWo"} id="radio" checked />
                                <div htmlFor="radio" className={Styles.paypal}>
                                    <Image htmlFor={"radio"} src='images/paypal.png' alt={"Paypal"} />
                                </div>
                            </div>
                            <div className={Styles.paypalBtm}>
                                <Radio className={Styles.radioBtnTWo} size={"xxxlgRadio"} variant={"radioBtnTWo"} id="radio0" />
                                <div className={Styles.paypalBtm0}>
                                    <div>
                                        <Text variant={"xlText"} color="greyPrimary">Transfer to bank</Text>
                                    </div>
                                    <div className={Styles.link}>
                                        <Link>connect to bank<Icon customClass={Styles.iconFill} type='iconFill' /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.amountBtm}>
                            <Text variant={"xxxlText"} className={Styles.amountTxt}>Transfer Amount</Text>
                            <div className={Styles.amtInput}>
                                $30.28
                            </div>
                        </div>
                        <div className={Styles.walletBtn}>
                            <Button size="md" btnHandler={showCiti} variant="solidPrimary">Next</Button>
                        </div>
                    </div>}
                {showCitifund &&
                    <div className={Styles.citiMain}>
                        <div className={Styles.bankMain}>
                            <div className={Styles.citiImg}>
                                <Image src='images/Citi.png' alt='citiImg' />
                            </div>
                            <form>
                                {hideInput &&
                                    <>
                                        <div>
                                            <Input placeholder={"username"} />
                                        </div>
                                        <div className={Styles.inputBtm}>
                                            <Input onClick={() => setShowConnect(true)} type={"password"} placeholder={"password"} />
                                        </div>
                                        <div>
                                            <Link onClick={forget} >forgot password</Link>
                                        </div>
                                        {showConnect &&
                                            <div className={Styles.citiBtn}>
                                                <Button btnHandler={onConnect} variant={"citiBtn"}>Connect</Button>
                                            </div>
                                        }
                                    </>
                                }
                                {showEmail && 
                                <>
                                        <div className={Styles.EmailMain}>
                                        <Input placeholder={"username"} />
                                        </div>
                                        <div className={Styles.citiBtn}>
                                                <Button btnHandler={onNext} variant={"citiBtn"}>Next</Button>
                                            </div>
                                </>
                                }

                                {loading &&
                                    <div className={Styles.spinnerMain}>
                                        <Spinner className={Styles.spinner} />
                                    </div>
                                }

                            </form>
                        </div>
                    </div>
                }
                {showTransferring &&
                    <TransferCash textChild={"30.28"}>
                        <div className={Styles.transferringMain}>
                            <div className={Styles.transferring}>
                                <Text strong={"strong6"} variant={"xxlText"} >Transferring to</Text>
                            <Tooltip title="Currently, Click event is not developed">
                                <div>
                                    <Text strong={"strong6"} variant={"smText"} color={"primary2"} className={Styles.transferringTxt}>edit</Text>
                                </div>
                                </Tooltip>
                            </div>
                            <div className={Styles.citiAccountText}>
                                <Text>Transfer to Citi Checking Account ending 0001</Text>
                            </div>
                            <div className={Styles.transferAmount}>
                                <Text strong={"strong6"} variant={"xxlText"} >Transfer Amount</Text>
                            <Tooltip title="Currently, Click event is not developed">
                                <div>
                                    <Text strong={"strong6"} variant={"smText"} color={"primary2"} className={Styles.transferringTxt}>edit</Text>
                                </div>
                                </Tooltip>
                            </div>
                            <Text family={"raleway"} variant={"xxlText"} >$30.28</Text>
                            <div className={Styles.walletBtn}>
                                <Button btnHandler={() => {setShowTransferring(false); setShowConfirmation(true);}} size="md" variant="solidPrimary">Next</Button>
                            </div>
                        </div>
                    </TransferCash>
                }
                {showConfirmation &&
                    <TransferCash textChild={"0.00"}>
                        <div className={Styles.transferringMain}>
                            <div className={Styles.transferring}>
                                <Text strong={"strong6"} variant={"xxlText"} >Confirmation</Text>
                            </div>
                            <div className={Styles.confirmation}>
                                <Text>$30.28 successfully transferred</Text>
                            </div>
                            <div className={Styles.transferAmount}>
                                <Text variant={"xxlText"} >Email confirmation sent to</Text>
                            </div>
                            <Text family={"raleway"} strong={"strong7"} variant={"xxlText"} >samdavid12@gmail.com</Text>
                            <div className={Styles.walletBtn}>
                                <Button size="md" variant="primaryDisable">Done</Button>
                            </div>
                        </div>
                    </TransferCash>
                }

            </div>
        </Layout>
    );
}

export default TranferFund;
