import { useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import Styles from './Cart.module.scss'
import { Button, CartList, Icon, Image, PageTitle, Text, RadioCheckBox, Radio,Input } from '../../../../component/shared'
import Layout from '../../../Container/Layout'
import { useHistory } from 'react-router-dom';
import { Grid } from "@material-ui/core";

const Cart = () => {
    const [showPreferences, setShowPreferences] = useState(false)
    const history = useHistory();
    const gotoReviewOrder = () => {
        history.push('./review-order');

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
                            <div className={Styles.prefer} onClick={gotoPrefrences} >
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
                <Text family='raleway' strong="strong7" variant={"xx8Text"}>Cart</Text>
                <Grid lg={12} container spacing={10} className={Styles.main}>
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
                        <div className={Styles.method}>
                            <Text color={"greyPrimary"} variant="xxxlText">Payment method</Text>
                            <div className={Styles.methodBox}>
                                <div className={Styles.commonText}>
                                    <div className={Styles.iconBox}>
                                        <Icon customClass={Styles.orderIcon} type="creditCard" />
                                    </div>
                                    <Text variant="xxxlText" className={Styles.cartNumber} >XXXX-XXXX-XXXX-7635</Text>
                                </div>
                                <div className={Styles.iconEdit}>
                                    <Tooltip title="Currently, Click event is not developed">
                                        <div>
                                            <Icon type="iconedit" />
                                        </div>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.Checksection}>
                            <RadioCheckBox checked={"checked"} variant="xxxlgcheckbox" />
                            <div>
                                <Text color="grayPrimary" variant="xlText" strong="strong4" className={Styles.pickupText}>  I understand that a Bulk Pickup requires at least 2500 items.</Text>
                            </div>
                        </div>
                        <div className={Styles.billingCount}>
                            <div className={Styles.gridText}>
                                <Text color={"primary2"} variant="xxlText" strong="strong6">Apply EcoPoints</Text>
                                <Input className={Styles.number} placeholder="1200" />
                            </div>
                            <div className={Styles.equal}>
                                <Icon customClass={Styles.orderIcon} type="equal" />
                            </div>
                            <div className={Styles.gridText}>
                                <Text color={"greyPrimary"} variant="xxlText" strong="strong6">Cash Amount</Text>
                                <Text color={"greyPrimary"} className={Styles.numberTwo} variant="xx7Text">$18</Text>
                                <Text color={"greyPrimary"} className={Styles.conversionText} variant="lgText">This conversion rate is for the Shop only</Text>
                            </div>
                        </div>
                        <div className={Styles.shipping}>
                            <Text color={"greyPrimary"} variant="xxxlText">Shipping to</Text>
                            <div className={Styles.shopBox}>
                                <Text variant="xxxlText">800 Lake St, Queens NY 11234</Text>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.iconEditTwo}>
                                        <Icon customClass={Styles.orderIcon} type="iconedit" />
                                    </div>
                                </Tooltip>
                            </div>
                        </div>
                        <div className={Styles.shippingMethod}>
                            <Text color={"greyPrimary"} variant="xxxlText">Shipping Method</Text>
                            <div className={Styles.dropoffText}>
                                <Text variant="xxxlText" strong={"strong6"}>Drop-off  </Text>
                                <form className={Styles.radioFirst}>
                                    <Radio checked="checked" size={"lgRadio"} id={"radioOne"} className={Styles.radioOne} label={"Friday, June 12, 2021 "} />
                                </form>
                            </div>
                            <form className={Styles.dropoffText}>
                                <Text variant="xxxlText" strong={"strong6"}>Drop-off on my next Curbside Pickup - $1 </Text>
                                <div className={Styles.radioFirst}>
                                    <Radio size={"lgRadio"} id={"radioOne"} className={Styles.radioOne} label={"Tuesday, June 9, 2021"} />
                                </div>
                                <div className={Styles.radioFirst}>
                                    <Radio size={"lgRadio"} id={"radioTwo"} className={Styles.radioOne} label={"Tuesday, June 18, 2021"} />
                                </div>
                            </form>
                            <form className={Styles.dropoffTextSecond}>
                                <Text variant="xxxlText" strong={"strong6"}> Other methods </Text>

                                <div className={Styles.radiobtnOne}>
                                    <Radio size={"lgRadio"} id={"radioTwo"} className={Styles.radioOne} />

                                    <div className={Styles.radiobtnText}>
                                        <Text variant="lglText" className={Styles.radiobtnText}>USPS Priority - $8.02</Text>
                                        <Text variant="lglText" className={Styles.radiobtnText}>Estimated delivery date: N/A</Text>
                                    </div>
                                </div>
                                <div className={Styles.radiobtnOne}>
                                    <Radio size={"lgRadio"} id={"radioTwo"} className={Styles.radioOne} />
                                    <div className={Styles.radiobtnText}>
                                        <Text variant="lglText" className={Styles.radiobtnText}>USPS Priority - $8.02</Text>
                                        <Text variant="lglText" className={Styles.radiobtnText}>Estimated delivery date: N/A</Text>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className={Styles.totalMain}>
                            <div className={Styles.total}>
                                <Text variant="xxxlText">Subtotal</Text>
                                <div>
                                    <Text family='raleway' strong='strong6' variant="xxxlText">$40.00</Text>
                                </div>
                            </div>
                            <div className={Styles.total}>
                                <Text variant="xxxlText">Delivery</Text>
                                <div>
                                    <Text family='raleway' strong='strong6' variant="xxxlText">$5.50</Text>
                                </div>
                            </div>
                            <div className={Styles.mainbtn}>
                                <div className={Styles.total}>
                                    <Text family='raleway' strong='strong6' variant="xxxlText">Total </Text>
                                    <div>
                                        <Text family='raleway' strong='strong6' variant="xxxlText">$45.50</Text>
                                    </div>
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
                                    <Text family='raleway' strong='strong6' variant="xx8Text">$27.50</Text>
                                </div>
                            </div>
                            <Button btnClass={Styles.submit} size={"btnl2g"} btnHandler={gotoReviewOrder}>Review Order</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
         </Layout>
    )
}

export default Cart
