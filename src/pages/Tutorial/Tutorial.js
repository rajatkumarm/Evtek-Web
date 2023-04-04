import React,{ useState } from 'react'
import Layout from '../Container/Layout';
import { Image, Heading, Text, ProgressBar, Icon, Button, Legend, MetricsList } from '../../component/shared'
import Styles from "./Tutorial.module.scss"
import Calendar from 'react-calendar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import Images from '../../Images.json';
import "swiper/css/pagination";
import { useHistory } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip'
import Welcome from '../Welcome/Welcome';
import { Modal } from "@material-ui/core";

const Tutorial = () => {
    const history = useHistory();
    const gotoAccount = () => {
        history.push("/account");
    };
    const gotoImpact = () => {
        history.push("/impact-badges");
    };
    const gotoCarbon = () => {
        history.push("/carbon");
    };
    const gotoOrange = () => {
        history.push("/leader-boards");
    };
    const [show, setShow] = useState(false)
    const [showModal, setShowmodal] = useState(false)
    const [showCalender, setShowcalender] = useState(true);
    const [showWelcome, setShowWelcome] = useState(true);
    const [showNavbar, setShowNavbar] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showMetrics, setShowMetrics] = useState(false);
    const [showImpact, setShowImpact] = useState(false);
    const [showCarousel, setShowCarousel] = useState(false);
    const [showScheduler, setShowScheduler] = useState(false);
    const [showPickupReminder, setShowPickupReminder] = useState(false);

    const showCalend = () => {
        setShow(true)
        setShowcalender(true)
    }
    const hideCalender = () => {
        setShow(false)
        setShowcalender(true)
    }


    return (
        <>
            {showWelcome &&
                <Welcome onClick={() => setShowWelcome(false)} btnHanler={() => { setShowNavbar(true); setShowWelcome(false) }} />
            }
            <Modal open={showNavbar}
                BackdropProps={{ style: { backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: "blur(10px)" } }}
            >
                <div className={Styles.navbar}>
                    <div className={Styles.navbarMain}>
                        <div>
                            <div className={Styles.skipText}>
                                <Text handleClick={() => setShowNavbar(false)} family='raleway' strong='strong8' variant={'xsText'} color="secondary">skip tutorial</Text>
                            </div>
                            <div className={Styles.navContent}>
                                <Text family='raleway' strong='strong7' color="secondary">Nav Bar</Text>
                                <div>
                                    <Text family='raleway' strong='strong5' color="secondary">Home, Recycle, Wallet, Progress and Shop</Text>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className={Styles.navContent}>
                                <Text family='raleway' strong='strong7' color="secondary">Account</Text>
                                <div>
                                    <Text family='raleway' strong='strong5' color="secondary">Account access settings, helpful information and more</Text>
                                </div>

                            </div>
                            <div className={Styles.accountBtn}>
                                <Button btnHandler={() => { setShowNavbar(false); setShowWelcome(true) }} size={"xsm"} color="navyPrimary">Back</Button>
                                <Button btnHandler={() => { setShowNavbar(false); setShowProfile(true) }} size={"xsm"} color="navyPrimary">Next</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal open={showProfile}
                BackdropProps={{ style: { backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: "blur(10px)" } }}>
                <div className={Styles.profileMain}>
                    <MetricsList className={Styles.profileContent} backHandler={() => { setShowNavbar(true); setShowProfile(false) }} nextHandler={() => { setShowProfile(false); setShowMetrics(true) }} skipClick={() => setShowProfile(false)} heading={"Your Profile"} content="Keep track of your cash and EcoPoint earnings, streaks and more" />
                </div>
            </Modal>
            <Modal open={showMetrics}
                BackdropProps={{ style: { backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: "blur(10px)" } }}>
                <div className={Styles.metricsMain}>
                    <MetricsList backHandler={() => { setShowProfile(true); setShowMetrics(false) }} nextHandler={() => { setShowImpact(true); setShowMetrics(false) }} skipClick={() => setShowMetrics(false)} heading={"Metrics"} content=" Metrics help you learn more about what and how you recycle. Tap on this box to go to the Metrics page" />
                </div>
            </Modal>
            <Modal open={showImpact}
                BackdropProps={{ style: { backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: "blur(10px)" } }}>
                <div className={Styles.impactMain}>
                    <MetricsList backHandler={() => { setShowImpact(false); setShowMetrics(true) }} className={Styles.impactContent} nextHandler={() => { setShowImpact(false); setShowCarousel(true) }} skipClick={() => setShowImpact(false)} heading={"Impact"} content="See your personal impact on the environment " />
                </div>
            </Modal>
            <Modal open={showCarousel}
                BackdropProps={{ style: { backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: "blur(10px)" } }}>
                <div className={Styles.carouselMain}>
                    <MetricsList backHandler={() => { setShowCarousel(false); setShowImpact(true) }} nextHandler={() => { setShowCarousel(false); setShowScheduler(true) }} skipClick={() => setShowCarousel(false)} heading={"Carousel"} content="See your expiring coupons, new items added to the shop and more " />
                </div>
            </Modal>
            <Modal open={showScheduler}
                BackdropProps={{ style: { backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: "blur(10px)" } }}>
                <div className={Styles.schedulerMain}>
                    <MetricsList backHandler={() => { setShowScheduler(false); setShowCarousel(true) }} nextHandler={() => { setShowScheduler(false); setShowPickupReminder(true) }} skipClick={() => setShowScheduler(false)} heading={"Scheduler"} content="Schedule quick and convenient recycling Pickups! " />
                </div>
            </Modal>
            <Modal open={showPickupReminder}
                BackdropProps={{ style: { backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: "blur(10px)" } }}>
                <div className={Styles.pickupMain}>
                    <MetricsList backHandler={() => { setShowScheduler(true); setShowPickupReminder(false) }} nextHandler={() => { setShowPickupReminder(false); }} skipClick={() => setShowPickupReminder(false)} heading={"Pickup Reminder"} content="Schedule quick and convenient recycling Pickups!  " />
                </div>
            </Modal>

            {
                showModal && (
                    <Modal onClick={() => setShowmodal(false)}>
                        <div className={Styles.modelMain}>
                            <div className={Styles.logoM}>
                                <Image src='images/user.png' alt={"Logo"} />
                                <div className={Styles.cameraImg}>

                                    <Icon type="iconSubtract3" customClass={Styles.btncamera} />

                                </div>
                            </div>
                            <div className={Styles.sideModel}>
                                <div className={Styles.modelText}>
                                    <Text variant={"xxxlText"}>Name and username</Text>
                                </div>
                                <div className={Styles.textModel}>

                                    <div>
                                        <Text variant={"mdText"}>Sam Davidson</Text>
                                        <div> <Text variant={"mdText"}> samdav1997</Text></div>
                                    </div>

                                    <Tooltip title="Currently, Click event is not developed">
                                        <div><Image className={Styles.editor} src='images/edit.png' alt={"Logo"} /> </div>
                                    </Tooltip>


                                </div>
                            </div>
                            <div className={Styles.sideModel}>
                                <div className={Styles.modelText}>
                                    <Text variant={"xxxlText"}>Email and Phone</Text>
                                </div>
                                <div className={Styles.textModel}>
                                    <div>
                                        <Text variant={"mdText"}>sam768@gmail.com</Text>
                                        <div> <Text variant={"mdText"}>347-000-000</Text></div>
                                    </div>
                                    <Tooltip title="Currently, Click event is not developed">
                                        <div><Image className={Styles.editor} src='images/edit.png' alt={"Logo"} /> </div>
                                    </Tooltip>

                                </div>
                            </div>
                            <div className={Styles.sideModel}>
                                <div className={Styles.modelText}>
                                    <Text variant={"xxxlText"}>Membership</Text>
                                </div>
                                <div className={Styles.textModel}>
                                    <Text variant={"mdText"}>Individual</Text>
                                    <Tooltip title="Currently, Click event is not developed">
                                        <div><Image className={Styles.editor} src='images/edit.png' alt={"Logo"} /> </div>
                                    </Tooltip>
                                </div>
                            </div>
                            <div className={Styles.savebtn}>
                                <Button size={"xmd01"}>Save</Button>
                            </div>
                        </div>
                    </Modal>
                )
            }
            <Layout layoutClass={showNavbar ? Styles.layoutindex : ''}>
                <div className={Styles.homeMain}>
                    <div className={Styles.homeLeft}>
                        <div className={Styles.homeContainer}>
                            <div className={`${Styles.userProfile} ${showProfile ? Styles.zIndex : ""}`}>
                                <Image src='images/Sam.svg' alt='Logo' />
                                <div className={Styles.profileName}>
                                    <Heading className={Styles.homeText} headingType={"h2"} > Sam  Davidson </Heading>
                                    <div className={Styles.homeleaf}>
                                        <div className={Styles.homeecoPoint}>
                                            <Text className={Styles.ecoText} variant={"xlText"} color={"greenPrimary"}>1.8x  </Text>
                                            <Text className={Styles.ecopointText} variant={"xlText"}  >EcoPoints Multiplier </Text>
                                        </div>
                                        <div className={Styles.homeStreak}>
                                            <Image className={Styles.Leaf} src='images/Leaf.svg' alt='Logo' />
                                            <Heading className={Styles.homestreakText} headingType={"h4"} > 3 </Heading>
                                            <Text variant={"smText"} >mo streak </Text>
                                        </div>
                                    </div>
                                    <div className={Styles.samBalance}>
                                        <Text className={Styles.balanceText} variant={"xlText"} color={"secondary"}>Balance $30.28  </Text>
                                        <Text variant={"xlText"} color={"secondary"}>   |  </Text>
                                        <Text className={Styles.Ecopoints} variant={"xlText"} color={"secondary"}> EcoPoints: 1,423 </Text>
                                    </div>

                                </div>
                            </div>
                            <div className={`${showPickupReminder ? Styles.zIndex : ''} ${Styles.blueBg}`}>
                                <div className={Styles.blueText}>
                                    <Text className={Styles.balanceText} variant={"xxxlText"} color={"secondary"}>next Pickup scheduled on 6.17.2021, Wednesday  </Text>
                                </div>

                                <Button btnClass={Styles.blueButton} variant="sheduleBtn" size={"btnSm02"} btnHandler={() => setShowmodal(true)} >edit</Button>
                            </div>
                        </div>
                        <div className={Styles.rightleft}>

                            <div>
                                <div className={showMetrics ? Styles.zIndex : ''} >

                                    <div className={Styles.homeMetrics}>
                                        <Text family="raleway" strong='strong8' variant={"lgText"} color={"ecoPrimary"}>Recycling Metrics </Text>
                                    </div>
                                    <div className={Styles.homeRecycle}>
                                        <div className={Styles.homeRecyclemetrics}>
                                            <div className={Styles.homeAluminium}>
                                                <Text className={Styles.homealuminiumText} variant={"xxlText"} color={"orangePrimary"}>Alumininum </Text>
                                                <div className={Styles.homeitem}>
                                                    <Text className={Styles.homealuText} variant={"xlText"} color={"grayPrimary"}>402 items  </Text>
                                                    <Text className={Styles.homealuText} variant={"xlText"} color={"orangePrimary"}> • </Text>
                                                    <Text className={Styles.homealuText} variant={"xlText"} color={"grayPrimary"}> 62% </Text>
                                                </div>
                                            </div>
                                            <div className={Styles.homePlastic}>
                                                <Text className={Styles.homealuminiumText} variant={"xxlText"} color={"pinkPrimary"}>Plastic </Text>
                                                <div className={Styles.homeplasticitem}>
                                                    <Text className={Styles.homeplaText} variant={"xlText"} color={"grayPrimary"}>200 items  </Text>
                                                    <Text className={Styles.homeplasText} variant={"xlText"} color={"pinkPrimary"}> • </Text>
                                                    <Text className={Styles.homeplaText} variant={"xlText"} color={"grayPrimary"}> 31% </Text>
                                                </div>
                                            </div>
                                            <div className={Styles.homeGlass}>
                                                <Text className={Styles.homealuminiumText} variant={"xxlText"} color={"bluePrimary"}>Glass </Text>
                                                <div className={Styles.homeplasticitem}>
                                                    <Text className={Styles.homeplaText} variant={"xlText"} color={"grayPrimary"}>41 items  </Text>
                                                    <Text className={Styles.homeplasText} variant={"xlText"} color={"bluePrimary"}> • </Text>
                                                    <Text className={Styles.homeplaText} variant={"xlText"} color={"grayPrimary"}> 7% </Text>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.itemImages}>
                                            <Image src='images/item643.svg' alt='Logo' />
                                        </div>
                                    </div>
                                </div>
                                <div className={showImpact ? Styles.zIndex : ''}>
                                    <div className={Styles.homeProgress}>
                                        <Text className={Styles.homeprogressText} variant={"lgText"} color={"ecoPrimary"}>Progress </Text>
                                    </div>
                                    <div className={Styles.progressImpact}>
                                    </div>
                                    <div className={Styles.homeImpactbadge} onClick={gotoImpact}>
                                        <Image className={Styles.homeBulb} src='images/Bulb.svg' alt='Logo' />
                                        <div className={Styles.impactText}>
                                            <Text className={Styles.homeproText} variant={"xsText"} color={"ecoPrimar"}>Impact Badges</Text>
                                            <div>
                                                <Text className={Styles.homeproText} variant={"xsText"} color={"grayPrimary"}>643/</Text>
                                                <Text className={Styles.homeitemText} variant={"xsText"} color={"grayPrimary"}>1000 items</Text>
                                            </div>
                                            <div className={Styles.progressBack}>
                                                <div className={Styles.contentLeftbottam}>
                                                    <div className={Styles.ProgressBar}>
                                                        <div className={Styles.progressBar}><ProgressBar bgcolor="#5EBA7D" backcolor="#5EBA7D38" progress='70' height={15} /></div>
                                                    </div>
                                                    <Text className={Styles.barText} variant={"msmText"} color={"grayPrimary"}>Goal 3</Text>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.rightIcon}>
                                            <Icon type='iconFill' />
                                        </div>
                                    </div>
                                    <div className={Styles.homeImpactbadge} onClick={gotoOrange} >
                                        <Image className={Styles.homeBulb} src='images/EvtekLeaderboard.svg' alt='Logo' />
                                        <div className={Styles.impactText}>
                                            <Text className={Styles.homeproText} variant={"xsText"} color={"ecoPrimar"}>Evtek Leaderboard</Text>
                                            <div>
                                                <Text className={Styles.homeorange} variant={"xsText"} color={"bluePrimary"}>Orange Paper Cup</Text>
                                            </div>
                                            <div>
                                                <Text className={Styles.barPosition} variant={"xsText"} color={"ecoPrimary"}>Position # 22 of 50</Text>
                                            </div>

                                        </div>
                                        <div className={Styles.leaderIcon}>
                                            <Icon type='iconFill' />
                                        </div>
                                    </div>
                                    <div className={Styles.homeImpactbadge} onClick={gotoCarbon}>
                                        <Image className={Styles.homeBulb} src='images/carbon.svg' alt='Logo' />
                                        <div className={Styles.impactText}>
                                            <Text className={Styles.homeproText} variant={"xsText"} color={"grayPrimary"}>Total CO2 emissions prevented</Text>
                                            <div>
                                                <Text className={Styles.homeorange} variant={"xxlText"} >788 lbs </Text>
                                            </div>

                                        </div>
                                        <div className={Styles.coIcon}>
                                            <Icon type='iconFill' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.rightSide}>
                                <div className={Styles.homeRight}>
                                    <div className={`${showCarousel ? Styles.zIndex : ''} ${Styles.slideHome}`}>
                                        <div className={Styles.homeCoupons}>
                                            <Text className={Styles.homecouponText} variant={"lgText"} color={"ecoPrimary"}>  Coupons expiring soon </Text>

                                        </div>
                                        <div className={Styles.couponsExpiring}>
                                            <div className={Styles.couponImage}>
                                                <Swiper className={Styles.couponMain}
                                                    pagination={{ clickable: true }}
                                                    modules={[Autoplay, Pagination]}
                                                    spaceBetween={10}
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
                                    <div className={`${showScheduler ? Styles.zIndex : ''} ${Styles.homebutton}`}>
                                        <div className={Styles.pickupCalender}>
                                            {showCalender &&
                                                <div>
                                                    <div className={Styles.homePickup}>
                                                        <Text className={Styles.homecouponText} variant={"lgText"} color={"ecoPrimary"}>  Pickup Schedular </Text>
                                                        <div className={Styles.legend} onClick={showCalend}>
                                                            <Text family="raleway" strong='strong7' variant={"smText"} color={"secondary"} >  see legend </Text>
                                                        </div>
                                                    </div>
                                                    <div className={Styles.homeCalc}>
                                                        <Calendar className={Styles.homeCalender} />
                                                    </div>
                                                </div>
                                            }
                                            {show && (
                                                <div onClick={hideCalender}>
                                                <Legend />
                                                </div>
                                                )}
                                        </div>
                                        <Button btnClass={Styles.textico} color={"solidPrimary"} btnHandler={gotoAccount} >
                                            continue
                                            <Icon type="iconFill" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Tutorial