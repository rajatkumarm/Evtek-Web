import React from 'react'
import Layout from '../../../Container/Layout'
import Styles from './ProgressLeaderboard.module.scss'
import { Modal } from "@material-ui/core";
import { useState } from 'react';
import {
    Icon,
    Image,
    Heading,
    PageTitle,
    Text,
    EcoPoint,
    ProgressList,
} from "../../../../component/shared/index";

export const ProgressLeaderboard = () => {
    const [show, setShow] = useState(false);
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <Layout>
            < div className={Styles.headerMain}>
                <PageTitle type="iconchevron" pagename="Progress" modulename="Leaderboards" />
            </div>
            <div className={Styles.leaderProgress}>
                <div className={Styles.leaderHikes}>
                    <div>    <Image src='images/hike.svg' alt={"Logo"} /></div>
                    <div className={Styles.leaderMain}>
                        <div className={Styles.sundayText}>
                            <Heading className={Styles.hikeText} headingType={"h1"} color={"secondary"}>Sunday Hikes</Heading>
                            <div className={Styles.privateText}>
                                <Text className={Styles.hikeText} variant={"lgText"} color={"secondary"}>Status: Private</Text>
                                <div><Text className={Styles.sixText} variant={"lgText"} color={"secondary"}>6 Participants</Text></div>
                            </div>
                            <div className={Styles.dateCreated}>
                                <Text className={Styles.sixText} variant={"xlText"} color={"secondary"}>created 1/23/2021</Text>
                            </div>
                        </div>
                        <div className={Styles.sundayText}>
                            <Heading className={Styles.endText} headingType={"h6"} color={"secondary"}>Leaderboard ends August 15th 2021</Heading>
                            <div className={Styles.privatewinnerText}>
                                <Text className={Styles.winnerText} variant={"xsText"} color={"secondary"}>The winner/winners at the end of the Leaderboard period is awarded the EcoPoints pool</Text>
                            </div>
                            <div className={Styles.position}>
                                <Text className={Styles.positionText} variant={"msmText"} >Position: #5 of 6</Text>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.progressEcopoint}>
                    <EcoPoint />
                </div>
                <div>
                    <div className={Styles.imgLeader}>
                        <div className={Styles.sherilText}>
                            <div className={Styles.noico}>
                                <Text className={Styles.sherilPosition} variant={"big03Text"} >2</Text>
                                <Icon customClass={Styles.sherilIco} type='iconArrowDropUp' />
                            </div>
                            <div>    <Image src='images/sheril.svg' alt={"Logo"} /></div>
                            <Text className={Styles.calriposition} variant={"xlText"} >Sheryll</Text>
                            <div> <Text className={Styles.brianitems} variant={"msmText"} color={"greenPrimary"} lo>998 items</Text></div>
                        </div>
                        <div className={Styles.calriText}>
                            <div className={Styles.noico}>
                                <Text className={Styles.calriposition} variant={"big03Text"} >1</Text>
                                <Icon customClass={Styles.calrilIco} type='iconArrowDropUp' />
                            </div>
                            <div className={Styles.imageCalril}>
                                <div className={Styles.imageBorder}>
                                    <Image src='images/caril.svg' alt={"Logo"} onClick={handleOpen} />
                                </div>
                            </div>
                            <Text className={Styles.calriposition} variant={"xlText"} >Claire</Text>
                            <div> <Text className={Styles.brianitems} variant={"msmText"} color={"greenPrimary"}>1,023 items</Text></div>
                        </div>
                        <div className={Styles.brianText}>
                            <div className={Styles.noico}>
                                <Icon customClass={Styles.brianIco} type='iconarrowdrop' />
                                <Text className={Styles.brianposition} variant={"big03Text"} >3</Text>
                            </div>
                            <div><Image src='images/brian.svg' alt={"Logo"} /></div>
                            <Text className={Styles.brianpositi} variant={"xlText"} >Brian</Text>
                            <div> <Text className={Styles.brianitems} variant={"msmText"} color={"greenPrimary"}>769 items</Text></div>
                        </div>
                    </div>
                </div>
                <div className={Styles.prolist}>
                    <div> <ProgressList iconClass={Styles.colorPrimary} type={"iconarrowdrop"} para={"Ahmed A."} src='images/Ahmed.png' number={"4"} text={"702 items"} /></div>
                    <div> <ProgressList iconClass={Styles.colorSecondary} type={"iconArrowDropUp"} para={"Sam D."} src='images/Samd.png' number={"5"} text={"643 items"} /></div>
                    <div> <ProgressList iconClass={Styles.colorPrimary} type={"iconarrowdrop"} para={"Nadia S."} src='images/Nadia.png' number={"6"} text={"546 items"} /></div>
                </div>
                <Modal
                    open={show}
                    onClose={handleClose}
                    style={{ backdropFilter: "blur(5px)" }}>
                    <div className={Styles.profileModel}>
                        <div className={Styles.carilProfile}>
                            <div className={Styles.closeicon} ><Icon type="iconclose" click={handleClose} /></div>
                            <Image src='images/caril.svg' alt={"Logo"} />
                            <div><Text className={Styles.calriposition} variant={"xlText"} color={"secondary"} >Claire</Text></div>
                            <div> <Text className={Styles.brianposit} variant={"xx5Text"} color={"secondary"}>1,023 items</Text></div>
                            <div className={Styles.profileImagegrid}>
                                <Image src='images/profcar.svg' alt={"Logo"} />
                                <Image className={Styles.Bulb} src='images/House.svg' alt={"Logo"} />
                                <Image src='images/light.svg' alt={"Logo"} />
                                <Image src='images/Tshirt.svg' alt={"Logo"} />
                                <Image className={Styles.Bulb} src='images/gamla.svg' alt={"Logo"} />
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>

        </Layout>
    )
}
