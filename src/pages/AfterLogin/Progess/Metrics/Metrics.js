import React from 'react'
import Layout from '../../../Container/Layout'
import Styles from './Metrics.module.scss'
import {
    Icon,
    Text,
    Heading,
    Image,
    ProgressBar,
    PageTitle,
    DatePick,
    RadioCheckBox,
    DoughnutChart,
    Select,
    SelectItem,
    Button,
    LineChart,
    ChartLine,
    DateRange
} from "../../../../component/shared"
import { UserData } from '../../../../component/shared/DoughnutChart/Data'
import { useState } from 'react';
import moment from "moment";
export default function Metrics() {
    // const [show, setShow] = useState(false)
    const [showPlastic, setShowPlastic] = useState(false);
    const [showMore, setShowMore] = useState(true);
    const [date, setDate] = useState(new Date());

    // const showInfo = () => {
    //     setShow(true)
    // }
    const showDetails = () => {
        setShowPlastic(true)
        setShowMore(false)
    }
    const hideDetails = () => {
        setShowPlastic(false)
        setShowMore(true)
    }
    const [userData,] = useState({
        datasets: [{
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
                "#FFBF1A",
                "#4AB8ED ",
                "#F1688E "
            ],
        }],
    })

    let valideDate;

    if (moment(date).isBefore(new Date())) {

        // if (
        //     moment(moment(date).format("L")).isSame(moment(new Date()).format("L"))
        // )
        // // on Active calender date start
        // {
        //     valideDate = (
        //         <Button size={"btnMd02"} btnClass={Styles.continueBtn} color={showScheduler ? "solidPrimary" : "secondaryDisable"} >
        //             continue
        //             <Icon type="iconFill" />
        //         </Button>
        //     );
        // }
        // on Active calender date start
        //  on Active date click calendar schedule start
        // {
        //     valideDate = (
        //         <div className={Styles.recycledBar}>
        //             <div className={Styles.Itemsmet}>
        //                 <Heading className={Styles.itemText} >58</Heading>
        //                 <Text className={Styles.itemrecycle} variant={"xlText"}> items recycled </Text>
        //                 <div className={Styles.itemRecycle} >
        //                     <Text className={Styles.itemrecycle} variant={"xx5Text"}> 10 . 2 lbs recycled </Text>
        //                 </div>
        //             </div>
        //             <div className={Styles.recycleDisplay}>
        //                 <div className={Styles.graph}>
        //                     <div className={Styles.aluminiumBar}>
        //                         <div className={Styles.aluminiumCircle}>
        //                         </div>
        //                         <div className={Styles.circleText}>
        //                             <Text className={Styles.alurecycle} variant={"xxlText"}> Aluminum </Text>
        //                             <div>
        //                                 <Text className={Styles.alurecycle} variant={"xxlText"}> 18 items • 3 lbss </Text>
        //                             </div>
        //                         </div>
        //                         <div className={Styles.imgText}>
        //                             <Text className={Styles.alurecycle} variant={"xxlText"} color={"orangePrimary"}> 31% </Text>
        //                         </div>
        //                         <Image className={Styles.barImag} src='images/Aluminium.svg' alt='Logo' />
        //                     </div>
        //                     <div className={Styles.plasticBar}>
        //                         <div className={Styles.plastitem} onClick={showDetails}>
        //                             <div className={Styles.plasticCircle}>
        //                             </div>
        //                             <div className={Styles.circleText}>
        //                                 <Text className={Styles.plasrecycle} variant={"xxlText"}> Plastic </Text>
        //                                 <div>
        //                                     <Text className={Styles.plsrecycle} variant={"xxlText"}> 8 items • 6 lbs </Text>
        //                                 </div>
        //                             </div>
        //                             <div className={Styles.imgText}>
        //                                 <Text className={Styles.alurecycle} variant={"xxlText"} color={"pinkPrimary"}> 14% </Text>
        //                             </div>
        //                             <Image className={Styles.barImag} src='images/Plastic.png' alt='Logo' />
        //                         </div>
        //                         {showPlastic && (
        //                             <div className={Styles.plasticHeading}>
        //                                 <div className={Styles.plasticHd}>
        //                                     <div className={Styles.hdpePlastic}>
        //                                         <Text className={Styles.hdpeText} handleClick={hideDetails} variant={"xxlText"} color={"pinkPrimary"}> HDPE Plastic</Text>
        //                                         <div>
        //                                             <Text className={Styles.plasticlbs} variant={"xxlText"}> 3 items • 2 lbs </Text>
        //                                         </div>
        //                                     </div>
        //                                     <Text className={Styles.plasticpercent} variant={"xxlText"} color={"pinkPrimary"}> 4% </Text>
        //                                 </div>
        //                                 <div className={Styles.plasticPet}>
        //                                     <div className={Styles.petPlastic}>
        //                                         <Text className={Styles.hdpeText} variant={"xxlText"} color={"pinkPrimary"}> PET Plastic</Text>
        //                                         <div>
        //                                             <Text className={Styles.plasticlbs} variant={"xxlText"} > 5 items • 4 lbs </Text>
        //                                         </div>
        //                                     </div>
        //                                     <Text className={Styles.plasticpercent} variant={"xxlText"} color={"pinkPrimary"}> 10% </Text>
        //                                 </div>
        //                             </div>
        //                         )}
        //                     </div>
        //                     <div className={Styles.glassBar}>
        //                         <div className={Styles.glassCircle}>
        //                         </div>
        //                         <div className={Styles.circleText}>
        //                             <Text className={Styles.glasrecycle} variant={"xxlText"}> Glass </Text>
        //                             <div>
        //                                 <Text className={Styles.glsrecycle} variant={"xxlText"}> 32 items • 6 lbs </Text>
        //                             </div>
        //                         </div>
        //                         <div className={Styles.imgText}>
        //                             <Text className={Styles.alurecycle} variant={"xxlText"} color={"bluePrimary"}> 55% </Text>
        //                         </div>
        //                         <Image className={Styles.barImag} src='images/Glass.svg' alt='Logo' />
        //                     </div>
        //                     {showMore &&
        //                         <Text className={Styles.alurecycle} variant={"xxlText"} handleClick={showDetails} >more details+ </Text>}
        //                     {showPlastic && (
        //                         <Text className={Styles.alurecycle} variant={"xxlText"} handleClick={hideDetails}>less details+ </Text>
        //                     )}
        //                 </div>

        //                 <div className={Styles.chartDough}>
        //                     <div className={Styles.itemIco}>
        //                         <Text className={Styles.recycleChart} variant={"xxxlText"} strong={"strong7"}>58  </Text>
        //                         <div><Text className={Styles.alurecycleChart} variant={"xxlText"}>items  </Text></div>
        //                     </div>
        //                     <DoughnutChart chartData={userData} />
        //                 </div>
        //             </div>

        //         </div>
        //     );
        // }
        //  on Active date calendar schedule end 
        //  yellow highlight calendor schedule start

    } 
    else {
        valideDate = (
            <div className={Styles.recycledBar}>
                <div className={Styles.Itemsmet}>
                    <Heading className={Styles.itemText} >58</Heading>
                    <Text className={Styles.itemrecycle} variant={"xlText"}> items recycled </Text>
                    <div className={Styles.itemRecycle} >
                        <Text className={Styles.itemrecycle} variant={"xx5Text"}> 10 . 2 lbs recycled </Text>
                    </div>
                </div>
                <div className={Styles.recycleDisplay}>
                    <div className={Styles.graph}>
                        <div className={Styles.aluminiumBar}>
                            <div className={Styles.aluminiumCircle}>
                            </div>
                            <div className={Styles.circleText}>
                                <Text className={Styles.alurecycle} variant={"xxlText"}> Aluminum </Text>
                                <div>
                                    <Text className={Styles.alurecycle} variant={"xxlText"}> 18 items • 3 lbss </Text>
                                </div>
                            </div>
                            <div className={Styles.imgText}>
                                <Text className={Styles.alurecycle} variant={"xxlText"} color={"orangePrimary"}> 31% </Text>
                            </div>
                            <Image className={Styles.barImag} src='images/Aluminium.svg' alt='Logo' />
                        </div>
                        <div className={Styles.plasticBar}>
                            <div className={Styles.plastitem} onClick={showDetails}>
                                <div className={Styles.plasticCircle}>
                                </div>
                                <div className={Styles.circleText}>
                                    <Text className={Styles.plasrecycle} variant={"xxlText"}> Plastic </Text>
                                    <div>
                                        <Text className={Styles.plsrecycle} variant={"xxlText"}> 8 items • 6 lbs </Text>
                                    </div>
                                </div>
                                <div className={Styles.imgText}>
                                    <Text className={Styles.alurecycle} variant={"xxlText"} color={"pinkPrimary"}> 14% </Text>
                                </div>
                                <Image className={Styles.barImag} src='images/Plastic.png' alt='Logo' />
                            </div>
                            {showPlastic && (
                                <div className={Styles.plasticHeading}>
                                    <div className={Styles.plasticHd}>
                                        <div className={Styles.hdpePlastic}>
                                            <Text className={Styles.hdpeText} handleClick={hideDetails} variant={"xxlText"} color={"pinkPrimary"}> HDPE Plastic</Text>
                                            <div>
                                                <Text className={Styles.plasticlbs} variant={"xxlText"}> 3 items • 2 lbs </Text>
                                            </div>
                                        </div>
                                        <Text className={Styles.plasticpercent} variant={"xxlText"} color={"pinkPrimary"}> 4% </Text>
                                    </div>
                                    <div className={Styles.plasticPet}>
                                        <div className={Styles.petPlastic}>
                                            <Text className={Styles.hdpeText} variant={"xxlText"} color={"pinkPrimary"}> PET Plastic</Text>
                                            <div>
                                                <Text className={Styles.plasticlbs} variant={"xxlText"} > 5 items • 4 lbs </Text>
                                            </div>
                                        </div>
                                        <Text className={Styles.plasticpercent} variant={"xxlText"} color={"pinkPrimary"}> 10% </Text>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={Styles.glassBar}>
                            <div className={Styles.glassCircle}>
                            </div>
                            <div className={Styles.circleText}>
                                <Text className={Styles.glasrecycle} variant={"xxlText"}> Glass </Text>
                                <div>
                                    <Text className={Styles.glsrecycle} variant={"xxlText"}> 32 items • 6 lbs </Text>
                                </div>
                            </div>
                            <div className={Styles.imgText}>
                                <Text className={Styles.alurecycle} variant={"xxlText"} color={"bluePrimary"}> 55% </Text>
                            </div>
                            <Image className={Styles.barImag} src='images/Glass.svg' alt='Logo' />
                        </div>
                        {showMore &&
                            <Text className={Styles.alurecycle} variant={"xxlText"} handleClick={showDetails} >more details+ </Text>}
                        {showPlastic && (
                            <Text className={Styles.alurecycle} variant={"xxlText"} handleClick={hideDetails}>less details+ </Text>
                        )}
                    </div>

                    <div className={Styles.chartDough}>
                        <div className={Styles.itemIco}>
                            <Text className={Styles.recycleChart} variant={"xxxlText"} strong={"strong7"}>58  </Text>
                            <div><Text className={Styles.alurecycleChart} variant={"xxlText"}>items  </Text></div>
                        </div>
                        <DoughnutChart chartData={userData} />
                    </div>
                </div>

            </div>
        );
    }

    const [active, setActiveNow] = useState(0);
    const [activeCalender, setActiveCalender] = useState(5);

    return (
        <>
            <Layout>
                <div className={Styles.Main}>
                    <PageTitle type="iconchevron" pagename="Recycle" modulename="Metrics" />
                </div>
                <div className={Styles.mainMetrics}>
                    <div className={Styles.MetricsMain}>
                        <div className={Styles.AllTime}>
                            <Text variant={"xx2Text"} strong="strong5">All-time Recycling Metrics </Text>
                        </div>
                        <div className={Styles.RecycleMaterial}>
                            <div className={Styles.mateRec}>
                                <div className={Styles.TotalRecycle}>
                                    <div className={Styles.Items}>
                                        <Text variant={"xlText"}>Total Items recycled </Text>
                                        <Heading className={Styles.itemText}>643</Heading>
                                    </div>
                                    <div className={Styles.Items}>
                                        <Text variant={"xlText"}>Total weight recycled  </Text>
                                        <Heading className={Styles.weightText}>142 lbs</Heading>
                                    </div>
                                </div>
                                <div className={Styles.Materials}>
                                    <div className={Styles.content} >
                                        <div onClick={() => { setActiveNow(0) }} className={` ${Styles.activeClr} ${active === 0 ? Styles.activeZero : ''}`}>
                                            <div className={Styles.mtrText} >
                                                <Text variant={"xx4Text"} strong={"strong6"} color={active === 0 ? "secondary" : "ecoPrimary"}>All Materials</Text>
                                            </div>
                                        </div>
                                        <div className={Styles.borderMaterials}></div>
                                        <div className={Styles.aluContent}>
                                            <div onClick={() => { setActiveNow(1) }} className={` ${Styles.aluminiumBox} ${active === 1 ? Styles.active : ''}`}>
                                                <div className={Styles.Aluminium} >
                                                    <div className={Styles.textAluminium}>
                                                        <div>
                                                            <div><Text variant={"xxlText"} color="orangePrimary" >63%</Text></div>
                                                            <Text variant={"xx4Text"} color={active === 1 ? "secondary" : "orangePrimary"}>Aluminium</Text>
                                                        </div>
                                                        <div className={Styles.alImg}>
                                                            <Image src={active === 1 ? "images/AluminiumW.svg" : "images/Aluminium.svg"} alt={"Logo"} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.aluItems}>
                                                    <Heading headingType={"h3"} color={active === 1 ? "secondary" : "ecoPrimary"} >402 items </Heading>
                                                    <Text className={Styles.lbs} variant={"xlText"} color={active === 1 ? "secondary" : "greyPrimary"} >77 lbs</Text>
                                                </div>
                                            </div>
                                            <div className={Styles.borderMaterials}></div>
                                            <div onClick={() => { setActiveNow(2) }} className={` ${Styles.plasticBox} ${active === 2 ? Styles.activeTwo : ''}`} >
                                                <div className={Styles.Plastic}>
                                                    <div className={Styles.textPlastic}>
                                                        <div>
                                                            <div> <Text variant={"xxlText"} color={"pinkPrimary"}>31% </Text></div>
                                                            <Text variant={"xx4Text"} color={active === 2 ? "secondary" : "ecoPrimary"}>Plastic</Text>
                                                        </div>
                                                        <div className={Styles.alImg}>
                                                            <Image src={active === 2 ? "images/recycleBottle.svg" : "images/Plastic.png"} alt={"Logo"} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.plasticItems}>
                                                    <Heading headingType={"h3"} color={active === 2 ? "secondary" : "ecoPrimary"} >200 items </Heading>
                                                    <Text className={Styles.lbs} variant={"xlText"} color={active === 2 ? "secondary" : "greyPrimary"}>50 lbs</Text>
                                                </div>
                                            </div>
                                            <div className={Styles.borderMaterials}></div>
                                            <div onClick={() => { setActiveNow(3) }} className={` ${Styles.glassBox} ${active === 3 ? Styles.activeThree : ''}`}>
                                                <div className={Styles.Glass}>
                                                    <div className={Styles.textGlass}>
                                                        <div>
                                                            <div> <Text variant={"xxlText"} color={"bluePrimary"}>6% </Text></div>
                                                            <Text variant={"xx4Text"} color={active === 3 ? "secondary" : "ecoPrimary"}>Glass</Text>
                                                        </div>
                                                        <div className={Styles.alImg}>
                                                            <Image src={active === 3 ? "images/recycleBottle.svg" : "images/Glass.svg"} alt={"Logo"} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.glassItems}>
                                                    <Heading headingType={"h3"} color={active === 3 ? "secondary" : "ecoPrimary"} >41 items </Heading>
                                                    <Text className={Styles.lbs} variant={"xlText"} color={active === 3 ? "secondary" : "greyPrimary"}>35 lbs</Text>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.Goal}>
                                <div className={Styles.Bulb}>
                                    <Image src='images/Bulb.svg' alt={"Logo"} />
                                    <div className={Styles.bulbText}>
                                        <Text variant={"msmText"} color={"whiteColor"}>next goal progress</Text>
                                        <div className={Styles.goalText}>
                                            <Text className={Styles.hourText} variant={"xxlText"} color={"whiteColor"}>goal 3 • 60 hours of light</Text>
                                            <Icon type='iconFill' />
                                        </div>
                                        <div className={Styles.contentLeftbottam}>
                                            <div className={Styles.ProgressBar}>
                                                <div className={Styles.progressBar}><ProgressBar bgcolor="white" backcolor="#494E5E" progress='60' height={18} /></div>
                                            </div>
                                            <Text variant={"mdText"} color={"whiteColor"}>643/1000 items</Text>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.OverTime}>
                                    <div className={Styles.textDate}>
                                        <div className={Styles.graphChart}>
                                            <div className={Styles.time}>
                                                <Text variant={"xx2Text"} color={"secondary"}>Metrics over time</Text>
                                            </div>
                                            <div className={Styles.selectMain}>
                                                <Select className={Styles.selectDrop}>
                                                    <SelectItem className={Styles.Item}>Month</SelectItem>
                                                    <SelectItem className={Styles.Item}>2</SelectItem>
                                                    <SelectItem className={Styles.Item}>3</SelectItem>
                                                    <SelectItem className={Styles.Item}>4</SelectItem>
                                                </Select>
                                                <div className={Styles.btnTime}>
                                                    {active === 0 && <div >
                                                        <Button btnClass={Styles.btnTime} variant={active === 0 ? "blackPrimary" : ""} >
                                                            All Material
                                                        </Button>
                                                    </div>
                                                    }
                                                    {active === 1 &&
                                                        <div>
                                                            <Button btnClass={Styles.btnTime} size={"sm01"} variant={active === 1 ? "orangePrimary" : ""} >
                                                                Aluminum
                                                            </Button>
                                                        </div>
                                                    }
                                                    {active === 2 &&
                                                        <div>
                                                            <Button btnClass={Styles.btnTime} size={"sm01"} variant={active === 2 ? "pinkPrimary" : ""} >
                                                                Plastic
                                                            </Button>
                                                        </div>
                                                    }
                                                    {active === 3 &&
                                                        <div>
                                                            <Button btnClass={Styles.btnTime} size={"sm01"} variant={active === 3 ? "bluePrimary" : ""} >
                                                                Glass
                                                            </Button>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.dayMonth}>
                                            <div className={Styles.recycledDay}>
                                                <div><Image src='images/white.png' alt={"Logo"} /></div>
                                                <Text variant={"lgText"} color={"secondary"}> recycled in selected day/month/year</Text>
                                            </div>
                                            <div>
                                                <Image src='images/yellow.png' alt={"Logo"} />
                                                <Text variant={"lgText"} color={"yellowPrimary"}>  recycled to-date</Text></div>
                                        </div>
                                    </div>
                                    {active === 0 &&
                                        <div style={{ width: 490 }}>
                                            <LineChart />
                                        </div>
                                    }
                                    {active === 1 &&

                                        <div style={{ width: 490 }}>
                                            <ChartLine />
                                        </div>
                                    }
                                    {active === 2 &&
                                        <div style={{ width: 490 }}>
                                            <LineChart />
                                        </div>
                                    }
                                    {active === 3 &&
                                        <div style={{ width: 490 }}>
                                            <ChartLine />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={Styles.iconText}>
                        <Icon type='iconi' />
                        <Text variant={"xxlText"} color={"white"} >View Metrics for a specific date or range below</Text>
                    </div>
                    <div className={Styles.date}   >
                        <div className={Styles.dateRangeText} >

                            <div className={Styles.dateText}>
                                <Text variant={"xx2Text"} color={"white"}>Date Selected </Text>
                            </div>
                            <div className={Styles.calender}>
                                <div onClick={() => { setActiveCalender(5) }} className={` ${Styles.selectDate} ${activeCalender === 5 ? Styles.activeFive : ''}`}>
                                    <Icon type='icontoday' customClass={Styles.btnicon} />
                                    <div className={Styles.textDate}>
                                        <DatePick placeholder={"Select Date"}  onChange={setDate} color={"solidPrimary"} dateFormat="MMM d, yyyy" />
                                    </div>
                                </div>
                                <div class={Styles.bgsBorder}></div>
                                <div onClick={() => { setActiveCalender(6) }} className={` ${Styles.range} ${activeCalender === 6 ? Styles.activeFive : ''}`}>
                                    {/* <Text variant={"xsText"} color={"grayPrimary"}>(optional) </Text>
                                    <div className={Styles.rangeText}>
                                        <Text variant={"xsText"} color={"grayPrimary"}> tap to select range </Text>
                                    </div> */}
                                    <div className={Styles.rangeText} >
                                        <DateRange  placeholder={"(optional)tap to select range "} /></div>
                                </div>
                            </div>
                            <div className={Styles.checkBoxTitle}>
                                <Text variant={"xxlText"} color={"white"}> Select recycling events to display </Text>
                            </div>
                            <div className={Styles.Checksection}>
                                <RadioCheckBox variant="xxxlg2checkbox" label="Pickups" color="greyPrimary" checked={'checked'} />
                                <div className={Styles.radioContent}><RadioCheckBox variant="xxxlg2checkbox" label="Drop-offs" color="greyPrimary" checked={'checked'} /></div>
                                <RadioCheckBox variant="xxxlg2checkbox" color="greyPrimary" label="Walk-ins" checked={'checked'} />
                            </div>
                        </div>

                        <div className={Styles.seletDatetext}>{valideDate}</div>


                    </div>
                </div>
            </Layout>
        </>
    )
}
