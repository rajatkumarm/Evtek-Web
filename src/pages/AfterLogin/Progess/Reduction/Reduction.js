import React from 'react'
import Layout from '../../../Container/Layout';
import Styles from './Reduction.module.scss';
import {
    Heading,
    PageTitle,
    Text,
    Select,
    SelectItem,
    Button,
    Radio,
    Icon
} from "../../../../component/shared/index";
import Tooltip from '@mui/material/Tooltip'
const Reduction = () => {
    return (
        <Layout>
            <div className={Styles.headerMain}>
                <PageTitle type="iconchevron" pagename="Progress" modulename="Carbon Reduction" />
            </div>
            <div className={Styles.reductionMain}>
                <div className={Styles.filterCorner}>
                    <Tooltip title="Currently, Click event is not developed"> 
                    <div>
                    <div className={Styles.carbonFilter}><Icon type='Group' /></div>
                    </div>
                </Tooltip>

                </div>
                <div className={Styles.reductionCarbon}>
                    <div className={Styles.reductionMaincontainer}>
                        <Heading className={Styles.reductionText} headingType={"h2"} >Make your impact metrics more accurate </Heading>
                        <div className={Styles.reductContainer}> <Text className={Styles.accurateText} variant={"lgText"} color={"ecoPrimary"}>Your Carbon Reduction is determined not just by your recycling activity, but also by your lifestyle and habits</Text></div>
                        <div className={Styles.reductContainer}><Text className={Styles.accurateText} variant={"lgText"} color={"ecoPrimary"}>By answering the questions below, we can give you a better picture of your overall impact on the environment</Text></div>
                    </div>
                    <div className={Styles.radioReduction}>
                        <Text className={Styles.accurateText} variant={"lgText"} color={"ecoPrimary"}>Q1. Which Evtek service to you use more often?</Text>
                    </div>
                    <form>
                        <div className={Styles.radioHead} >
                            <Radio size="xlgRadio" id="radioOne" label="Pickups" className={Styles.labelText} />
                            <Radio size="xlgRadio" id="radioTwo" label="Dropoffs" className={Styles.labelText} checked="checked" />
                        </div>
                    </form>
                    <form>
                        <div className={Styles.radioReduction}>
                            <Text className={Styles.accurateText} variant={"lgText"} color={"ecoPrimary"}> Q2. What mode of transportation do you use for droposffs?</Text>
                        </div>
                        <div className={Styles.radioHead} >
                            <Radio size="xlgRadio" id="radioThree" label="Bicycle or Electronic vehicle" className={Styles.labelText} />
                            <Radio size="xlgRadio" id="radioFour" label="Bike or Car" className={Styles.labelText} checked="checked" />
                            <Radio size="xlgRadio" id="radioFive" label="Public Transportation" className={Styles.labelText} />
                        </div>
                    </form>


                    <div className={Styles.radioReduction}>
                        <Text className={Styles.accurateText} variant={"lgText"} color={"ecoPrimary"}>Q3. What car do you drive?</Text>
                    </div>
                    <Text className={Styles.accurateText} variant={"lgText"} color={"greyPrimary"}>Please select a brand, model and year</Text>
                    <div className={Styles.brand}>
                        <div className={Styles.selectMain}>
                            <Select className={Styles.dropDown}>
                                <SelectItem className={Styles.Item}>Make</SelectItem>
                                <SelectItem className={Styles.Item}>Make</SelectItem>

                            </Select>
                        </div>
                        <div className={Styles.selectMain}>
                            <Select className={Styles.dropDown}>
                                <SelectItem className={Styles.Item}>Model</SelectItem>
                                <SelectItem className={Styles.Item}>Model</SelectItem>

                            </Select>
                        </div>
                        <div className={Styles.selectMain}>
                            <Select className={Styles.dropDown}>
                                <SelectItem className={Styles.Item}>Year</SelectItem>
                                <SelectItem className={Styles.Item}>Year</SelectItem>

                            </Select>
                        </div>
                    </div>
                    <form>
                        <div className={Styles.radioReduction}>
                            <Text className={Styles.accurateText} variant={"lgText"} color={"ecoPrimary"}>Q4. When do you drop off recyclables?</Text>
                        </div>
                        <div className={Styles.radioHead} >
                            <Radio size="xlgRadio" id="radioSix" label="I plan trips specifically to dropoff recyclables" className={Styles.labelText} />
                            <Radio size="xlgRadio" id="radioSeven" label="I drop them off when I am near a dropoff location" className={Styles.labelText} checked="checked" />
                        </div>
                    </form>


                </div>
                <div className={Styles.btnW}>
                    <Button variant="solidPrimary" size="sm"> Submit</Button>
                </div>
            </div>
        </Layout>
    )
}
export default Reduction;
