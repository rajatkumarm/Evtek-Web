import React from 'react'
import { PageTitle, Image } from '../../component/shared'
import Layout from '../Container/Layout'
import Styles from "./AboutAccount.module.scss";
import AccountBox from '../../component/shared/AccountBox/AccountBox';
import Text from '../../component/shared/Text';


const AboutAccount = () => {
    return (
        <Layout>
            <PageTitle modulename={"About Evtek"} pagename="Account" type="iconchevron" />
            <div className={Styles.BoxHandle}>
                
                <div className={Styles.textContent}>
                    <Text className={Styles.myText} strong={"strong5"} variant="xxxlText">
                        Evtek allows people and businesses to turn their trash into cash - clothing, e-waste, bottles, and cans,
                        or pots and pans, we reward our customers for passing along their
                        recyclables to recycling facilities that value the materials the most
                    </Text>
                </div>

                <div className={Styles.firstContentBox}>
                    <div className={Styles.orderBox}>
                        <div className={Styles.AccountBox}>
                            <AccountBox
                                count={"1"}
                                heading={"Order EcoSupplies"}
                                para={" EcoSupplies allow Evtek to easily, quickly, and safely pickup your recyclables. Choose from multiple types of bags and receptacles depending on the amount and type of items you are recycling."}
                                src='images/VectorImage.svg' imageClass={Styles.firstImage} />
                        </div>
                    </div>
                    <div className={Styles.abconector}><Image src='images/connector.png' alt='bottel' /></div>
                    <div className={Styles.colletcBox}>
                        <div className={Styles.AccountBox}>
                            <AccountBox
                                count={"2"}
                                heading={"Collect Items"}
                                para={"Only New York State redemption containers are accepted. Visit the “What can you recycle?” tab to see a helpful list of items."}
                                src='images/containers.svg' imageClass={Styles.mainImage} />
                        </div>
                    </div>
                    <div className={Styles.abconectoro}><Image src='images/connectorone.png' alt='bottel' /></div>
                    <div className={Styles.sortBox}>

                        <div className={Styles.AccountBox}>
                            <AccountBox
                                count={"3"}
                                mainImg={Styles.extraImage}
                                heading={"Sort Items"}
                                para={"Plastic and Aluminum containers must be placed in separate EcoSacks. Glass items must be placed in EcoKrates."}
                                src='images/sortImage.svg' imageClass={Styles.thirdImage} />
                        </div>
                    </div>
                    <div className={Styles.abconectort}><Image src='images/connectortwo.png' alt='bottel' /></div>
                </div>


                <div className={Styles.SecondContentBox}>
              
                    <div className={Styles.scheduleBox}>
                        <div className={Styles.AccountBox}>
                            <AccountBox
                                count={"5"}
                                heading={"Get Paid!"}
                                para={" The redemption value of your containers can be donated to local non-profit organizations or added to your cash balance. Choose to redeem your balance through PayPal or directly through your bank."}
                                src='images/getImage.svg' imageClass={Styles.fifthImage} />
                        </div>

                    </div>
                    <div className={Styles.abconectorthre}><Image src='images/connectorthree.png' alt='bottel' /></div>
                    <div>
                        <div className={Styles.AccountBox}>
                            <AccountBox
                                count={"4"}
                                heading={"Schedule Pickup"}
                                para={"Schedule a Pickup using our convenient calendar tool. Be sure to place your items in a specified location so that our drivers can pick them up. You can also drop off your recyclables at one of our designated Drop-off locations."}
                                src='images/pathImage.svg' imageClass={Styles.fourthImage} />
                        </div>
                    </div>
                </div>

            </div>


        </Layout>
    )
}

export default AboutAccount
