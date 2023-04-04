import React from 'react'
// import Styles from './CouponDetails.module.scss';
import { Coupon, PageTitle} from '../../../component/shared'
import Layout from '../../Container/Layout';

const CouponDetails = () => {
  return (
    <Layout>
      <PageTitle modulename={"Coupon Details"} pagename={"Wallet"} type="iconchevron" />
      <Coupon src={"images/couponTwo.png"} headingText={"Aunt Lolita’s Bakery"} textOne={"50% any item of value $20 or under"} headingTwo={"expiring 9/15/2021"} />
    </Layout>
  )
}

export default CouponDetails
