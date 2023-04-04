import React, { useState } from "react";
import { Icon, Image, OrderList, PageTitle, Text } from "../../../../component/shared";
import Layout from "../../../Container/Layout";
import Styles from "./OrderHistory.module.scss";
import Tooltip from '@mui/material/Tooltip';

const OrderHistory = () => {
    const [showOrderDetails, setShowOrderDetails] = useState(false)
    const [hideOrders, setHideOrders] = useState(true)
    const show = () => {
        setHideOrders(false)
        setShowOrderDetails(true)
    }

    return (
        <Layout>
            <div className={Styles.container}>
                <Image className={Styles.headerWave} src="images/headerWave.png" />
                <div className={Styles.shopHome}>
                    <PageTitle titleClass={Styles.pageTitleClass} modulename={"Order History "} pagename="Shop" type="iconchevron" />
                    <Tooltip title="Currently, Click event is not developed">
                        <div>
                            <Icon type="Group" customClass={Styles.filterIcon} />
                        </div>
                    </Tooltip>
                </div>
                <div className={Styles.main}>
                    {hideOrders &&
                        <>
                            <Text variant={"xx5Text"}>Orders</Text>
                            <div className={Styles.orderList}>
                                <OrderList onclick={show} textFirst="Order GHU278" textSecond={"07/21/2021"} textThird="Total $22.50" textFour={"see details"} />
                                <OrderList textFirst="Order GFT254" textSecond={"04/06/2021"} textThird="Total $10.030" textFour={"see details"} />
                                <OrderList textFirst="Order FET532" textSecond={"01/17/2021"} textThird="Total $35.50 " textFour={"see details"} />
                            </div>
                            <Text color={"greyPrimary"}>no more orders to display</Text>
                        </>}
                    {showOrderDetails &&
                        <div className={Styles.detailsMain}>
                            <div className={Styles.headMain}>
                                <Text variant={"xx3Text"}>Order Details:</Text>
                                <Text variant={"xx3Text"} className={Styles.headText} strong="strong6" color="primary2">GHU278</Text>
                            </div>
                            <div className={Styles.ecoMain}>
                                <Text color={"primary2"} variant="xx4Text">x 1</Text>
                                <Text variant="xx4Text">EcoSack</Text>
                                <div>
                                    <Text variant="xx4Text">$10.00 ea </Text>
                                </div>
                            </div>
                            <div className={`${Styles.ecoMain} ${Styles.kratesMain}`}>
                                <Text color={"primary2"} variant="xx4Text">x 1</Text>
                                <Text className={Styles.ml13} variant="xx4Text">EcoKrates</Text>
                                <div>
                                    <Text variant="xx4Text">$20.00 ea </Text>
                                </div>
                            </div>
                            <div className={Styles.subTotalMain}>
                                <div className={Styles.subTotal}>
                                    <Text variant={"xlText"} color="greyPrimary">Subtotal</Text>
                                    <Text variant={"xlText"} color="greyPrimary">$40.00</Text>
                                </div>
                                <div className={Styles.subTotal}>
                                    <Text variant={"xlText"} color="greyPrimary">Delivery</Text>
                                    <Text variant={"xlText"} color="greyPrimary">$5.50</Text>
                                </div>
                                <div className={Styles.Total}>
                                    <Text variant={"xx3Text"}>Total</Text>
                                    <Text variant={"xx3Text"}>$45.50</Text>
                                </div>
                            </div>
                            <div className={Styles.paymentMain}>
                                <Text variant={"xlText"} color={"greyPrimary"}>Payment method used:</Text>
                                <div className={Styles.cardMain}>
                                    <Icon type="creditCard" customClass={Styles.cardIcon} />
                                    <div>
                                        <Text variant={"xlText"}>credit card</Text>
                                        <div>
                                            <Text variant={"xlText"}>XXXX-XXXX-XXXX-7635 </Text>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.shipped}>
                                    <Text variant={"xlText"} color={"greyPrimary"}>Shipped to</Text>
                                </div>
                                <Text variant={"xlText"}>800 Lake St, Queens NY 11234</Text>
                            </div>
                        </div>}
                </div>

            </div>

        </Layout>
    );
};
export default OrderHistory;
