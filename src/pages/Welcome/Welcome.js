import React from 'react'
import Styles from './Welcome.module.scss';
import { Modals,Text,Heading, Button, Image} from '../../component/shared/index'

const Welcome = ({btnHanler,onClick}) => {
  return (
      <Modals onClick={onClick}>
        <div className={Styles.welcome}>
          <div className={Styles.mainImg}>
            <Image src='images/evtekLogo2.png' className={Styles.logo} alt={"Logo"} />
          </div>
          <div className={Styles.main}>
            <div className={Styles.mainText}>
              <Heading headingType={"h1"}>Welcome to the <span className={Styles.appText}>Evtek</span>app!</Heading>
              <Heading headingType={"h2"} className={Styles.headsecond} >Lets get Started...</Heading>
            </div>
            <div className={Styles.text}>
              <Text className={Styles.htext} variant={"xxxlText"} color={"grayPrimary"} >this quick tutorial will introduce you to the main features and navigations </Text>
            </div>
            <div className={Styles.downText}>
              <Text className={Styles.btext} variant={"xlText"} color={"grayPrimary"}>You can access this tutorial anytime in account</Text>
            </div>
          </div>
          <div className={Styles.btn}>
          <Button btnHandler={btnHanler} size={"xmd01"} variant={ 'solidPrimary'} >Next</Button>
          </div>
        </div>
      </Modals>

  )
}
export default Welcome
