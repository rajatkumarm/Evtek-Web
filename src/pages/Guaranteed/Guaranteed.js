import React from 'react'
import { PageTitle } from '../../component/shared'
import Layout from '../Container/Layout'
import Styles from "./Guaranteed.module.scss";
import Text from '../../component/shared/Text';
import Icon from '../../component/shared/Icon';


const Guaranteed = () => {
    return (
        <Layout>
             <PageTitle modulename={"Evtek’s 100% Recycled Guarantee"} pagename="Account" type="iconchevron" />
             <div className={Styles.gauranteedBox}>
                <div>
                    <div className={Styles.percent}>
                        <Text strong="strong9" variant={"xx4Text"}>100%</Text>
                        <Text variant="xx4Text" className={Styles.itemText}>of your items are recycled, </Text>
                    </div>
                    <Text strong="strong9" variant={"xx4Text"}>Guaranteed</Text>
                </div>
                <div className={Styles.gauranteedIcon}>
                    <Icon className={Styles.pickupBox} type={"iconVector5"} />
                </div>
            </div>
        </Layout>


    )
}

export default Guaranteed
