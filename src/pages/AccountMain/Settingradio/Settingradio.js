import React from 'react'
import { Icon, PageTitle, Text, Button, Image } from '../../../component/shared';
import Layout from '../../Container/Layout';
import Styles from './Settingradio.module.scss';
export const Settingradio = () => {
    return (
        <>
            <Layout>
                <div>
                    <PageTitle type="iconchevron" modulename="Settings" pagename="Account" />
                </div>
                <div className={Styles.radioMain}>
                    <div className={Styles.gamiTxt}>
                        <Text children={"Do want an immersive, gamified experience or just the app’s essential features? Choose the gamification preset that suits you best"} className={Styles.checkboxTxt} />
                    </div>
                    <div className={Styles.btnRadio}>
                        <div className={Styles.radioBox}>
                            <div className={Styles.bottmMain}>
                                <input type="radio" name='radio' checked />
                                <div className={Styles.btmRadio}>
                                    <div className={Styles.appText}>
                                        <Text children={"I want to use all of the app’s features including:"} className={Styles.mainTxt} />
                                    </div>
                                    <div className={Styles.btmIcon}>
                                        <Image src='images/impact.png' alt='impactImg' />
                                        <Text className={`${Styles.addText} ${Styles.badgeColor}`} children={"Impact Badges"} />
                                        <Icon type="checkCircle" customClass={Styles.circle} />
                                    </div>
                                    <div className={Styles.btmIcon}>
                                        <Image src='images/ecoPoint.svg' alt='ecoImg' />
                                        <Text children={"EcoPoint Multipliers"} className={`${Styles.addText} ${Styles.ecoColor}`} />
                                        <Icon type="checkCircle" customClass={Styles.circle} />
                                    </div>
                                    <div className={Styles.btmIcon}>
                                        <Image src='images/recycle.png' alt='recycleImg' />
                                        <Text children={"Recycling Streaks"} className={`${Styles.addText} ${Styles.recycleColor}`} />
                                        <Icon type="checkCircle" customClass={Styles.circle} />
                                    </div>
                                    <div className={Styles.btmIcon}>
                                        <Image src='images/Leaderboard.png' alt='leaderImg' />
                                        <Text children={"Leaderboards"} className={`${Styles.addText} ${Styles.leadColor}`} />
                                        <Icon type="checkCircle" customClass={Styles.circle} />
                                    </div>
                                    <div className={Styles.btmIcon}>
                                        <Image src='images/carbon.png' alt='carbonImg' />
                                        <Text children={"Carbon Reduction"} className={`${Styles.addText} ${Styles.badgeColor}`} />
                                        <Icon type="checkCircle" customClass={Styles.circle} />
                                    </div>
                                    <div className={Styles.btmIcon}>
                                        <Image src='images/Reward.png' alt='rewardImg' />
                                        <Text children={"Rewards & Coupons"} className={`${Styles.addText} ${Styles.carbonColor}`} />
                                        <Icon type="checkCircle" customClass={Styles.circle} />
                                    </div>
                                </div>
                            </div>
                            <div className={`${Styles.bottmMain} ${Styles.bottmMarg}`}>
                                <input type="radio" name='radio' />
                                <div className={Styles.btmRadio}>
                                    <Text children={"I want the essential features only "} className={Styles.mainTxt} />
                                    <div className={Styles.changeText}>  <Text children={" (You can change this in settings anytime)"} className={Styles.mainText} /></div>
                                    <div className={Styles.btmIcon}>
                                        <Image src='images/impact.png' alt='impactImg' />
                                        <Text children={"Impact Badges"} className={`${Styles.addText} ${Styles.badgeColor}`} />
                                        <Icon type="checkCircle" customClass={Styles.circle} />
                                    </div>
                                    <div className={Styles.btmIcon}>
                                        <Image src='images/ecoPoint.svg' alt='ecoImg' />
                                        <Text children={"EcoPoint Multipliers"} className={`${Styles.addText} ${Styles.ecoColor}`} />
                                        <Icon type="checkCircle" customClass={Styles.circle} />
                                    </div>
                                    <div className={Styles.btmIcon}>
                                        <Image src='images/recycle.png' alt='recycleImg' />
                                        <Text children={"Recycling Streaks"} className={`${Styles.addText} ${Styles.recycleColor}`} />
                                        <Icon type="checkCircle" customClass={Styles.circle} />
                                    </div>
                                    <div className={Styles.btmIcon}>
                                        <Image src='images/Leaderboard.png' alt='leaderImg' />
                                        <Text children={"Leaderboards"} className={`${Styles.addText} ${Styles.leadColor}`} />
                                        <Icon type="checkCircle" customClass={Styles.circle} />
                                    </div>
                                    <div className={Styles.btmIcon}>
                                        <Image src='images/carbon.png' alt='carbonImg' />
                                        <Text children={"Carbon Reduction"} className={`${Styles.addText} ${Styles.badgeColor}`} />
                                        <Icon type="checkCircle" customClass={Styles.circle} />
                                    </div>
                                    <div className={Styles.btmIcon}>
                                        <Image src='images/Reward.png' alt='rewardImg' />
                                        <Text children={"Rewards & Coupons"} className={`${Styles.addText} ${Styles.carbonColor}`} />
                                        <Icon type="checkCircle" customClass={Styles.circle} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={Styles.btnConfirm}>
                            <Button size="btnXxxlg" >confirm</Button>
                        </div>
                    </div>


                </div>
            </Layout>
        </>
    )
}
