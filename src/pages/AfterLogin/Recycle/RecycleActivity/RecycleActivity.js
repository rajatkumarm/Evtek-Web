import React from 'react'
import Styles from './RecycleActivity.module.scss';
import { Heading, Icon, Text,  PageTitle, Transaction, ActivityShop, Reward, RecycledPickup } from "../../../../component/shared";
import Filter from '../../../../component/shared/Filter';
import Layout from "../../../Container/Layout";
import RecycledDropoff from '../../../../component/shared/RecycledDropoff';
import { useHistory } from 'react-router-dom';



export default function RecycleActivity() {
    const history =useHistory();
    const gotoContamination = () => {
        history.push("/contamination-tracker");
      };
    return (
        <>
            <Layout>
                <div className={Styles.Tracker}>

                    <div className={Styles.headerMain}>
                        <PageTitle type="iconactivity" pagename="Recycle" modulename="Recycling Activity" />
                    </div>
                    <div className={Styles.container}>
                        <div className={Styles.contamination} onClick={gotoContamination}>
                        <div className={Styles.contaminationSecond} >
                            <Text className={Styles.textUpdate} variant={"xxsText"} color={"greySecondary"}>updated 7.27.2021</Text>
                            <div className={Styles.contaminationTracker}>
                                <Icon type="iconalert" />
                                <Heading className={Styles.textTracker}>Contamination Tracker</Heading>
                                <div className={Styles.textTwo}><Text variant={"msmText"} color={"secondary"} className={Styles.textTrackertwo} >2</Text></div>
                                </div>
                            </div>
                            <div className={Styles.iconFill}>
                                <Icon type="iconFill" />
                                </div>
                        </div>
                        <div className={Styles.Filter}>
                            <Filter />
                        </div>
                        <div className={Styles.RecycledDropoff}>
                            <RecycledDropoff />
                        </div>
                        <div className={Styles.Transaction}>
                            <Transaction />
                        </div>
                        <div className={Styles.RecycledPikup}>
                            <RecycledPickup />
                        </div>
                        <div className={Styles.ActivityShop}>
                            <ActivityShop />
                        </div>
                        <div className={Styles.Reward}>
                            <Reward />
                        </div>


                    </div>

                </div>
            </Layout>
        </>
    )
}
