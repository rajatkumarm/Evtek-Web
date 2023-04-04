import React from 'react'
import { useHistory } from 'react-router-dom';
import { Input, PageTitle, Text, Icon, Heading } from '../../../component/shared';
import Layout from '../../Container/Layout';
import Styles from './WebappEvtek.module.scss';
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
export const WebappEvtek = () => {
    const history = useHistory();
    const gotoAbout = () => {
        history.push("/about-account");
    };
    const gotoGuaranty = () => {
        history.push("/guaranteed");
    };
    const [active, setActiveNow] = useState(0);
    return (
        <>
            <Layout>
                <div className={Styles.webMainevtek}>
                    <div>
                        <div>
                            <PageTitle type="iconchevron" modulename="Using the Web App" pagename="Account" />
                        </div>
                        <div className={Styles.webDetailpage}  >
                            <div className={Styles.webOften}>
                                <Heading className={Styles.blogMainText} headingType={"h3"} >How often/what day does Evtek pick up in my area?</Heading>
                            </div>
                            <div className={Styles.webTitle}>
                                <div className={Styles.webContainer}>
                                    <Text className={Styles.blogText} variant={"lgText"} color={"greyPrimary"}>Written by Yoni S </Text>
                                </div>
                                <div className={Styles.webContainer}>
                                    <Text className={Styles.blogText} variant={"lgText"} color={"greyPrimary"}> . </Text>
                                </div>
                                <div className={Styles.webContainer}>
                                    <Text className={Styles.blogText} variant={"lgText"} color={"greyPrimary"}>updated 1 week ago </Text>
                                </div>
                            </div>
                            <div className={Styles.webContainerrecycle}>
                                <Text className={Styles.blogText}>We pickup every day besides Sunday from our Members who have scheduled a Bulk Pickup as long as you’ve confirmed your pickup between 48 to 24 hours before its scheduled date. Bulk Pickups happen within the time window from 8am-midnight. </Text>
                            </div>
                            <div className={Styles.webContainerrecycle}>
                                <Text className={Styles.blogText}>We pickup every other Tuesday from our Members who have scheduled a Curbside Pickup as long as you’ve confirmed your pickup between 48 to 24 hours before your Curbside Pickup. Curbside Pickups will always occur between 6pm-midnight.</Text>
                            </div>
                            <div className={Styles.webContainerrecycle}>
                                <Text className={Styles.blogText}>You can confirm your next Bulk or Curbside Pickup up until 6pm the night before your pickup date by selecting the date on the </Text>
                            </div>

                        </div>
                        <div className={Styles.bottomText}>
                            <div onClick={gotoAbout}>
                                <Text className={Styles.btmText}>About Evtek: Process & Technology</Text>
                            </div>
                            <div className={Styles.btmMarg} onClick={gotoGuaranty}>
                                <Text className={Styles.btmText}>Evtek’s 100% Recycled Guarantee</Text>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.faqMain}>
                        <div>
                            <div className={Styles.blog}>
                                <Icon type="iconchevron" click={() => history.goBack()} />
                                <Text className={Styles.bgMainText}>FAQs</Text>
                            </div>
                            <div className={Styles.faqInput}>
                                <Input className={Styles.inputTextWeb}  placeholder='search for a keyword' />
                            </div>

                            <div className={Styles.faqContainer}>
                                <div className={Styles.headFaq}>
                                    <Heading className={Styles.blogMainText} headingType={"h3"} color={"secondary"}>Recycling</Heading>
                                </div>
                                <div onClick={() => { setActiveNow(0) }} className={` ${Styles.activeClr} ${active === 0 ? Styles.activeZero : ''}`}>
                                <div className={Styles.boxFa}>

                                        <div className={Styles.textFaq}  >
                                            <Text className={Styles.blogText} color={active === 0 ? "ecoPrimary" : "secondary"}>How often/what day does Evtek pick up in my area?</Text>
                                        </div>
                                        <div className={Styles.btmImg}>
                                            <Icon customClass={Styles.mainBox} type="iconFill" />
                                        </div>
                                    </div>

                                </div>
                                <div >
                                    <div className={Styles.boxFaq}>
                                    <Tooltip title="Currently, Click event is not developed">
                                        <div className={Styles.textFaq} >
                                            <Text className={Styles.blogText} color={"secondary"}>What time of day will my Bulk Pickup happen?</Text>
                                        </div>
                                        </Tooltip>
                                        <div className={Styles.btmImg}>
                                            <Icon type="iconFill" />
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>What time of day will my Curbside Pickup happen?</Text>
                                    </div>
                                    </Tooltip>
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>
                                   
                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>How do I schedule a pickup?</Text>
                                    </div>
                                    </Tooltip>
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>

                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>Where should I put my Evtek EcoSacks and EcoKrates?</Text>
                                    </div>
                                    </Tooltip>
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>

                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>How do I confirm a pickup?</Text>
                                    </div>
                                    </Tooltip>
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>

                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>Can I cancel my pickup?</Text>
                                    </div>
                                    </Tooltip>
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>

                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>Can I automatically confirm all pickups?</Text>
                                    </div>
                                    </Tooltip>
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>

                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>What should I do if I think my pickup may have been missed?</Text>
                                    </div>
                                    </Tooltip>
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>

                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>What is an EcoSack?</Text>
                                    </div>
                                    </Tooltip>
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>

                </div>
            </Layout>
        </>
    );
}
