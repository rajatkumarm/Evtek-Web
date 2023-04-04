import React from "react";
import { Button, Heading, Icon, Text,Image } from "../../../../component/shared";
import Styles from './About.module.scss'
import { Link } from "react-router-dom";

const About = () => {
    return (
            <div className={Styles.main}>
                <div className={Styles.aboutMain}>
                    <div className={Styles.headSection}>
                        <Heading className={Styles.headingMain}>Sure We Can</Heading>
                        <Icon type="iconHeart" customClass={Styles.iconHeart} />
                    </div>
                    <div className={Styles.imageSection}>                   
                        <div className={Styles.searchCategory}>
                            <Image src="images/Environment.png" alt=""/>
                        </div>
                        <div className={Styles.imgButton}>
                            <Button variant="tertiary" size="xsm" >select</Button>
                        </div>
                    </div>
                    <div className={Styles.linkSection}>
                        <div className={Styles.sectionLeft}>
                            <Link className={Styles.link}>Visit Website</Link>
                            <Icon type="iconFill" customClass={Styles.linkIcon} />
                        </div>
                        <div className={Styles.sectionRight}>
                            <Heading className={Styles.hesdingRight}>Key Accomplishments</Heading>
                            <Text className={Styles.textRight}>SWC has experienced consistent
                                growth over the past nine years,
                                leading to a number of notable milestones and
                                recognition of our contributions
                                to the community and environment.
                            </Text>
                        </div>
                    </div>
                    <Heading className={Styles.aboutHeading}>About</Heading>
                    <div className={Styles.aboutSection}>
                        <div className={Styles.textLeft0}>
                            <Text className={Styles.textLeft01}>SWC was founded in 2007 to provide canners 
                                people who collect cans and bottles from the streets-
                                a welcoming place to redeem and connect
                                with others engaged in the same endeavor. SWC is the only non-profit
                                homeless-friendly redemption center in nyc.
                            </Text>
                        </div>
                        <div className={Styles.textRight0}>
                            <Heading className={Styles.headingRight0}>Key Milestones</Heading>
                            <div className={Styles.textRight01}>
                                <li>More than 400 canners are part of our community</li>
                                <li>Recovered 10 million cans and bottles in 2015</li>
                                <li> Distributed more than $500,000 among the community of canners in 2015</li>
                                <li> Settled in an ideal location in Brooklyn with 12,000 sq ft</li>
                                <li>Expanded and diversified activities: compost, community garden, educational visits, talks</li>
                                <li> Diversion of 50 tons of organic waste from the landfill every year</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )

};
export default About;