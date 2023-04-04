import React from 'react';
import { Input, PageTitle, Text, Image } from '../../../component/shared';
import Layout from '../../Container/Layout';
import Styles from './WebApp.module.scss';
import { useState } from "react"
import { useHistory } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip'

const WebApp = () => {
    const history = useHistory();
    const gotoApprecycle = () => {
        history.push("/webapprecycle");
    };
    const gotoYourecycle = () => {
        history.push("/whatcan-recycle");
    };
    const gotoEarn = () => {
        history.push("/ways-toearn");
    };
    const gotoAbout = () => {
        history.push("/about-account");
    };
    const gotoGuaranty = () => {
        history.push("/guaranteed");
    };
    const gotoWork = () => {
        history.push("/workleader");
    };
    const [show, setShow] = useState(false)


    const showInfo = () => {
        setShow(true)

    }
    return (
        <>
            <Layout>
                <div className={Styles.webMain}>
                    <div>
                        <div>
                            <PageTitle type="iconchevron" modulename="Using the Web App" pagename="Account" />
                        </div>
                        <div className={Styles.webDetail}  >
                            <Tooltip title="Currently, Click event is not developed">
                                <div>
                                    <div className={Styles.webContainer}>

                                        <div> <Text className={Styles.blogText}>App Overview</Text></div>

                                        <div className={Styles.appImg}><Image src='images/appover.png' alt='bottel' /></div>
                                    </div>
                                </div>
                            </Tooltip>

                            <div className={Styles.webContainer} onClick={gotoYourecycle}>
                                <Text className={Styles.blogText}>What can you <span className={Styles.reycleHead}>recycle</span>?</Text>
                                <div className={Styles.webImg}><Image src='images/reone.png' alt='bottel' /></div>
                                <div className={Styles.webImgo}><Image src='images/retwo.png' alt='bottel' /></div>
                                <div className={Styles.webImgt}><Image src='images/rethree.png' alt='bottel' /></div>
                            </div>
                            <Tooltip title="Currently, Click event is not developed">
                                <div>
                                    <div className={Styles.webContainer}>

                                        <div><Text className={Styles.blogText}>How to prepare for a <span className={Styles.reycleHead}>Pickup</span></Text></div>

                                        <div className={Styles.webTruck}><Image src='images/pitruck.png' alt='bottel' /></div>
                                    </div>
                                </div>
                            </Tooltip>
                            <div className={Styles.webContainer} onClick={gotoWork}>
                                <Text className={Styles.blogText}>How <span className={Styles.reycleHead}>Leaderboards</span> work</Text>
                                <div className={Styles.webTro}><Image src='images/leone.png' alt='bottel' /></div>
                                <div className={Styles.webTrot}><Image src='images/letwo.png' alt='bottel' /></div>
                            </div>
                            <div className={Styles.webContainer} onClick={gotoEarn}>
                                <Text className={Styles.blogText}>Ways to earn <span className={Styles.reycleHead}>EcoPoints</span></Text>
                                <div className={Styles.webEcoo}><Image src='images/ecoone.png' alt='bottel' /></div>
                                <div className={Styles.webEcot}><Image src='images/ecotwo.png' alt='bottel' /></div>
                            </div>

                            <Tooltip title="Currently, Click event is not developed">
                                <div>
                                    <div className={Styles.webContainer}>
                                        <div><Text className={Styles.blogText}>How <span className={Styles.reycleHead}>Impact Badges</span> work</Text></div>
                                        <div className={Styles.webIm}><Image src='images/imcar.png' alt='bottel' /></div>
                                    </div>
                                </div>
                            </Tooltip>

                            <div className={Styles.webContainer} onClick={showInfo}>
                                <Text className={Styles.blogTexts} ><span className={Styles.reycleHead}>FAQs</span></Text>
                                <div className={Styles.webFa}><Image src='images/faqone.png' alt='bottel' /></div>
                                <div className={Styles.webFaq}><Image src='images/faqtwo.png' alt='bottel' /></div>
                            </div>
                        </div>
                        <div className={Styles.bottomText}>
                            <div onClick={gotoAbout}>
                                <Text className={Styles.btmText} >About Evtek: Process & Technology</Text>
                            </div>
                            <div className={Styles.btmMarg} onClick={gotoGuaranty}>
                                <Text className={Styles.btmText}>Evtek’s 100% Recycled Guarantee</Text>
                            </div>
                        </div>
                    </div>
                    {show && (
                        <div className={Styles.faqMain}>
                            <div>
                                <div className={Styles.blog}>
                                    <Text className={Styles.bgMainText} variant={"xx4Text"} color={"secondary"}>FAQs</Text>
                                </div>
                                <div className={Styles.faqInput}>
                                    <Input className={Styles.inputTextWeb} variant="faqInput" placeholder='search for a keyword' />
                                </div>


                                <div className={Styles.faqContainer}>
                                    <div className={Styles.boxFaq} onClick={gotoApprecycle}>
                                        <div className={Styles.textFaq}>
                                            <Text className={Styles.blogMainText} strong={"strong6"} variant={"smText"}>Recycling</Text>
                                        </div>
                                        <div className={Styles.btmImgs}>
                                            <Image src='images/Garbage.png' alt='Garbage.png' />
                                        </div>
                                    </div>
                                    <div className={Styles.boxFaq}>
                                        <Tooltip title="Currently, Click event is not developed">
                                            <div>
                                                <div className={Styles.textFaq}>
                                                    <Text className={Styles.blogMainText} strong={"strong6"} variant={"smText"}>Gamification Features</Text>
                                                </div>

                                                <div className={Styles.btmImg}>
                                                    <Image src='images/Filledoutline.png' alt='/Filledoutline' />
                                                </div>
                                            </div>
                                        </Tooltip>

                                    </div>
                                </div>
                                <div className={Styles.faqContainer}>
                                    <div className={Styles.boxFaq}>
                                        <Tooltip title="Currently, Click event is not developed">
                                            <div>
                                                <div className={Styles.textFaq}>
                                                    <Text className={Styles.blogMainText} strong={"strong6"} variant={"smText"}>Wallet</Text>
                                                </div>

                                                <div className={Styles.btmImg}>
                                                    <Image src='images/Cash.png' alt='Cash' />
                                                </div>
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <div className={Styles.boxFaq}>
                                        <Tooltip title="Currently, Click event is not developed">
                                            <div>
                                                <div className={Styles.textFaq}>
                                                    <Text className={Styles.blogMainText} strong={"strong6"} variant={"smText"}>Everything Else</Text>
                                                </div>
                                                <div className={Styles.btmImg}>
                                                    <Image src='images/Information.png' alt='Information' />
                                                </div>
                                            </div>
                                        </Tooltip>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </Layout>
        </>
    );
}

export default WebApp;
