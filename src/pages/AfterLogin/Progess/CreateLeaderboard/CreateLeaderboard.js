import React from 'react'
import Layout from '../../../Container/Layout'
import { PageTitle, Text, FormData, Input, Select, SelectItem, Icon, Button } from '../../../../component/shared'
import Styles from '../CreateLeaderboard/CreateLeaderboard.module.scss'


export default function CreateLeaderboard() {
    return (
        <Layout>
            <div className={Styles.recycleLeaderboards}>

                <div className={Styles.headerMain}>
                    <PageTitle type="iconchevron" pagename="Recycle" modulename="Create a Leaderboard" />
                </div>
                <div className={Styles.container}>
                    <div className={Styles.formPara}>
                        <Text className={Styles.itemText} variant={"xxlText"} color={"ecoPrimary"} >You will get 100 EcoPoints for creating a Leaderboard that gains 10 or more members within one week of starting it!</Text>
                    </div>
                    <div className={Styles.formData}>
                        <form>
                            <div className={Styles.selectHeading}><Text className={Styles.itemText} strong="strong6" variant={"xxlText"} >Leaderboard Name</Text></div>
                            <div>
                                <Input className={Styles.leaderInput} />
                            </div>
                            <div className={Styles.selectHeading}> <Text className={Styles.itemText} strong="strong6" variant={"xxlText"} >Leaderboard Type</Text></div>
                            <FormData textVariant="lgText" textVariantTwo="mdText" textColor="grayPrimary" text="Open Leaderboard" textSecond="(open to all, no member limit)" htmlfor="radioOne" id="radioOne" />
                            <FormData textVariant="lgText" textVariantTwo="mdText" textColor="grayPrimary" checked="checked" text="Private Leaderboard" textSecond="(invite needed to join, member cap)" htmlfor="radioTwo" id="radioTwo" />
                            <div className={Styles.selectHeading}>
                                <Text className={Styles.itemText} strong="strong6" variant={"xxlText"} >Member Limit</Text>
                                <Text className={Styles.itemText} color="grayPrimary" strong="strong6" variant={"xxlText"} >(optional)</Text>
                            </div>
                            <div className={Styles.dropDown}>
                                <Select className={Styles.dropContent}>
                                    <SelectItem>select max number of Leaderboard members</SelectItem>
                                    <SelectItem>select max number of Leaderboard members</SelectItem>
                                    <SelectItem>select max number of Leaderboard members</SelectItem>
                                    <SelectItem>select max number of Leaderboard members</SelectItem>
                                </Select>
                            </div>
                        </form>
                        <form>
                            <div className={Styles.selectHeading}> <Text className={Styles.itemText} strong="strong6" variant={"xxlText"} >Leaderboard time period</Text></div>
                            <FormData textVariant="lgText" label="2 weeks" id="radioThree" checked="checked" />
                            <FormData textVariant="lgText" label="1 Month" id="radieFour" />
                            <FormData textVariant="lgText" label="3 Months" id="radioFive" />
                            <FormData textVariant="lgText" label="4 Months" id="radioSix" />
                        </form>
                        <form>
                            <div className={Styles.selectHeading}>
                                <Text className={Styles.itemText} strong="strong6" variant={"xxlText"} >Leaderboard Reward</Text>
                                <Icon type={"iconi"} customClass={Styles.infoIcon} />
                            </div>
                            <FormData textVariant="lgText" label="Membership fee EcoPoint pool" id="radioSeven" />
                            <FormData textVariant="lgText" label="Individual cash deposit" id="radioEighth" />
                            <FormData textVariant="lgText" label="Shared cash deposit" id="radioNine" />
                        </form>
                        <form>
                            <div className={Styles.selectHeading}>  <Text className={Styles.itemText} strong="strong6" variant={"xxlText"} >Number of winners</Text></div>
                            <FormData textVariant="lgText" label="First Position" id="radioTen" />
                            <FormData textVariant="lgText" label="Top three" id="radioZero" />
                            <FormData textVariant="lgText" label="Top Ten" id="radioZeroOne" />
                        </form>
                        <Button btnClass={Styles.btnPrimary} size={"btnXlg"} variant={"secondaryDisable"}>Create Leaderboard</Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
