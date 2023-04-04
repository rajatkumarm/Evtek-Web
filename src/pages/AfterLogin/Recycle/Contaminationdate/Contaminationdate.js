
import React from "react";
import { Heading, Icon, Text, PageTitle,Image } from "../../../../component/shared";
import Layout from "../../../Container/Layout";
import Styles from './Contaminationdate.module.scss'
import { Link } from "react-router-dom";






const Contaminationdate = () => {
    return (
        
            <Layout>
                <div className={Styles.Tracker}>
                    <div className={Styles.headerMain}>
                        <PageTitle type="iconchevron" pagename="Recycle" modulename="Contamination Tracker" />
                    </div>
                    <div className={Styles.container}>
                        <div className={Styles.bagsection}>
                            <Image src="images/bag.png" alt="" />
                            <div className={Styles.bagdetail}>
                                <Heading className={Styles.headbag}>Plastic Bag </Heading>
                            </div>
                        </div>
                        <div className={Styles.datetime}>
                            <Heading className={Styles.headdate}>Date and Time </Heading>
                            <Text className={Styles.textdate}>Recycled at 03:45 pm on Sunday 2/14/2021</Text>
                        </div>

                        <div className={Styles.recycleSection}>
                            <Heading className={Styles.recyclehead}>Why this item is not recyclable</Heading>
                            <Text className={Styles.recycletext}>Plastic bags cannot be recycled because they have a tendency to cling tightly to sorting machinery,
                                wrapping themselves around moving components.
                                This means workers have to cut away the plastic bags multiple times a day which ultimately costs tens of thousands of dollars
                                while the machines aren’t running and processing recyclables as they should.</Text>
                        </div>
                        <div className={Styles.linkDetails}>
                            <Link className={Styles.details}>
                                see associated transaction details
                                <Icon type="iconFill" customClass={Styles.icon} />
                            </Link>
                        </div>
                        <div className={Styles.footer}>
                            <Link className={Styles.textfooter}>Think this was an error?</Link>
                        </div>
                    </div>
                </div>
            </Layout>
        
    );
}




export default Contaminationdate;