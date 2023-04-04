import React from "react";
import Styles from "./StyleGuide.module.scss";
import { useState } from "react";
import {

  Button,
  Image,
  Alert,
  Checkbox,
  Heading,
  Text,
  Label,
  Radio,
  Input,
  Filter,
  Icon,
  PageTitle,
  ListGroup,
  ListItem,
  CurbsidePickup,
  Calender,
  ProgressBar,
  PickupNotification,
  ProfileLeaderBoard,
  ProgressTab,
  PickupScheduled,
  PickupSecond,
  OtherLeaderBoard,
  EvtekLeaderBoard,
  Coupon,
  TransferCash,
  ProgressList,
  Card,
  LeaderList,
  Addcart,
  CartList,
  FormData,
  ModelsList,
  RadioCheckBox,
  PickupList,
  CancleBox,
  MetricsList,
  ListBox,
  DateSelection,
  DateRange,
  Brentwood


} from "../../component/shared";

import AccountBox from "../../component/shared/AccountBox/AccountBox";
import Layout from "../Container/Layout";
import SliderCard from "../../component/shared/SliderCard";



const StyleGuide = () => {
  const [show, setShowInfo] = useState(false);
  const [value, setValue] = React.useState(false);
  const [showEcopoint, setShowEcopoint] = useState(false)
  const [showHide, setShowHide] = useState(false);

  const handleChange = () => {
    setValue(!value);
  };

  const showInfo = () => {
    setShowEcopoint(!showEcopoint)
    setShowHide(false)
  }
  const hideInfo = () => {
    setShowEcopoint(false)
    setShowHide(!showHide)
  }

  return (
    <Layout>
      <PageTitle modulename={"Style Guide"} type={"iconchevron"} />
      <div className={Styles.wrapper}>
        <div className={Styles.btnSection}>
          <Button size="sm" variant="solidPrimary">
            Continue
          </Button>
          <Button size="md" variant="solidPrimary">
            Create Evtek Account
          </Button>
          <Button size="lg" variant="solidPrimary">
            Create Evtek Account
          </Button>
          <Button size="lg" variant="solidSecondary">
            Create Evtek Account
          </Button>
          <Button size="lg" variant="secondaryDisable">
            Create Evtek Account
          </Button>
          <Button size="lg" variant="solidTertiary">
            Create Evtek Account
          </Button>
          <Button size="lg" variant="teritaryDanger">
            Create Evtek Account
          </Button>
          <Button size="lg" variant="bluePrimary">
            Create Evtek Account
          </Button>
          <div className={Styles.btnBottom}>
            <Button size="lg" variant="teritaryGreen">
              Create Evtek Account
            </Button>
            <Button size="lg" variant="solidPrimary">
              Create Evtek Account
            </Button>
            <Button size="lg" variant="solidSecondary">
              Create Evtek Account
            </Button>
            <Button size="lg" variant="secondaryDisable">
              Create Evtek Account
            </Button>
            <Button size="lg" variant="solidTertiary">
              Create Evtek Account
            </Button>
            <Button size="lg" variant="teritaryDanger">
              Create Evtek Account
            </Button>
            <div className={Styles.btnBottom}>
              <Button size="lg" variant="teritaryGreen">
                Create Evtek Account
              </Button>
            </div>
            <div className={Styles.btnBottom}>
              <Button size="lg" variant="default">
                Create Evtek Account
              </Button>
            </div>
          </div>
          <div className={Styles.Checksection}>
            <Checkbox id="check" label='Evtek' />
          </div>

          <div className={Styles.alertSection}>
            <div className={Styles.Alert}>
              <Alert
                className={"alert"}
                type={"checkCircle"}
                para={"Walk-in Service Available"}
              />
              <Alert
                className={"alert"}
                type={"checkCircle"}
                para={"Drop-off Service Available"}
              />
              <Alert
                className={"alert"}
                type={"checkCircle"}
                para={"Bulk Pickup Service Available"}
              />
              <Alert
                className={"alert"}
                type={"checkCircle"}
                para={"Bulk Pickup Service Available"}
              />
            </div>
            <div className={Styles.Alert}>
              <Alert
                className={"alert"}
                type={"checkCircle"}
                para={"Walk-in Service Available"}
              />
              <Alert
                className={"alert"}
                type={"checkCircle"}
                para={"Drop-off Service Available"}
              />
              <Alert
                variant={"disable"}
                type={"checkCircle"}
                para={"Bulk Pickup Service Available"}
              />
              <Alert
                variant={"disable"}
                type={"checkCircle"}
                para={"Bulk Pickup Service Available"}
              />
            </div>
          </div>
          <div className={Styles.alertBtm}>
            <div className={Styles.success}>
              <Alert
                variant={"enable"}
                className={"success"}
                type={"checkCircle"}
                heading={"OR"}
                paraFirst={
                  "You can still make an account to use Walk-In and Drop-Off Services"
                }
                paraSecond={
                  "Receive Pickup Service updates only? We’ll let you know when we are in your neighborhood!"
                }
              />
            </div>
            <div className={Styles.success}>
              <Alert
                variant={"enable"}
                className={"success"}
                type={"checkCircle"}
                heading={"All Done!"}
                paraSecond={
                  "We'll let you know when Pickups are available in your neighborhood! You can let the now exit the app"
                }
              />
            </div>
            <div className={Styles.successAlert}>
              <Alert
                variant={"enable"}
                className={"success"}
                para={"Your password has been successfully changed"}
              />
            </div>
          </div>
          <div className={Styles.textBtm}>
            <div>
              <Text>Login with your email and password</Text>
            </div>
            <div>
              <Text className={Styles.Text} color={"secondary"}>
                Login with your email and password
              </Text>
            </div>
            <div>
              <Text color={"tertiary"}>Login with your email and password</Text>
            </div>
            <div>
              <Text color={"primary2"}>Login with your email and password</Text>
            </div>
            <Text color={"secondary2"}>Login with your email and password</Text>
          </div>
          <div className={Styles.headingMain}>
            <Heading
              className={Styles.headingWhite}
              color={"secondary"}
              headingType={"h1"}
            >
              Password Reset
            </Heading>
            <Heading color={"tertiary"} headingType={"h2"}>
              Password Reset
            </Heading>
            <Heading color={"primary2"} headingType={"h3"}>
              Password Reset
            </Heading>
            <Heading>Password Reset</Heading>
            <Heading color={"secondary2"} headingType={"h5"}>
              Password Reset
            </Heading>
            <Heading headingType={"h6"}>Password Reset</Heading>
          </div>
          <div className={Styles.labelMain}>
            <div>
              <Label value={"LABEL"} />
            </div>
          </div>
          <div className={Styles.radioBtn}>
            <Radio variant={"radioBtnTWo"} id="radio" value="Evtek’s" />
            <Radio variant={"radioBtnTWo"} id="radio1" value="Evtek’s" />
          </div>
          <div className={Styles.inputMain}>
            <Input />
          </div>
          <div className={Styles.pageTitle} >
            <PageTitle type={"iconXMLID"} pagename={"Wallet"} modulename={"Transfer Funds"} />
          </div>
          <div className={Styles.successBox}>
            <Icon className={Styles.pickupBox} type={"chevronDown"} />
            <Icon className={Styles.pickupBox} type={"checkCircle"} />
            <Text color={"primary2"} variant="xsText">
              100% of your items are recycled, guaranteed
            </Text>
          </div>
          <div className={Styles.seletDatetext}>
            <Text className={Styles.dateText} variant="xxl">
              Please select a date using the calendar above
            </Text>
          </div>
          <div className={Styles.scheduledError}>
            <Text className={Styles.errorText} variant="xxl">
              Pickups must be scheduled more than 24 hrs in advance
            </Text>
          </div>

          <div>
          </div>
          <div className={Styles.List}>
            <ListGroup>
              <ListItem>List</ListItem>
              <ListItem>List</ListItem>
              <ListItem>List</ListItem>
              <ListItem>List</ListItem>
            </ListGroup>
          </div>
          <div className={Styles.filter}>
            <Filter />
          </div>
          <div className={Styles.ProgressBar}>
            <ProgressBar bgcolor="white" progress='60' height={18} />
          </div>
        </div>
        <div>
        </div>
        <Icon type='star' />
      </div>
      <div className={Styles.pickupAlert}>
        <div className={Styles.fisrtIcon}>
          <Icon className={Styles.pickupBox} type={"iconi"} />
        </div>
        <Text className={Styles.textAlert} variant="xxl" color={"secondary"} handleClick={() => setShowInfo(!show)}>
          First Pickup? Tap to learn more
        </Text>
      </div>
      {show && (
        <div className={Styles.main}>
          <div className={Styles.icons}>
            <div className={Styles.iconFirst}>
              <Icon type={"iconi"} />
            </div>
            <div className={Styles.iconSecond}>
              <Icon type={"iconclose"} />
            </div>
          </div>
          <div className={Styles.feelContent}>
            <Text variant="xlText" color="primary">  Feel free to use standard clear recycling bags for your first pickup
              (remember to separate aluminum and plastic into different bags).
              Glass bottles must be boxed in the original 24-pack case it was purchased in.
              Evtek will deliver 10 complementary EcoSacks (recyclable bags) for future pickups.
              Additional supplies can be purchased in the <span className={Styles.shopHead}>Shop.</span></Text>
          </div>
          <div className={Styles.bottomBorder}></div>
          <div className={Styles.firstText}>
            <Text variant="xxlText" color="greenPrimary">What can you recycle?</Text>
            <div className={Styles.iconColor}>
              <Icon type={"iconFill"} />
            </div>
          </div>
          <div className={Styles.secondText}>
            <Text variant="xxlText" color="greenPrimary">How to prepare for a Pickup</Text>
            <div className={Styles.iconColor}>
              <Icon type={"iconFill"} />
            </div>
          </div>
        </div>)}
      <Calender />
      <div className={Styles.FirstDiv}>
        <div className={Styles.AccountBox}>
          <AccountBox
            count={"1"}
            heading={"Order EcoSupplies"}
            para={" EcoSupplies allow Evtek to easily, quickly, and safely pickup your recyclables. Choose from multiple types of bags and receptacles depending on the amount and type of items you are recycling."}
            src='images/VectorImage.svg' imageClass={Styles.firstImage} />
        </div>
        <div className={Styles.AccountBox}>
          <AccountBox
            count={"2"}
            heading={"Collect Items"}
            para={"Only New York State redemption containers are accepted. Visit the “What can you recycle?” tab to see a helpful list of items."}
            src='images/containers.svg' imageClass={Styles.mainImage} />
        </div>
        <div className={Styles.AccountBox}>
          <AccountBox
            count={"3"}
            heading={"Sort Items"}
            para={"Plastic and Aluminum containers must be placed in separate EcoSacks. Glass items must be placed in EcoKrates."}
            src='images/sortImage.svg' imageClass={Styles.thirdImage} />
        </div>
      </div>

      <div className={Styles.mainTwo} >
        <div className={Styles.AccountBox}>
          <AccountBox
            count={"4"}
            heading={"Schedule Pickup"}
            para={"Schedule a Pickup using our convenient calendar tool. Be sure to place your items in a specified location so that our drivers can pick them up. You can also drop off your recyclables at one of our designated Drop-off locations."}
            src='images/pathImage.svg' imageClass={Styles.fourthImage} />
        </div>
        <div className={Styles.AccountBox}>
          <AccountBox
            count={"5"}
            heading={"Get Paid!"}
            para={" The redemption value of your containers can be donated to local non-profit organizations or added to your cash balance. Choose to redeem your balance through PayPal or directly through your bank."}
            src='images/getImage.svg' imageClass={Styles.fifthImage} />
        </div>
      </div>
      <div className={Styles.coupon}>
        <Coupon src={"images/couponTwo.png"} headingText={"Aunt Lolita’s Bakery"} textOne={"50% any item of value $20 or under"} headingTwo={"expiring 9/15/2021"} />
      </div>

      <div className={Styles.leaderBox}>
        <OtherLeaderBoard src='images/Rectangle.svg'
          heading={"Sunday Hikes"} para={"Position: #5 of 6"} type={"iconalert"} paraSecond={"ends soon"}
          iconClass={Styles.iconClass} />
      </div>
      <div className={Styles.leaderBox}>
        <OtherLeaderBoard src='images/Rectangle.svg'
          heading={"Sunday Hikes"} para={"Position: #5 of 6"}
          iconClass={Styles.iconClass} />
      </div>

      <ProfileLeaderBoard type={"iconarrowdrop"} para={"Daniel"} src='images/ellipse.svg' number={"1"} text={"702 items"} />
      {/* <div className={Styles.leaderBox}>
        <OtherLeaderBoard src='images/Rectangle.svg'
          heading={"Sunday Hikes"} para={"Position: #5 of 6"} type={"checkCircle"} paraSecond={"ends soon"}
          iconClass={Styles.iconClass} />
      </div> */}
      <div className={Styles.subBox}>
        <div className={Styles.EvtekleaderBox}>
          <EvtekLeaderBoard src='images/groupImage.svg'
            heading={"Orange Paper Cup"} para={"Position # 22 of 50"} textTwo={"+0.25x Ecopoint Multiplier"}
            textThird={"Status:"} textFourth={"advancing to next league "} type={"iconFill"} />
        </div>
        <div>
          <LeaderList src='images/Rectangles.png' heading={"Boyscouts"} para={"12 members • 1 month period duration"}
            textTwo={"Reward: Membership fee pool"} textThird={"Current period ending 8.15.2021"}
            textFourth={"Membership fee "} textFifth={" 500 EcoPoints"} type={"iconarrowdrop"} />
        </div>
      </div>
      <div>
        <ProgressTab tabHead={"Impact Badges"} srcImage='images/Bulb.svg'></ProgressTab>
      </div>
      <div className={Styles.transferCash}>
        <TransferCash textChild={"30.28"}>
          <div className={Styles.transferringMain}>
            <div className={Styles.transferring}>
              <Text strong={"strong6"} variant={"xxlText"} >Confirmation</Text>
            </div>
            <div className={Styles.confirmation}>
              <Text>$30.28 successfully transferred</Text>
            </div>
            <div className={Styles.transferAmount}>
              <Text variant={"xxlText"} >Email confirmation sent to</Text>
            </div>
            <Text family={"raleway"} strong={"strong7"} variant={"xxlText"} >samdavid12@gmail.com</Text>
            <div className={Styles.walletBtn}>
              <Button size="md" variant="primaryDisable">Done</Button>
            </div>
          </div>
        </TransferCash>
      </div>
      <ProgressList type={"iconarrowdrop"} para={"Daniel"} src='images/ellipse.svg' number={"1"} text={"702 items"} />

      <div className={Styles.shop}>
        <Card greyText={"8 oz."} src={"images/garbageBag.png"} cardHead="EcoSack" cardText={"13 gallon"} cardDisableBtn="10.00" />
      </div>
      <div className={Styles.addCart}>
        <Addcart src={"images/ecokrate.png"} iconClass={Styles.icoInformation} type="iconi" para={"instructions for use"} heading={"EcoKrate"} textTwo={"25 gallon"} textThree={"$20.00"} textFour={"1500"} textFive={"The EcoKrate is a pop-up recycling style unit that is reusable and will hold over 100 items "} textSix={" . All membership types "} textSeven={". Embedded Evtek tag"} />
        <div className={Styles.cartItems}>
          <div className={Styles.cartOne}>
            <CartList number="x 1" src="images/EcoSack.png" text="EcoSack"
              textTwo="13 gallon" textThird="$10.00" textFour="750 EcoPoints" />
          </div>
          <div className={Styles.cartTwo}>
            <CartList number="x 2" src="images/EcoKrate.png" text="EcoSack"
              textTwo="13 gallon" textThird="$10.00" textFour="750 EcoPoints" />
          </div>
        </div>
        <div className={Styles.shopSlider}>
          <SliderCard src="images/bathTissue.png" cardText="Bath Tissue (24 pk)" />
          <SliderCard src="images/seaweed.png" cardText="Bath Tissue (24 pk)" />
          <SliderCard src="images/peppermint.png" cardText="Bath Tissue (24 pk)" />
          <SliderCard src="images/peppermint.png" cardText="Bath Tissue (24 pk)" />
        </div>
      </div>
      <form className={Styles.formData}>
        <form>
          <FormData textVariant="lgText" textVariantTwo="mdText" textColor="grayPrimary" heading="Leaderboard Type" text="Open Leaderboard" textSecond="(open to all, no member limit)" htmlfor="radioOne" id="radioOne" />
          <FormData textVariant="lgText" textVariantTwo="mdText" textColor="grayPrimary" text="Private Leaderboard " textSecond="(invite needed to join, member cap)" htmlfor="radioTwo" id="radioTwo" />
        </form>
        <form>
          <FormData heading="Leaderboard time period" textVariant="lgText" label="2 weeks" id="radioThree" />
          <FormData textVariant="lgText" label="1 Month" id="radieFour" />
          <FormData textVariant="lgText" label="3 Months" id="radioFive" />
          <FormData textVariant="lgText" label="4 Months" id="radioSix" />
        </form>
        <form>
          <FormData heading="Leaderboard Reward" textVariant="lgText" label="Membership fee EcoPoint pool" id="radioSeven" />
          <FormData textVariant="lgText" label="Individual cash deposit" id="radioEighth" />
          <FormData textVariant="lgText" label="Shared cash deposit" id="radioNine" />
        </form>
        <form>
          <FormData heading="Number of winners" textVariant="lgText" label="First Position" id="radioTen" />
          <FormData textVariant="lgText" label="Top three" id="radioZero" />
          <FormData textVariant="lgText" label="Top Ten" id="radioZeroOne" />
        </form>
      </form>
      <div>
        <ModelsList heading="Other Leaderboards" type="iconi" textColor="greenPrimary" typeTwo="iconclose" text="Evtek randomly selects 50 members to compete in each monthly leaderboard. Positions are based on the number of items recycled. The top 10 advance to the next league and the last one returns to the previous league. Higher leagues give you a higher EcoPoint multiplier!" textSecond="Learn More" />
      </div>
      <RadioCheckBox variant="xlgcheckbox" />
      {/* <PickupFirst/> */}

      <div className={Styles.mainPickup}>

        <div>
          <Heading>Pickup Component:</Heading>
          <div >
            <PickupNotification />
          </div>
          <div>
            <PickupList />
          </div>
          <div>
          </div>
          <CurbsidePickup />
        </div>
        <div className={Styles.PickupBoxTwo} >
          <div>
            <PickupScheduled />
          </div>
          <div>
            <PickupSecond />
          </div>
        </div>
      </div>
      <div className={Styles.ecoPointsMultiplier}>
        <div className={Styles.multiplierBox}>
          <div className={Styles.headingText}>
            <Text className={Styles.headText} color={"secondary"}>Evtek Leaderboard</Text>
            <Icon customClass={Styles.icoBox} type="iconclose" />
          </div>
          <div className={Styles.multiplierChart}>
            <Image src='images/EcoPointsMultiplier.png' alt='Logo' />
          </div>
          <div className={Styles.contentBox}>
            <Text variant={"xxxlText"} color={"secondary"}>You have a 1.8x EcoPoints Multiplier!</Text>
            <div>
              <Text variant={"lgText"} color={"secondary"}>You are earning 80% more EcoPoints every time you recycle</Text>
            </div>
            <div className={Styles.streaksBox}>
              <div className={Styles.streakBoxOne}>
                <Image src='images/LeafMultiplier.svg' alt='Logo' />
                <Text variant={"xxxlText"} strong="strong9" color={"orangePrimary"}>3 mo streak</Text>
              </div>
              <Text variant={"xxxlText"} color={"secondary"}>+ 0.5x multiplier</Text>
            </div>
            <div className={Styles.streaksBox}>
              <div className={Styles.streakBoxOne}>
                <Image src='images/OrangMultiplier.svg' alt='Logo' />
                <Text variant={"mdText"} strong="strong9" color={"secondary2"}>Orange Coffee Cup League</Text>
              </div>
              <Text variant={"xxxlText"} color={"secondary"}>+ 0.5x multiplier</Text>
            </div>
          </div>
          <div className={Styles.aboutEcoPoints} onClick={showInfo}>
            <Icon customClass={Styles.icoBox} type={showEcopoint ? "chevronDown" : "iconFill"} />
            <Text className={Styles.textUnderline} variant={"lgText"} color={"secondary"}>About EcoPoints</Text>
          </div>
          {showEcopoint && (
            <div className={Styles.aboutContent} >
              <Text variant={"lgText"} color={"secondary"}>You automatically earn EcoPoints whenever you recycle! Each dollar you earn from recycling also earns you 1 EcoPoint as well</Text>
              <div className={Styles.paraText}>
                <Text variant={"lgText"} color={"secondary"}>EcoPoints can be used in the shop where they are worth 1.5x their cash value. They can also be donated or traded in for cash (100 EcoPoints = $1)</Text>
              </div>
            </div>
          )}
          <div className={Styles.increaseEcoPoints} onClick={hideInfo}>
            <Icon customClass={Styles.icoBox} type={showHide ? "chevronDown" : "iconFill"} />
            <Text className={Styles.textUnderline} variant={"lgText"} color={"secondary"}>How to increase your EcoPoints Multiplier</Text>
          </div>
          {showHide && (
            <div className={Styles.increaseEcoContent}>
              <Text variant={"lgText"} color={"secondary"}>You can increase your multipler in two ways:</Text>
              <div className={Styles.contentOne}>
                <Image src='images/Leaderboard.svg' alt='Logo' />
                <div>
                  <div><Text variant={"lgText"} color={"secondary"}>by recycling more items</Text></div>
                  <Text variant={"lgText"} color={"secondary"}>Your rank on the Evtek Leaderboard is determined by the total number of recycled items. More items means higher leagues that give you higher multipliers!</Text>
                </div>
              </div>
              <div className={Styles.contentOne}>
                <Image src='images/LeafBw.svg' alt='Logo' />
                <div>
                  <div><Text variant={"lgText"} color={"secondary"}>by recycling more frequently</Text></div>
                  <Text variant={"lgText"} color={"secondary"}> recycle at least once a month for 3 consecutive months to increase your multiplier by 0.5x multiplier. Every 3-month streak increases your multiplier by +0.5x</Text>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={Styles.canclePickup}>
        <div className={Styles.mainBox}>
          <div className={Styles.headingBox}>
            <div className={Styles.cnfHeading} >
              <Heading>Reschedule Pickup</Heading>
            </div>
            <div className={Styles.confirmText}>
              <Text>Are you sure? This selection can only be changed until 24 hours before your scheduled Pickup.</Text>
            </div>
            <div className={Styles.confirmText}>
              <Text>Please select a </Text>
              <Text strong="strong7">date</Text>
              <div>
                <Text>If none of these dates suit you, please delete and reschedule the Pickup</Text>
              </div>
            </div>
            <form>
              <div className={Styles.radioFirst}>
                <Radio size={"lgRadio"} id={"radioTwo"} checked={value} onChange={handleChange} className={Styles.radioOne} label={"March 12, 2021 (Tuesday)"} />
              </div>
              <div className={Styles.radioFirst}>
                <Radio size={"lgRadio"} id={"radioTwo"} className={Styles.radioOne} label={"March 16, 2021 (Saturday)"} />
              </div>
              <div className={Styles.radioFirst}>
                <Radio size={"lgRadio"} id={"radioTwo"} className={Styles.radioOne} label={"March 20, 2021 (Wednesday)"} />
              </div>
            </form>

            <div>
              <div>
                <div className={Styles.confirmText}>
                  <Text>Please select a </Text>
                  <Text strong="strong7">time</Text>
                </div>
                <form className={Styles.radioFirst}>
                  <div className={Styles.radioFirst}>
                    <Radio size={"lgRadio"} disabled={value ? false : true} id={"radioTwo"} className={Styles.radioOne} label={"Morning (8 am - 12 pm)"} />
                  </div>
                  <div className={Styles.radioFirst}>
                    <Radio size={"lgRadio"} disabled={value ? false : true} id={"radiothree"} className={Styles.radioOne} label={"Afternoon (12 pm - 6 pm)"} />
                  </div>
                  <div className={Styles.radioFirst}>
                    <Radio size={"lgRadio"} disabled={value ? false : true} id={"radioFour"} className={Styles.radioOne} label={"Night (6 pm - 12 am)"} />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={Styles.mainBtn}>
            <Button size="pinkLg" color="pinkPrimary">Cancel</Button>
            <div className={Styles.cnfBtn}>
              <Button size="solidPrimaryLg" color="solidPrimary">Confirm</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.cancleSecBox}>
        <div>
          <CancleBox btnName="Continue " btnSize="solidPrimaryLg2" heading="Cancel a recurring Pickup " textOne="Are you sure you want to delete this recurring Pickup series?  " />
        </div>
        <div>
          <CancleBox btnName="Confirm" btnSize="solidPrimaryLg" heading="Confirm Pickup " textOne="You will not be able to edit this appointment after confirming it. " />
        </div>
      </div>
      <div className={Styles.cancleSecBox}>
        <div>
          <CancleBox btnName="Skip Pickup" btnSize="solidPrimaryLg2" heading="Skip this recurring Pickup " textOne="Are you sure you want to skip this week’s recurring Pickup? Your next recurring Pickup will be on 6.16.2021  " />
        </div>
        <div>
          <CancleBox heading="Cancel Pickup" btnSize="solidPrimaryLg" textOne="Are you sure? This action can not be reversed. " btnName="Continue" />
        </div>
      </div>
      <ModelsList textColor="greenPrimary" typeTwo="iconclose" para="Confirm by clicking the link in the email or SMS that will be sent to you 24 hours before the scheduled Pickup time"
        paraSecond=" (or by visiting the Pickup section of app within 24 hours of your pickup)."
        paraThird="*Pickups cannot be confirmed earlier than 24 hours before your appointment." />

      <MetricsList />

      <ListBox />
     
         
        <DateSelection />
   <DateRange/>
   <Brentwood/>

    </Layout>
  )
};

export default StyleGuide;
