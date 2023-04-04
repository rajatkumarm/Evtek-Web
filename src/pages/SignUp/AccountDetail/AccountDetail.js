import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Heading, Icon, Input, Label, Modals, Nav, Text, Radio, Image } from '../../../component/shared';
import Styles from './AccountDetail.module.scss'
import { useForm } from "react-hook-form";


const AccountDetail = () => {
    let history = useHistory();
    const [active, setActive] = useState();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    // function handleClick() {
    //     history.push("/address-detail");
    // }
    return (

        <Modals customClass={Styles.icoHide} isIcon={false}>
            <form className={`${Styles.modal} `}>
                <div className={`${Styles.scrollBehavior} ${Styles.scrollWeb}`}>
                    <div className={Styles.logoText}>
                        <Image src='images/evtekMain.png' alt='evtekMain' />
                        <Heading className={Styles.headText} >Create an Account - Account Details</Heading>
                    </div>
                    <Nav />
                    <div className={Styles.accountDetail}>

                        <div className={Styles.codeType} >
                            <div className={Styles.zip}>
                                <div className={Styles.acType}>
                                    <div>
                                        <Text children={"Account type"} className={Styles.acTypeTxt} />
                                    </div>
                                    <div>
                                        <Text children={"Individual"} className={Styles.numTxt} />
                                    </div>
                                </div>
                                <div className={Styles.acType}>
                                    <div>
                                        <Text children={"selected zipcode"} className={Styles.acTypeTxt} />
                                    </div>
                                    <div>
                                        <Text children={"11201"} className={Styles.numTxt} />
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.mainModel}>
                                <div className={Styles.editBtn} onClick={(e) => setActive(true)}>
                                    <Text className={Styles.editTxt} children={"edit"} />
                                </div>
                                {active && (
                                    <div className={Styles.modelPos}>
                                        <div className={Styles.chngModel}>
                                            <div className={Styles.boxCroseIcon}>
                                                <button onClick={(e) => setActive(!active)} className={Styles.btnClose}> <Image src='images/closeModel.png' alt={"Logo"} /></button>
                                            </div>
                                            <div className={Styles.boxSpanText}>
                                                <Text children={"Are you sure? Editing these selections will restart the account creation process"} className={Styles.modalText} />
                                            </div>
                                            <div className={Styles.changeBtn}>
                                                <Button size={"xmd"} variant={'solidPrimary'} >change anyway</Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <Text children={"To access all features of the app, we need to add some details to your account."} className={Styles.mainTxt} />
                        <div className={Styles.inputHead} >
                            <Label value={"Phone No"} />
                            <Input
                                className={Styles.verifyTxt}

                                type="text"
                                name="phone"
                                reference={register("phone", {
                                    required: true,
                                    pattern: {
                                        value: /^\d{10}$/

                                    },
                                })}
                            />
                            <div className={Styles.errorMsg}>
                                {errors?.phone?.type === "required" && (
                                    <p>*This field is required</p>
                                )}

                                {errors?.phone?.type === "pattern" && (
                                    <p>Please enter valid 10 digit number</p>
                                )}
                            </div>
                        </div>
                        <div className={Styles.mainHead} >
                            <Label className={Styles.inputText} value={"street address"} />
                            <Input

                                className={Styles.textInput}
                                type="text"
                                name="street"
                                reference={register("street", {
                                    required: true,
                                    maxLength: 50
                                })}
                            />
                            <div className={Styles.errorMsg}>
                                {errors?.street?.type === "required" && (
                                    <p>*This field is required</p>
                                )}

                                {errors?.street?.type === "maxLenght" && (
                                    <p>Maximum 50 word allowed</p>
                                )}
                            </div>
                        </div>
                        <div className={Styles.mainState}>
                            <div className={Styles.stateHead} >
                                <Label className={Styles.inputText} value={"city"} />
                                <Input className={Styles.userInput}
                                    type="text"
                                    name="city"
                                    reference={register("city", {
                                        required: true,
                                        maxLength: 15,
                                        pattern: {
                                            value: /^[A-Za-z]/

                                        },
                                    })}
                                />
                                <div className={Styles.errorMsg}>
                                    {errors?.city?.type === "required" && (
                                        <p>*This field is required</p>
                                    )}
                                    {errors?.city?.type === "pattern" && (
                                        <p>*Only characters are allowed</p>
                                    )}

                                    {errors?.city?.type === "maxLength" && (
                                        <p>Maximum 10 word allowed</p>
                                    )}
                                </div>
                            </div>
                            <div className={Styles.stateHead} >
                                <Label className={Styles.inputText} value={"state"} />
                                <Input className={Styles.userInput}
                                    type="text"
                                    name="state"
                                    reference={register("state", {
                                        required: true,
                                        maxLength: 10,
                                        pattern: {
                                            value: /^[A-Za-z]/

                                        },
                                    })}
                                />
                                <div className={Styles.errorMsg}>
                                    {errors?.state?.type === "required" && (
                                        <p>*This field is required</p>
                                    )}
                                    {errors?.state?.type === "pattern" && (
                                        <p>*Only characters are allowed</p>
                                    )}

                                    {errors?.state?.type === "maxLength" && (
                                        <p>Maximum 15 word allowed</p>
                                    )}
                                </div>
                            </div>





                        </div>
                        <div className={Styles.btmTxt}>
                            <div>
                                <Text children={"Gamification Preset"} className={Styles.presetTxt} />
                            </div>
                            <div>
                                <Text children={"Do want an immersive, gamified experience or just the app’s essential features? Choose the preset that suits you best"} className={Styles.checkboxTxt} />
                            </div>
                        </div>
                        <div className={Styles.bottmMain}>
                            <Radio name="radio" id="radioOne" type="radio"
                                reference={register("radio", { required: "*required" })}
                            />
                            <div className={Styles.errorMsg}>
                                {errors.radio ? <div>{errors.radio.message}</div> : null}
                            </div>
                            <div className={Styles.btmRadio}>
                                <Text children={"I want to use all of the app’s features including:"} className={Styles.mainTxt} />
                                <div className={Styles.btmIcon}>
                                    <Image src='images/impact.png' alt='impactImg' />
                                    <Text className={`${Styles.addText} ${Styles.badgeColor}`} children={"Impact Badges"} />
                                    <Icon type="checkCircle" customClass={Styles.circle} />
                                </div>
                                <div className={Styles.btmIcon}>
                                    <Image src='images/ecoPoint.svg' alt='ecoImg' />
                                    <Text children={"EcoPoint Multipliers"} className={`${Styles.addText} ${Styles.ecoColor}`} />
                                    <Icon type="checkCircle" customClass={Styles.circle} />
                                </div>
                                <div className={Styles.btmIcon}>
                                    <Image src='images/recycle.png' alt='recycleImg' />
                                    <Text children={"Recycling Streaks"} className={`${Styles.addText} ${Styles.recycleColor}`} />
                                    <Icon type="checkCircle" customClass={Styles.circle} />
                                </div>
                                <div className={Styles.btmIcon}>
                                    <Image src='images/Leaderboard.png' alt='leaderImg' />
                                    <Text children={"Leaderboards"} className={`${Styles.addText} ${Styles.leadColor}`} />
                                    <Icon type="checkCircle" customClass={Styles.circle} />
                                </div>
                                <div className={Styles.btmIcon}>
                                    <Image src='images/carbon.png' alt='carbonImg' />
                                    <Text children={"Carbon Reduction"} className={`${Styles.addText} ${Styles.badgeColor}`} />
                                    <Icon type="checkCircle" customClass={Styles.circle} />
                                </div>
                                <div className={Styles.btmIcon}>
                                    <Image src='images/Reward.png' alt='rewardImg' />
                                    <Text children={"Rewards & Coupons"} className={`${Styles.addText} ${Styles.carbonColor}`} />
                                    <Icon type="checkCircle" customClass={Styles.circle} />
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.bottmMain} ${Styles.bottmMarg}`}>   
                            <Radio name="radio" id="radioTwo" type="radio"
                                reference={register("radio", { required: "*required" })}
                            />
                            <div className={Styles.errorMsg}>
                                {errors.radio ? <div>{errors.radio.message}</div> : null}
                            </div>

                            <div className={Styles.btmRadio}>
                                <Text children={"I want the essential features only (You can change this in settings > preferences)"} className={Styles.mainTxt} />
                                <div className={Styles.btmIcon}>
                                    <Image src='images/impact.png' alt='impactImg' />
                                    <Text children={"Impact Badges"} className={`${Styles.addText} ${Styles.badgeColor}`} />
                                    <Icon type="checkCircle" customClass={Styles.circle} />
                                </div>
                                <div className={Styles.btmIcon}>
                                    <Image src='images/ecoPoint.svg' alt='ecoImg' />
                                    <Text children={"EcoPoint Multipliers"} className={`${Styles.addText} ${Styles.ecoColor}`} />
                                    <Icon type="checkCircle" customClass={Styles.circle} />
                                </div>
                                <div className={Styles.btmIcon}>
                                    <Image src='images/recycle.png' alt='recycleImg' />
                                    <Text children={"Recycling Streaks"} className={`${Styles.addText} ${Styles.recycleColor}`} />
                                    <Icon type="checkCircle" customClass={Styles.circle} />
                                </div>
                                <div className={Styles.btmIcon}>
                                    <Image src='images/Leaderboard.png' alt='leaderImg' />
                                    <Text children={"Leaderboards"} className={`${Styles.addText} ${Styles.leadColor}`} />
                                    <Icon type="checkCircle" customClass={Styles.circle} />
                                </div>
                                <div className={Styles.btmIcon}>
                                    <Image src='images/carbon.png' alt='carbonImg' />
                                    <Text children={"Carbon Reduction"} className={`${Styles.addText} ${Styles.badgeColor}`} />
                                    <Icon type="checkCircle" customClass={Styles.circle} />
                                </div>
                                <div className={Styles.btmIcon}>
                                    <Image src='images/Reward.png' alt='rewardImg' />
                                    <Text children={"Rewards & Coupons"} className={`${Styles.addText} ${Styles.carbonColor}`} />
                                    <Icon type="checkCircle" customClass={Styles.circle} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.btn}>
                        <Button size="xmd01" variant="primaryDisable" btnHandler={() => history.goBack()}>Back</Button>
                        <Button size="xmd01" variant="solidPrimary" btnHandler={handleSubmit(onSubmit)}>Next</Button>
                        {/* btnHandler={handleClick} */}
                    </div>
                </div>
            </form>
        </Modals>


    );
}
export default AccountDetail;
