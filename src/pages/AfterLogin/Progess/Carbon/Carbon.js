import React from 'react'
import Layout from '../../../Container/Layout'
import Styles from './Carbon.module.scss'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {
    Icon,
    Image,
    Heading,
    PageTitle,
    Text,
} from "../../../../component/shared/index";
import Tooltip from '@mui/material/Tooltip'
const Carbon = () => {
    const history = useHistory();
    const gotoReduction = () => {
        history.push("/reduction");
    };
    return (
        <Layout>
            <div className={Styles.headerMain}>
                <PageTitle type="iconchevron" pagename="Progress" modulename="Carbon Reduction" />
            </div>
            <div className={Styles.carbonreduct}>

                <div className={Styles.filterCorner}>
                    <Tooltip title="Currently, Click event is not developed">
                        <div className={Styles.carbonFilter}><Icon type='Group' /></div>
                    </Tooltip>
                </div>
                <div className={Styles.carbonMain}>
                    <div className={Styles.coImg}>
                        <div className={Styles.carbonContainer}>
                            <div className={Styles.carbonImg}>
                                <div>
                                    <Text className={Styles.blogText} variant={"lgText"}>Your <span className={Styles.reycleHead}>impact </span>on the environment</Text>
                                    <Icon type='iconi' /></div>
                                <Image src='images/carbon.svg' alt={"Logo"} />
                            </div>

                        </div>
                        <div className={Styles.carbonContainer}>
                            <Text className={Styles.blogText} variant={"lgText"}>Total CO2 emissions prevented </Text>
                            <Heading className={Styles.recycleText} headingType={"h1"} >788 lbs </Heading>
                        </div>
                    </div>
                    <div className={Styles.firstRow}>
                        <div className={Styles.carbonBox}>
                            <Image src='images/ozone.svg' />
                            <div className={Styles.carbonContainer}>
                                <Text className={Styles.blogText} variant={"xsText"}> <span className={Styles.carbonText}>48 </span> ft of photochemical ozone creation prevented</Text>
                            </div>
                        </div>
                        <div className={Styles.carbonBox}>
                            <div className={Styles.car}>  <Image src='images/reuse.svg' /></div>
                            <div className={Styles.carbonContainer}>
                                <Text className={Styles.blogText} variant={"xsText"}> <span className={Styles.carbonText}>91 </span> cubic feet of acidification avoided</Text>
                            </div>
                        </div>
                        <div className={Styles.carbonBox}>
                            <div className={Styles.car}> <Image src='images/Ecology Factory.svg' /></div>
                            <div className={Styles.carbonContainer}>
                                <Text className={Styles.blogText} variant={"xsText"}> <span className={Styles.carbonText}>32 </span>  cubic feet of smog prevented</Text>
                            </div>
                        </div>
                        <div className={Styles.carbonBox}>
                            <div className={Styles.car}> <Image src='images/air cleaned.svg' /></div>
                            <div className={Styles.carbonContainer}>
                                <Text className={Styles.blogText} variant={"xsText"}> <span className={Styles.carbonText}>122</span>  cubic feet of air cleaned</Text>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.secondRow}>
                        <div className={Styles.carbonBox}>
                            <div className={Styles.car}><Image src='images/Hom.svg' /></div>
                            <div className={Styles.carbonContainer}>
                                <Text className={Styles.blogText} variant={"xsText"}> <span className={Styles.carbonText}>6 </span> homes powered for one day</Text>
                            </div>
                        </div>
                        <div className={Styles.carbonBox}>
                            <div className={Styles.car}><Image src='images/Care.svg' /></div>
                            <div className={Styles.carbonContainer}>
                                <Text className={Styles.blogText} variant={"xsText"}> <span className={Styles.carbonText}>43</span>gallons of gas consumption saved</Text>
                            </div>
                        </div>
                        <div className={Styles.carbonBox}>
                            <div className={Styles.car}><Image src='images/mob.svg' /></div>
                            <div className={Styles.carbonContainer}>
                                <Text className={Styles.blogText} variant={"xsText"}> <span className={Styles.carbonText}>555.6 </span> smartphones fully charged</Text>
                            </div>
                        </div>
                        <div className={Styles.carbonBox}>
                            <div className={Styles.car}><Image src='images/pin.svg' /></div>
                            <div className={Styles.carbonContainer}>
                                <Text className={Styles.blogText} variant={"xsText"}> <span className={Styles.carbonText}>14 </span> oak trees sequestered for a year</Text>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.carbonContainer}>
                        <div className={Styles.carbonicon} onClick={gotoReduction}>
                            <Text className={Styles.blogText} variant={"smText"} color={"ecoPrimary"}>Help us make these metrics more accurate</Text>
                            <div className={Styles.arrow}><Icon type='iconFill' /></div>
                        </div>
                    </div>
                </div>
                <div className={Styles.carbonEpa}>
                    <Text className={Styles.blogText} variant={"smText"} color={"ecoPrimary"}>Evtek’s carbon emission metrics are calculated using EPA’s Greenhouse Gas Equivalencies Calculator  </Text>
                    <div className={Styles.websiteEpa}>
                        <Link>Read more on EPA’s website</Link>
                    </div>
                </div>
                <div className={Styles.calculatorEpa}>
                    <Text className={Styles.blogText} variant={"smText"} color={"secondary"}>Open EPA calculator</Text>
                    <Tooltip title="Currently, Click event is not developed"><div className={Styles.epaCalc}><Icon type='iconFill' /></div></Tooltip>
                </div>
                <div className={Styles.congratsCo}>
                    <div><Image src='images/carbon.svg' alt={"Logo"} /></div>
                    <div>
                        <Text className={Styles.blogText} variant={"xsText"} color={"ecoPrimary"}>Congrats!</Text>
                        <div><Text className={Styles.blogText} variant={"xsText"} color={"ecoPrimary"}>Share your carbon-negative impact</Text></div>
                    </div>
                    <Tooltip title="Currently, Click event is not developed"><div className={Styles.coico}><Icon type='iconArrow' /></div></Tooltip>

                </div>
            </div>
        </Layout>
    )
}
export default Carbon