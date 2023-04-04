import React from 'react'
import Styles from './Leaderboards.module.scss'
import { PageTitle, Image, Text, Icon, OtherLeaderBoard, EvtekLeaderBoard, Heading, ModelsList } from '../../../../component/shared'
import Layout from '../../../Container/Layout'
import { Modal } from "@material-ui/core";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Leaderboards() {
    const [show, setShow] = useState(false);
    const [showModle, setShowModle] = useState(false);

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    const modleOpen = () => setShowModle(true);
    const modleClose = () => setShowModle(false);

    const history=useHistory();
    const gotoEvtekLead = () => {
        history.push("/recycle-leaderboard");
      };
      const gotoCreateLead = () => {
        history.push("/create-leaderboard");
      };
      const gotoJionLead = () => {
        history.push("/join-leaderboard");
      };
      const gotoSunday = () => {
        history.push("progressleaderboard");
      };

    return (
        <Layout>
            <div className={Styles.Leaderboards}>
                <div className={Styles.container}>
                    <div className={Styles.headerMain}>
                        <PageTitle type="iconchevron" pagename="Recycle" modulename="Leaderboards" />
                    </div>
                    <div className={Styles.davidsonProfile}>
                        <div className={Styles.bgFirt}>
                            <div className={Styles.bgSecond}>
                                <Image src='images/userprofile.svg' alt='Logo' />
                            </div>
                        </div>
                        <div className={Styles.profileHeading}>
                            <div className={Styles.nameText}><Text variant={"big01Text"} >Sam Davidson</Text></div>
                            <Text className={Styles.itemText} variant={"xxxlText"} strong={"strong5"} >total items recycled <Text  variant={"xxxlText"} strong={"strong7"} color={"primary2"}>643</Text> </Text>
                            <div className={Styles.levelText}><Text variant={"xxxlText"} color={"orangeprof"} >Orange Paper Cup League</Text></div>
                        </div>
                    </div>
                    <div className={Styles.leaderBoxHeading}  >
                        <div>
                            <Heading className={Styles.main} headingType={"h2"} color={"ecoPrimary"}>Evtek Leaderboard</Heading>
                            <Icon customClass={Styles.icoBox} type="iconi" click={handleOpen} />
                        </div>
                        <div>
                            <Text className={Styles.leftTxt} variant={"xlText"} strong={"strong4"} > League ending in </Text>
                            <Text className={Styles.leftClrTxt} variant={"xlText"} strong={"strong5"} color={"pinkPrimary"} > 21 Days </Text>
                        </div>

                    </div>
                    <div className={Styles.EvtekleaderBox} onClick={gotoEvtekLead}>
                        <EvtekLeaderBoard src='images/groupImage.svg'
                            heading={"Orange Paper Cup"} para={"Position # 22 of 50"} textTwo={"+0.25x Ecopoint Multiplier"}
                            textThird={"Status:"} textFourth={"advancing to next league "} type={"iconFill"} />
                    </div>

                    <div className={Styles.otherLeaderboards} >
                        <div className={Styles.otherHeading} >
                            <Heading className={Styles.headimgText} headingType={"h3"}>Other Leaderboards</Heading>
                            <Icon customClass={Styles.icoBox} type="iconi" click={modleOpen} />
                            <div>
                                <Text className={Styles.otherText} variant={"smText"} strong={"strong6"} color={"primary2"} >(3/4 max)</Text>
                            </div>
                        </div>
                        <div className={Styles.leaderBox} onClick={gotoSunday}>
                            <OtherLeaderBoard src='images/Rectangle.svg'
                                heading={"Sunday Hikes"} para={"Position: #5 of 6"} type={"iconalert"} paraSecond={"ends soon"}
                                iconClass={Styles.iconClass}  />
                        </div>
                        <div className={Styles.bottomBorder}></div>
                        <div className={Styles.leaderBox}>
                            <OtherLeaderBoard src='images/RectangleTwo.svg'
                                heading={"Randall Street"} para={"Position: #5 of 6"}
                                iconClass={Styles.iconClass} />
                        </div>
                        <div className={Styles.bottomBorder}></div>
                        <div className={Styles.leaderBox}>
                            <OtherLeaderBoard src='images/RectangleThree.svg'
                                heading={"Work"} para={"Position: #5 of 6"}
                                iconClass={Styles.iconClass} />
                        </div>
                    </div>

                    <div className={Styles.cardBox}>
                        <div className={Styles.cardBoxFirst} onClick={gotoJionLead}>
                            <Text className={Styles.leftClrTxt} variant={"smText"} color={"primary2"} > Join a Leaderboard </Text>
                            <div className={Styles.closeIcon}> <Icon type="iconclose24" /></div>

                        </div>
                        <div className={Styles.cardBoxSecond} onClick={gotoCreateLead}>
                            <Text className={Styles.leftClrTxt} variant={"smText"} > Create a Leaderboard </Text>
                            <div className={Styles.keyIcon}><Icon type="key" /></div>
                        </div>
                    </div>

                </div>
                <Modal
                    open={show}
                    onClose={handleClose}
                    style={{ backdropFilter: "blur(5px)" }}>
                    <div className={Styles.evtekModel}>
                        <ModelsList heading="Evtek Leaderboard" type="iconi" click={handleClose} textColor="greenPrimary" typeTwo="iconclose" text="Evtek randomly selects 50 members to compete in each monthly leaderboard. Positions are based on the number of items recycled. The top 10 advance to the next league and the last one returns to the previous league. Higher leagues give you a higher EcoPoint multiplier!" textSecond="Learn More" />
                    </div>
                </Modal>
                <Modal
                    open={showModle}
                    onClose={modleClose}
                    style={{ backdropFilter: "blur(5px)" }}>
                    <div className={Styles.evtekModel}>
                    <ModelsList heading="Other Leaderboards" type="iconi" click={modleClose} textColor="greenPrimary" typeTwo="iconclose" text="Evtek members have the option to create their own leaderboards, or join one. These leaderboards are not managed by Evtek, and may have a variety of prizes for the winners including cash, EcoPoints etc." textSecond="Learn More" />

                    </div>
                </Modal>
            </div>
        </Layout>

    )
} 
