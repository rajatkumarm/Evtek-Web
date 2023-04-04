import React from 'react'
import Layout from '../../../Container/Layout'
import Styles from './RecycleLeaderboard.module.scss'
import { PageTitle, Image, Text, Icon, Heading, ProgressBar, ProfileLeaderBoard } from '../../../../component/shared'
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

export default function RecycleLeaderboard() {
    const [active, setActiveNow] = useState(0);
    return (
        <Layout>
            <div className={Styles.recycleLeaderboards}>

                <div className={Styles.headerMain}>
                    <PageTitle type="iconchevron" pagename="Recycle" modulename="Evtek Leaderboards" />
                </div>
                <div className={Styles.container}>
                    <div className={Styles.headImg}>
                        <Image src='images/teacup.svg' alt='Logo' />
                        <Image src='images/teacuptwo.svg' alt='Logo' />
                        <Image src='images/coffeecuptwo.svg' alt='Logo' />
                        <Image src='images/Polygonlock.svg' alt='Logo' />
                        <Image src='images/Polygonlock.svg' alt='Logo' />
                    </div>
                    <div className={Styles.headingText}>
                        <Text className={Styles.itemText} variant={"xlText"} strong={"strong5"} color={"grayPrimary"} >current league</Text>
                        <Heading className={Styles.main} headingType={"h2"} strong={"strong6"} color={"secondary2"}>Orange Coffee Cup</Heading>
                        <Text className={Styles.itemText} variant={"xlText"} strong={"strong5"} >+0.25x Ecopoint Multiplier</Text>
                    </div>
                    <div className={Styles.leaderBar}>
                        <div>
                            <div>
                                <Text className={Styles.itemText} variant={"xlText"} strong={"strong5"} color={"grayPrimary"}  >League started</Text>
                            </div>
                            <Text className={Styles.itemText} variant={"xlText"} strong={"strong7"} >July 25th 2021</Text>
                        </div>
                        <div className={Styles.ProgressBar}>
                            <div className={Styles.progressBar}><ProgressBar bgcolor="#5EBA7D" backcolor="#5EBA7D38" progress='30' height={26} /></div>
                        </div>
                        <div>
                            <div>
                                <Text className={Styles.itemText} variant={"xlText"} color={"grayPrimary"}  > League Ending </Text>
                            </div>
                            <Text className={Styles.itemText} variant={"xlText"} strong={"strong7"} color={"primary2"} > August 25th 2021</Text>
                        </div>
                    </div>

                    <div className={Styles.tabHeadText}>
                        <Tooltip title="Currently, Click event is not developed">
                            <div >
                                <Icon customClass={Styles.icoBox} type="iconi" />
                            </div>
                        </Tooltip>
                        <div>
                            <Text className={Styles.itemText} variant={"xlText"} strong={"strong5"} color={"grayPrimary"}  >Top 10 advance to the next league</Text>
                            <div>
                                <Text className={Styles.itemText} variant={"xlText"} strong={"strong5"} color={"grayPrimary"} >Last one returns to the previous league</Text>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.profileBoard}>
                        <div className={Styles.backNone}>
                                <ProfileLeaderBoard onClick={() => { setActiveNow(0) }} variant={active === 0 ? "enable" : "greendisable"} iconClass={Styles.colorPrimary} textClass={Styles.textColor} type={"iconArrowDropUp"} para={"Daniel"} src='images/ellipse.svg' number={"1"} textColortwo={active === 0 ? "greenPrimary" : "ecoPrimary"} textTwo={"702 items"} />
                                <ProfileLeaderBoard onClick={() => { setActiveNow(1) }} variant={active === 1 ? "enable" : "greendisable"} iconClass={Styles.colorPrimary} type={"iconArrowDropUp"} para={"Sam D."} src='images/SamD.svg' number={"2"} textColortwo={active === 1 ? "greenPrimary" : "ecoPrimary"} textTwo={"702 items"} />
                                <ProfileLeaderBoard onClick={() => { setActiveNow(2) }} variant={active === 2 ? "enable" : "greendisable"} iconClass={Styles.colorSecondary} type={"iconarrowdrop"} para={"Nadia S."} src='images/NadiaS.svg' number={"3"} textColortwo={active === 2 ? "greenPrimary" : "ecoPrimary"} textTwo={"702 items"} />
                            </div>
                            <ProfileLeaderBoard variant={"disable"} iconClass={Styles.colorPrimary} type={"iconArrowDropUp"} para={"Ahmed"} src='images/Ahmed.svg' number={"4"} text={"702 items"} />
                            <ProfileLeaderBoard variant={"disable"} iconClass={Styles.colorPrimary} type={"iconArrowDropUp"} para={"Ahmed"} src='images/Ahmed.svg' number={"5"} text={"702 items"} />
                            <ProfileLeaderBoard variant={"disable"} iconClass={Styles.colorPrimary} type={"iconArrowDropUp"} para={"Sam D."} src='images/SamD.svg' number={"6"} text={"702 items"} />
                            <ProfileLeaderBoard variant={"disable"} iconClass={Styles.colorSecondary} type={"iconarrowdrop"} para={"Daniel"} src='images/ellipse.svg' number={"7"} text={"702 items"} />
                            <ProfileLeaderBoard variant={"disable"} iconClass={Styles.colorPrimary} type={"iconArrowDropUp"} para={"Daniel"} src='images/ellipse.svg' number={"8"} text={"702 items"} />
                            <ProfileLeaderBoard variant={"disable"} iconClass={Styles.colorPrimary} type={"iconArrowDropUp"} para={"Sam D."} src='images/SamD.svg' number={"9"} text={"702 items"} />
                            <ProfileLeaderBoard variant={"disable"} iconClass={Styles.colorSecondary} type={"iconarrowdrop"} para={"Nadia S."} src='images/NadiaS.svg' number={"10"} text={"702 items"} />
                            <div className={Styles.bottomBorder}></div>
                            <ProfileLeaderBoard variant={"pickenable"} iconClass={Styles.colorPrimary} type={"iconArrowDropUp"} para={"Daniel"} src='images/ellipse.svg' number={"11"} text={"702 items"} />
                        </div>
                    </div>
                </div >
        </Layout >
    )
}
