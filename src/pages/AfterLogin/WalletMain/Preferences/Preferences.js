import React, { useState } from 'react';
import Styles from './Preferences.module.scss';
import Layout from '../../../Container/Layout'
import { Button, Heading, Icon, PageTitle, Text } from '../../../../component/shared';
import Tooltip from '@mui/material/Tooltip';

const Preferences = () => {
const [showOff, setShowOff] = useState(true);
    return (
        <Layout>
            <div className={Styles.mainPrefrence}>
                <div>
                    <PageTitle type={"iconUnion"} pagename={"Wallet"} modulename={"Preferences"} />
                </div>
                <div className={Styles.methodsMain}>
                    <div>
                        <Heading className={Styles.heading} headingType={"h4"}>Transfer Methods</Heading>
                        <div className={Styles.transferMethods}>
                            <div>
                                <Text>Citi Bank Checking Account</Text>
                            </div>
                            <div>
                                <Text color={"greyPrimary"}>ending 0001</Text>
                            </div>
                        </div>
                        <div className={Styles.transferMethods}>
                            <div className={Styles.addTransfer}>
                                <Text>Paypal</Text>
                                <Icon customClass={Styles.correctIcon} type="iconGreentick" />
                            </div>
                            <div>
                                <Text color={"greyPrimary"}>samdavid12@gmail.com</Text>
                            </div>
                        </div>
                        <Tooltip title="Currently, Click event is not developed">
                            <div className={Styles.transferMethods}>
                                <div className={Styles.addTransfer}>
                                    <Text>Add a transfer method</Text>
                                    <Icon customClass={Styles.transferIcon} type="iconFill" />
                                </div>
                            </div>
                        </Tooltip>
                        <div className={Styles.autoDonate}>
                            <div>
                                <Text variant={"lgText"}>Auto Donate</Text>
                            </div>
                            <div className={Styles.donateText} onClick={() => setShowOff(!showOff)}>
                                <Text className={showOff ? Styles.sureText : Styles.disable} color={showOff ? "greenPrimary" : "grayPrimary"} variant={"smText"}>Sure We Can</Text>
                                <Text className={Styles.contentOn} color={showOff ? "greenPrimary" : "grayPrimary"} variant={"lgText"}>{showOff ? "on" : "off"}</Text>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.paymentMain}>
                        <Heading className={Styles.heading} headingType={"h4"}>Payment Methods</Heading>
                        <div className={Styles.transferMethods}>
                            <div className={Styles.methodMain}>
                                <div className={Styles.addTransfer}>
                                    <Text>American Express ending in 1943</Text>
                                    <Icon customClass={Styles.correctIcon} type="iconGreentick" />
                                </div>
                            </div>
                            <div>
                                <Text color={"greyPrimary"}>Exp 09/2025</Text>
                            </div>
                        </div>
                        <div className={Styles.transferMethods}>
                            <div className={Styles.methodMain}>
                                <Text>American Express ending in 1943</Text>
                            </div>
                            <div>
                                <Text color={"greyPrimary"}>Exp 09/2025</Text>
                            </div>
                        </div>
                        <div className={Styles.transferMethods}>
                            <div className={Styles.methodMain}>
                                <Text>Paypal</Text>
                            </div>
                            <div>
                                <Text color={"greyPrimary"}>samdavid12@gmail.com</Text>
                            </div>
                        </div>
                            <div className={Styles.transferMethods}>
                        <Tooltip title="Currently, Click event is not developed">
                                <div className={Styles.addTransfer}>
                                    <Text>Add a transfer method</Text>
                                    <Icon customClass={Styles.transferIcon} type="iconFill" />
                                </div>
                        </Tooltip>
                            </div>
                    </div>
                </div>
                <div className={Styles.saveBtn}>
                    <Button size={"btnXxxlg"}>Save</Button>
                </div>
            </div>
        </Layout>
    );
}

export default Preferences;
