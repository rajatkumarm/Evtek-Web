import React from "react";
import Styles from "./ChooseCharity.module.scss";
import Layout from "../../../Container/Layout";
import {
  Heading,
  PageTitle,
  Text,
  Input,
  Icon,
  Button,
  Image,
} from "../../../../component/shared";
import { Link } from "react-router-dom";
import { Grid, Modal } from "@material-ui/core";
import {useHistory } from 'react-router-dom';
import { useState } from "react";

const ChooseCharity = () => {
    const [show, setShow] = useState(false);
    const [showSelect, setShowSelect] = useState(false);

   
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
    const history = useHistory();
    const gotoSureDonate = () => {
        history.push("/sure-donate");
    };
    return (
        <Layout>
            <div className={Styles.charityMain}>
                <div className={`${Styles.pageTitle}${Styles.pageTitle01}`}>
                    <PageTitle type="iconheand" pagename="Wallet" modulename="Donate Funds" />
                </div>
                <div className={Styles.wrapper}>
                    <Heading className={Styles.charityHead}>Choose a Charity</Heading>
                    <Text className={Styles.charityText}>Featured Charities</Text>
                    <Grid lg={12} container spacing={2} className={Styles.charitySection}>
                        <Grid lg={3} sm={6} xs={12}>
                            <div className={Styles.charityDetails} onClick={handleOpen}>
                                <Image src="images/Environment.png" alt="" />
                                <Heading className={Styles.charityHeading}>ENVIRONMENT</Heading>
                                <Text className={Styles.charityText01}>Sure We Can</Text>
                            </div>
                        </Grid>
                        <Grid lg={3} sm={6} xs={12}>
                            <div className={Styles.charityDetails}>
                                <Image src="images/Equity.png" alt="" />
                                <Heading className={Styles.charityHeading}>EQUITY</Heading>
                                <Text className={Styles.charityText01}>New York Civil Liberties Union</Text>
                            </div>
                        </Grid>
                        <Grid lg={3} sm={6} xs={12}>
                            <div className={Styles.charityDetails}>
                                <Image src="images/Environment.png" alt="" />
                                <Heading className={Styles.charityHeading}>ENVIRONMENT</Heading>
                                <Text className={Styles.charityText01}>Sure We Can</Text>
                            </div>
                        </Grid>
                        <Grid lg={3} sm={6} xs={12}>
                            <div className={Styles.charityDetails}>
                                <Image src="images/Equity.png" alt="" />
                                <Heading className={Styles.charityHeading}>EQUITY</Heading>
                                <Text className={Styles.charityText01}>New York Civil Liberties Union</Text>
                            </div>
                        </Grid>

                    </Grid>
                    <Input type='text' className={Styles.inputSection} placeholder="search for an charity" />
                    <div className={Styles.searchMain}>
                        <Heading className={Styles.searchHeading}>Search by Issues</Heading>


                        <Grid lg={12} item container spacing={2} className={Styles.search}>
                            <Grid lg={4} sm={6} xs={12}  >
                                <div className={Styles.searchCategory}>
                                    <Image src="images/Animals.png" alt="" />
                                    <Text className={Styles.categoryText}>Animals</Text>
                                </div>

                            </Grid>
                            <Grid lg={4} sm={6} xs={12} >
                                <div className={Styles.searchCategory01}>
                                    <Image src="images/Environment1.png" alt="" />
                                    <Text className={Styles.categoryText}>Environment</Text>
                                </div>

                            </Grid>
                            <Grid lg={4} sm={6} xs={12} >
                                <div className={Styles.searchCategory02}>
                                    <Image src="images/Hunger.png" alt="" />
                                    <Text className={Styles.categoryText}>Hunger & Homelessness</Text>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={Styles.showMore}>
                        <Button variant="buttonWhite">Show more +</Button>
                    </div>
                    <div className={Styles.selectCharity}>
                        <Link className={Styles.textSelect}>select a charity</Link>
                        <Icon type='iconclose' customClass={Styles.icon01} />
                    </div>
                </div>
                <Modal
                    open={show}
                    onClose={handleClose}
                    style={{ backdropFilter: "blur(5px)" }}
                >
                    <div className={Styles.main}>
                        <div className={Styles.aboutMain}>
                            <div className={Styles.headSection}>
                                <Heading className={Styles.headingMain}>Sure We Can</Heading>
                                <Icon type="iconHeart" customClass={Styles.iconHeart} />
                            </div>
                            <div className={Styles.imageSection}>
                                <div className={Styles.searchCategory}>
                                    <Image src="images/Environment.png" alt="" />
                                </div>
                                <div className={Styles.imgButton}>
                                    <Button size="xsm" btnHandler={() => setShowSelect(!showSelect)} variant={showSelect ? 'solidPrimary' : 'tertiary' }  >
                                        select
                                    </Button>
                                </div>
                            </div>
                            <div className={Styles.linkSection}>
                                <div className={Styles.sectionLeft}>
                                    <Link className={Styles.link}>Visit Website</Link>
                                    <Icon type="iconFill" customClass={Styles.linkIcon} />
                                </div>
                                <div className={Styles.sectionRight}>
                                    <Heading className={Styles.hesdingRight}>
                                        Key Accomplishments
                                    </Heading>
                                    <Text className={Styles.textRight}>
                                        SWC has experienced consistent growth over the past nine
                                        years, leading to a number of notable milestones and
                                        recognition of our contributions to the community and
                                        environment.
                                    </Text>
                                </div>
                            </div>
                            <Heading className={Styles.aboutHeading}>About</Heading>
                            <div className={Styles.aboutSection}>
                                <div className={Styles.textLeft0}>
                                    <Text className={Styles.textLeft01}>
                                        SWC was founded in 2007 to provide canners people who
                                        collect cans and bottles from the streets- a welcoming place
                                        to redeem and connect with others engaged in the same
                                        endeavor. SWC is the only non-profit homeless-friendly
                                        redemption center in nyc.
                                    </Text>
                                </div>
                                <div className={Styles.textRight0}>
                                    <Heading className={Styles.headingRight0}>
                                        Key Milestones
                                    </Heading>
                                    <div className={Styles.textRight01}>
                                        <li>More than 400 canners are part of our community</li>
                                        <li>Recovered 10 million cans and bottles in 2015</li>
                                        <li>
                                            Distributed more than $500,000 among the community of
                                            canners in 2015
                                        </li>
                                        <li>
                                            Settled in an ideal location in Brooklyn with 12,000 sq ft
                                        </li>
                                        <li>
                                            Expanded and diversified activities: compost, community
                                            garden, educational visits, talks
                                        </li>
                                        <li>
                                            Diversion of 50 tons of organic waste from the landfill
                                            every year
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {showSelect &&
                            <div className={Styles.continueCharity} onClick={gotoSureDonate}>
                                <Text color={"secondary"} variant={"smText01"}>continue</Text>
                                <Icon type='iconFill' customClass={Styles.icon01} />
                            </div>
                        }
                    </div>


                </Modal>
            </div>
        </Layout>
    );
}

export default ChooseCharity;
