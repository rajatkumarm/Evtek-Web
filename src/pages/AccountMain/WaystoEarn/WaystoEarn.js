import React from 'react'
import { Heading, PageTitle, Text, Image } from '../../../component/shared'
import Layout from '../../Container/Layout'
import Styles from './WaystoEarn.module.scss'

const WaystoEarn = () => {
    return (
        <Layout>
            <PageTitle modulename={"Ways to Earn EcoPoints"} pagename="Account" type="iconchevron" />
            <div className={Styles.main}>
                <div>
                    <Heading className={Styles.headMain} strong={"strong9"} headingType={"h1"}>Ways to Earn</Heading>
                    <div>
                        <div className={Styles.textMain}>
                            <Heading className={Styles.primaryHead} headingType={"h5"} color={"primary2"}>Primary</Heading>
                            <Heading headingType={"h5"}>Ways to Earn</Heading>
                        </div>
                        <div className={Styles.PrimaryEcopoints}>
                            <div className={Styles.ecoPoint}>
                                <div className={Styles.ecoImgFirst}>
                                    <Image className={Styles.ecoIcon} src='images/PrimaryFirst.svg' alt='goal' />
                                </div>
                                <Heading className={Styles.secondaryHead} headingType={"h5"}>100 EcoPoints</Heading>
                                <Text variant={"msmText"}>join a leaderboard</Text>
                            </div>
                            <div className={Styles.ecoPoint}>
                                <div className={Styles.ecoImg}>
                                    <Image className={Styles.ecoIcon} src='images/PrimarySecond.svg' alt='goal' />
                                </div>
                                <Heading className={Styles.secondaryHead} headingType={"h5"}>50-1000 EcoPoints</Heading>
                                <Text variant={"msmText"}>earn an impact badge</Text>
                            </div>
                            <div className={Styles.ecoPoint}>
                                <div className={Styles.ecoImg}>
                                    <Image className={Styles.ecoIcon} src='images/PrimaryThird.svg' alt='goal' />
                                </div>
                                <Heading className={Styles.secondaryHead} headingType={"h5"}>250 EcoPoints</Heading>
                                <Text variant={"msmText"}>donate to charity</Text>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={Styles.textMainSecondary}>
                            <Heading color={"secondary2"} className={Styles.primaryHead} headingType={"h5"} >More</Heading>
                            <Heading headingType={"h5"}>Ways to Earn</Heading>
                        </div>
                        <div className={Styles.PrimaryEcopoints}>
                            <div className={Styles.more}>
                            <div className={Styles.ecoImg}>
                                <Image className={Styles.ecoIcon} src='images/MoreFirst.svg' alt='goal' />
                                </div>
                                <Heading className={Styles.secondaryHead} headingType={"h5"}>100 EcoPoints</Heading>
                                <Text variant={"msmText"}>invite a friend</Text>
                            </div>
                            <div className={Styles.more}>
                            <div className={Styles.ecoImg}>
                                <Image className={Styles.ecoIcon} src='images/MoreSecond.svg' alt='goal' />
                                </div>
                                <Heading className={Styles.secondaryHead} headingType={"h5"}>150 EcoPoints</Heading>
                                <Text variant={"msmText"}>give feedback</Text>
                            </div>
                            <div className={Styles.more}>
                            <div className={Styles.ecoImg}>
                                <Image className={Styles.ecoIcon} src='images/MoreThird.svg' alt='goal' />
                                </div>
                                <Heading className={Styles.secondaryHead} headingType={"h5"}>500 EcoPoints</Heading>
                               <div className={Styles.reviewBox} >
                                <Text variant={"msmText"}>review a dropoff </Text>
                                <Text variant={"msmText"}>location</Text>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={Styles.textMainTertiary}>
                            <Heading className={Styles.primaryHead} headingType={"h5"}>EcoPoint</Heading>
                            <Heading color={"orangePrimary"} strong={"strong9"} headingType={"h5"}>multipliers</Heading>
                        </div>
                        <div className={Styles.PrimaryEcopoints}>
                            <div className={Styles.multipliers}>
                            <div className={Styles.ecoImg}>

                                <Image className={Styles.ecoIcon} src='images/EcoFirst.svg' alt='goal' />
                                </div>
                                <Heading className={Styles.secondaryHead} headingType={"h5"}>+0.1x EcoPoints </Heading>
                                <div className={Styles.reviewBox} >
                                <Text variant={"msmText"}>every league </Text>
                                <Text variant={"msmText"}>progression </Text>
                                </div>
                            </div>
                            <div className={Styles.multipliers}>
                            <div className={Styles.ecoImg}>
                                <Image className={Styles.ecoIconLast} src='images/Leaf.svg' alt='goal' />
                                </div>
                                <Heading className={Styles.secondaryHead} headingType={"h5"}>+0.5x EcoPoints </Heading>
                                <Text variant={"msmText"}>every 3 month streak</Text>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Styles.paraMain}>
                    <div className={Styles.para}>
                        <Text className={Styles.textParaFirst} variant={"xxxlText"} >
                            You automatically earn EcoPoints whenever you recycle! Each dollar you earn from recycling also earns you 1 EcoPoint as well. There are many other ways to earn EcoPoints, which you see below
                        </Text>
                        <div className={Styles.paraContent}>
                            <Text className={Styles.textParaFirst} variant={"xxxlText"} >
                                EcoPoints can be used in the shop where they are <span className={Styles.textPera}>worth 1.5x their cash value.</span>  They can also be donated or traded in for cash (<span className={Styles.textPera}>100 EcoPoints = $1</span>)
                            </Text>
                        </div>


                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default WaystoEarn
