import React from 'react';
import { Icon, PageTitle, Text } from '../../../component/shared';
import Layout from '../../Container/Layout';
import Styles from './Setting.module.scss';
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
const Setting = () => {
    const [show, setShow] = useState(false)
    const [showHide, setShowHide] = useState(true);
    const [showOff, setShowOff] = useState(true);
    const [showOn, setShowOn] = useState(true);
    const [showOf, setShowOf] = useState(false);
    const [showOfff, setShowOfff] = useState(false);

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
                <div className={Styles.settingMain}>
                    <div>
                        <PageTitle type="iconchevron" modulename="Settings" pagename="Account" />
                    </div>
                    {showHide &&
                        <div className={Styles.settingContainer}>
                            <div className={Styles.boxContaint}>
                                <div><Text className={Styles.notifyText}>Edit profile</Text></div>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div><Icon type="iconFill" /></div></Tooltip>
                            </div>
                            <div className={Styles.boxContaint} onClick={showInfo}>
                                <div><Text className={Styles.notifyText}>Preferences</Text></div>
                                <Icon type="iconFill" />
                            </div>
                            <div className={Styles.boxContaint}>
                                <div><Text className={Styles.notifyText}>Change Password</Text></div>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div><Icon type="iconFill" /></div></Tooltip>
                            </div>
                            <div className={Styles.boxContaint}>
                                <div><Text className={Styles.notifyText}>Payment methods</Text></div>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div><Icon type="iconFill" /></div></Tooltip>
                            </div>
                            <div className={Styles.btmMarg}>
                                <div className={Styles.boxContaint}>
                                    <div><Text className={Styles.moreText}>More</Text></div>
                                </div>
                                <div className={Styles.boxContaint}>
                                    <div><Text className={Styles.notifyText}>About Evtek</Text></div>
                                    <Tooltip title="Currently, Click event is not developed">
                                        <div><Icon type="iconFill" /></div></Tooltip>
                                </div>
                                <div className={Styles.boxContaint}>
                                    <div><Text className={Styles.notifyText}>Privacy Policy</Text></div>
                                    <Tooltip title="Currently, Click event is not developed">
                                        <div><Icon type="iconFill" /></div></Tooltip>
                                </div>
                                <div className={Styles.boxContaint}>
                                    <div><Text className={Styles.notifyText}>Terms and Conditions</Text></div>
                                    <Tooltip title="Currently, Click event is not developed">
                                        <div><Icon type="iconFill" /></div></Tooltip>
                                </div>
                            </div>
                        </div>
                    }
                    {show && (
                        <div className={Styles.settingGami} >
                            <div className={Styles.boxContaint} onClick={() => setShowOff(!showOff)}>
                                <div><Text className={Styles.notifyText } onClick={hideInfo}>Gamification</Text></div>
                                <div><Text className={Styles.notifyTex}color={showOff ? "greenPrimary" : "grayPrimary"} variant={"lgText"}>{showOff ? "on" : "off"}</Text></div>
                            </div>
                            <div className={Styles.boxContaint}   onClick={() => setShowOn(!showOn)}>
                                <div><Text className={Styles.notifyText}>Preference 2</Text></div>
                                <div><Text className={Styles.notifyTex} color={showOn ? "greenPrimary" : "grayPrimary"} variant={"lgText"}>{showOn ? "on" : "off"}</Text></div>
                            </div>
                            <div className={Styles.boxContaint}onClick={() => setShowOf(!showOf)}>
                                <div><Text className={Styles.notifyText}>Preference 3</Text></div>
                                <div><Text className={Styles.notifyText} color={showOf ? "greenPrimary" : "grayPrimary"} variant={"lgText"}>{showOf ? "on" : "off"}</Text></div>
                            </div>
                            <div className={Styles.boxContaint}onClick={() => setShowOfff(!showOfff)}>
                                <div><Text className={Styles.notifyText}>Preference 4</Text></div>
                                <div><Text className={Styles.notifyText} color={showOfff ? "greenPrimary" : "grayPrimary"} variant={"lgText"}>{showOfff ? "on" : "off"} </Text></div>
                            </div>
                        </div>
                    )}
                </div>
            </Layout>
        </>
    );
}

export default Setting;
