import React, { useState } from 'react'
import Styles from './ReviewOrder.module.scss'
import { Button, CartList, Icon, Image, PageTitle, Text } from '../../../../component/shared'
import Layout from '../../../Container/Layout'
import { Grid} from "@material-ui/core";
import { useHistory } from 'react-router-dom';

const ReviewOrder = () => {
    const [showPreferences, setShowPreferences] = useState(false)
    const [showPayment, setShowPayment] = useState(true)
    const [hideEmail, setHideEmail] = useState(false)
    const history = useHistory();

    const placeOrder = () => {
        setHideEmail(true)
        setShowPayment(false)
    }
    const gotoPrefrences = () => {
        history.push("./preferences");
    };
    const gotoOrderHistory = () => {
        history.push("/order-history");
    };
    return (
        <Layout>
            <div className={Styles.container}>
                <Image className={Styles.headerWave} src="images/headerWave.png" />
                <div className={Styles.shopHome}>
                    <PageTitle titleClass={Styles.pageTitleClass} modulename={"Shop"} type="iconchevron" />
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
                <Text family='raleway' strong="strong7" variant={"xx8Text"}>Review Order</Text>
                <Grid lg={12} container spacing={200} className={Styles.main}>
                    <Grid item lg={6} sm={6} xs={12}>
                        <div className={Styles.cartItems}>
                            <div className={Styles.cartOne}>
                                <CartList number=" x 2" src="images/EcoSack.png" text="EcoSack"
                                    textTwo="13 gallon" textThird="$10.00" textFour="750 EcoPoints" />
                            </div>
                            <div className={Styles.cartTwo}>
                                <CartList number="x 1" src="images/EcoKrate.png" text="EcoKrate"
                                    textTwo="25 gallon" textThird="$20.00" textFour="1500 EcoPoints" />
                            </div>
                        </div>

                    </Grid>
                    <Grid item lg={6} sm={6} xs={12} className={Styles.placeOrderMain}>
                        {hideEmail &&

                            <div className={Styles.orderPlaced}>
                                <Text color={"primary2"} variant="xx9Text" family='raleway' strong='strong7'>Order Placed!</Text>
                            </div>}

                        <div className={`${Styles.ecoSack} ${Styles.ecoMain}`}>
                            <Text color={"primary2"} variant="xx4Text">x 1</Text>
                            <Text variant="xx4Text">EcoSack</Text>
                            <div className={Styles.EcoPints}>
                                <Text variant="xx4Text">$10.00</Text>
                                <div>
                                    <Text color={"primary2"} variant="xx4Text">750 EcoPoints</Text>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.ecoMain}>
                            <Text color={"primary2"} variant="xx4Text">x 1</Text>
                            <Text variant="xx4Text">EcoKrate</Text>
                            <div>
                                <Text variant="xx4Text">$20.00</Text>
                                <div>
                                    <Text color={"primary2"} variant="xx4Text">1500 EcoPoints</Text>
                                </div>
                            </div>
                        </div>
                        {showPayment &&
                            <>
                                <div className={Styles.method}>
                                    <Text color={"greyPrimary"} variant="xxxlText">Payment method</Text>
                                    <div>
                                        <Text variant="xxxlText">XXXX-XXXX-XXXX-7635</Text>
                                    </div>
                                </div>
                                <div className={Styles.shipping}>
                                    <Text color={"greyPrimary"} variant="xxxlText">Shipping to</Text>
                                    <div>
                                        <Text variant="xxxlText">800 Lake St, Queens NY 11234</Text>
                                    </div>
                                </div>
                                <div className={Styles.shippingMethod}>
                                    <Text color={"greyPrimary"} variant="xxxlText">Shipping Method</Text>
                                    <div>
                                        <Text variant="xxxlText">Drop-off  </Text>
                                    </div>
                                    <div className={Styles.method}>
                                        <Text variant="xxxlText">Friday, June 12, 2021</Text>
                                    </div>
                                </div>
                                <div className={Styles.totalMain}>
                                    <div className={Styles.total}>
                                        <Text variant="xxxlText">Total</Text>
                                        <div>
                                            <Text family='raleway' strong='strong6' variant="xxxlText">$45.50</Text>
                                        </div>
                                    </div>
                                    <div className={Styles.total}>
                                        <Text variant="xxxlText">Shipping Method</Text>
                                        <div>
                                            <Text family='raleway' strong='strong6' variant="xxxlText">$5</Text>
                                        </div>
                                    </div>
                                    <div className={Styles.total}>
                                        <Text variant="xxxlText">EcoPoints Applied</Text>
                                        <div>
                                            <Text family='raleway' strong='strong6' variant="xxxlText">-$18</Text>
                                        </div>
                                    </div>
                                    <div className={Styles.total}>
                                        <Text variant="xx8Text">Total billed</Text>
                                        <div>
                                            <Text family='raleway' strong='strong6' variant="xx8Text">$32.50</Text>
                                        </div>
                                    </div>
                                    <Button btnClass={Styles.submit} btnHandler={placeOrder} size={"btnl2g"}>Place Order</Button>

                                </div></>
                        }
                        {hideEmail &&

                            <>


                                <div className={Styles.emailMain}>
                                    <Text variant={"xxxlText"}>You will receive an email shortly at</Text>
                                    <Text className={Styles.ml} family='raleway' strong='strong7' variant={"xxxlText"}>samdavid12@gmail.com</Text>
                                </div>
                                <Button btnClass={Styles.ordersubmit} color="primaryDisable" size={"btnl2g"}>View Orders</Button>
                            </>}
                    </Grid>
                </Grid>

            </div>

        </Layout>
    )
}

export default ReviewOrder
