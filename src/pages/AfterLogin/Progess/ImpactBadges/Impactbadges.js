import React from 'react'
import Styles from './Impactbadges.module.scss';
import { Icon, Text, PageTitle, Button, Image, ProgressBar } from "../../../../component/shared";
import Layout from "../../../Container/Layout";
import { useState } from "react";



export default function ImpactBadges() {
    const [show, setShow] = useState(false)
    const [showHide, setShowHide] = useState(true);
    const [showGoal, setShowGoal] = useState(false);
    const [hideGoal, setHideGoal] = useState(false);
    const [active, setActive] = useState([0]);




    const showInfo = () => {
        setShow(true)
        setShowHide(false)
    }
    const hideInfo = () => {
       
        setShow(false)
        setShowHide(true)
    }
    const goalShow = () => {
        setShowGoal(true)
        setHideGoal(false)
       
    }
    const goalHide = () => {
        setShowGoal(false)
        setHideGoal(true)
       
    }
    
    return (

        <Layout>
            <div className={Styles.Tracker}>
                <div className={Styles.headerMain}>
                    <PageTitle type="iconchevron" pagename="Recycle" modulename="Impact Badges" />
                </div>
                <div className={Styles.container}>
                    <div className={Styles.impactBadges}>
                        <div className={Styles.impactItems}>
                            <Image src='images/leaves.svg' alt='leaves' />
                            <div className={Styles.impactText}>
                                <div className={Styles.textItems}><Text variant={"xlText"} >Sam, so far you have recycled</Text> <span className={Styles.textItem}>643 items!</span></div>
                                <Text className={Styles.textUpdate} variant={"xsText"}>We hope this help you see how big your impact really is...</Text>
                            </div>
                        </div>
                        <div className={Styles.currentGoal}>
                            <div className={Styles.currentGoalbox}>
                                <Text variant={"xxlText"}>Current Goal</Text>
                                <div className={Styles.currentGoalcontent}>
                                    <Image className={Styles.bulbImage} src='images/Bulb.svg' alt='bulb' />
                                    <div className={Styles.contentInside}>
                                        <div className={Styles.contentLeft}>
                                            <Text className={Styles.textGoal} variant={"lgText"}>goal 3 </Text>
                                            <Text className={Styles.textHours} variant={"lgText"} color={"greenPrimary"} > •  60 hours of light</Text>
                                            <div className={Styles.contentLeftbottam}>
                                                <div className={Styles.ProgressBar}>
                                                    <div className={Styles.progressBar}><ProgressBar bgcolor="#5EBA7D" backcolor="#5EBA7D38" progress='70' height={26} /></div>
                                                </div>
                                                <Text variant={"msmText"}>643/1000 items</Text>
                                            </div>
                                        </div>
                                        <div className={Styles.contentRight}>
                                            <Button size={"btnMd04"} customClass={Styles.confirmBtn}>250 EcoPoints</Button>
                                            <Button variant={"teritarySecond"} size={"btnMd04"} customClass={Styles.confirmBtn}>15lbs CO2</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.middle}>
                                    <Text className={Styles.middleText} variant={"lgText"}> By recycling 1000 items, you will have saved enough energy to power an 60 watt lightbulb for </Text>
                                    <Text className={Styles.middleTextclr} variant={"lgText"}> 60 hours! </Text>
                                </div>
                                <div className={Styles.bottom}>
                                    <Text className={Styles.bottomText} variant={"smText"} color={"greenPrimary"}> tips for recycling</Text>
                                    <Icon type="iconFill" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.impactBadgesgoals}>
                        <div className={Styles.badgesGoalstext}>
                            <Text className={Styles.badgesText} variant={"xlText"} > Badges </Text>
                            <Text className={`${Styles.viewListtext} ${active === 0 ? Styles.viewActive :  ''}`} variant={"xsText"} handleClick={()=>{setActive(0); hideInfo()}}> view list </Text>
                            <div class={Styles.bgBorder}></div>
                            <Text className={`${Styles.viewGridtext} ${active === 1 ? Styles.viewActive : ''}`} variant={"xsText"} handleClick={()=>{setActive(1); showInfo()}} > view grid </Text>
                        </div>
                        {showHide &&
                            <div className={Styles.listGridContent}>
                                <div className={Styles.listGoalContent}>
                                    <div className={Styles.goalsFirst} >
                                        <Image className={Styles.carImage} src='images/GroupFirst.svg' alt='goal' />
                                        <div className={Styles.goalsFirstcontent} onClick={goalHide}>
                                            <div className={Styles.goalFirsttext}>
                                                <div className={Styles.goaltext}> <Text variant={"mdText"}  > goal 1 • 25 miles driven </Text></div>
                                                <Text variant={"smText"}  > recycle 100 items </Text>
                                            </div>
                                            <div className={Styles.goalsContentright}  >
                                                <Button size={"btnMd05"} customClass={Styles.confirmBtn}  > 100 EcoPoints </Button>
                                                <div className={Styles.iconarrowright}  >
                                                    <Icon type="iconarrowright" />
                                                </div>
                                            </div>
                                            <div className={Styles.rightImage}><Image src='images/HandsRandom.svg' alt='goal'/></div>
                                        </div>
                                    </div>
                                    <div className={Styles.goalsFirst}>
                                        <Image className={Styles.carImage} src='images/GroupSecond.svg' alt='goal' />
                                        <div className={Styles.goalsSecondcontent}>
                                            <div className={Styles.goalFirsttext}>
                                                <div className={Styles.goaltext}> <Icon type="star" /> <Text color={"secondary"} variant={"mdText"}  > Bonus Badge </Text></div>
                                                <Text color={"secondary"} variant={"smText"} > recycle 50 glass bottles  </Text>
                                            </div>
                                            <div className={Styles.goalsContentright}>
                                            </div>
                                        <div className={Styles.rightImage}><Image  src='images/HandsRandom.svg' alt='goal'/></div>
                                        </div>
                                    </div>
                                    <div className={Styles.goalsFirst} onClick={goalShow}>
                                        <Image className={Styles.carImage} src='images/GroupThird.svg' alt='goal' />
                                        <div className={Styles.goalsFirstcontent}>
                                            <div className={Styles.goalFirsttext}>
                                                <div className={Styles.goaltext}><Text variant={"mdText"} > goal 2 • 30 hours of power </Text></div>
                                                <Text variant={"smText"}  > recycle 300 items </Text>
                                            </div>
                                            <div className={Styles.goalsContentright}  >
                                                <Button size={"btnMd05"} customClass={Styles.confirmBtn}  > 150 EcoPoints </Button>
                                                <div className={Styles.iconarrowright}  >
                                                    <Icon type="iconarrowright" />
                                                </div>
                                            </div>
                                        <div className={Styles.rightImage}><Image  src='images/HandsRandom.svg' alt='goal'/></div>
                                        </div>
                                    </div>
                                    <div className={Styles.goalsFirst}>
                                        <Image className={Styles.carImage} src='images/Bulb.svg' alt='goal' />
                                        <div className={Styles.goalsFourcontent}>
                                            <div className={Styles.goalFirsttext}>
                                                <div className={Styles.goaltext}><Text variant={"mdText"} > goal 3 </Text> <span className={Styles.goalTextitems} > • 60 hours of light</span></div>
                                                <Text variant={"mdText"} > 643/1000 items </Text>
                                            </div>
                                            <div className={Styles.goalsContentright}>
                                                <Button size={"btnMd05"} customClass={Styles.confirmBtn}> <Text color={"secondrey"} variant={"xsText"} > 250 EcoPoints </Text>
                                                </Button>
                                                <div className={Styles.iconarrowright}>
                                                    <Icon type="iconarrowright" />
                                                </div>
                                            </div>
                                        <div className={Styles.rightImage}><Image  src='images/HandsRandom.svg' alt='goal'/></div>
                                        </div>
                                    </div>
                                    <div className={Styles.goalsFirst}>
                                        <Image className={Styles.carImage} src='images/Group13.svg' alt='goal' />
                                        <div className={Styles.goalsFifthcontent}>
                                            <div className={Styles.goalFirsttext}>
                                                <Icon type="iconlock" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles.goalsFirst}>
                                        <Image className={Styles.carImage} src='images/Group12.svg' alt='goal' />
                                        <div className={Styles.goalsFifthcontent}>
                                            <div className={Styles.goalFirsttext}>
                                                <Icon type="iconlock" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {hideGoal &&
                                    <div className={Styles.goalAssetBox}>
                                        <div className={Styles.assetHead}>
                                            <div className={Styles.assetHeading}>
                                                <Text className={Styles.headText} variant={"xxxlText"}> goal 1 </Text>
                                                <Text color={"greenPrimary"}> • </Text>
                                                <Text className={Styles.headTextMiles} variant={"xxxlText"} > 25 miles driven </Text>
                                            </div>
                                            <div className={Styles.iconClose}>
                                                <Icon type={"iconclose"} click={() => setHideGoal(false)} />
                                            </div>
                                        </div>
                                        <div className={Styles.assetContent}>
                                            <Text className={Styles.assetCntext} variant={"mdText"}> recycle 100 items </Text>
                                            <div className={Styles.assetbtn}>
                                                <Button variant={"teritarySecond"} size={"btnMd04"} customClass={Styles.confirmBtn}>10lbs CO2</Button>
                                                <div className={Styles.confirmBtn}><Button size={"btnMd04"} >100 EcoPoints</Button></div>
                                            </div>
                                            <div className={Styles.assetGoalContent}>
                                                <Image className={Styles.goalCarImg} src='images/Goalcar.svg' alt='goal' />
                                                <div className={Styles.carTxt}><Text variant={"lgText"}> You saved <span className={Styles.milestxt}> 25 miles </span> on the road. Thats the carbon emissions generated by an average sized four-seater driven for <span className={Styles.milestxt}> 25 miles</span>! Give yourself a pat on the back </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {showGoal && (
                                <div className={Styles.goalAssetBox}>
                                    <div className={Styles.assetHead}>
                                        <div className={Styles.assetHeading}>
                                            <Text className={Styles.headText} variant={"xxxlText"}> goal 2 </Text>
                                            <Text color={"greenPrimary"}> • </Text>
                                            <Text className={Styles.headTextMiles} variant={"xxxlText"} > 30 hours of power </Text>
                                        </div>
                                        <div className={Styles.iconClose}>
                                            <Icon type={"iconclose"} click={() => setShowGoal(false)}/>
                                        </div>
                                    </div>
                                    <div className={Styles.assetContent}>
                                        <Text className={Styles.assetCntext} variant={"mdText"}> recycle 300 items </Text>
                                        <div className={Styles.assetbtn}>
                                            <Button variant={"teritarySecond"} size={"btnMd04"} customClass={Styles.confirmBtn}>15lbs CO2</Button>
                                            <div className={Styles.confirmBtn}><Button size={"btnMd04"} >150 EcoPoints</Button></div>
                                        </div>
                                        <div className={Styles.assetGoalContent}>
                                            <Image className={Styles.goalCarImg} src='images/Goalhouse.svg' alt='goal' />
                                            <div className={Styles.carTxt}><Text variant={"lgText"}> You powered an average 2-bedroom home for 32 hours! <span className={Styles.milestxt}> 32 hours</span>! </Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )}
                            </div>
                        }
                    </div>
                    {show && (
                        <div className={Styles.gridListMain} >
                            <div className={Styles.gridListFirst}>
                                <Image className={Styles.gridImage} src='images/GroupFirst.svg' alt='goal' />
                                <div className={"gridContent"}><Text variant={"msmText"} color={"grayPrimary"} > recycle 100 items </Text></div>
                                <div className={Styles.rightImage}><Image  src='images/HandsRandom.svg' alt='goal'/></div>
                            </div>
                            <div className={Styles.gridListFirst}>
                                <Image className={Styles.gridImage} src='images/GroupSecond.svg' alt='goal' />
                                <div className={"gridContent"}> <Text variant={"msmText"} color={"grayPrimary"} >50 glass bottles</Text></div>
                                <div className={Styles.rightImage}><Image  src='images/HandsRandom.svg' alt='goal'/></div>
                            </div>
                            <div className={Styles.gridListFirst}>
                                <Image className={Styles.gridImage} src='images/GroupThird.svg' alt='goal' />
                                <div className={"gridContent"}><Text variant={"msmText"} color={"grayPrimary"} > recycle 300 items </Text></div>
                                <div className={Styles.rightImage}><Image  src='images/HandsRandom.svg' alt='goal'/></div>
                            </div>
                            <div className={Styles.gridListFirst}>
                                <Image className={Styles.gridImage} src='images/Bulb.svg' alt='goal' />
                                <div className={"gridContent"}><Text variant={"msmText"} color={"grayPrimary"} > recycle 1000 items </Text></div>
                                <div className={Styles.rightImage}><Image  src='images/HandsRandom.svg' alt='goal'/></div>
                            </div>
                            <div className={Styles.gridListFirst}>
                                <Image className={Styles.gridImage} src='images/Group13.svg' alt='goal' />
                                <div className={Styles.rightImage}><Image  src='images/HandsRandom.svg' alt='goal'/></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}
