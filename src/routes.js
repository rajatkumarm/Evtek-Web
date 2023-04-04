import {
  StyleGuide,
  ContaminationTracker,
  Contaminationdate,
  Contaminationfeedback,
  TranferFund,
  DonateFund,
  RedeemEcoPoint,
  PickupForm,
  Wallet,
  Pickup,
  FeedBack,
  WebApp,
  Setting,
  RecycleActivity,
  CouponDetails,
  WaystoEarn,
  AccountType,
  ImpactBadges,
  DropOff,
  Welcome,
  Metrics,
  Layout,
  Preferences,
  ChooseCharity,
  About,
  Invite,
  Account,
  ProgressHome,
  Home,
  Notification,
  Webapprecycle,
  WebappEvtek,
  Settingradio,
  AboutAccount,
  WhatCanRecycle,
  ProgressLeaderboard,
  Leaderboards,
  RecycleLeaderboard,
  Carbon,
  Reduction,
  OpenLeaderboard,
  ShopHome,
  ReviewOrder,
  Cart,
  CreateLeaderboard,
  JoinLeaderboard,
  OrderHistory,
  Guaranteed,
  PrivateLeaderBoard,
  Tutorial,
  Workleader,
  SureDonate,
  ResetPassword,
  CreateAccount,
  AccountDetail,
  AddressDetail
  
  

} from './pages'
import { Step1, Step2, Step3, Step4, Step5, StepsMain } from './component/Steps';


export const routes = [

  {
    path: "/",
    component: Home,
    exact: true
  },
  
  {
    path: "/wallet",
    component: Wallet,
    exact: false,
  },
  {
    path: "/layout",
    component: Layout,
    exact: false,
  },
  {
    path: "/style-guide",
    component: StyleGuide,
    exact: false,
  },

  {
    path: "/welcome",
    component: Welcome,
    exact: false,
  },
  {
    path: "/pickup",
    component: Pickup,
    exact: false,
  },
  {
    path: "/contamination-tracker",
    component: ContaminationTracker,
    exact: false,
  },
  {
    path: "/contamination-date",
    component: Contaminationdate,
    exact: false,
  },
  {
    path: "/contamination-feedback",
    component: Contaminationfeedback,
    exact: false,
  },
  {
    path: "/dropoff",
    component: DropOff,
    exact: false,
  },
  {
    path: "/tranfer-fund",
    component: TranferFund,
    exact: false,
  },
  {
    path: "/donate-fund",
    component: DonateFund,
    exact: false,
  },
  {
    path: "/sure-donate",
    component: SureDonate,
    exact: false,
  },
  {
    path: "/redeem-point",
    component: RedeemEcoPoint,
    exact: false,
  },
  {
    path: "/pickup-form",
    component: PickupForm,
    exact: false,
  },
  {
    path: "/preferences",
    component: Preferences,
    exact: false
  },
  {
    path: "/feedback",
    component: FeedBack,
    exact: false
  },
  {
    path: "/choose-charity",
    component: ChooseCharity,
    exact: false
  },
  {
    path: "/about",
    component: About,
    exact: false
  },
  {
    path: "/invite",
    component: Invite,
    exact: false
  },
  {
    path: "/webapp",
    component: WebApp,
    exact: false
  },
  {
    path: "/notification",
    component: Notification,
    exact: false
  },
  {
    path: "/setting",
    component: Setting,
    exact: false
  },
  {
    path: "/recycling-activity",
    component: RecycleActivity,
    exact: false
  },
  {
    path: "/impact-badges",
    component: ImpactBadges,
    exact: false
  },
  {
    path: "/metrics",
    component: Metrics,
    exact: false
  },
  {
    path: "/step1",
    component: Step1,
    exact: false
  },
  {
    path: "/step2",
    component: Step2,
    exact: false
  },
  {
    path: "/step3",
    component: Step3,
    exact: false
  },
  {
    path: "/step4",
    component: Step4,
    exact: false
  },
  {
    path: "/step5",
    component: Step5,
    exact: false
  },
  {
    path: "/steps-main",
    component: StepsMain,
    exact: false
  },
  {
    path: "/coupon-details",
    component: CouponDetails,
    exact: false
  },
  {
    path: "/ways-toearn",
    component: WaystoEarn,
    exact: false
  },
  {
    path: "/account-type",
    component: AccountType,
    exact: false
  },
  {
    path: "/account",
    component: Account,
    exact: false
  },
  {
    path: "/progress-home",
    component: ProgressHome,
    exact: false
  },
  
  {
    path: "/about-account",
    component: AboutAccount,
    exact: false
  },
  {
    path: "/whatcan-recycle",
    component: WhatCanRecycle,
    exact: false
  },
  {
    path: "/settingradio",
    component: Settingradio,
    exact: false
  },
  {
    path: "/webapprecycle",
    component: Webapprecycle,
    exact: false
  },
  {
    path: "/webappevtek",
    component: WebappEvtek,
    exact: false
  },
  {
    path: "/progressleaderboard",
    component: ProgressLeaderboard,
    exact: false
  },
  {
    path: "/leader-boards",
    component: Leaderboards,
    exact: false
  },
  {
    path: "/recycle-leaderboard",
    component: RecycleLeaderboard,
    exact: false
  },
  {
    path: "/carbon",
    component: Carbon,
    exact: false
  },
  {
    path: "/reduction",
    component: Reduction,
    exact: false
  },
 

  {
    path: "/open-leaderboard",
    component: OpenLeaderboard,
    exact: false
  },
  {
    path: "/create-leaderboard",
    component: CreateLeaderboard,
    exact: false
  },
  {
    path: "/join-leaderboard",
    component: JoinLeaderboard,
    exact: false
  },
  {
    path: "/cart",
    component: Cart,
    exact: false
  },
  {
    path: "/shop-home",
    component: ShopHome,
    exact: false
  },
  {
    path: "/review-order",
    component: ReviewOrder,
    exact: false
  },
  {
    path: "/order-history",
    component: OrderHistory,
    exact: false
  },
  {
    path: "/guaranteed",
    component: Guaranteed,
    exact: false
  },
  {
    path: "/private-leaderboard",
    component: PrivateLeaderBoard,
    exact: false
  },
  {
    path: "/tutorial",
    component: Tutorial,
    exact: false
  },
{
    path: "/workleader",
    component: Workleader,
    exact: false
  },
 

  {
    path: "/reset-password",
    component:ResetPassword,
    exact: false
  },
 
  {
    path: "/create-account",
    component:CreateAccount,
    exact: false
  },
 
  {
    path: "/address-detail",
    component:AddressDetail,
    exact: false
  },
  {
    path: "/account-detail",
    component:AccountDetail,
    exact: false
  },
 

];
