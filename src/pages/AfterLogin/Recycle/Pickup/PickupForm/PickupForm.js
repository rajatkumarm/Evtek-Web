import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Heading, Icon, Radio, Text, Select, SelectItem, Input, RadioCheckBox, Checkbox, Button } from '../../../../../component/shared/index'
import Styles from './PickupForm.module.scss'

const PickupForm = ({ onClick,onhandleClick,onContniueClick }) => {
    const [hide, setShowHide] = useState(false);
    const [showCurbsideAlert, setShowCurbsideAlert] = useState(true);
    const [showBulkCheckbox, setShowBulkCheckBox] = useState(false);
    const [count, setCount] = useState("3");
    const [countSec, setCountSec] = useState("0");
    const [time, setTime] = useState("Night (6 pm - 12 am)");
    const [pickupMode, setPickupMode] = useState();
    const [showContinueEnable, setShowContinueEnable] = useState(false);
    const [hideContinueEnable, setHideContinueEnable] = useState(true);
    const [hidePickupForm, setHidePickupForm] = useState(true);
    const [showBulkModel, setShowBulkModel] = useState(false);
    const hideNotify = () => {
        setTimeout(() => {
            setShowHide(false)
        }, 3000);
    }
    //  console.log(count);
    // console.log(countSec);


    const history = useHistory();


    const gotoChooseCharity = () => {
        history.push('./choose-charity')
    }
    const handleChange = () => {
        setShowCurbsideAlert(true)
        setShowBulkCheckBox(false)
    }
    const handleBulkRadioChange = () => {
        setShowCurbsideAlert(false)
        setShowBulkCheckBox(true)
    }

    return (
        <>
           
            {hidePickupForm &&
                <>
                    <form className={Styles.formMain}>
                        <div className={Styles.Main}>
                            <form className={Styles.pickMain}>
                                <div className={Styles.pickupHead}>
                                    <Text color={"secondary"} variant={"msmText"} className={Styles.countOne}>1</Text>
                                    <Heading headingType={"h6"}>Select a Pickup Type</Heading>
                                    <Icon click={() => { setShowHide(0); hideNotify() }} type={"iconi"} customClass={Styles.infoIcon} />
                                    {hide === 0 &&
                                        <div className={Styles.tooltip}>
                                            <div className={Styles.tooltipText}>
                                                <Text color={"secondary"} variant={"smText"}>A Bulk Pickup requires at least 2500 items.
                                                </Text>
                                                <div className={Styles.tooltipTwo}>
                                                    <Text color={"secondary"} variant={"smText"}>A Curbside Pickup requires at least 200 items
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className={Styles.paddingLeft}>
                                    <div className={Styles.radiobtn}>
                                        <Radio size={"smRadio"} id={"radioOne"} onClick={onClick} onChange={e => { setPickupMode(e.target.value); setShowContinueEnable(true); setHideContinueEnable(false); handleBulkRadioChange() }} className={Styles.radioOne} label={"Bulk Pickup"} value="Bulk Pickup" />
                                    </div>
                                    <div className={Styles.radiobtn}>
                                        <Radio checked={true} onChange={e => { setPickupMode(e.target.value); handleChange() }} size={"smRadio"} id={"radioTwo"} className={Styles.radioTwo} label={"Curbside Pickup"} value={"Curbside Pickup"} />
                                    </div>
                                    <RadioCheckBox variant={"smcheckbox"} disabled={true} color='greySecondary' className={Styles.pickupCheck} id={"check"} label={"make it a recurring weekly pickup"} />
                                </div>
                                <div className={Styles.checkBorder}></div>
                            </form>
                            <div className={Styles.pickMain}>
                                <div className={Styles.PickupAmount}>
                                    <div className={Styles.amountHead}>
                                        <Text color={"secondary"} variant={"msmText"} className={Styles.countOne}>2</Text>
                                        <Heading headingType={"h6"}>Select estimated amount to be picked up</Heading>
                                    </div>
                                    <div className={Styles.EcoMain}>
                                        <div className={Styles.Eco}>
                                            <div className={Styles.EcoSacks}>
                                                <Text variant={"smText"}>EcoSacks</Text>
                                                <Icon click={() => { setShowHide(1); hideNotify() }} type={"iconi"} customClass={Styles.infoIcon} />
                                            </div>
                                            {hide === 1 &&
                                                <div className={Styles.ecoSacks}>
                                                    <div className={Styles.tooltipText}>
                                                        <Text color={"secondary"} variant={"smText"}>EcoSacks should only be used for plastic and aluminum containers.
                                                        </Text>
                                                        <div className={Styles.tooltipOne}>
                                                            <Text color={"secondary"} variant={"smText"}>1 EcoKrate = ~24 items
                                                            </Text>
                                                        </div>
                                                        <div className={Styles.tooltipTwo}>
                                                            <Text color={"secondary"} variant={"smText"}>*accurate total counts will be determined once your items are processed at an Evtek facility
                                                            </Text>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            <div className={Styles.EcoKrates}>
                                                <Text variant={"smText"}>EcoKrates</Text>
                                                <Icon click={() => { setShowHide(2); hideNotify() }} type={"iconi"} customClass={Styles.infoIcon} />
                                                {hide === 2 &&
                                                    <div className={Styles.ecoKratesTooltip}>
                                                        <div className={Styles.tooltipText}>
                                                            <Text color={"secondary"} variant={"smText"}>EcoKrate should only be used for glass bottles.
                                                            </Text>
                                                            <div className={Styles.tooltipOne}>
                                                                <Text color={"secondary"} variant={"smText"}>1 EcoKrate = ~24 items
                                                                </Text>
                                                            </div>
                                                            <div className={Styles.tooltipTwo}>
                                                                <Text color={"secondary"} variant={"smText"}>*accurate total counts will be determined once your items are processed at an Evtek facility
                                                                </Text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <div className={Styles.selectMain}>
                                            <div>
                                                <Select className={Styles.SacksSelect}
                                                    id="counts" value={count}
                                                    onChange={(e) => setCount(e.target.value)}>
                                                    <SelectItem className={Styles.Item} value="0">0</SelectItem>
                                                    <SelectItem className={Styles.Item} value="1">1</SelectItem>
                                                    <SelectItem className={Styles.Item} value="2">2</SelectItem>
                                                    <SelectItem selected={"selected"} className={Styles.Item} value="3" >3</SelectItem>
                                                </Select>
                                            </div>
                                            <div>
                                                <Select className={Styles.KratesSelect}
                                                    id="counts" value={countSec}
                                                    onChange={(e) => setCountSec(e.target.value)}>
                                                    <SelectItem className={Styles.Item} value="0">0</SelectItem>
                                                    <SelectItem className={Styles.Item} value="1">1</SelectItem>
                                                    <SelectItem className={Styles.Item} value="2">2</SelectItem>
                                                    <SelectItem className={Styles.Item} value="3">3</SelectItem>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className={Styles.formBorder}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.pickMain}>
                                <div className={Styles.pickupHead}>
                                    <Text color={"secondary"} variant={"msmText"} className={Styles.countOne}>3</Text>
                                    <Heading headingType={"h6"}>Select a time</Heading>
                                    <Icon click={() => { setShowHide(3); hideNotify() }} type={"iconi"} customClass={Styles.infoIcon} />
                                    {hide === 3 &&
                                        <div className={Styles.TimeTooltip}>
                                            <div className={Styles.tooltipText}>
                                                <Text color={"secondary"} variant={"smText"}>Choose a time that best fits your schedule. Please note that Curbside Pickups are only available in the Night time window.
                                                </Text>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <form className={Styles.radioTime}>
                                    <div className={Styles.radioMorning}>
                                        <Radio disabled={showCurbsideAlert ? true : false} size={"smRadio"} id={"radioThree"} labelColor={showCurbsideAlert ? "grayPrimary" : ""} label={"Morning (8 am - 12 pm)"} value={"Morning (8 am - 12 pm)"} onChange={e => setTime(e.target.value)} />
                                        {showCurbsideAlert && <Text color={"grayPrimary"} className={Styles.disableText} variant={"smText"}>*not available for Curbside</Text>}
                                    </div>
                                    <div className={Styles.radioAfter}>
                                        <Radio disabled={showCurbsideAlert ? true : false} size={"smRadio"} id={"radioFour"} labelColor={showCurbsideAlert ? "grayPrimary" : ""} label={"Afternoon (12 pm - 6 pm)"} value={"Afternoon (12 pm - 6 pm)"} onChange={e => setTime(e.target.value)} />
                                        {showCurbsideAlert && <Text color={"grayPrimary"} className={Styles.disableText} variant={"smText"}>*not available for Curbside</Text>}
                                    </div>
                                    <div className={Styles.radioThree}>
                                        <Radio checked="checked" className={Styles.radioTwo} size={"smRadio"} id={"radioFive"} label={"Night (6 pm - 12 am)"} value={"Night (6 pm - 12 am)"} onChange={e => setTime(e.target.value)} />
                                    </div>
                                </form>
                            </div>
                            <div className={Styles.instructionMain}>
                                <div className={Styles.InputMain}>
                                    <Text color={"secondary"} variant={"msmText"} className={Styles.countOne}>4</Text>
                                    <Heading headingType={"h6"}>Instructions for Pickup driver:</Heading>
                                </div>
                                <Input className={Styles.pickupInput} placeholder={"Bins are at the side of the house..."} />
                            </div>
                            <form className={Styles.paymentMain}>
                                <div className={Styles.paymentHead}>
                                    <Text color={"secondary"} variant={"msmText"} className={Styles.countOne}>5</Text>
                                    <Heading headingType={"h6"}>Select a payment method</Heading>
                                </div>
                                <div className={Styles.radioMorning}>
                                    <Radio checked="checked" size={"smRadio"} id={"radioSix"} className={Styles.radioOne} label={"Donate to Charity"} />
                                    <div className={Styles.charity} onClick={gotoChooseCharity}>
                                        <Text variant={"xsText"} color={"greenPrimary"}>Choose a Charity</Text>
                                        <div className={Styles.iconEditTwo}>
                                            <Icon type={"iconFill"} customClass={Styles.charityIcon} />
                                        </div>

                                    </div>
                                    <Icon click={() => { setShowHide(4); hideNotify() }} type={"iconi"} customClass={Styles.infoIcon} />
                                    {hide === 4 &&
                                        <div className={Styles.charityTooltip}>
                                            <div className={Styles.tooltipText}>
                                                <Text color={"secondary"} variant={"smText"}>We strive to support the communities we service. Please consider donating your recycling proceeds.
                                                </Text>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className={Styles.radioAfter}>
                                    <Radio size={"smRadio"} id={"radioseven"} className={Styles.radioTwo} label={"Add to Cash Balance"} />
                                    <Icon click={() => { setShowHide(5); hideNotify() }} type={"iconi"} customClass={Styles.infoIcon} />
                                    {hide === 5 &&
                                        <div className={Styles.AccountBalanceTooltip}>
                                            <div className={Styles.tooltipText}>
                                                <Text color={"secondary"} variant={"smText"}>Your recycling proceeds will be deposited into your Evtek Account balance. Visit your Wallet for more details.
                                                </Text>
                                            </div>
                                        </div>
                                    }   </div>
                            </form>

                        </div>

                    </form>
                    <div className={Styles.pickupContinueBtn}>
                        {hideContinueEnable && <Button btnClass={Styles.editBtn} variant={"greySecondary"} size={"btnMd02"}>Contiue</Button>}
                        {showContinueEnable && <Button btnClass={Styles.editBtn} btnHandler={() => { setHidePickupForm(false); setShowBulkModel(true); onContniueClick(); }} variant={"solidPrimary"} size={"btnMd02"}>Contiue</Button>}
                    </div>
                </>}
            {showBulkModel &&
                <div className={Styles.mainBox}>
                    <div className={Styles.headBox}>
                        <Text variant="lgText" strong="strong4" className={Styles.itemText}>
                            Scheduled Pickup
                        </Text>
                    </div>
                    <div className={Styles.textBox}>

                        <div>
                            <Text color={"primary2"} variant="lgText" strong="strong4" className={Styles.itemText}>July 18, 2021</Text>
                            <Text color={"primary2"} variant="lgText" strong="strong4" className={Styles.itemSecText}>{time}</Text>
                        </div>

                        <Heading headingType={"h4"} className={Styles.topHeading}>{pickupMode}</Heading>

                        <Text color="grayPrimary" variant="smText" strong="strong4" className={Styles.itemText}>
                            {count} x EcoSacks, {countSec} x EcoKrates</Text>
                    </div>
                    {showBulkCheckbox &&
                        <div className={Styles.checkSection}>
                            <Checkbox id="okay" checked="checked" onChange="onChange" />
                            <Text color="grayPrimary" variant="smText" strong="strong4" className={Styles.pickupText}>  I understand that a Bulk Pickup requires at least 2500 items.</Text>


                        </div>
                    }

                    <div className={Styles.mainBtn}>
                        <Button variant="pinkSm" size={"btnSm"} btnHandler={() => { setHidePickupForm(true); setShowBulkModel(false) }} >Edit</Button>
                        <div>
                            <Button variant="solidPrimary" btnHandler={() => { setHidePickupForm(false); setShowBulkModel(false); onhandleClick(); }} size={"btnSm"}>Confirm</Button>
                        </div>
                    </div>
                </div>}
        </>

    )
}

export default PickupForm
