import React from 'react'
import Layout from '../../../Container/Layout'
import Styles from './JoinLeaderboard.module.scss'
import { PageTitle, Text, } from '../../../../component/shared'
import { useHistory } from 'react-router-dom'


export default function JoinLeaderboard() {
    const history=useHistory();
    const gotoOpenLead = () => {
        history.push("/open-leaderboard");
      };
      const gotoPrivateLead = () => {
        history.push("/private-leaderboard");
      };
    return (
        <Layout>
            <div className={Styles.recycleLeaderboards}>

                <div className={Styles.headerMain}>
                    <PageTitle type="iconchevron" pagename="Recycle" modulename="Join a Leaderboard" />
                </div>
                <div className={Styles.container}>
                    <div className={Styles.textContent}>
                        <Text className={Styles.itemText} variant={"xxlText"} strong={"strong6"} color={"ecoPrimary"} >You can join a maximum of 4 Leaderboards</Text>
                        <div className={Styles.textJoining}>
                            <Text className={Styles.itemText} variant={"xxlText"} strong={"strong6"} color={"ecoPrimary"} >Joining a new Leaderboard and remaining in it for at least a month will earn you 50 EcoPoints!</Text>
                        </div>
                    </div>
                    <div className={Styles.tabFirst} onClick={gotoOpenLead}>
                        <Text className={Styles.itemText} variant={"xxlText"} color={"primary2"} >Join an open Leaderboard</Text>
                    </div>
                    <div className={Styles.tabSecond} onClick={gotoPrivateLead}>
                        <Text className={Styles.itemText} variant={"xxlText"} color={"ecoPrimary"} >Join a Private Leaderboard</Text>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
