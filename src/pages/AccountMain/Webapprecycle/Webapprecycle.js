import React from 'react'
import { Input, PageTitle, Text, Icon, Heading,Image } from '../../../component/shared';
import Layout from '../../Container/Layout';
import Styles from './Webapprecycle.module.scss';
import { useHistory } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
export const Webapprecycle = () => {
    const history=useHistory();
    const gotoAppevtek = () => {
        history.push("/webappevtek");
      };
      const gotoYourecycle = () => {
          history.push("/whatcan-recycle");
      };
      const gotoEarn = () => {
          history.push("/ways-toearn");
      };
      const gotoAbout = () => {
          history.push("/about-account");
      };
      const gotoGuaranty = () => {
          history.push("/guaranteed");
      };
      const gotoWork = () => {
          history.push("/workleader");
      };

    return (
        <>
            <Layout>
                <div className={Styles.webMainrecycle}>
                    <div>
                        <div>
                            <PageTitle type="iconchevron" modulename="Using the Web App" pagename="Account" />
                        </div>
                        <div className={Styles.webDetail}  >
                            <Tooltip title="Currently, Click event is not developed">
                                <div>
                                    <div className={Styles.webContainer}>

                                        <div> <Text className={Styles.blogText}>App Overview</Text></div>

                                        <div className={Styles.appImg}><Image src='images/appover.png' alt='bottel' /></div>
                                    </div>
                                </div>
                            </Tooltip>

                            <div className={Styles.webContainer} onClick={gotoYourecycle}>
                                <Text className={Styles.blogText}>What can you <span className={Styles.reycleHead}>recycle</span>?</Text>
                                <div className={Styles.webImg}><Image src='images/reone.png' alt='bottel' /></div>
                                <div className={Styles.webImgo}><Image src='images/retwo.png' alt='bottel' /></div>
                                <div className={Styles.webImgt}><Image src='images/rethree.png' alt='bottel' /></div>
                            </div>
                            <Tooltip title="Currently, Click event is not developed">
                                <div>
                                    <div className={Styles.webContainer}>

                                        <div><Text className={Styles.blogText}>How to prepare for a <span className={Styles.reycleHead}>Pickup</span></Text></div>

                                        <div className={Styles.webTruck}><Image src='images/pitruck.png' alt='bottel' /></div>
                                    </div>
                                </div>
                            </Tooltip>
                            <div className={Styles.webContainer} onClick={gotoWork}>
                                <Text className={Styles.blogText}>How <span className={Styles.reycleHead}>Leaderboards</span> work</Text>
                                <div className={Styles.webTro}><Image src='images/leone.png' alt='bottel' /></div>
                                <div className={Styles.webTrot}><Image src='images/letwo.png' alt='bottel' /></div>
                            </div>
                            <div className={Styles.webContainer} onClick={gotoEarn}>
                                <Text className={Styles.blogText}>Ways to earn <span className={Styles.reycleHead}>EcoPoints</span></Text>
                                <div className={Styles.webEcoo}><Image src='images/ecoone.png' alt='bottel' /></div>
                                <div className={Styles.webEcot}><Image src='images/ecotwo.png' alt='bottel' /></div>
                            </div>

                            <Tooltip title="Currently, Click event is not developed">
                                <div>
                                    <div className={Styles.webContainer}>
                                        <div><Text className={Styles.blogText}>How <span className={Styles.reycleHead}>Impact Badges</span> work</Text></div>
                                        <div className={Styles.webIm}><Image src='images/imcar.png' alt='bottel' /></div>
                                    </div>
                                </div>
                            </Tooltip>

                            <div className={Styles.webContainer} >
                                <Text className={Styles.blogTexts} ><span className={Styles.reycleHead}>FAQs</span></Text>
                                <div className={Styles.webFa}><Image src='images/faqone.png' alt='bottel' /></div>
                                <div className={Styles.webFaq}><Image src='images/faqtwo.png' alt='bottel' /></div>
                            </div>
                        </div>
                        <div className={Styles.bottomText}>
                            <div onClick={gotoAbout}>
                                <Text className={Styles.btmText}>About Evtek: Process & Technology</Text>
                            </div>
                            <div className={Styles.btmMarg} onClick={gotoGuaranty}>
                                <Text className={Styles.btmText}>Evtek’s 100% Recycled Guarantee</Text>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.faqMain}>
                        <div>
                            <div className={Styles.blog}>
                                <Icon type="iconchevron"   click={()=> history.goBack()}/>
                                <Text className={Styles.bgMainText}>FAQs</Text>
                            </div>
                            <div className={Styles.faqInput}>
                                <Input className={Styles.inputTextWeb} variant="faqInput" placeholder='search for a keyword' />
                            </div>

                            <div className={Styles.faqContainer}>
                                <div className={Styles.headFaq}>
                                    <Heading className={Styles.blogMainText} headingType={"h3"} color={"secondary"}>Recycling</Heading>
                                </div>
                                <div className={Styles.boxFaq} onClick={gotoAppevtek}>
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogTexts} color={"secondary"}>How often/what day does Evtek pick up in my area?</Text>
                                    </div>
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>

                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>What time of day will my Bulk Pickup happen?</Text>
                                    </div>
                                    </Tooltip>
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>

                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>What time of day will my Curbside Pickup happen?</Text>
                                    </div>
                                    </Tooltip>
                                    
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>
                                   

                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>How do I schedule a pickup?</Text>
                                    </div>
                                    </Tooltip>
                                   
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>
                                

                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>Where should I put my Evtek EcoSacks and EcoKrates?</Text>
                                    </div>
                                  </Tooltip>      
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>

                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>How do I confirm a pickup?</Text>
                                    </div>
                                    </Tooltip>
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>

                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>Can I cancel my pickup?</Text>
                                    </div>
                                    </Tooltip>
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>

                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>Can I automatically confirm all pickups?</Text>
                                    </div>
                                    </Tooltip>
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>

                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>What should I do if I think my pickup may have been missed?</Text>
                                    </div>
                                    </Tooltip>
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
                                    </div>

                                </div>
                                <div className={Styles.boxFaq}>
                                <Tooltip title="Currently, Click event is not developed">
                                    <div className={Styles.textFaq}>
                                        <Text className={Styles.blogText} color={"secondary"}>What is an EcoSack?</Text>
                                    </div>
                                    </Tooltip>
                                    <div className={Styles.btmImg}>
                                        <Icon type="iconFill" />
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
