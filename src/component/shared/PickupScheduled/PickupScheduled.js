import React from 'react'
import Styles from './PickupScheduled.module.scss';
import {
    Text,
    Heading,
    Button,
    Checkbox
    
 } from '../../shared/index'

const PickupScheduled = ({confirmHandler,editHandler}) => {
    return (
        <div className={Styles.mainBox}>
         <div className={Styles.headBox}>
            <Text   variant="lgText"  strong="strong4" className={Styles.itemText}>
                Scheduled Pickup
            </Text>
            </div> 
            <div className={Styles.textBox}> 

            <div>
                <Text color={"primary2"} variant="lgText" strong="strong4" className={Styles.itemText}>July 18, 2021</Text>
                <Text color={"primary2"} variant="lgText" strong="strong4" className={Styles.itemSecText}>Morning (8am - 12pm)</Text>
            </div>

            <Heading headingType={"h4"} className={Styles.topHeading}>Bulk Pickup</Heading>

            <Text color="grayPrimary"  variant="smText" strong="strong4"  className={Styles.itemText}> 
             3 x EcoSacks, 0 x EcoKrates</Text>
            </div>

            <div className={Styles.Checksection}>
            <Checkbox id="okay" checked="checked"  onChange="onChange" />
            <Text color="grayPrimary" variant="smText" strong="strong4"  className={Styles.pickupText}>  I understand that a Bulk Pickup requires at least 2500 items.</Text>
           
          
          </div>

            <div className={Styles.mainBtn}>
                <Button variant="pinkSm" size={"btnSm"} btnHandler={editHandler} >Edit</Button> 
                <div>
                    <Button variant="solidPrimary" btnHandler={confirmHandler} size={"btnSm"}>Confirm</Button>
                   
                </div>
            </div>


        </div>
    )
}

export default PickupScheduled