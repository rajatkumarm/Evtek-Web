import React, { useState } from 'react'
import { Button, Icon, Input, PageTitle, Text } from '../../../component/shared'
import { Layout } from '../../index'
import Styles from './FeedBack.module.scss'
const FeedBack = () => {
    const [show, setShowInfo] = useState(false);
    const [showHideFeedback, setHideFeedback] = useState(true);
    const[active, setActive] = useState(4)
    const[btnActive, setBtnActive] = useState()
    const ShowInfo = () => {
        setShowInfo(true)
        setHideFeedback(false)
    }
  
    return (
        <>
            <Layout>
                <div>
                    <PageTitle type="iconchevron" pagename={"Account"} modulename="Give Feedback" />
                </div>
                {showHideFeedback &&
                    <div className={Styles.Main}>
                        <div className={Styles.feedback}>
                            <div className={Styles.experience}>
                                <Text family='raleway' strong="strong5" variant={"xx3Text"}>How was your overall experience?</Text>
                            </div>
                            <div className={Styles.work}>
                                <Text family='raleway' strong="strong5" variant={"xx3Text"}>What are some areas that need work?</Text>
                            </div>
                            <div className={Styles.more}>
                                <Text family='raleway' strong="strong5" variant={"xx3Text"}>Please tell us more:</Text>
                            </div>
                        </div>
                        <div className={Styles.feedbackSubmit}>
                        <div className={Styles.emojiIcon}>
                            <Icon click={()=> setActive(1)} customClass={`${Styles.emojiOne} ${active === 1 ? Styles.emojiTwo : ''}`} type="dissatisfiedmax" />
                            <Icon click={()=> setActive(2)} customClass={`${Styles.emojiOne} ${active === 2 ? Styles.emojiTwo : ''}`} type="dissatisfiedmedium" />
                            <Icon click={()=> setActive(3)} customClass={`${Styles.emojiOne} ${active === 3 ? Styles.emojiTwo : ''}`} type="iconaverage" />
                            <Icon click={()=> setActive(4)} customClass={`${Styles.emojiOne} ${active === 4 ? Styles.emojiTwo : ''}`} type="satisfiedmedium" />
                            <Icon click={()=> setActive(5)} customClass={`${Styles.emojiOne} ${active === 5 ? Styles.emojiTwo : ''}`} type="satisfiedmax" />
                        </div>
                            <div className={Styles.btnMain}>
                                <div className={Styles.btnOne}>
                                    <Button btnHandler={()=> setBtnActive(1)} btnClass={Styles.btnPrimary} size={"btnMd01"} variant={btnActive === 1 ? "bluePrimary" : "secondaryDisable"}>slow loading</Button>
                                    <Button btnHandler={()=> setBtnActive(2)} btnClass={Styles.btnPrimary}  size={"btnXlg"} variant={btnActive === 2 ? "bluePrimary" : "secondaryDisable"}>customer service</Button>
                                    <Button btnHandler={()=> setBtnActive(3)} btnClass={Styles.btnPrimary}  size={"btnLg"} variant={btnActive === 3 ? "secondaryDisable" : "bluePrimary"} >confusing layout </Button>
                                </div>
                                <div className={Styles.btnOne}>
                                    <Button btnHandler={()=> setBtnActive(4)} btnClass={Styles.btnPrimary} size={"btnSm"} variant={btnActive === 4 ? "bluePrimary" : "secondaryDisable"}>scheduler</Button>
                                    <Button btnHandler={()=> setBtnActive(5)} btnClass={Styles.btnPrimary} size={"btnSm"} variant={btnActive === 5 ? "secondaryDisable" : "bluePrimary"}>navigation </Button>
                                    <Button btnHandler={()=> setBtnActive(6)} btnClass={Styles.btnPrimary} size={"btnMd"} variant={btnActive === 6 ? "bluePrimary" : "secondaryDisable"}>app crashes</Button>
                                    <Button btnHandler={()=> setBtnActive(7)} btnClass={Styles.btnPrimary} size={"btnXxlg"} variant={btnActive === 7 ? "bluePrimary" : "secondaryDisable"}>difficult to find features</Button>
                                </div>    
                                <div className={Styles.btnOne}>
                                    <Button btnHandler={()=> setBtnActive(8)} btnClass={Styles.btnPrimary} size={"btnMd02"} variant={btnActive === 8 ? "bluePrimary" : "secondaryDisable"}>not responsive</Button>
                                    <Button btnHandler={()=> setBtnActive(9)} btnClass={Styles.btnPrimary} size={"btnMd"} variant={btnActive === 9 ? "bluePrimary" : "secondaryDisable"}>app crashes</Button>
                                </div>
                            </div>

                            <Input type={"textarea"} className={Styles.feedbackInput} placeholder={"we would love to hear more about what we can do to improve your experience"} />

                            <Button size={"btnXxxlg"} btnHandler={ShowInfo}>Submit Feedback</Button>
                        </div>
                    </div>
                }

                {show &&
                    <div className={Styles.ThankMain}>
                        <Text variant={"big01Text"} family='raleway' strong="strong5">Thank you!</Text>
                        <div>
                            <Text  variant={"xx2Text"} color={"greyPrimary"}>
                                We value your feedback, thank you for helping up make a better app!
                            </Text>
                        </div>
                        <div className={Styles.Donebtn}>
                            <Button size={"btnXxxlg"} btnHandler={ShowInfo}>Done</Button>
                        </div>

                    </div>
                }

            </Layout>
        </>
    )
}

export default FeedBack
