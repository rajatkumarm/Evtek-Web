import React, { useState, useEffect, useCallback } from 'react'
import Layout from '../../Container/Layout'
import { Image, Heading, Text, ProgressBar, Icon, Button, Modals, Label, Input, Radio, Alert, Checkbox, Nav, MetricsList, DoughnutChart } from '../../../component/shared'
import Styles from "./Home.module.scss"
import Calendar from 'react-calendar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import Images from '../../../Images.json';
import "swiper/css/pagination";
import { Link, useHistory } from 'react-router-dom';
import Legend from '../../../component/shared/Legend';
import Tooltip from '@mui/material/Tooltip'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { debounce } from "lodash";
import Spinner from '../../Email/Spinner/Spinner';
import 'swiper/css/autoplay'
import 'swiper/css';
import StepsMain from '../../../component/Steps/StepsMain';
import Welcome from '../../Welcome/Welcome';
import { Modal } from "@material-ui/core";
import moment from "moment";


const Home = () => {
    const [show, setShow] = useState(false)
    const [showModal, setShowmodal] = useState(false)
    const [showCalender, setShowcalender] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [active, setActive] = useState();
    const [input, setInput] = useState("");
    const [valid, setValid] = useState(false);
    const [showdetails, setShowDetails] = useState(true);
    const [img, setImg] = useState(false);
    const [visible, setVisible] = useState(false);
    const [showcaptcha, setShowCaptcha] = useState(true);
    const [loading, setLoading] = useState(false);
    const [loginShow, setLoginShow] = useState(true);
    const [accountType, setAccountType] = useState(false);
    const [zipcode, setZipCode] = useState(false);
    const [zipcodeCheckSec, setZipCodeCheckSec] = useState(false);
    const [receiveUpdates, setreceiveUpdates] = useState(false);
    const [receiveUpdatesBtn, setReceiveUpdatesBtn] = useState(true)
    const [receiveAlldone, setReceiveAllDone] = useState(false);
    const [createAccount, setCreateAccount] = useState(false);
    const [accountDetails, setAccountDetails] = useState(false);
    const [addressDetails, setAddressDetails] = useState(false);
    const [verifyEmail, setVerifyEmail] = useState(false);
    const [verifyPhone, setVerifyPhone] = useState(false);
    const [congratulations, setCongratulations] = useState(false);
    const [showRec, setShowInfoRec] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showHideEmail, setShowHideEmail] = useState(true);
    const [success, setSuccess] = useState(false);
    const [hidebtn, setHidebtn] = useState(true);
    const [showbtn, setShowbtn] = useState(false);
    const [showHidePassword, setHidePassword] = useState(true);
    const [resetPassword, setResetPassword] = useState(false);
    const [showAccountInput, setShowAccountInput] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showMetrics, setShowMetrics] = useState(false);
    const [showImpact, setShowImpact] = useState(false);
    const [showCarousel, setShowCarousel] = useState(false);
    const [showScheduler, setShowScheduler] = useState(false);
    const [showPickupReminder, setShowPickupReminder] = useState(false);
    const [date, setDate] = useState(new Date());
    const mark = ["Tu"];
    const markBlue = ["Wed"];
    const markGreen = ["Thursday"]
    const ShowInfo = () => {
        setShowInfoRec(true)
        setInterval(() => {
            setShowNewPassword(true)
            setShowHideEmail(false)
        }, 3000);
    }
    const SuccessMsg = () => {
        setSuccess(true)
        setHidePassword(false)
        setShowbtn(true);
        setHidebtn(false);
    }
    useEffect(() => {
        const fetchData = () => {
            try {
                loadCaptchaEnginge(6);
            } catch (e) {
                console.log("loading captcha...");
            }
        };
        fetchData();
    });
    useEffect(() => {
        if (loading) {
            setInterval(() => {
                setLoading(false);
                setImg(true)
            }, 1000);
        }
    }, [loading]);

    const onSubmit = (event) => {
        setLoading(!loading);
        setTimeout(() => {
            setLoading(!loading);
            setShowDetails(false);
        }, 0);
        event.preventDefault();
        console.log(validateCaptcha(input));
        if (validateCaptcha(input) === true) { setValid("Captcha Matched") }
        else { setValid("Invalid captcha") }
        setInput("");
        setVisible(true);
        setShowCaptcha(false);
    };
    const handleChange = (event) => {
        setInput(event.target.value);
    };
    const debounceHandler = useCallback((func, timeout) => {
        return debounce(func, timeout);
    }, []);

    const showCalend = () => {
        setShow(true)
        setShowcalender(true)
    }
    const hideCalender = () => {
        setShow(false)
        setShowcalender(true)
    }
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
        history.push("/recycle-leaderboard");
    };
    const [userData,] = useState({
        datasets: [{
            data: [62, 7, 31],
            backgroundColor: [
                "#FFBF1A",
                "#4AB8ED ",
                "#F1688E "
            ],
        }],
    })

    let valideDate;

    if (moment(date).isBefore(new Date())) {

        if (
            moment(moment(date).format("L")).isSame(moment(new Date()).format("L"))
        )
        // on Active calender date start
        {
            valideDate = (
                <Button size={"btnMd02"} btnClass={Styles.continueBtn} color={showScheduler ? "solidPrimary" : "secondaryDisable"} >
                    continue
                    <Icon type="iconFill" />
                </Button>
            );
        }
        // on Active calender date start
        //  on Active date click calendar schedule start
        else {
            valideDate = (
                <Button size={"btnMd02"} btnClass={Styles.continueBtn} color={"solidPrimary"} btnHandler={gotoAccount} >
                    continue
                    <Icon type="iconFill" />
                </Button>
            );
        }
        //  on Active date calendar schedule end 
        //  yellow highlight calendor schedule start

    } else {
        valideDate = (
            <Button size={"btnMd02"} btnClass={Styles.continueBtn} color={"solidPrimary"} btnHandler={gotoAccount} >
                continue
                <Icon type="iconFill" />
            </Button>
        );
    }





    return (
        <>
            {/* Login Start  */}
            {loginShow &&
                <Modals>
                    <div className={Styles.Login}>
                        <div className={Styles.logo}>
                            <Image src='images/evtekLogo.png' alt={"Logo"} />
                        </div>
                        <div className={Styles.LoginTextEmail}>
                            <Text>Login with your email and password</Text>
                        </div>
                        <div className={Styles.loginEmail}>
                            <Label className={Styles.eText} value={"email"} />
                            <Input className={Styles.textInput} />
                        </div>
                        <div className={Styles.loginPassword} >
                            <Label className={Styles.passText} value={"password"} />
                            <Input type={"password"} className={Styles.passInput} />
                        </div>
                        <div className={Styles.loginbtn}>
                            <Button btnHandler={() => { setShowWelcome(true); setLoginShow(false) }} size={"xmd01"}>Login</Button>
                        </div>
                        <Link to={'#'} onClick={() => { setResetPassword(true); setLoginShow(false) }} className={Styles.forget} >forget Password</Link>
                    </div>
                </Modals>
            }
            {showWelcome &&
                <Welcome onClick={() => { setShowWelcome(false); setLoginShow(false) }} btnHanler={() => { setShowWelcome(false); setShowNavbar(true); setLoginShow(false) }} />
            }
            <Modal open={showNavbar}
                BackdropProps={{ style: { backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: "blur(10px)" } }}
            >
                <div className={Styles.navbar}>
                    <div className={Styles.navbarMain}>
                        <div>
                            <div className={Styles.skipText}>
                                <Text handleClick={() => { setShowNavbar(false); setLoginShow(false) }} family='raleway' strong='strong8' variant={'xsText'} color="secondary">skip tutorial</Text>
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
                    <MetricsList className={Styles.profileContent} backHandler={() => { setShowNavbar(true); setShowProfile(false) }} nextHandler={() => { setShowProfile(false); setShowMetrics(true) }} skipClick={() => { setShowProfile(false); setLoginShow(false) }} heading={"Your Profile"} content="Keep track of your cash and EcoPoint earnings, streaks and more" />
                </div>
            </Modal>
            <Modal open={showMetrics}
                BackdropProps={{ style: { backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: "blur(10px)" } }}>
                <div className={Styles.metricsMain}>
                    <MetricsList backHandler={() => { setShowProfile(true); setShowMetrics(false) }} nextHandler={() => { setShowImpact(true); setShowMetrics(false) }} skipClick={() => { setShowMetrics(false); setLoginShow(false) }} heading={"Metrics"} content=" Metrics help you learn more about what and how you recycle. Tap on this box to go to the Metrics page" />
                </div>
            </Modal>
            <Modal open={showImpact}
                BackdropProps={{ style: { backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: "blur(10px)" } }}>
                <div className={Styles.impactMain}>
                    <MetricsList backHandler={() => { setShowImpact(false); setShowMetrics(true) }} className={Styles.impactContent} nextHandler={() => { setShowImpact(false); setShowCarousel(true) }} skipClick={() => { setShowImpact(false); setLoginShow(false) }} heading={"Impact"} content="See your personal impact on the environment " />
                </div>
            </Modal>
            <Modal open={showCarousel}
                BackdropProps={{ style: { backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: "blur(10px)" } }}>
                <div className={Styles.carouselMain}>
                    <MetricsList backHandler={() => { setShowCarousel(false); setShowImpact(true) }} nextHandler={() => { setShowCarousel(false); setShowScheduler(true) }} skipClick={() => { setShowCarousel(false); setLoginShow(false) }} heading={"Carousel"} content="See your expiring coupons, new items added to the shop and more " />
                </div>
            </Modal>
            <Modal open={showScheduler}
                BackdropProps={{ style: { backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: "blur(10px)" } }}>
                <div className={Styles.schedulerMain}>
                    <MetricsList backHandler={() => { setShowScheduler(false); setShowCarousel(true) }} nextHandler={() => { setShowScheduler(false); setShowPickupReminder(true) }} skipClick={() => { setShowScheduler(false); setLoginShow(false) }} heading={"Scheduler"} content="Schedule quick and convenient recycling Pickups! " />
                </div>
            </Modal>
            <Modal open={showPickupReminder}
                BackdropProps={{ style: { backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: "blur(10px)" } }}>
                <div className={Styles.pickupMain}>
                    <MetricsList backHandler={() => { setShowScheduler(true); setShowPickupReminder(false) }} nextHandler={() => { setShowPickupReminder(false); }} skipClick={() => { setShowPickupReminder(false); setLoginShow(false) }} heading={"Pickup Reminder"} content="Schedule quick and convenient recycling Pickups!  " />
                </div>
            </Modal>
            {/* Login end */}
            {/* Account-Type start */}
            {accountType &&
                <Modals>
                    <div className={Styles.AccountTypeMain}>
                        <div className={Styles.logo}>
                            <Image src='images/evtekLogo.png' alt={"Logo"} />
                        </div>
                        <div className={Styles.serviceText} >
                            <Text>Let’s check if Evtek currently services you neighborhood</Text>
                        </div>
                        <div className={Styles.account}>
                            <Label className={Styles.accountText} value={"Account type"} />
                            <span className={Styles.labelStar}>*</span>
                        </div>
                        <div className={Styles.radiobtn}>
                            <Radio color={"radioTxt"} id={"radio1"} className={Styles.radioText} label={"Individual"} />
                            <Radio id={"radio2"} className={Styles.radioTextTwo} label={"Business"} checked />
                        </div>
                        {/* zipcode  start*/}
                        <div className={Styles.account} >
                            <Label className={Styles.accountText} value={"zipcode"} />
                            <span className={Styles.labelStar}>*</span>
                        </div>
                        <div className={Styles.AccountInputMain}>
                            <Input onClick={() => setShowAccountInput(!showAccountInput)} className={Styles.zipInput} />
                            {showAccountInput &&
                                <div className={Styles.zipMain}>
                                    <div className={Styles.zipOne}>
                                        <Text variant={"mdText"}>11201</Text>
                                        <Icon customClass={Styles.rightIcon} type="iconFill" />
                                    </div>
                                    <div className={Styles.zipTwo}>
                                        <Text variant={"mdText"}>11223</Text>
                                        <Icon customClass={Styles.actionIcon} type="iconFill" />
                                    </div>
                                </div>
                            }
                        </div>
                        {/* Log in Button */}
                        <div className={Styles.btn}>
                            <Button btnHandler={() => { setZipCode(true); setAccountType(false) }}>Continue</Button>
                        </div>
                    </div>
                </Modals>
            }
            {/* Account-Type end */}
            {/* Zipcode start  */}
            {zipcode &&
                <Modals onClick={() => { setZipCode(false); setAccountType(true) }}>
                    <div className={Styles.ZipcodeCheck}>
                        <div className={Styles.headTwo}>
                            <Image src='images/evtekLogo2.png' className={Styles.logo} alt={"Logo"} />
                            <div className={Styles.test}>
                                <Heading headingType={"h4"} className={Styles.zipCode} >ZipCode Check</Heading>
                            </div>
                        </div>
                        <div className={Styles.zipMain}>
                            <div className={Styles.zip}>
                                <Text className={Styles.accountText} color={"greenPrimary"}>11201 </Text>
                            </div>
                            <div className={Styles.zipmainText}>
                                <Text className={Styles.LoginText} >Good news! You are located in our service area!</Text>
                            </div>
                            <div className={Styles.Alert}>
                                <Alert className={"alert"} type={"checkCircle"} para={"Walk-in Service Available"} />
                                <Alert className={"alert"} type={"checkCircle"} para={"Drop-off Service Available"} />
                                <Alert className={"alert"} type={"checkCircle"} para={"Bulk Pickup Service Available"} />
                                <Alert className={"alert"} type={"checkCircle"} para={"Bulk Pickup Service Available"} />
                            </div>
                            <div className={Styles.btn}>
                                <Button size={"md"} btnHandler={() => { setZipCodeCheckSec(true); setZipCode(false) }} variant={'solidPrimary'} >Create Evtek Account</Button>
                            </div>
                        </div>
                    </div>
                </Modals>
            }
            {/* Zipcode end  */}
            {/* Zipcode Check Section start  */}
            {zipcodeCheckSec &&
                <Modals onClick={() => { setZipCodeCheckSec(false); setAccountType(true) }}>
                    <div className={Styles.ZipcodeCheck}>
                        <div className={Styles.headOne}>
                            <Image src='images/evtekLogo2.png' className={Styles.logo} alt={"Logo"} />
                            <Heading headingType={"h4"} className={Styles.head} >ZipCode Check</Heading>
                        </div>
                        <div className={Styles.zipMain}>
                            <div className={Styles.zip}>
                                <Text className={Styles.accountText} color={"primary"} >11201</Text>
                            </div>
                            <div className={Styles.codemainText}>
                                <Text className={Styles.LoginText} >Unfortunately, we do not offer Pickup services in your area (yet!)</Text>
                            </div>
                            <div className={Styles.Alert}>
                                <Alert className={"alert"} type={"checkCircle"} para={"Walk-in Service Available"} />
                                <Alert className={"alert"} type={"checkCircle"} para={"Drop-off Service Available"} />
                                <Alert variant={"disable"} type={"checkCircle"} para={"Bulk Pickup Service Available"} />
                                <Alert variant={"disable"} type={"checkCircle"} para={"Bulk Pickup Service Available"} />
                            </div>
                            <div className={Styles.success}>
                                <Alert variant={"enable"} className={"success"} type={"iconi"} heading={"OR"} paraFirst={"You can still make an account to use Walk-In and Drop-Off Services"}
                                    paraSecond={"Receive Pickup Service updates only? We’ll let you know when we are in your neighborhood!"} />
                            </div>
                            <div className={Styles.btn}>
                                <Button size={"lg"} btnHandler={() => { setCreateAccount(true); setZipCodeCheckSec(false) }} variant={'solidPrimary'} >Create Evtek Account</Button>
                                <div className={Styles.disableBtn}>
                                    <Button size={"lg"} btnHandler={() => { setreceiveUpdates(true); setZipCodeCheckSec(false) }} variant={'primaryDisable'}  >Receive Pickup Service Updates</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modals>
            }
            {/* Zipcode check Section end  */}
            {/* ReceiveService Updates start  */}
            {receiveUpdates &&
                <Modals onClick={() => { setreceiveUpdates(false); setAccountType(true) }}>
                    <div className={Styles.receiveMain}>
                        <div className={Styles.logoText}>
                            <Image src='images/evtekLogo2.png' alt={"Logo"} className={Styles.Logo} />
                            <Heading className={Styles.heading} >Receive Service Updates</Heading>
                        </div>

                        <div className={Styles.Receive}>

                            <Text className={Styles.receiveText01} >Enter your name and email below to sign up for updates</Text>
                            <div className={Styles.input01}>
                                <Label className={Styles.text} value={"name"} />
                                <Input className={Styles.textInput} />
                            </div>
                            <div className={Styles.input02} >
                                <Label className={Styles.text01} value={"email"} />
                                <Input type={"email"} />
                            </div>
                            <Checkbox id="check" type="checkbox" label={"receive Evtek’s weekly newsletter"} checked />
                            <div className={Styles.btn}>
                                {receiveUpdatesBtn &&
                                    <Button size={"xmd01"} btnHandler={() => { setReceiveAllDone(true); setReceiveUpdatesBtn(false) }}  >Receive Updates</Button>
                                }
                                {receiveAlldone &&

                                    <div className={Styles.success}>
                                        <Alert variant={"enable"} className={`${Styles.success}${Styles.iconmd}`} type={"checkCircle"} heading={"All Done!"}
                                            paraSecond={"We'll let you know when Pickups are available in your neighborhood! You can let the now exit the app"} />
                                    </div>
                                }

                            </div>
                        </div>
                    </div>

                </Modals>
            }
            {/* ReceiveService Updates end  */}
            {/* Create Account Start  */}
            {createAccount &&
                <div>
                    <Modals onClick={() => { setCreateAccount(false); setAccountType(true) }}>
                        <div className={Styles.modal}>
                            <div className={Styles.logoText}>
                                <div>
                                    <Image src='/images/evtekMain.png' alt={"Logo"} />
                                </div>
                                <div>
                                    <Heading className={Styles.headText} >Create an Account</Heading>
                                    <StepsMain />
                                </div>
                            </div>
                            <div className={Styles.signUp}>
                                <div className={Styles.codeType} >
                                    <div className={Styles.zip}>
                                        <div className={Styles.acType}>
                                            <div>
                                                <Text children={"Account type"} className={Styles.acTypeTxt} />
                                            </div>
                                            <div>
                                                <Text children={"Individual"} className={Styles.numTxt} />
                                            </div>
                                        </div>

                                        <div className={Styles.seprateLine}>
                                        </div>
                                        <div className={Styles.acType}>
                                            <div>
                                                <Text children={"selected zipcode"} className={Styles.acTypeTxt} />
                                            </div>
                                            <div>
                                                <Text children={"11201"} className={Styles.numTxt} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles.mainModel}>
                                        <div className={Styles.editBtn} onClick={(e) => setIsActive(true)}>
                                            <Text className={Styles.editTxt} children={"edit"} />
                                        </div>
                                        {isActive && (
                                            <div className={Styles.modelPos}>
                                                <div className={Styles.chngModel}>
                                                    <div className={Styles.boxCroseIcon}>
                                                        <button onClick={(e) => setIsActive(!isActive)} className={Styles.btnClose}> <Image src='images/closeModel.png' alt={"Logo"} /></button>
                                                    </div>
                                                    <div className={Styles.boxSpanText}>
                                                        <Text children={"Are you sure? Editing these selections will restart the account creation process"} className={Styles.modalText} />
                                                    </div>
                                                    <div className={Styles.changeBtn}>
                                                        <Button size={"xmd"} variant={'solidPrimary'} >change anyway</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={Styles.inputHead} >
                                    <Label className={Styles.inputText} value={"full name"} />
                                    <Input type={"text"} className={Styles.textInput} />
                                </div>
                                <div className={Styles.mainHead} >
                                    <Label className={Styles.inputText} value={"email"} />
                                    <Input type={"email"} className={Styles.textInput} />
                                    <Text children={"*you will need to verify that this belongs to you"} className={Styles.verifyTxt} />
                                </div>
                                <div className={Styles.mainHead} >
                                    <Label className={Styles.inputText} value={"username"} />
                                    <Input type={"text"} className={Styles.userInput} />
                                </div>
                                <div className={Styles.mainHead} >
                                    <Label className={Styles.inputText} value={"password"} />
                                    <Input type={"password"} className={Styles.userInput} />
                                </div>
                                <div className={Styles.check} >
                                    <Checkbox id="check" label='sign up for newsletter' checked />
                                </div>
                                <div className={Styles.signUpBtm}>
                                    <Text className={Styles.checkboxTxt} >By pressing "Sign up" you agree to our terms and conditons</Text>
                                </div>

                            </div>
                            <div className={Styles.btn}>

                                <Button size={"xmd01"} variant={"primaryDisable"} >Back</Button>
                                <Button size={"xmd01"} btnHandler={() => { setAccountDetails(true); setCreateAccount(false) }} variant={"solidPrimary"} >Next</Button>

                            </div>
                        </div>
                    </Modals>
                </div>
            }
            {/* Create Account end  */}
            {/* Account Details start  */}
            {accountDetails &&
                <div>
                    <Modals customClass={Styles.icoHide} isIcon={false}>
                        <div className={`${Styles.modal} `}>
                            <div className={`${Styles.scrollBehavior} ${Styles.scrollWeb}`}>
                                <div className={Styles.imageText}>
                                    <Image src='images/evtekMain.png' alt='evtekMain' />
                                    <Heading className={Styles.headText} >Create an Account - Account Details</Heading>
                                </div>
                                <Nav />
                                <div className={Styles.accountDetail}>

                                    <div className={Styles.codeType} >
                                        <div className={Styles.zip}>
                                            <div className={Styles.acType}>
                                                <div>
                                                    <Text children={"Account type"} className={Styles.acTypeTxt} />
                                                </div>
                                                <div>
                                                    <Text children={"Individual"} className={Styles.numTxt} />
                                                </div>
                                            </div>
                                            <div className={Styles.acType}>
                                                <div>
                                                    <Text children={"selected zipcode"} className={Styles.acTypeTxt} />
                                                </div>
                                                <div>
                                                    <Text children={"11201"} className={Styles.numTxt} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.mainModel}>
                                            <div className={Styles.editBtn} onClick={(e) => setActive(true)}>
                                                <Text className={Styles.editTxt} children={"edit"} />
                                            </div>
                                            {active && (
                                                <div className={Styles.modelPos}>
                                                    <div className={Styles.chngModel}>
                                                        <div className={Styles.boxCroseIcon}>
                                                            <button onClick={(e) => setActive(!active)} className={Styles.btnClose}> <Image src='images/closeModel.png' alt={"Logo"} /></button>
                                                        </div>
                                                        <div className={Styles.boxSpanText}>
                                                            <Text children={"Are you sure? Editing these selections will restart the account creation process"} className={Styles.modalText} />
                                                        </div>
                                                        <div className={Styles.changeBtn}>
                                                            <Button size={"xmd"} variant={'solidPrimary'} >change anyway</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <Text children={"To access all features of the app, we need to add some details to your account."} className={Styles.mainTxt} />
                                    <div className={Styles.inputHead} >
                                        <Label className={Styles.inputText} value={"phone number"} />
                                        <Input type={"text"} className={Styles.textInput} />
                                        <Text children={"*you will need to verify that this belongs to you"} className={Styles.verifyTxt} />
                                    </div>
                                    <div className={Styles.mainHead} >
                                        <Label className={Styles.inputText} value={"street address"} />
                                        <Input type={"text"} className={Styles.textInput} />

                                    </div>
                                    <div className={Styles.mainState}>
                                        <div className={Styles.stateHead} >
                                            <Label className={Styles.inputText} value={"city"} />
                                            <Input type={"text"} className={Styles.userInput} />
                                        </div>
                                        <div className={Styles.stateHead} >
                                            <Label className={Styles.inputText} value={"state"} />
                                            <Input type={"text"} className={Styles.userInput} />
                                        </div>
                                    </div>
                                    <div className={Styles.btmTxt}>
                                        <div>
                                            <Text children={"Gamification Preset"} className={Styles.presetTxt} />
                                        </div>
                                        <div>
                                            <Text children={"Do want an immersive, gamified experience or just the app’s essential features? Choose the preset that suits you best"} className={Styles.checkboxTxt} />
                                        </div>
                                    </div>
                                    <div className={Styles.bottmMain}>
                                        <input type="radio" name='radio' checked />
                                        <div className={Styles.btmRadio}>
                                            <Text children={"I want to use all of the app’s features including:"} className={Styles.mainTxt} />
                                            <div className={Styles.btmIcon}>
                                                <Image src='images/impact.png' alt='impactImg' />
                                                <Text className={`${Styles.addText} ${Styles.badgeColor}`} children={"Impact Badges"} />
                                                <Icon type="checkCircle" customClass={Styles.circle} />
                                            </div>
                                            <div className={Styles.btmIcon}>
                                                <Image src='images/ecoPoint.svg' alt='ecoImg' />
                                                <Text children={"EcoPoint Multipliers"} className={`${Styles.addText} ${Styles.ecoColor}`} />
                                                <Icon type="checkCircle" customClass={Styles.circle} />
                                            </div>
                                            <div className={Styles.btmIcon}>
                                                <Image src='images/recycle.png' alt='recycleImg' />
                                                <Text children={"Recycling Streaks"} className={`${Styles.addText} ${Styles.recycleColor}`} />
                                                <Icon type="checkCircle" customClass={Styles.circle} />
                                            </div>
                                            <div className={Styles.btmIcon}>
                                                <Image src='images/Leaderboard.png' alt='leaderImg' />
                                                <Text children={"Leaderboards"} className={`${Styles.addText} ${Styles.leadColor}`} />
                                                <Icon type="checkCircle" customClass={Styles.circle} />
                                            </div>
                                            <div className={Styles.btmIcon}>
                                                <Image src='images/carbon.png' alt='carbonImg' />
                                                <Text children={"Carbon Reduction"} className={`${Styles.addText} ${Styles.badgeColor}`} />
                                                <Icon type="checkCircle" customClass={Styles.circle} />
                                            </div>
                                            <div className={Styles.btmIcon}>
                                                <Image src='images/Reward.png' alt='rewardImg' />
                                                <Text children={"Rewards & Coupons"} className={`${Styles.addText} ${Styles.carbonColor}`} />
                                                <Icon type="checkCircle" customClass={Styles.circle} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${Styles.bottmMain} ${Styles.bottmMarg}`}>
                                        <input type="radio" name='radio' />
                                        <div className={Styles.btmRadio}>
                                            <Text children={"I want the essential features only (You can change this in settings > preferences)"} className={Styles.mainTxt} />
                                            <div className={Styles.btmIcon}>
                                                <Image src='images/impact.png' alt='impactImg' />
                                                <Text children={"Impact Badges"} className={`${Styles.addText} ${Styles.badgeColor}`} />
                                                <Icon type="checkCircle" customClass={Styles.circle} />
                                            </div>
                                            <div className={Styles.btmIcon}>
                                                <Image src='images/ecoPoint.svg' alt='ecoImg' />
                                                <Text children={"EcoPoint Multipliers"} className={`${Styles.addText} ${Styles.ecoColor}`} />
                                                <Icon type="checkCircle" customClass={Styles.circle} />
                                            </div>
                                            <div className={Styles.btmIcon}>
                                                <Image src='images/recycle.png' alt='recycleImg' />
                                                <Text children={"Recycling Streaks"} className={`${Styles.addText} ${Styles.recycleColor}`} />
                                                <Icon type="checkCircle" customClass={Styles.circle} />
                                            </div>
                                            <div className={Styles.btmIcon}>
                                                <Image src='images/Leaderboard.png' alt='leaderImg' />
                                                <Text children={"Leaderboards"} className={`${Styles.addText} ${Styles.leadColor}`} />
                                                <Icon type="checkCircle" customClass={Styles.circle} />
                                            </div>
                                            <div className={Styles.btmIcon}>
                                                <Image src='images/carbon.png' alt='carbonImg' />
                                                <Text children={"Carbon Reduction"} className={`${Styles.addText} ${Styles.badgeColor}`} />
                                                <Icon type="checkCircle" customClass={Styles.circle} />
                                            </div>
                                            <div className={Styles.btmIcon}>
                                                <Image src='images/Reward.png' alt='rewardImg' />
                                                <Text children={"Rewards & Coupons"} className={`${Styles.addText} ${Styles.carbonColor}`} />
                                                <Icon type="checkCircle" customClass={Styles.circle} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.btn}>
                                    <Button size="xmd01" variant="primaryDisable" >Back</Button>
                                    <Button size="xmd01" btnHandler={() => { setAddressDetails(true); setAccountDetails(false) }} variant="solidPrimary" >Next</Button>
                                </div>
                            </div>
                        </div>
                    </Modals>
                </div>
            }
            {/* Account Deatils end  */}
            {/* AddressDetail start  */}
            {addressDetails &&
                <div>
                    <Modals isIcon={false}>
                        <div className={Styles.modal}>
                            <div className={Styles.evtekimageText}>
                                <Image src="images/evtekMain.png" alt='evtekMain' />
                                <Heading className={Styles.headText} >Create an Account - Account Details</Heading>
                            </div>
                            <div className={Styles.addressMain}>
                                <div className={Styles.headTxt}>
                                    <Text children={"Please verify your address"} className={Styles.mainTxt} />
                                </div>
                                <div className={Styles.radioHead} >
                                    <input type="radio" id='radio' name='radio' />
                                    <div className={Styles.radioMain}>
                                        <div>
                                            <Label htmlFor="radio" className={Styles.radioText} value={"You entered:"} />
                                        </div>
                                        <div className={Styles.addressChange} >
                                            <Text htmlFor="radio" children={"23 Evtek Street, Brooklyn, NY 11205"} className={Styles.addressTxt} />
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.radioHead} >
                                    <input type="radio" id='radioBtm' name='radio' checked />
                                    <div className={Styles.radioMain}>
                                        <div>
                                            <Label htmlFor="radioBtm" className={Styles.radioText} value={"Suggested:"} />
                                        </div>
                                        <div className={Styles.addressLine}>
                                            <Text htmlFor="radioBtm" children={"23 Evtek Street, Brooklyn, NY 11205-11753"} className={Styles.addressTxt} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.radioBtn}>
                                <Button size="xmd01" btnHandler={() => { setVerifyEmail(true); setAddressDetails(false) }} variant='solidPrimary'>Confirm</Button>

                            </div>
                        </div>
                    </Modals>
                </div>
            }
            {/* AddressDetail end  */}
            {/* Verify Email start  */}
            {verifyEmail &&
                <Modals isIcon={false}>
                    <div className={Styles.email}>
                        <div className={Styles.emailHead}>
                            <Image src='images/evtekMain.png' alt={"Logo"} />
                            <Heading className={Styles.emailHeading} headingType={"h4"} Verify Email >Verify Email</Heading>
                        </div>
                        <div className={Styles.emailContent} >
                            <div>
                                <Text>We sent a verification code to the email</Text>
                            </div>
                            <div>
                                <Text className={Styles.emailIdTxt} >evtek.verify@gmail.com</Text>
                            </div>
                        </div>
                        <Input type={"text"} className={Styles.textInput} />
                        <div className={Styles.emailCaptcha} >
                            <Text className={Styles.emailCaptchaText} >How many aluminum cans do you see?</Text>
                            <div className={Styles.captchaCode}>
                                {
                                    showcaptcha &&
                                    <LoadCanvasTemplate reloadText="Resend Captcha" />
                                }
                            </div>
                            <div >
                                <form onSubmit={onSubmit} className={Styles.emailCaptchaInfo}>
                                    <Input name="captcha" autocomplete="off" inputId="user_captcha_input"
                                        onChange={debounceHandler(handleChange, 200)}
                                        val={input}
                                        type={"text"} className={Styles.captchaInput}
                                    />
                                    {showdetails && <Button type="submit" variant='solidPrimary'>Submit</Button>}
                                    {loading && <Spinner />}
                                    {img && <Icon type={"iconGreentick"} customClass={Styles.successImg} />}
                                </form>
                            </div>
                            {valid && <div className={Styles.showMsg}>{String(valid)}</div>}
                        </div>

                        <div className={Styles.emailCaptchaResend}>
                            {
                                visible &&
                                <Button variant='solidPrimary' size={'xmd01'} btnHandler={() => { setVerifyPhone(true); setVerifyEmail(false) }} className={Styles.captchaBtn}>Next</Button>
                            }
                        </div>
                    </div>
                </Modals>
            }
            {/* Verify Email end  */}
            {/* Verify Phone start  */}
            {verifyPhone &&
                <Modals isIcon={false}>
                    <div className={Styles.email}>
                        <div className={Styles.emailHead}>
                            <Image src='images/evtekMain.png' alt={"Logo"} />
                            <Heading className={Styles.emailHeading} headingType={"h4"}>Verify Phone</Heading>
                        </div>
                        <div className={Styles.emailContent} >
                            <div>
                                <Text >We sent a verification code to the email</Text>
                            </div>
                            <div>
                                <Text className={Styles.emailIdTxt}>347-000-0000</Text>
                            </div>
                        </div>
                        <Input type={"text"} className={`${Styles.textInput} ${Styles.phoneTextInput}`} />

                        <div className={`${Styles.emailCaptchaResend} ${Styles.phoneBtnContent}`} >
                            <div>
                                <Button size='xmd01' btnHandler={() => { setCongratulations(true); setVerifyPhone(false) }}>Next</Button>
                            </div>
                            <div className={Styles.phoneResendBtn}>
                                <Button size='xmd01' variant='primaryDisable' className={`${Styles.captchaBtn} `}>Resend Code</Button>
                            </div>
                        </div>
                    </div>
                </Modals>
            }
            {/* Verify Phone end  */}
            {/* Congratulations start  */}
            {congratulations &&
                <Modals isIcon={false}>
                    <div className={Styles.congrats}>
                        <div className={Styles.logo}>
                            <Image src='images/evtekLogo.png' alt={"Logo"} />
                        </div>
                        <div className={Styles.LoginText}>
                            <Heading className={Styles.headText} headingType={"h4"}>Congratulations!</Heading>

                            <Text className={Styles.Text} variant="xxl">
                                You are now an Evtek member
                            </Text>
                        </div>
                        <div className={Styles.Alert}>
                            <Alert className={"alert"} type={"checkCircle"} para={"Walk-in Service Available"} />
                            <Alert className={"alert"} type={"checkCircle"} para={"Drop-off Service Available"} />
                            <Alert className={"alert"} type={"checkCircle"} para={"Bulk Pickup Service Available"} />
                            <Alert className={"alert"} type={"checkCircle"} para={"Bulk Pickup Service Available"} />
                        </div>
                        <div className={Styles.btn}>
                            <Button btnHandler={() => { setLoginShow(true); setCongratulations(false) }} size={"xmd01"} variant={'solidPrimary'} >Done</Button>
                        </div>
                    </div>
                </Modals>
            }
            {/* Congratulations end  */}
            {/* Reset Password start  */}
            {resetPassword &&
                <Modals onClick={() => { setLoginShow(true); setResetPassword(false) }}>
                    <div className={Styles.Login}>
                        <div className={Styles.logo}>
                            <Image src='images/evtekLogo.png' alt="Logo" />
                        </div>
                        <Heading className={Styles.heading} >Password Reset</Heading>
                        {showHideEmail && (
                            <>
                                <div className={Styles.LoginText}>
                                    <Text>Please enter your email below to get a password reset link</Text>
                                </div>
                                <div className={Styles.LogInEmail}>
                                    <Label className={Styles.eText} value={"email"} />
                                    <Input />
                                </div>
                                <div className={Styles.btn}>
                                    <Button size={"xmd01"} variant={showRec ? 'teritaryGreen' : 'solidPrimary'} btnHandler={ShowInfo}>{showRec ? 'Resend Link' : 'Next'}</Button>
                                </div>
                                {showRec &&
                                    <Link to={'#'} className={Styles.resendLink} >We sent you a link at the email above. Please use it to set a new password</Link>
                                }
                            </>)}
                        {showNewPassword && (
                            <div>
                                {showHidePassword && (
                                    <>
                                        <div className={Styles.pass} >
                                            <Label className={Styles.passText} value={"new password"} />
                                            <Input type={"password"} />
                                        </div>
                                        <div className={Styles.rePassword} >
                                            <Label className={Styles.passText} value={"re-enter new password"} />
                                            <Input type={"password"} />
                                        </div>
                                    </>
                                )}
                                {success &&
                                    <div className={Styles.passSuccess}>
                                        <Text color={"primary2"}  >Your password has been successfully changed</Text>
                                    </div>
                                }
                                <div className={Styles.btn}>
                                    {hidebtn &&
                                        <Button size={"xmd01"} btnHandler={SuccessMsg}>Save</Button>
                                    }
                                    {showbtn &&

                                        <Button size={"xmd01"} btnHandler={() => { setLoginShow(true); setResetPassword(false) }}>Back to Login</Button>
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                </Modals>
            }
            {/* Reset Password end  */}
            {showModal && (
                <Modals isImage={false} onClick={() => { setShowmodal(false); setLoginShow(false) }}>
                    <div className={Styles.modelMain}>
                        <div className={Styles.homeUserLogo}>
                            <Image src='images/user.png' alt={"Logo"} />
                            <Icon type="iconSubtract3" customClass={Styles.btncamera} />
                        </div>
                        <div className={Styles.sideModel}>
                            <div className={Styles.modelText}>
                                <Text variant={"xxxlText"} strong={"strong6"}>Name and username</Text>
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
                            <Button btnHandler={() => { setShowmodal(false); setLoginShow(false) }} size={"xmd01"}>Save</Button>
                        </div>
                    </div>
                </Modals>
            )}
            <Layout layoutClass={showNavbar ? Styles.layoutindex : ''} callFn={() => { setAccountType(true); setLoginShow(false) }}>
                <div className={Styles.homeMain}>
                    <div className={Styles.homeLeft}>
                        <div className={Styles.homeContainer}>
                            <div className={`${Styles.userProfile} ${showProfile ? Styles.zIndex : ""}`}>
                                <Image src='images/Sam.svg' alt='Logo' />
                                <div className={Styles.profileName}>
                                    <div className={Styles.mainHead}>
                                        <Heading className={Styles.homeText} headingType={"h2"} strong={"strong5"} > Sam  Davidson </Heading>
                                        <div className={Styles.homeleaf}>
                                            <div className={Styles.homeecoPoint}>
                                                <Text className={Styles.ecoText} strong={"strong7"} variant={"xlText"} color={"greenPrimary"}>1.8x</Text>
                                                <Text className={Styles.ecoText} strong={"strong4"} variant={"xlText"}  >EcoPoints Multiplier </Text>
                                            </div>
                                            <div className={Styles.homeStreak}>
                                                <Image className={Styles.Leaf} src='images/Leaf.svg' alt='Logo' />
                                                <Heading className={Styles.homestreakText} headingType={"h4"} strong={"strong7"} > 3 </Heading>
                                                <Text variant={"smText"}  >mo streak </Text>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles.samBalance}>
                                        <Text className={Styles.balanceText} strong={"strong6"} variant={"xlText"} color={"secondary"}>Balance $30.28  </Text>
                                        <Text variant={"xlText"} color={"secondary"}>   |  </Text>
                                        <Text className={Styles.Ecopoints} variant={"xlText"} color={"secondary"}> EcoPoints: 1,423 </Text>
                                    </div>
                                </div>
                            </div>
                            <div className={`${showPickupReminder ? Styles.zIndex : ''} ${Styles.blueBg}`}>
                                <div className={Styles.blueText}>
                                    <Text className={Styles.balanceText} variant={"xxxlText"} color={"secondary"}>next Pickup scheduled on </Text>
                                    <Text variant={"xxxlText"} color={"secondary"} strong={"strong9"}>6.17.2021,</Text>
                                    <Text variant={"xxxlText"} color={"secondary"}> Wednesday  </Text>
                                </div>
                                <Button btnClass={Styles.blueButton} variant="sheduleBtn" size={"btnSm02"} btnHandler={() => { setShowmodal(true); setShowPickupReminder(false) }} >edit</Button>
                            </div>
                        </div>
                        <div className={Styles.rightleft}>
                            <div>
                                <div className={showMetrics ? Styles.zIndex : ''} >
                                    <div className={Styles.homeMetrics}>
                                        <Text family="fonts-property" strong='strong4' variant={"lgText"} color={"ecoPrimary"}>Recycling Metrics </Text>
                                    </div>
                                    <div className={Styles.homeRecycle}>
                                        <div className={Styles.homeRecyclemetrics}>
                                            <div className={Styles.homeAluminium}>
                                                <Text className={Styles.homealuminiumText} strong={'strong8'} family="raleway" variant={"xxlText"} color={"orangePrimary"}>Alumininum </Text>
                                                <div className={Styles.homeitem}>
                                                    <Text className={Styles.homealuText} variant={"xlText"} color={"grayPrimary"}>402 items  </Text>
                                                    <Text className={Styles.homealuText} variant={"xlText"} color={"orangePrimary"}> • </Text>
                                                    <Text className={Styles.homealuText} variant={"xlText"} color={"grayPrimary"}> 62% </Text>
                                                </div>
                                            </div>
                                            <div className={Styles.homePlastic}>
                                                <Text className={Styles.homealuminiumText} strong={'strong8'} family="raleway" variant={"xxlText"} color={"pinkPrimary"}>Plastic </Text>
                                                <div className={Styles.homeplasticitem}>
                                                    <Text className={Styles.homeplaText} variant={"xlText"} color={"grayPrimary"}>200 items  </Text>
                                                    <Text className={Styles.homeplasText} variant={"xlText"} color={"pinkPrimary"}> • </Text>
                                                    <Text className={Styles.homeplaText} variant={"xlText"} color={"grayPrimary"}> 31% </Text>
                                                </div>
                                            </div>
                                            <div className={Styles.homeGlass}>
                                                <Text className={Styles.homealuminiumText} family="raleway" strong={'strong8'} variant={"xxlText"} color={"bluePrimary"}>Glass </Text>
                                                <div className={Styles.homeplasticitem}>
                                                    <Text className={Styles.homeplaText} variant={"xlText"} color={"grayPrimary"}>41 items  </Text>
                                                    <Text className={Styles.homeplasText} variant={"xlText"} color={"bluePrimary"}> • </Text>
                                                    <Text className={Styles.homeplaText} variant={"xlText"} color={"grayPrimary"}> 7% </Text>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.itemImages}>
                                            {/* <Image src='images/item643.svg' alt='Logo' /> */}
                                            <div className={Styles.chartDough}>
                                                <div className={Styles.itemIco}>
                                                    <Text className={Styles.recycleChart} variant={"xxxlText"} strong={"strong7"}>643  </Text>
                                                    <div><Text className={Styles.alurecycleChart} variant={"xxlText"}>items  </Text></div>
                                                </div>
                                                <DoughnutChart chartData={userData} />
                                            </div>

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
                                            <Text className={Styles.homeproText} variant={"xsText"} strong={"strong7"} color={"ecoPrimar"}>Impact Badges</Text>
                                            <div>
                                                <Text className={Styles.homeproText} variant={"xsText"} color={"grayPrimary"}>643/</Text>
                                                <Text className={Styles.homeitemText} variant={"xsText"} color={"grayPrimary"}>1000 items</Text>
                                            </div>
                                            <div className={Styles.progressBack}>
                                                <div className={Styles.contentLeftbottam}>
                                                    <div className={Styles.ProgressBar}>
                                                        <div className={Styles.progressBar}><ProgressBar bgcolor="#5EBA7D" backcolor="#5EBA7D38" progress='70' height={16}  /></div>
                                                    </div>
                                                    <div className={Styles.goalText}>
                                                        <Text className={Styles.barText} variant={"msmText"} color={"grayPrimary"}>Goal 3</Text>
                                                    </div>

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
                                            <Text className={Styles.homeproText} strong="strong7" variant={"xsText"} color={"ecoPrimar"}>Evtek Leaderboard</Text>
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
                                                        <Calendar
                                                            onChange={setDate}
                                                            className={Styles.myClass}
                                                            tileClassName={({ date, view }) => {
                                                                if (mark.find(x => x === moment(date).format("dd"))) {
                                                                    return 'highlight'
                                                                }
                                                                else if (markBlue.find(x => x === moment(date).format("ddd"))) {
                                                                    return 'highlight1'
                                                                }
                                                                else if (markGreen.find(x => x === moment(date).format("dddd"))) {
                                                                    return 'highlight2'
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                    <div className={Styles.seletDatetext}>{valideDate}</div>
                                                </div>
                                            }
                                            {show && (
                                                <div>
                                                    <Legend onCLick={() => setShow(false)} />
                                                </div>
                                            )}
                                        </div>

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

export default Home