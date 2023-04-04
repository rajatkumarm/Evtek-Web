import React from 'react'
import { Heading, PageTitle, Text, Image, Alert } from '../../../component/shared'
import Layout from '../../Container/Layout'
import Styles from './WhatCanRecycle.module.scss'


const WhatCanRecycle = () => {
    return (
        <Layout>
            <PageTitle modulename={"What can you recycle?"} pagename="Account" type="iconchevron" />
            <div className={Styles.wrapper}>
                <div className={Styles.rulesBox}>
                    <Heading headingType={"h3"} className={Styles.headText}>5 Rules to always keep in mind:</Heading>
                    <div className={Styles.mainText}>
                        <div className={Styles.circleBg}>
                            <Text className={Styles.circleNumber} variant="smText" color={"secondary"}>
                                1
                            </Text>
                        </div>
                        <Text className={Styles.headText} variant="xsText">
                            All bottles and cans must be marked New York State deposit
                        </Text>
                    </div>
                    <div className={Styles.mainText}>
                        <div className={Styles.circleBg}>
                            <Text className={Styles.circleNumber} variant="smText" color={"secondary"} >
                                2
                            </Text>
                        </div>
                        <Text className={Styles.headText} variant="xsText">
                            Separate plastic bottles and cans and place them in separate EcoSacks
                        </Text>
                    </div>
                    <div className={Styles.mainText}>
                        <div className={Styles.circleBg}>
                            <Text className={Styles.circleNumber} variant="smText" color={"secondary"} >
                                3
                            </Text>
                        </div>
                        <Text className={Styles.headText} variant="xsText">
                            All glass bottles must be placed in an EcoKrate
                        </Text>
                    </div>
                    <div className={Styles.mainText}>
                        <div className={Styles.circleBg}>
                            <Text className={Styles.circleNumber} variant="smText" color={"secondary"} >
                                4
                            </Text>
                        </div>
                        <Text className={Styles.headText} variant="xsText">
                            No broken glass bottles or crushed containers
                        </Text>
                    </div>
                    <div className={Styles.mainText}>
                        <div className={Styles.circleBg}>
                            <Text className={Styles.circleNumber} variant="smText" color={"secondary"}>
                                5
                            </Text>
                        </div>
                        <Text className={Styles.headText} variant="xsText">
                            All plastic bottles two liters or more can be mixed and placed in a separate bag
                        </Text>
                    </div>
                </div>
                <div className={Styles.borderBottom}></div>
                <div className={Styles.guideHeading}>
                    <Text variant="big03Text" family='raleway' className={Styles.containerText} strong={"strong4"} >Container Guide</Text>
                </div>
                <div className={Styles.acceptableContainer} >
                    <Text variant="xlText" className={Styles.acceptale}  color={'primary'}>Acceptable Containers</Text>
                    <div className={Styles.guideBox}>
                        <div className={Styles.bottol}>
                            <div className={Styles.plasticIcon}>
                                <Image className={Styles.bottlecImg} src='images/Bottle.svg' alt='goal' />
                            </div>
                            <Text className={Styles.headText} variant="xsText">
                                plastic
                            </Text>
                        </div>
                        <div className={Styles.bottol}>
                            <div className={Styles.glasssIcon}>
                                <Image className={Styles.glasssImg} src='images/glassbottle.svg' alt='goal' />
                            </div>
                            <Text className={Styles.headText} variant="xsText">
                                Glass
                            </Text>
                        </div>
                        <div className={Styles.bottol}>
                            <div className={Styles.aluminumIcon}>
                                <Image className={Styles.aluminumImg} src='images/Aluminum.svg' alt='goal' />
                            </div>
                            <Text className={Styles.headText} variant="xsText">
                                Aluminum
                            </Text>
                        </div>
                    </div>
                </div>
                <div className={Styles.braverageBox}>
                    <div className={Styles.braverageFirstBox}>
                    <div className={Styles.braverageFirstText}>
                        <Text className={Styles.beverageText} headingType={"h3"} strong="strong6">Acceptable Beverage Types</Text>
                        </div>
                        <div className={Styles.alertBox}>
                            <div className={Styles.success}>
                                <Alert
                                    variant={"enable"}
                                    className={"success"}
                                    type={"iconi"}
                                    paraSecond={
                                        "General Rule - any water, soda, beer or carbonated beverage with less than 5% sugar"
                                    }
                                    iconClass={Styles.alertIcon}
                                />
                            </div>
                            <div className={Styles.Alert}>
                                <Alert
                                    iconClass={Styles.iconClass}
                                    paraClass={Styles.paraClass}
                                    type={"checkCircle"}
                                    para={"Water"}
                                />
                                <Alert
                                    className={"alert"}
                                    type={"checkCircle"}
                                    para={"Sparkling soda water"}
                                    paraClass={Styles.paraClass}
                                    iconClass={Styles.iconClass}
                                />
                                <Alert
                                    className={"alert"}
                                    type={"checkCircle"}
                                    para={"Mineral Water (carbonated and non-carbonated)"}
                                    paraClass={Styles.paraClass}
                                    iconClass={Styles.iconClass}
                                />
                                <Alert
                                    className={"alert"}
                                    type={"checkCircle"}
                                    para={"Flavored or nutritionally enhanced water (NOT containing sugar)                                    "}
                                    paraClass={Styles.paraClass}
                                    iconClass={Styles.iconClass}
                                />
                                <Alert
                                    className={"alert"}
                                    type={"checkCircle"}
                                    para={"Beer and other malt beverages"}
                                    paraClass={Styles.paraClass}
                                    iconClass={Styles.iconClass}
                                />
                                <Alert
                                    className={"alert"}
                                    type={"checkCircle"}
                                    para={"Carbonated tea"}
                                    paraClass={Styles.paraClass}
                                    iconClass={Styles.iconClass}
                                />
                                <Alert
                                    className={"alert"}
                                    type={"checkCircle"}
                                    para={"Carbonated energy drinks  "}
                                    paraClass={Styles.paraClass}
                                    iconClass={Styles.iconClass}
                                />
                                <Alert
                                    className={"alert"}
                                    type={"checkCircle"}
                                    para={"Carbonated juice (<100% juice, that contains sugar and water     "}
                                    paraClass={Styles.paraClass}
                                    iconClass={Styles.iconClass}
                                />
                                <Alert
                                    className={"alert"}
                                    type={"checkCircle"}
                                    para={"Wine coolers "}
                                    paraClass={Styles.paraClass}
                                    iconClass={Styles.iconClass}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={Styles.braverageSecondBox}>
                    <div className={Styles.braverageFirstText}>
                            <Text className={Styles.headText} headingType={"h3"} strong="strong6">Unacceptable Beverage Types</Text>
                            </div>
                            <div className={Styles.alertBoxSecond}>
                                <div className={Styles.success}>
                                    <Alert
                                        variant={"enable"}
                                        className={"success"}
                                        type={"iconi"}
                                        paraClass={Styles.SecClass}
                                        paraSecond={
                                            "General Rule - anything with more than 5% juice"
                                        }
                                        iconClass={Styles.cencleIconFirst}
                                    />
                                </div>
                                <div className={Styles.Alert}>
                                    <Alert
                                        className={"alert"}
                                        type={"notapplicable"}
                                        para={"Milk products"}
                                        paraClass={Styles.paraClass}
                                        iconClass={Styles.cencleIcon}
                                    />
                                    <Alert
                                        className={"alert"}
                                        type={"notapplicable"}
                                        para={"Broken bottles"}
                                        paraClass={Styles.paraClass}
                                        iconClass={Styles.cencleIcon}
                                    />
                                    <Alert
                                        className={"alert"}
                                        type={"notapplicable"}
                                        para={"Non-carbonated tea and juice"}
                                        paraClass={Styles.paraClass}
                                        iconClass={Styles.cencleIcon}
                                    />
                                    <Alert
                                        className={"alert"}
                                        type={"notapplicable"}
                                        para={"Non-carbonated sports and energy drinks"}
                                        paraClass={Styles.paraClass}
                                        iconClass={Styles.cencleIcon}
                                    />
                                    <Alert
                                        className={"alert"}
                                        type={"notapplicable"}
                                        para={"Drink boxes or pouches"}
                                        paraClass={Styles.paraClass}
                                        iconClass={Styles.cencleIcon}
                                    />
                                    <Alert
                                        className={"alert"}
                                        type={"notapplicable"}
                                        para={"Waters containing sugar"}
                                        paraClass={Styles.paraClass}
                                        iconClass={Styles.cencleIcon}
                                    />

                                </div>
                            </div>
                        </div>
                        <div className={Styles.braverageThirdBox}>
                    <div className={Styles.braverageFirstText}>
                            <Text className={Styles.headText} headingType={"h3"} strong="strong6">Rules & Exceptions</Text>
                            </div>
                            <div className={Styles.alertBoxSecond}>
                                <div className={Styles.Alert}>
                                    <Alert
                                        className={"alert"}
                                        type={"iconnotification"}
                                        para={"Any Container that does not indicate a refund value"}
                                        paraClass={Styles.paraClass}
                                        iconClass={Styles.errorIcon}

                                    />
                                    <Alert
                                        className={"alert"}
                                        type={"iconnotification"}
                                        para={"Broken bottles"}
                                        paraClass={Styles.paraClass}
                                        iconClass={Styles.errorIcon}
                                    />
                                    <Alert
                                        className={"alert"}
                                        type={"iconnotification"}
                                        para={"Crushed containers"}
                                        paraClass={Styles.paraClass}
                                        iconClass={Styles.errorIcon}
                                    />
                                    <Alert
                                        className={"alert"}
                                        type={"iconnotification"}
                                        para={"Corroded or dismembered cans"}
                                        paraClass={Styles.paraClass}
                                        iconClass={Styles.errorIcon}
                                    />
                                    <Alert
                                        className={"alert"}
                                        type={"iconnotification"}
                                        para={"Containers that contain a significant amount of foreign material"}
                                        paraClass={Styles.paraClass}
                                        iconClass={Styles.errorIcon}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default WhatCanRecycle