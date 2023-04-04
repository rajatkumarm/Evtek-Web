import React from 'react'
import Styles from './ShopHome.module.scss'
import { Button, Card, Icon, Input, PageTitle, Text, Image, Addcart, ModelsList, AddCartAlert } from "../../../../component/shared";
import Layout from '../../../Container/Layout';
import { Grid } from "@material-ui/core";
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import "swiper/css";
import SliderCard from '../../../../component/shared/SliderCard';
import { useHistory } from 'react-router-dom';
import { Modal } from "@material-ui/core";
import Tooltip from '@mui/material/Tooltip';


const ShopHome = () => {
    const [show, setShow] = useState(false);
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
    const [showKrate, setShowKrate] = useState(false)
    const [showHide, setShowHide] = useState(true);
    const [showRecycleSupplies, setShowRecycleSupplies] = useState(true)
    const [showSlider, setShowSlider] = useState(false)
    const [showPreferences, setShowPreferences] = useState(false)
    const [showCartAlert, setShowCartAlert] = useState(false)
    const history = useHistory();
    const gotoCart = () => {
        history.push('./cart');

    }
    const gotoPrefrences = () => {
        history.push("./preferences");
    };
    const gotoOrderHistory = () => {
        history.push("/order-history");
    };
    const showRecycleSupply = () => {
        setShowRecycleSupplies(true)
        setShowSlider(false)
    }
    const ShowSlider = () => {
        setShowRecycleSupplies(false)
        setShowSlider(true)
    }
    const showInfo = () => {
        setShowKrate(true)
        setShowHide(false)
    }
    const hideInfo = () => {
        setShowKrate(false)
        setShowHide(true)
    }
    const addCart = () => {
        setShowCartAlert(true);
        hideInfo()
        setInterval(() => {
            setShowCartAlert(false)
        }, 5000);
    }

    return (
        <Layout>
            <div className={Styles.container}>
                <Image className={Styles.headerWave} src="images/headerWave.png" />
                <div className={Styles.shopHome}>
                    <PageTitle titleClass={Styles.pageTitleClass} modulename={"Shop"} type="progress" />
                    <Icon type="more" customClass={Styles.moreIcon} click={() => setShowPreferences(!showPreferences)} />
                    {showPreferences && (
                        <div className={Styles.moreMain}>
                            <div className={Styles.prefer} onClick={gotoPrefrences}>
                                <Text variant={"mdText"}>Preferences</Text>
                                <Icon customClass={Styles.rightIcon} type="iconFill" />
                            </div>
                            <div className={Styles.order} onClick={gotoOrderHistory}>
                                <Text variant={"mdText"}>Order history </Text>
                                <Icon customClass={Styles.orderIcon} type="iconFill" />
                            </div>

                        </div>
                    )}
                </div>
                <div className={Styles.main}>
                    <div className={Styles.Shopmain}>
                        <div className={Styles.homeText}>
                            <Tooltip title="Currently, Click event is not developed">
                                <div>
                                    <Icon type='iconi' customClass={Styles.infoIcon} />
                                </div>
                            </Tooltip>
                            <Text strong="strong6">In the EcoShop,</Text>
                            <Text strong="strong7" className={Styles.ml5}> EcoPoints  </Text>
                            <Text strong="strong6">are worth approximately 1.5x of their cash value!</Text>
                            <Text strong="strong7" className={Styles.ml5}>75 EcoPoints = $1</Text>
                        </div>
                        <div className={Styles.shopEcopointMain}>
                            <div className={Styles.shopEcopoint}>
                                <Text variant={"smText01"}>Your EcoPoints</Text>
                                <Image className={Styles.homeImage} src="images/shophome.png" />
                            </div>
                            <Text family='raleway' variant={"xx9Text"}>1,423 pts</Text>
                        </div>
                    </div>
                    {showHide &&
                        <div >
                            <div className={Styles.btnMain}>
                                <Button btnClass={Styles.btnOne} btnHandler={showRecycleSupply} color={showRecycleSupplies ? 'solidPrimary' : 'greyPrimary'} size={"btnllg"}> Recycling Supplies</Button>
                                <Button btnClass={Styles.btnTwo} btnHandler={ShowSlider} color={showSlider ? 'solidPrimary' : 'greyPrimary'} size={"btnllg"}>Sustainable Goods</Button>
                            </div>
                            <div className={Styles.shopMainContent}>
                                <div className={Styles.shopAs}>
                                    <Text color={"greyPrimary"}>Shopping as:</Text>
                                    <Text className={Styles.ml5} color={"primary2"}>Individual member</Text>
                                </div>
                                <div className={Styles.shopInputMain}>
                                    <Input className={Styles.shopInput} placeholder="search for an  item" />
                                    {showCartAlert &&
                                        <AddCartAlert className={Styles.cartAddAlert} textPrimary={"1x EcoKrate has been added to your cart"} />
                                    }
                                    <Image onClick={gotoCart} className={Styles.cartImage} src='images/Cart.svg' />
                                </div>
                                {showRecycleSupplies &&
                                    <>

                                        <Grid lg={12} container spacing={2}>
                                            <Grid item lg={3} sm={6} xs={12}>
                                                <Card src={"images/garbageBag.png"} cardHead="EcoSack" cardText={"13 gallon"} cardDisableBtn="10.00" />
                                            </Grid>
                                            <Grid item lg={3} sm={6} xs={12} onClick={showInfo}>
                                                <Card src={"images/garbageTub.png"} cardHead="EcoKrate" cardText={"25 gallon"} cardDisableBtn="20.00" />
                                            </Grid>
                                            <Grid item lg={3} sm={6} xs={12}>
                                                <Card src={"images/garbageBarrel.png"} cardHead="EcoBin" cardText={"25 gallon"} cardDisableBtn="10.00" />
                                            </Grid>
                                            <Grid item lg={3} sm={6} xs={12}>
                                                <Card src={"images/garbageTub.png"} cardHead="EcoSKrate" cardText={"25 gallon"} cardDisableBtn="20.00" />
                                            </Grid>
                                        </Grid>
                                        <Grid lg={12} container spacing={2} className={Styles.shopCard}>
                                            <Grid item lg={3} sm={6} xs={12}>
                                                <Card src={"images/garbageBag.png"} cardHead="EcoSack" cardText={"13 gallon"} cardDisableBtn="10.00" />
                                            </Grid>

                                            <Grid item lg={3} sm={6} xs={12}>
                                                <Card src={"images/garbageBarrel.png"} cardHead="EcoBin" cardText={"25 gallon"} cardDisableBtn="10.00" />
                                            </Grid>

                                        </Grid>
                                    </>
                                }

                                {showSlider &&
                                    <>
                                        <div className={Styles.sliderMain}>
                                            <div className={Styles.featureText}>
                                                <Text color={"secondary"} strong="strong4" variant="xxxlText">Featured</Text>
                                                <Icon type='iconi' customClass={Styles.infoIcon} click={handleOpen} />

                                            </div>
                                            <div >
                                                <Swiper
                                                    modules={[Autoplay]}
                                                    spaceBetween={20}
                                                    slidesPerView={7}
                                                    loop={true}
                                                    autoplay
                                                >

                                                    <SwiperSlide>
                                                        <SliderCard src="images/bathTissue.png" cardText="Bath Tissue (24 pk)" />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <SliderCard src="images/seaweed.png" cardText="Bath Tissue (24 pk)" />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <SliderCard src="images/peppermint.png" cardText="Bath Tissue (24 pk)" />
                                                    </SwiperSlide>
                                                    <SwiperSlide >
                                                        <SliderCard src="images/bathTissue.png" cardText="Bath Tissue (24 pk)" />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <SliderCard src="images/seaweed.png" cardText="Bath Tissue (24 pk)" />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <SliderCard src="images/peppermint.png" cardText="Bath Tissue (24 pk)" />
                                                    </SwiperSlide>




                                                </Swiper></div>
                                        </div>
                                        <Grid lg={12} container spacing={2} className={Styles.mt60}>
                                            <Grid sm={3}>
                                                <Card imageClass={Styles.goodsImage} src={"images/pepsi.png"} cardHead="Pepsi" cardDisableBtn="3.00" greyText={"8 oz."} />
                                            </Grid>
                                            <Grid sm={3}>
                                                <Card imageClass={Styles.goodsImage} src={"images/reWater.png"} cardHead="Re:Water" cardDisableBtn="5 .00" greyText={"8 oz."} />
                                            </Grid>
                                            <Grid sm={3}>
                                                <Card imageClass={Styles.goodsImage} src={"images/mayonnaise.png"} cardHead="Hellman’s Mayonnaise" cardDisableBtn="6.00" greyText={"8 oz."} />
                                            </Grid>
                                            <Grid sm={3}>
                                                <Card imageClass={Styles.goodsImage} src={"images/evian.png"} cardHead="Evian" cardDisableBtn="5.00" greyText={"8 oz."} />
                                            </Grid>
                                        </Grid>
                                    </>}

                            </div>
                        </div>
                    }
                    {showKrate && (
                        <div className={Styles.addCart} >
                            <Addcart onClick={addCart} src={"images/shpkrate.png"} iconClass={Styles.icoInformation} close="iconclose" click={hideInfo} type="iconi" para={"instructions for use"} heading={"EcoKrate"} textTwo={"25 gallon"} textThree={"20.00"} textFour={"1500"} textFive={"The EcoKrate is a pop-up recycling style unit that is reusable and will hold over 100 items "} textSix={"."} textSeven={"All membership types"} textEight={"."} textNine={" Embedded Evtek tag"} />
                        </div>
                    )}

                </div>
                <Modal
                    open={show}
                    onClose={handleClose}
                    style={{ backdropFilter: "blur(5px)" }}>
                    <div className={Styles.shopModel}>
                        <ModelsList heading="Featured Items" type="iconi" click={handleClose} textColor="greenPrimary" typeTwo="iconclose" text="Featured items are picked for you based on items you frequently recycle. With featured items, we hope to introduce you to goods that are manufactured using sustainable methods and are better for the environment" />

                    </div>
                </Modal>
            </div>
        </Layout>
    )
}


export default ShopHome
