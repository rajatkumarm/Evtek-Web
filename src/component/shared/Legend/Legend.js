
import React from 'react'
import { Icon, Text } from "../index"
import Styles from './Legend.module.scss';

export default function Legend({ onCLick }) {
    return (
        <div >

            <div className={Styles.legendMain}>
                <div className={Styles.legendHead}>
                    <Text className={Styles.headText} strong="strong9" variant={"smText"}>Legend</Text>
                    <div className={Styles.iconHead}><Icon click={onCLick} type="iconclose" /></div>
                </div>
                <div className={Styles.previousDate}>
                    <div className={Styles.calenderDate}>
                        <Text className={Styles.claenderText} variant={"smText"} color={"secondary"}>28</Text>
                    </div>
                    <Text className={Styles.headText} variant={"xsText"}>Selected Date</Text>
                </div>
                <div className={Styles.todaysDate}>
                    <div className={Styles.calenderDate}>
                        <Text variant={"smText"} color={"tertiary"}>28</Text>
                    </div>
                    <Text className={Styles.headText} variant={"xsText"}>Today's Date</Text>
                </div>
                <div className={Styles.curbsideDate}>
                    <div className={Styles.calenderDate}>
                        <Text variant={"smText"} color={"tertiary"}>28</Text>
                    </div>
                    <Text className={Styles.headText} variant={"xsText"}>Curbside Pickup timeslots available</Text>
                </div>
                <div className={Styles.Shedulepickup}>
                    <div className={Styles.legendHead}>
                        <Text className={Styles.headTex} variant={"smText"} >Your scheduled Pickups</Text>
                    </div>
                    <div className={Styles.previousDate}>
                        <div className={Styles.calenderDate}>
                            <Text className={Styles.dateText} variant={"smText"} color={"tertiary"}>28</Text>
                        </div>
                        <Text className={Styles.headText} variant={"xsText"}>Selected Date</Text>
                    </div>
                    <div className={Styles.todaysDate}>
                        <div className={Styles.calenderDate}>
                            <Text className={Styles.dateTexttoday} variant={"smText"} color={"tertiary"}>28</Text>
                        </div>
                        <Text className={Styles.headText} variant={"xsText"}>Today's Date</Text>
                    </div>
                    <div className={Styles.curbsideDate}>
                        <div className={Styles.calenderDate}>
                            <Text className={Styles.dateTextcurb} variant={"smText"} color={"tertiary"}>28</Text>
                        </div>
                        <Text className={Styles.headText} variant={"xsText"}>Curbside Pickup timeslots available</Text>
                    </div>

                </div>
                <div className={Styles.bottemText}>
                    <Text className={Styles.headText} variant={"xsText"} color={"grayPrimary"}>Please note that Bulk Pickups are available on any day but requireat least<span className={Styles.bottemHead}> 2500 items</span></Text>
                </div>

            </div>

        </div>
    )
}
