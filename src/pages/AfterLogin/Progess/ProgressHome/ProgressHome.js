import React from 'react'
import Styles from './ProgressHome.module.scss'
import { Icon, Image, PageTitle, ProgressBar, ProgressTab, Text, Heading } from '../../../../component/shared'
import Layout from '../../../Container/Layout'
import { useHistory } from 'react-router-dom';

const ProgressHome = () => {
    const history = useHistory();
    const gotoMetrics = () => {
        history.push("/metrics");
    };
    const gotoImpactBadges = () => {
        history.push("/impact-badges");
    };
    const gotoLeaderBoard = () => {
        history.push("/leader-boards");
    };
    const gotoCarbon = () => {
        history.push("/carbon");
    };

    return (
        <Layout>
            <div className={Styles.progressHomeContainer}>
                <div className={Styles.progressMostreak}>
                    <PageTitle type={"progress"} modulename={"Progress"} />
                    <div className={Styles.homeStreak}>
                        <Image className={Styles.Leaf} src='images/Leaf.svg' alt='Logo' />
                        <Heading className={Styles.homestreakText} headingType={"h2"} strong={"strong7"} > 3 </Heading>
                        <Text variant={"xlText"} color={"ecoPrimary"}  >mo streak </Text>
                    </div>
                </div>
                <div className={Styles.progressHomeMain}>

                    <div className={Styles.MetricsMain}>
                        <div className={Styles.ProgressHeading}>
                            <div>
                                <Text family="raleway" strong="strong5" variant={"xx3Text"}>Recycling Metrics</Text>
                            </div>
                            <Icon type='iconFill' click={gotoMetrics} customClass={Styles.MetricsTabIcon} />
                        </div>
                        <div className={Styles.progressTotal}>
                            <Text>Total Items recycled</Text>
                            <div className={Styles.progressweightText}>
                                <Text>Total weight recycled</Text>
                            </div>
                        </div>
                        <div className={Styles.progressNumber}>
                            <div className={Styles.progressweightNumberMain}>
                                <Text family="raleway" variant={"big72Text"}>643</Text>
                            </div>
                            <div>
                                <Text className={Styles.progressItemNumber} variant={"xxxlText"}>142 lbs</Text>
                            </div>
                        </div>
                        <div className={Styles.plasticRecyclingMetrics}>
                            <div className={Styles.ProgressPlastic}>
                                <Text className={Styles.ProgressPlasticText} variant={"xxlText"} color={"pinkPrimary"}>plastic</Text>
                            </div>
                            <Image src='images/progressPlasticChart.png' className={Styles.plasticChartImage} />
                            <div className={Styles.ItemsMain}>
                                <div className={Styles.ItemTextMain}>
                                    <div className={Styles.ItemTextPlastic}>
                                        <Text variant={"xx4Text"} color="secondary" className={Styles.ItemTextFirst}>200</Text>
                                        <div>
                                            <Text color={"secondary"} className={Styles.ItemTextSecond}>items</Text>
                                        </div>
                                    </div>
                                    <div>
                                        <Text color={"secondary"} className={Styles.ItemTextThird}>31%</Text>
                                    </div>
                                </div>
                                <Text color={"secondary"} className={Styles.ItemTextFour}>50lbs</Text>
                            </div>
                        </div>
                        <div className={Styles.alumRecyclingMetrics}>
                            <div className={Styles.ProgressPlastic}>
                                <Text className={Styles.ProgressPlasticText} variant={"xxlText"} color={"orangePrimary"}>alum.</Text>
                            </div>
                            <Image src='images/progressAlumChart.png' className={Styles.plasticChartImage} />
                            <div className={Styles.ItemsMain}>
                                <div className={Styles.ItemTextMain}>
                                    <div className={Styles.ItemTextPlastic}>
                                        <Text variant={"xx4Text"} color="secondary" className={Styles.ItemTextFirst}>402</Text>
                                        <div>
                                            <Text color={"secondary"} className={Styles.ItemTextSecond}>items</Text>
                                        </div>
                                    </div>
                                    <div>
                                        <Text color={"secondary"} className={Styles.ItemTextThird}>63%</Text>
                                    </div>
                                </div>
                                <Text color={"secondary"} className={Styles.ItemTextFour}>77lbs</Text>
                            </div>
                        </div>
                        <div className={Styles.glassRecyclingMetrics}>
                            <div className={Styles.ProgressPlastic}>
                                <Text className={Styles.ProgressPlasticText} variant={"xxlText"} color={"bluePrimary"}>glass</Text>
                            </div>
                            <Image src='images/progressGlassChart.png' className={Styles.plasticChartImage} />
                            <div className={Styles.ItemsMain}>
                                <div className={Styles.ItemTextMain}>
                                    <div className={Styles.ItemTextPlastic}>
                                        <Text variant={"xx4Text"} color="secondary" className={Styles.ItemTextFirst}>41</Text>
                                        <div>
                                            <Text color={"secondary"} className={Styles.ItemTextSecond}>items</Text>
                                        </div>
                                    </div>
                                    <div>
                                        <Text color={"secondary"} className={Styles.ItemTextThird}>6%</Text>
                                    </div>
                                </div>
                                <Text color={"secondary"} className={Styles.ItemTextFour}>35lbs</Text>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.progressImpactBadges}>
                        <ProgressTab tabHead={"Impact Badges"} onClick={gotoImpactBadges} srcImage="images/Bulb.svg">
                            <div>
                                <Text variant={"mdText"} color={"greyPrimary"}>next goal progress</Text>
                                <div className={Styles.ImpactHeading}>
                                    <Text variant={"xlText"} color={"greyPrimary"}><pre>goal 3 •  60 hours of light</pre></Text>
                                </div>
                            </div>
                            <div className={Styles.progressBarMain}>
                                <div className={Styles.progressBar}>
                                    <ProgressBar bgcolor="#5EBA7D" backcolor="#D3ECDB" progress='70' height={18} />
                                </div>
                            </div>
                        </ProgressTab>
                        <div className={Styles.leaderBoardMain}>
                            <ProgressTab tabHead={"Leaderboards"} onClick={gotoLeaderBoard} srcImage="images/coffeecup.png">
                                <div>
                                    <Text variant={"mdText"} color={"greyPrimary"}>current league</Text>
                                    <div>
                                        <Text family='raleway' variant={"xxxlText"} strong="strong6" color={"bluePrimary"}>Orange Paper Cup</Text>
                                        <div>
                                            <Text family='raleway' variant={"lgText"} strong="strong6"  >Position # 22 of 50</Text>
                                        </div>
                                    </div>
                                    <div >
                                        <Text strong='strong6' color="grayPrimary" variant={"mdText"} >League ending in</Text>
                                        <Text strong='strong6' className={Styles.leaderboardPinkTetxt} variant={"mdText"} color={"pinkPrimary"} >23 days</Text>
                                    </div>
                                </div>
                            </ProgressTab>
                        </div>
                        <div className={Styles.carbonMain} >
                            <ProgressTab imageClass={Styles.reductionImage} tabHead={"Carbon Reduction"} onClick={gotoCarbon} srcImage="images/carbon.svg">
                                <div>
                                    <Text variant={"mdText"} color={"greyPrimary"}>Total CO2 emissions prevented</Text>
                                    <div>
                                        <Text family='raleway' variant={"xx2Text"} strong="strong6" >788 lbs</Text>
                                    </div>
                                </div>
                                <div className={Styles.carbonImage}>
                                    <div className={Styles.homePowerd}>
                                        <div>
                                            <Image className={Styles.homeImage} src='images/home.svg' />
                                            <Text>6</Text>
                                        </div>
                                        <Text className={Styles.homesText} variant={"xxsText"}>homes powered</Text>
                                    </div>
                                    <div className={Styles.carMain}>
                                        <div>
                                            <Image className={Styles.homeImage} src='images/Car.svg' />
                                            <Text>43</Text>
                                        </div>
                                        <Text className={Styles.homesText} variant={"xxsText"}> gallons of gas saved</Text>
                                    </div>
                                </div>
                            </ProgressTab>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProgressHome
