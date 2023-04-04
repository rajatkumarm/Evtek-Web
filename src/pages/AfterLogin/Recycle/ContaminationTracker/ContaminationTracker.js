import React from "react";
import { useHistory } from "react-router-dom";
import { Heading, Icon, Text, PageTitle, Image } from "../../../../component/shared";
import Layout from "../../../Container/Layout";
import Styles from './ContaminationTracker.module.scss';
import Tooltip from '@mui/material/Tooltip';


const ContaminationTracker = () => {
    const history = useHistory();
    const gotoContaminationfeedback = () => {
        history.push("/contamination-Feedback");
    };
    const gotoContaminationdate = () => {
        history.push("/contamination-date");
    };
    return (

        <Layout>
            <div className={Styles.Tracker}>
                <div className={Styles.headerMain}>
                    <PageTitle type="iconchevron" pagename="Recycle" modulename="Contamination Tracker" />
                </div>
                <div className={Styles.container}>
                    <div className={Styles.itemheading}>
                        <div className={Styles.itemhead}>2</div>
                        <Text className={Styles.text}>Unrecyclable Items</Text>
                    </div>
                    <div className={Styles.itembox}>
                        <Text className={Styles.itemtext}> These items are not currently accepted by Evtek and make it difficult to process your recyclables.
                            Please remove these items from future recycling pickups and drop-offs</Text>
                    </div>
                    <div className={Styles.bagsection} >
                        <Image src="images/bag.png" alt="" />
                        <div className={Styles.bagdetail}>
                            <Heading className={Styles.imghead} onClick={gotoContaminationfeedback}>Plastic Bag </Heading>
                            <Text className={Styles.imgtext} handleClick={gotoContaminationdate}>recycled 2/14/2021</Text>
                        </div>
                    </div>
                    <div className={Styles.blanketsection}>
                        <Image src="images/Blanket.png" alt="" />
                        <Tooltip title="Currently, Click event is not developed">
                        <div className={Styles.bagdetail}>
                            <Heading className={Styles.imghead}>Wool Blanket </Heading>
                            <Text className={Styles.imgtext}>recycled 6/19/2021</Text>
                        </div>
                        </Tooltip>

                    </div>
                    <Heading className={Styles.info}>More Information</Heading>
                    <div className={Styles.textinfo}>
                        <Tooltip title="Currently, Click event is not developed">
                            <div>
                                <Text className={Styles.textinfo01}>What can you recycle?
                                    <Icon type="iconFill" customClass={Styles.iconinfo} />
                                </Text>
                            </div>
                        </Tooltip>

                    </div>
                    <div className={Styles.textinfo01}>
                        <Tooltip title="Currently, Click event is not developed">
                            <div>
                                <Text className={Styles.textinfo01}>FAQs
                                    <Icon type="iconFill" customClass={Styles.iconinfo01} />
                                </Text>
                            </div>

                        </Tooltip>
                    </div>
                </div>

            </div>
        </Layout>

    );
}
export default ContaminationTracker;