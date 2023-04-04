import React from 'react'
import Styles from './Congratulation.module.scss';
import {Modals,Text,Button,Heading,Alert,Image} from '../../component/shared/index'

const Congratulation = () => {
  return (
    <Modals isIcon={false}>
      <div className={Styles.congrats}>
        <div className={Styles.logo}>
          <Image src='images/evtekLogo.png' alt={"Logo"} />
        </div>
        <div className={Styles.LoginBox}>
        <Heading className={Styles.headText}  variant="xx4Text" headingType={"h4"}>Congratulations!</Heading>
        
     
        <Text className={Styles.Text} variant="xxlText">
        You are now an Evtek member
          </Text>
        </div>
        <div className={Styles.Alert}>
            <Alert className={"alert"} type={"checkCircle"} para={"Walk-in Service Available"} />
            <Alert className={"alert"} type={"checkCircle"} para={"Drop-off Service Available"} />
            <Alert className={"alert"} type={"checkCircle"} para={"Bulk Pickup Service Available"} />
            <Alert className={"alert"} type={"checkCircle"} para={"Bulk Pickup Service Available"} />
          </div>
        <div className={Styles.btn}>
        <Button size={"xmd01"} variant={ 'solidPrimary'} >Done</Button>
        </div>
       
      </div>
    </Modals>
  )
}

export default Congratulation
