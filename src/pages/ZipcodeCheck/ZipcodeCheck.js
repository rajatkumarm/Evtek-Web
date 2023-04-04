import React from 'react'
import Styles from './ZipcodeCheck.module.scss';
import {
  Modals,Text,Alert,Button, Heading, Image} from '../../component/shared/index'
import { useHistory } from 'react-router-dom';

const ZipcodeCheck = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/zipcode-check')
  }
  return (
    <Modals>
    <div className={Styles.ZipcodeCheck}>
      <div className={Styles.headOne}>
          <Image src='images/evtekLogo2.png' className={Styles.logo} alt={"Logo"} />
        <div className={Styles.test}>
          <Heading headingType={"h4"}  className={Styles.head} >ZipCode Check</Heading>
        </div>
      </div>
        <div className={Styles.zipMain}>
          <div className={Styles.zip}>
            <Text className={Styles.accountText} children={"11201"} />
          </div>
          <div className={Styles.mainText}>
          <Text  className={Styles.LoginText} >Good news! You are located in our service area!</Text>
            </div>
          <div className={Styles.Alert}>
            <Alert className={"alert"} type={"checkCircle"} para={"Walk-in Service Available"} />
            <Alert className={"alert"} type={"checkCircle"} para={"Drop-off Service Available"} />
            <Alert className={"alert"} type={"checkCircle"} para={"Bulk Pickup Service Available"} />
            <Alert className={"alert"} type={"checkCircle"} para={"Bulk Pickup Service Available"} />
          </div>
          <div className={Styles.btn}>
            <Button size={"md"} btnHandler={handleClick} variant={ 'solidPrimary'} >Create Evtek Account</Button>
          </div>
        </div>
    </div>
    </Modals>







  )
}











export default ZipcodeCheck
