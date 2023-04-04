import React from 'react'
import Styles from './ZipCheckSec.module.scss';
import { Modals, Text, Alert, Button, Heading, Image } from '../../component/shared/index'
import { useHistory } from 'react-router-dom';

const ZipCheckSec = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/receive-service');
  }
  return (
    <Modals>
      <div className={Styles.ZipcodeCheck}>
        <div className={Styles.headOne}>
          <Image src='images/evtekLogo2.png' className={Styles.logo} alt={"Logo"} />
          <Heading headingType={"h4"} className={Styles.head} >ZipCode Check</Heading>
        </div>

        <div className={Styles.zipMain}>
          <div className={Styles.zip}>
            <Text className={Styles.accountText} variant="lgText" strong="strong6" >11201</Text>
          </div>

          <div className={Styles.mainText}>
            <Text className={Styles.LoginText} >Unfortunately, we do not offer Pickup services in your area (yet!)</Text>
          </div>

          <div className={Styles.Alert}>
            <Alert className={"alert"} type={"checkCircle"} para={"Walk-in Service Available"} />
            <Alert className={"alert"} type={"checkCircle"} para={"Drop-off Service Available"} />
            <Alert variant={"disable"} type={"checkCircle"} para={"Bulk Pickup Service Available"} />
            <Alert variant={"disable"} type={"checkCircle"} para={"Bulk Pickup Service Available"} />
          </div>
          <div className={Styles.success}>
            <Alert variant={"enable"} className={"success"} type={"iconi"} heading={"OR"} paraFirst={"You can still make an account to use Walk-In and Drop-Off Services"}
              paraSecond={"Receive Pickup Service updates only? We’ll let you know when we are in your neighborhood!"} />
          </div>

          <div className={Styles.btn}>
              <Button size={"lg"} variant={'solidPrimary'} >Create Evtek Account</Button>
            <div className={Styles.disableBtn}>
              <Button size={"lg"} btnHandler={handleClick} variant={'primaryDisable'}  >Receive Pickup Service Updates</Button>
            </div>
          </div>
        </div>
      </div>
    </Modals>







  )
}











export default ZipCheckSec
