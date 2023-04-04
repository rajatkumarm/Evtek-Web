import React from "react";
// import { Heading, Icon, Text,Button,PageTitle,} from "../../../../component/shared";
import Layout from "../../../Container/Layout";
import Styles from './DropOff.module.scss';
import {
    Button,
    Label,
    Input,
    Brentwood,
    Icon,
    ArcRecycling,

Text,
    PageTitle,
    Select,
    SelectItem,
    GoogleMap,
} from "../../../../component/shared/index";
const DropOff = () => {
  
    return (
        <>
            <Layout>
                <div className={Styles.dropOff}>

                    <div className={Styles.headerMain}>
                        <PageTitle type="iconMap" pagename="Recycle" modulename="Drop-off & Walk-in" />
                    </div>
                    <div className={Styles.container}>
                        <div className={Styles.Inputsection}>
                            <Input type={"text"} className={Styles.textInput}  placeholder={"enter a zipcode or address"}/>
                            <div className={Styles.selectMain}>
                                <Select className={Styles.dropDown}>
                                    <SelectItem className={Styles.Item}>5 miles</SelectItem>
                                    <SelectItem className={Styles.Item}>5 miles</SelectItem>
                                    <SelectItem className={Styles.Item}>5 miles</SelectItem>
                                    <SelectItem className={Styles.Item}>5 miles</SelectItem>
                                </Select>
                            </div>

                            <div className={Styles.btnFiltr}>

                                <Button btnClass={Styles.btnFilter} variant="borderTertiary" size="btnMd05">
                                    <Icon type="Group" customClass={Styles.btnicon} />
                                    filter
                                </Button>

                            </div>
                        </div>
                        <div className={Styles.inputHead} >
                            <Label className={Styles.inputText} value={"Quick selection options"} />

                            <div className={Styles.btnInpt}>
                                <Button  variant="borderTertiary" size="xsm">near you </Button>
                                <Button  variant="borderTertiary" size="btnSm">near <Text className={Styles.itemText} variant={"xlText"} strong={"strong7"} color={"primary2"} > 11201</Text> </Button>

                            </div>
                        </div>
                    </div>

                    <div className={Styles.map}>
                        <GoogleMap />
                    </div>
                    <div className={Styles.location} >
                        <Label className={Styles.locationText} value={"Locations"} />
                            <Button btnClass={Styles.btnDrop} variant="borderTertiary" size="btnMd04" >Show Drop-off only </Button>
                            <Button btnClass={Styles.btnWalk} variant="borderTertiary" size="btnMd04">Show Walk-in only </Button>
                    </div>
                    <div className={Styles.Brentwood}>
                        <Brentwood/>
                    </div>
                    <div className={Styles.ArcRecycling}>
                        <ArcRecycling />
                    </div>



                </div>
            </Layout>
        </>
    );
}




export default DropOff;