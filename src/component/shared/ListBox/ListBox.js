import React from 'react'
import Styles from '../ListBox/ListBox.module.scss'
import Text from '../Text';
import Icon from '../Icon';
import Heading from '../Heading';

export default function ListBox() {
    return (
        <div className={Styles.evtekModelContent}>
            <div className={Styles.modelHeading}>
                <div className={Styles.headContent}>
                    <Icon type="iconi" customClass={Styles.iconClass} />
                    <Heading className={Styles.heading} headingType={"h4"} color={"primary2"} >Recycling Methods</Heading>
                </div>
                <Icon type="iconclose" customClass={Styles.iconClassTwo} />
            </div>
            <div>
                <div className={Styles.firstContent}>
                    <Text className={Styles.secondText} strong="strong9" variant="xxlText">Pickup</Text>
                    <Text className={Styles.secondText}>- Schedule an appointment and an Evtek truck will pick up</Text>
                    <Text className={Styles.primaryText} color="primary2">EcoSacks</Text>
                    <Text className={Styles.secondText}> and  </Text>
                    <Text className={Styles.primaryText} color="primary2">EcoKrates</Text>
                    <Text className={Styles.secondText}>from your address at the selected day and time</Text>
                </div>
                <div className={Styles.secondContent}>
                    <Text className={Styles.secondText} strong="strong9" variant="xxlText">Drop-off</Text>
                    <Text className={Styles.secondText}> - Go to one of Evtek’s Drop-off locations, and quickly drop-off </Text>
                    <Text className={Styles.primaryText} color="primary2">EcoSacks</Text>
                </div>
                <div className={Styles.secondContent}>
                    <Text className={Styles.secondText} strong="strong9" variant="xxlText">Walk-in</Text>
                    <Text className={Styles.secondText}> - Go to one of Evtek’s Walk-in locations, sign in at the kiosk and deposit your recyclables. You will have the option to receive cash.</Text>
                </div>
            </div>
        </div>
    )
}



