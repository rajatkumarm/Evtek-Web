import React from "react";
import Styles from './Invite.module.scss'
import { Heading, PageTitle, Text, Button,Image } from "../../../component/shared";
import Layout from "../../Container/Layout";
import { Link } from "react-router-dom";
import {CopyToClipboard} from 'pivotal-ui/react/copy-to-clipboard';
import Tooltip from '@mui/material/Tooltip'



const Invite = () => {
    return (

        <Layout>
            <div className={Styles.pageTitle}>
                <PageTitle type="iconchevron" pagename="Account" modulename="Invite Friends" />
            </div>
            <div className={Styles.wrapper}>
                <div className={Styles.leftSection}>
                    <div className={Styles.inviteDetails}>
                        <Heading className={Styles.inviteHead}>Invite Friends and earn EcoPoints</Heading>
                        <Text className={Styles.inviteText}>Earn 100 EcoPoints for every invite sent and 1500 EcoPoints for every new
                            active Evtetk account created with your referral code
                        </Text>
                    </div>
                    <div className={Styles.imgSection}>
                        <div className={Styles.imdDetails}>
                            <Heading className={Styles.imgHeading}>You have invited...</Heading>
                        </div>
                        <div className={Styles.img01}>
                            <div className={Styles.imgTime0}>
                                <Image  src="images/invite01.png" alt="" />
                                <div className={Styles.time01}>
                                    <Heading className={Styles.imgTime}>invite sent 6/12/2021</Heading>
                                    <Text className={Styles.imgDays}>expires in 30 days</Text>
                                </div>
                            </div>
                            <Link className={Styles.reminder}>Send Reminder</Link>
                        </div>
                        <div className={Styles.img02}>
                            <div className={Styles.imgTime0}>
                                <Image  src="images/invite02.png" alt="" />
                                <div className={Styles.time01}>
                                    <Heading className={Styles.imgTime}>invite sent 6/12/2021</Heading>
                                    <Text className={Styles.imgDays1}>JOINED!</Text>
                                </div>
                            </div>
                            <Link className={Styles.echoPoint}>+1500 EcoPoints</Link>
                        </div>
                    </div>
                </div>
                <div className={Styles.rightSection}>
                    <div className={Styles.textMain}>
                        <Text className={Styles.codeText}>your code</Text>
                    </div>
                    <div className={Styles.codeSection}>
                        <CopyToClipboard className={Styles.text} text="SAM87263" tooltip="copied!">SAM87263</CopyToClipboard>
                    </div>
                    <div className={Styles.buttonInvite}>
                    <Tooltip title="Currently, Click event is not developed">
                        <div><Button size="xmd01" variant="solidPrimary">Send an invite</Button></div>
                        </Tooltip>
                    </div>
                </div>

            </div>
        </Layout>

    );
}


export default Invite;