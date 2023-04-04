import React from "react";
import { Heading, Text, Button, PageTitle, Input, Image } from "../../../../component/shared";
import Layout from "../../../Container/Layout";
import Styles from './Contaminationfeedback.module.scss'
const Contaminationfeedback = () => {
    return (

        <Layout>
            <div className={Styles.Tracker}>
                <div className={Styles.headerMain}>
                    <PageTitle type="iconchevron" pagename="Recycle" modulename="Contamination Tracker" />
                </div>
                <div className={Styles.container}>
                    <div className={Styles.itemText}>
                        <Heading className={Styles.headitem}>Item in question </Heading>
                        <Text className={Styles.textitem}>select other item</Text>
                    </div>
                    <div className={Styles.bagsection}>
                        <Image src="images/bag.png" alt="" />
                        <div className={Styles.bagdetail}>
                            <Heading className={Styles.headbag}>Plastic Bag </Heading>
                        </div>
                    </div>
                    <div className={Styles.inputSection}>
                        <Heading className={Styles.headitem}>Error Description</Heading>
                        <Input type="textarea" placeholder="Please tell us more about why you think this was an error" className={Styles.teatarea} />
                    </div>
                    <div className={Styles.btnFeedback}>
                        <Button variant="solidPrimary" size="xxmd">Submit Feedback</Button>
                    </div>
                </div>
            </div>
        </Layout>

    );
}




export default Contaminationfeedback;