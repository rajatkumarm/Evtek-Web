import React, { useState } from 'react';
import { Text, Heading, Icon, Image, PageTitle, Button, TwoLineChart } from '../../../../component/shared';
import Layout from '../../../Container/Layout/Layout';
import Styles from './Wallet.module.scss'
import Images from '../../../../Images.json';
import { useHistory } from 'react-router-dom';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay'
import 'swiper/css';
import Tooltip from '@mui/material/Tooltip';

const Wallet = () => {
    const [show, setShowInfo] = useState(false);
    const [btnActive, setShowbtnActive] = useState([0])
    const history = useHistory();
    const gotoTransfer = () => {
        history.push("/tranfer-fund");
    };
    const gotoDonate = () => {
        history.push("/donate-fund");
    };
    const gotoRedeem = () => {
        history.push("redeem-point");
    };
    const gotoPrefrences = () => {
        history.push("./preferences");
    };
    const gotoCoupon = () => {
        history.push("./coupon-details");
    };
    return (
        <Layout>
            <div className={Styles.Main}>
                <div className={Styles.walletMain}>
                    <PageTitle type={"iconUnion"} modulename={"Wallet"} />
                    <Heading className={Styles.actionHeading} headingType={"h2"}>Quick Actions</Heading>

                    <div className={Styles.Action} onClick={gotoTransfer}>
                        <Icon customClass={Styles.transferIcon} type='iconXMLID' />
                        <Text className={Styles.transferText} variant={"xxxlText"} color={"secondary"}>Transfer Funds</Text>
                        <Icon customClass={Styles.nextIcon} type='iconFill' />
                    </div>

                    <div className={Styles.Donate} onClick={gotoDonate}>
                        <Icon customClass={Styles.transferIcon} type='iconheand' />
                        <Text className={Styles.transferText} variant={"xxxlText"} color={"secondary"}>Donate Funds</Text>
                        <Icon customClass={Styles.nextIcon} type='iconFill' />
                    </div>

                    <div className={Styles.redeem} onClick={gotoRedeem}>
                        <Icon customClass={Styles.transferIcon} type='iconcurrency' />
                        <Text className={Styles.transferText} variant={"xxxlText"} color={"secondary"}>Redeem EcoPoints</Text>
                        <Icon customClass={Styles.nextIcon} type='iconFill' />
                    </div>

                    <div className={Styles.walletReward}>
                        <Heading headingType={"h5"}>Available Rewards</Heading>
                        <Tooltip title="Currently, Click event is not developed">
                            <div>
                                <Icon type='iconi' customClass={Styles.infoIcon} />
                            </div>
                        </Tooltip>
                    </div>
                    <div className={Styles.freeReward}>
                        <div className={Styles.FreeText}>
                            <Heading headingType={"h6"} color="grayPrimary">Free</Heading>
                            <Text color={"grayPrimary"} variant={"smText"}>Reusable Bottle</Text>
                            <div className={Styles.bottleMain}>
                                <Image className={Styles.recyleBottle} src='images/recycleBottle.svg' />
                            </div>
                        </div>
                    </div>
                    <div className={Styles.walletCoupon}>
                        <div className={Styles.walletReward}>
                            <Heading headingType={"h5"}>Coupons</Heading>
                            <Tooltip title="Currently, Click event is not developed">
                                <div>
                                    <Icon type='iconi' customClass={Styles.infoIcon} />
                                </div>
                            </Tooltip>
                        </div>
                        <div className={Styles.couponImage} onClick={gotoCoupon}>
                            <Swiper className={Styles.couponMain}
                                modules={[Autoplay]}
                                spaceBetween={100}
                                slidesPerView={4}
                                loop={true}
                                autoplay
                            >
                                {
                                    Images.map((data, i) => {
                                        return (
                                            <SwiperSlide key={i} className={Styles.slideMain} >
                                                <div className={Styles.couponSlide}>
                                                    <Image src={data.path} alt='reward' />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className={Styles.walletGraph}>
                    <div className={Styles.cashBalance}>
                        <div className={Styles.cashMain} >
                            <div>
                                <div>
                                    <Text color={"greyPrimary"} variant={"lgText"}>Cash Balance</Text>
                                </div>
                                <Icon customClass={Styles.dollarIcon} type={"iconDollar"} />
                                <Text className={Styles.balanceText} variant={"big01Text"}>30.28</Text>
                            </div>
                            <div>
                                <Text color={"greyPrimary"} variant={"smText"}>pending</Text>
                                <div>
                                    <Text color={"greyPrimary"} variant={"xxxlText"}>+ $20</Text>
                                </div>
                            </div>
                            <div className={Styles.moreAction}>
                                <Icon click={() => setShowInfo(!show)} customClass={Styles.dotIcon} type="more" />
                                {show && (
                                    <div className={Styles.moreMain}>
                                        <div className={Styles.prefer} onClick={gotoPrefrences}>
                                            <Text variant={"mdText"}>Preferences</Text>
                                            <Icon customClass={Styles.rightIcon} type="iconFill" />
                                        </div>
                                        <Tooltip title="Currently, Click event is not developed">
                                            <div className={Styles.action}>
                                                <Text variant={"mdText"}>Activity History</Text>
                                                <Icon customClass={Styles.actionIcon} type="iconFill" />
                                            </div>
                                        </Tooltip>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={Styles.ecoMain}>
                            <div className={Styles.ecoBorder}>
                                <div className={Styles.ecoPoints}>
                                    <Text color={"greyPrimary"} variant={"lgText"}>EcoPoints</Text>
                                    <Image src='images/homeMini.svg' />
                                </div>
                                <div>
                                    <Text className={Styles.balanceText} variant={"big01Text"}>1,423 pts</Text>
                                </div>
                            </div>
                            <div className={Styles.logo}>
                                <Image src='images/evtekLogoThree.png' alt='logo' />
                            </div>
                        </div>
                    </div>
                    <div className={Styles.graphBackground}>
                        <div className={Styles.walletTodate}>
                            <div className={Styles.todateText}>
                                <Text variant={"xx3Text"} color={"secondary"}>To-date </Text>
                                <div >
                                    <Text variant={"xsText"} color={"secondary"}>March 2019 - present </Text>
                                </div>
                            </div>
                            <div className={Styles.todateCash}>
                                <div>
                                    <Text className={Styles.cashText} variant={"xxsText"}>Cash</Text>
                                    <div className={Styles.cash}>
                                        <Text color={"secondary"} variant={"xxlText"}>$110.56</Text>
                                    </div>
                                </div>
                                <div>
                                    <Text variant={"xxsText"}>EcoPoints</Text>
                                    <div className={Styles.ecoPoint}>
                                        <Text color={"secondary"} variant={"xxlText"}>2,446</Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.walletChart}>
                            <div className={Styles.graphHead}>
                                <Text variant={"xxxlText"} color={"secondary"}>Earnings to-date</Text>
                                <div>
                                    <div className={Styles.graphRight}>
                                    <Image src='images/whitewallet.png' alt={"Logo"} />
                                        <Text variant={"xxsText"} color={"secondary"}>your metrics</Text>
                                    </div>
                                    <div className={Styles.graphRight}>
                                    <Image src='images/yellowwallet.png' alt={"Logo"} />
                                        <Text variant={"xxsText"} color={"yellowPrimary"}>zipcode Avg</Text>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.graphButtons}>
                                <Button btnHandler={() => setShowbtnActive(0)} size={"sm02"} color={btnActive  ? "greyTertiary" : "borderPrimary"} >
                                    Day
                                </Button>
                                <Button btnHandler={() => setShowbtnActive(1)} size={"sm03"} color={btnActive === 1 ? "greyTertiary" : "borderPrimary"} >
                                    Month
                                </Button>
                                <Button btnHandler={() => setShowbtnActive(2)} size={"sm04"} color={btnActive === 2 ? "greyTertiary" : "borderPrimary"} >
                                    year
                                </Button>
                            </div>
                            <div style={{ width: 370 }}>
                                <TwoLineChart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Wallet;