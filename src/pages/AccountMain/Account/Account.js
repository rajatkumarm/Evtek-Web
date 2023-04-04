import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Icon, PageTitle, Text ,Image} from '../../../component/shared';
import Layout from '../../Container/Layout';
import Styles from './Account.module.scss';
import Tooltip from '@mui/material/Tooltip'

const Account = () => {
    const history=useHistory();
    const gotoWebapp = () => {
        history.push("/webapp");
      };
      const gotoNotification = () => {
        history.push("/notification");
      };
      const gotoSetting = () => {
        history.push("/setting");
      };
      const gotoFeedback = () => {
        history.push("/feedback");
      };
      const gotoInvite = () => {
        history.push("/invite");
      };
      
    return (
        <>
            <Layout>
                <div className={Styles.accountMain}>
                    <div>
                        <div>
                            <PageTitle type="iconUser" modulename="Account" />
                        </div>
                        <div className={Styles.accountDetail}>
                            <div className={Styles.accountContainer} onClick={gotoNotification}>
                                <div className={Styles.iconMain} >
                                    <Icon customClass={Styles.accountIcon} type='iconnotification1' />
                                    <Text className={Styles.notifyText} color={"redPrimary"} variant={"lgText"} >Notifications</Text>
                                </div>
                                <div>
                                    <Link to="#"><Icon customClass={Styles.nextIcon} type='iconFill' /></Link>
                                </div>
                            </div>
                            <div className={Styles.accountContainer} onClick={gotoWebapp}>
                                <div className={Styles.iconMain} >
                                    <Icon customClass={Styles.accountIcon} type='webapp' />
                                    <Text className={Styles.accountText}  >Using the Web App</Text>
                                </div>
                                <div>
                                    <Link to="#"><Icon customClass={Styles.nextIcon} type='iconFill' /></Link>
                                </div>
                            </div>
                            <div className={Styles.accountContainer}  onClick={gotoSetting}>
                                <div className={Styles.iconMain}>
                                    <Icon customClass={Styles.accountIcon} type='iconsettings' />
                                    <Text className={Styles.accountText} variant={"lgText"} color={"primary"} >Settings</Text>
                                </div>
                                <div>
                                    <Link to="#"><Icon customClass={Styles.nextIcon} type='iconFill' /></Link>
                                </div>
                            </div>
                            <div className={Styles.accountContainer} onClick={gotoFeedback}>
                                <div className={Styles.iconMain} >
                                    <Icon customClass={Styles.accountIcon} type='iconfeedback' />
                                    <Text className={Styles.accountText}>Give Feedback</Text>
                                </div>
                                <div className={Styles.iconAlign}>
                                    <div className={Styles.ecoMain}>
                                        <Text className={Styles.ecoText} variant="xxsText" color="secondary" strong='strong7'>+150 EcoPoints</Text>
                                    </div>
                                    <Link to="#"><Icon customClass={Styles.nextIcon} type='iconFill' /></Link>
                                </div>
                            </div>
                            <div className={Styles.accountContainer}  onClick={gotoInvite}>
                                <div className={Styles.iconMain}>
                                    <Icon customClass={Styles.accountIcon} type='iconnetwork' />
                                    <Text className={Styles.accountText}>Invite Friends</Text>
                                </div>
                                <div className={Styles.iconAlign}>
                                    <div className={Styles.ecoMain}>
                                        <Text className={Styles.ecoText}  variant="xxsText" color="secondary" strong='strong7'>+100 EcoPoints</Text>
                                    </div>
                                    <Link to="#"><Icon customClass={Styles.nextIcon} type='iconFill' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.blogMain}>
                        <div className={Styles.articleMain}>
                            <div className={Styles.blog}>
                                <Text className={Styles.blogMainText} variant="xx4Text" color={"secondary"} >Visit Evtek’s blog</Text>
                            <Tooltip title="Currently, Click event is not developed">
                               <div> <Icon customClass={Styles.blogIcon} type='iconFill' /></div></Tooltip>

                            </div>
                            <div className={Styles.textMain}>
                                <Text className={Styles.articleText}  variant={"smText"} color={"secondary"} >recent articles:</Text>
                            </div>
                            <div>
                                <div className={Styles.blogContent}>
                                    <div>
                                        <Image src='images/bottel.png' alt='bottel' />
                                    </div>
                                    <div className={Styles.blogPad}>
                                        <div>
                                            <Text className={Styles.blogText} variant="smText" >All the ways recycling is broken—and how to fix them</Text>
                                        </div>
                                         <div>
                                            <Text className={Styles.miniText} variant="xxsText" color={"grayPrimary"}>Each year, by one estimate, Americans throw out around 22 million tons of products that could have been recycled. Tens of millions of ...</Text>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.blogContent}>
                                    <div>
                                        <Image src='images/factory.png' alt='factory' />
                                    </div>
                                    <div className={Styles.blogPad}>
                                        <div>
                                            <Text className={Styles.blogText} variant="smText">All the ways recycling is broken—and how to fix them</Text>
                                        </div>
                                        <div>
                                            <Text className={Styles.miniText} variant="xxsText" color={"grayPrimary"}>Each year, by one estimate, Americans throw out around 22 million tons of products that could have been recycled. Tens of millions of ...</Text>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <div className={`${Styles.blogContent} ${Styles.contentClass}`}>
                                    <div>
                                        <Image src='images/bottel.png' alt='bottel' />
                                    </div>
                                    <div className={Styles.blogPad}>
                                        <div>
                                            <Text className={Styles.blogText} variant="smText">All the ways recycling is broken—and how to fix them</Text>
                                        </div>
                                        <div>
                                            <Text className={Styles.miniText} variant="xxsText" color={"grayPrimary"}>Each year, by one estimate, Americans throw out around 22 million tons of products that could have been recycled. Tens of millions of ...</Text>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Account;
