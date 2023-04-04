import React from 'react'
import Styles from './PickupSecond.module.scss';
import {
    Text,
    Heading,
    Button,

} from '../../shared/index'

const PickupSecond = ({confirmHandler,editHandler}) => {
    return (
        <div className={Styles.mainBox}>
            <div className={Styles.headBox}>
                <Text variant="lgText" strong="strong4" className={Styles.itemText}>
                    Scheduled Pickup
                </Text>
            </div>
            <div className={Styles.textBox}>

                <div>
                    <Text color={"primary2"} variant="lgText" strong="strong4" className={Styles.itemText}>July 18, 2021</Text>
                    <Text color={"primary2"} variant="lgText" strong="strong4" className={Styles.itemSecText}>Night (6pm - 12am)</Text>
                </div>

                <Heading headingType={"h4"} className={Styles.topHeading}>Curbside Pickup</Heading>

                <Text color="grayPrimary" variant="smText" strong="strong4" className={Styles.itemText}> 3 x EcoSacks, 0 x EcoKrates</Text>
            </div>

           

            <div className={Styles.mainBtn}>
                <Button variant="pinkSm" size={"btnSm"} btnHandler={editHandler}>Edit</Button>
                <div>
                    <Button variant="solidPrimary" size={"btnSm"} btnHandler={confirmHandler}>Confirm</Button>
                </div>
            </div>


        </div>
    )
}

export default PickupSecond