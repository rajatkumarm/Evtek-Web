import React from "react";
import Styles from "./Pickup.module.scss";
import { useState } from "react";
import moment from "moment";
import {
  Text,
  Icon,
  // CurbsidePickup,
  PageTitle,
  Legend,
  Button,
  PickupFirst,
  DateSelection,
  Heading,
  PickupList,
  // PickupNotification
} from "../../../../../component/shared";
import Layout from "../../../../Container/Layout";
import Calendar from "react-calendar";
import PickupForm from "../PickupForm";
import { useHistory } from "react-router-dom";
const Pickup = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [showSelectedDate, setShowSelectedDate] = useState(false);
  const [hidePickup, setHidePickup] = useState(true);
  const [hideGuaranteebox, setHideGuaranteebox] = useState(true);
  const [showPickupForm, setShowPickupForm] = useState(false);
  const [showPickupHeading, setShowPickupHeading] = useState(false);
  const [showCanyouRecycle, setShowCanyouRecycle] = useState(false);
  const [showCurbsideTab, setShowCurbsideTab] = useState(false);
  const history = useHistory();
  const gotoWhatcanyouRecycle = () => {
    history.push('./whatcan-recycle');
  }
  console.log(date);

  let valideDate;

  if (moment(date).isBefore(new Date())) {

    if (
      moment(moment(date).format("L")).isSame(moment(new Date()).format("L"))
    )
    // on Active calender date start
    {
      valideDate = (
        <div>
          <Text
            className={Styles.dateText}
            variant="xxlText"
            strong="strong5"
            color={"grayPrimary"}
          >
            Please select a date using the calendar above
          </Text>
          <PickupFirst />
        </div>
      );
    }
    // on Active calender date start
    //  on Active date click calendar schedule start
    else {
      valideDate = (
        <Text
          className={Styles.dateText}
          variant="xxlText"
          color={"redPrimary"}
        >
          Pickups must be scheduled more than 24 hrs in advance
        </Text>
      );
    }
    //  on Active date calendar schedule end 
    //  yellow highlight calendor schedule start

  }
  //  else {
  //   valideDate = (
  //     <div>
  //       <Text className={Styles.dateText} variant="xxlText" strong="strong5">
  //         Pickup scheduled
  //       </Text>
  //       <CurbsidePickup />
  //     </div>
  //   );
  // }
  // on Blue-Highlight Date schedule bulk pickup

  // else {
  //   valideDate = (
  //     <div>
  //       <Text className={Styles.dateText} variant="xxlText" strong="strong5">
  //         Pickup scheduled
  //       </Text>
  //       <PickupNotification />
  //     </div>
  //   );
  // }

  // on Blue-Highlight Date schedule bulk end
  //  yellow highlight calendor schedule end

  //  GreenDot schedule start
  else {
    valideDate = (
      <div>
        {hidePickup &&
          <div>
            <Text className={Styles.dateText} variant="xxlText" strong="strong5">
              No Pickups are scheduled for the selected date
            </Text>
            <div className={Styles.mainBtn}>
              <Button btnHandler={() => { setShowSelectedDate(true); setHidePickup(false) }} btnClass={Styles.editBtn} variant="solidPrimary" size={"btnMd02"}>New Pickup</Button>
            </div>
          </div>}
        {showSelectedDate &&
          <div>
            <Text className={Styles.dateText} color="greenPrimary" variant="xxlText" strong="strong5">
              You have selected the date <Text variant={"xxlText"} strong="strong7" color={"greenPrimary"} > Jun 18th, 2021</Text>
            </Text>
            <div className={Styles.mainBtn}>
              <Button btnClass={Styles.editBtn} btnHandler={() => { setShowPickupHeading(true); setShowPickupForm(true); setShowCanyouRecycle(true); setShowSelectedDate(false); setHideGuaranteebox(false) }} variant="solidPrimary" size={"btnMd02"}>Continue</Button>
              <div>
                <Button btnHandler={() => { setShowSelectedDate(false); setHidePickup(true) }} variant="pinkSm" size={"btnMd02"}>cancel</Button>
              </div>
            </div>
          </div>}
        {showCanyouRecycle &&
          <div>
            <DateSelection text={"June 18th, 2021 [Thursday]"} />
            <div className={Styles.recycleTextMain} onClick={gotoWhatcanyouRecycle}>
              <Icon type="iconi" customClass={Styles.iconInfo} />
              <Text className={Styles.recycleText} color={"greenPrimary"} variant="smText" family="raleway" strong="strong5" >What can you recycle?
              </Text>
              <Icon type="iconFill" customClass={Styles.iconInfo} />
            </div>
          </div>
        }
        {showCurbsideTab &&

          <div>
            <Text
              className={Styles.dateText}
              variant="xxlText"
              strong="strong5"
              color={"grayPrimary"}
            >
              Pickup Scheduled
            </Text>
            <PickupList />
          </div>
        }
      </div>
    );
  }

  const mark = ["Tu"];
  const markBlue = ["Wed"];
  const markGreen = ["Thursday"]

  return (
    <Layout>
      <div className={Styles.Wrapper}>
        <div className={Styles.Action}>
          <PageTitle type="iconlocation" pagename="Recycle" modulename="Pickup" />
          {showPickupHeading &&
            <div className={Styles.pickupHeading}>
              <Heading headingType={"h5"} strong={"strong7"}> Pickup Form</Heading>
              <Text variant={"xxlText"} className={Styles.countOne}>Please fill out the form below to schedule a Pickup</Text>
            </div>}
        </div>
        <div className={Styles.contentMain}>
          <div>
            <div className={Styles.calenderMain}>
              <div className={Styles.StyleCalendar}>
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
              {hideGuaranteebox &&
                <div className={Styles.successBox}>
                  <div className={Styles.successIcon}>
                    <Icon className={Styles.pickupBox} type={"iconVector5"} />
                  </div>
                  <Text
                    color={"primary2"}
                    variant="xsText"
                    className={Styles.itemText}
                  >
                    100% of your items are recycled, guaranteed
                  </Text>
                </div>}
            </div>
            <div className={Styles.legendSee}>
              {show && (
                <div className={Styles.legendMain}><Legend onCLick={() => setShow(false)} /></div>)}
              <div className={Styles.legendText} onClick={() => setShow(!show)}>
                <Text variant={"smText"} strong="strong6" family="raleway" color={"greenPrimary"}>See Legend</Text>
              </div>
            </div>
            <div className={Styles.seletDatetext}>{valideDate}</div>
          </div>
          <div>
            {showPickupForm &&
              <PickupForm onContniueClick={() => setShowPickupHeading(false)} onhandleClick={() => { setShowCurbsideTab(true); setShowCanyouRecycle(false); setShowPickupForm(false) }} />
            }
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pickup;
