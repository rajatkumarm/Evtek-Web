import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Checkbox, Heading, Image, Input, Label, Modals, Text } from '../../../component/shared';
import StepsMain from '../../../component/Steps/StepsMain';
import Styles from './CreateAccount.module.scss';
import { useForm } from "react-hook-form";

const CreateAccount = () => {

    const [isActive, setIsActive] = useState(false);
    const history = useHistory();


    // function handleClick() {
    //     history.push("/account-detail");
    // }
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
    });
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (

        <Modals>
            <form className={Styles.modal}>
                <div className={Styles.logoText}>
                    <div>
                        <Image src='/images/evtekMain.png' alt={"Logo"} />
                    </div>
                    <div>
                        <Heading className={Styles.headText} >Create an Account</Heading>
                        <StepsMain />
                    </div>
                </div>
                <div className={Styles.signUp}>
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

                            <div className={Styles.seprateLine}>
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
                            <div className={Styles.editBtn} onClick={(e) => setIsActive(true)}>
                                <Text className={Styles.editTxt} children={"edit"} />
                            </div>
                            {isActive && (
                                <div className={Styles.modelPos}>
                                    <div className={Styles.chngModel}>
                                        <div className={Styles.boxCroseIcon}>
                                            <button onClick={(e) => setIsActive(!isActive)} className={Styles.btnClose}> <Image src='images/closeModel.png' alt={"Logo"} /></button>
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
                    <div className={Styles.inputHead} >
                        <Label className={Styles.inputText} value={"full name"} />
                        <Input
                            type="fullname"
                            name="fullname"
                            reference={register("fullname", {
                                required: true,
                                minLength: 3,
                                pattern: {
                                    value: /^[A-Za-z]/

                                },

                            })}
                        />
                        <div className={Styles.errorMsg}>
                            {errors?.fullname?.type === "required" && (
                                <p>*only Alphabet allow</p>
                            )}
                            {errors?.fullname?.type === "pattern" && (
                                <p>not allow alphanumeric number</p>
                            )}
                            {errors?.fullname?.type === "minLength" && (
                                <p>Minimum 3 digit number</p>
                            )}


                        </div>
                    </div>
                    <div className={Styles.mainHead} >
                        <Label className={Styles.inputText} value={"email"} />
                        <Input
                            placeholder="Email"
                            type="email"
                            name="email"
                            reference={register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        <div className={Styles.errorMsg}>
                            {errors?.email?.type === "required" && (
                                <p>*This field must be required</p>
                            )}

                            {errors?.email?.type === "pattern" && (
                                <p>Enter valid email Address</p>
                            )}
                        </div>
                    </div>
                    <div className={Styles.mainHead} >
                        <Label className={Styles.inputText} value={"username"} />
                        <Input type="username"
                            name="username"
                            reference={register("username", {
                                required: true,
                                minLength: 3,
                                pattern: /^\S/
                            })}
                        />
                        <div className={Styles.errorMsg}>
                            {errors?.username?.type === "required" && (
                                <p>*this field must be required</p>
                            )}

                            {errors?.username?.type === "minLength" && (
                                <p>Minimum 3 character username</p>
                            )}
                            {errors?.username?.type === "pattern" && (
                                <p>space not allow</p>
                            )}
                        </div>
                    </div>
                    <div className={Styles.mainHead} >
                        <Label className={Styles.inputText} value={"password"} />
                        <Input type={"password"} className={Styles.passInput}
                            name="name"
                            reference={register("password", {
                                required: "*This field must be required",
                                minLength: {
                                    value: 8,
                                    message: "must be 8 chars",
                                },
                                validate: (value) => {
                                    return (
                                        [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                                            pattern.test(value)
                                        ) || "must include lower, upper, number, and special chars"
                                    );
                                },
                            })} />
                        <div className={Styles.errorMsg}>
                            {errors.password ? <div>{errors.password.message}</div> : null}
                        </div>
                    </div>
                    <Checkbox name="checkbox" id="check" type="checkbox" label={"receive Evtek’s weekly newsletter"}
                        reference={register("checkbox", { required: "*required" })}
                    />
                    <div className={Styles.errorMsg}>
                        {errors.checkbox ? <div>{errors.checkbox.message}</div> : null}
                    </div>
                    <div className={Styles.signUpBtm}>
                        <Text className={Styles.checkboxTxt} >By pressing "Sign up" you agree to our terms and conditons</Text>
                    </div>
                 </div>
                <div className={Styles.btn}>
                    <Button size={"xmd01"} variant={"primaryDisable"} btnHandler={() => history.goBack()}>Back</Button>
                    <Button size={"xmd01"} variant={"solidPrimary"} btnHandler={handleSubmit(onSubmit)}>Next</Button>
                </div>
            </form>
        </Modals>

    );
}
export default CreateAccount;
