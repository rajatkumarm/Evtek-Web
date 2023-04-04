import React, { useState } from 'react'
import Styles from './ReceiveService.module.scss';
import { Modals, Text, Label, Input, Button, Heading, Checkbox, Image, Alert } from '../../component/shared/index'
import { useForm } from "react-hook-form";

// import { useHistory } from 'react-router-dom';

const ReceiveService = () => {
    const [receiveUpdatesBtn, setReceiveUpdatesBtn] = useState(true)
    const [receiveAlldone, setReceiveAllDone] = useState(false)
    const { register, handleSubmit, formState: { errors }, } = useForm({
        mode: 'onChange',
    });
    const onSubmit = data => console.log(data);
    // const history = useHistory();

    // const handleClick = () => {
    //     history.push('/receive-alldone');
    // }
    return (
        <Modals>
            <form onSubmit={handleSubmit(onSubmit)} className={Styles.receiveMain}>
                <div className={Styles.logoText}>
                    <Image src='images/evtekLogo2.png' alt={"Logo"} className={Styles.Logo} />
                    <Heading className={Styles.heading} >Receive Service Updates</Heading>
                </div>

                <div className={Styles.Receive}>

                    <Text className={Styles.receiveText01} >Enter your name and email below to sign up for updates</Text>
                    <div className={Styles.input01}>
                        <Label className={Styles.text} value={"name"} />
                        <Input className={Styles.textInput} reference={register("name", {
                            required: "*required",
                            maxLength: {
                                value: 30,
                                message: "must be 30 chars",
                            },
                            validate: (value) => {
                                return (
                                    [/^[A-Za-z]+$/i].every((pattern) =>
                                        pattern.test(value)
                                    ) || "only chars are allowed"
                                );
                            },
                        })} /> 
                        <div className={Styles.errorMsg}>
                            {errors.name ? <div>{errors.name.message}</div> : null}
                        </div>
                    </div>
                    <div className={Styles.input02} >
                        <Label className={Styles.text01} value={"email"} />
                        <Input type={"email"} name="email"
                            reference={register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })} />
                        <div className={Styles.errorMsg}>
                            {errors?.email?.type === "required" && (
                                <p>*Please enter email address.</p>
                            )}

                            {errors?.email?.type === "pattern" && (
                                <p>*Alphabetical characters only</p>
                            )}
                        </div>
                    </div>
                    <div>

                        <Checkbox name="checkbox" id="check" type="checkbox" label={"receive Evtek’s weekly newsletter"} reference={register("checkbox", { required: "*required" })} />
                        <div className={Styles.errorMsg}>
                            {errors.checkbox ? <div>{errors.checkbox.message}</div> : null}
                        </div>
                    </div>
                    <div className={Styles.btn}>
                        {receiveUpdatesBtn &&
                        <>

                            {/* <Button size={"xmd01"} btnHandler={handleSubmit(onSubmit)}  >Receive Updates</Button> */}
                            <Button size={"xmd01"} btnHandler={() => { setReceiveAllDone(true); setReceiveUpdatesBtn(false)}}>Receive Updates</Button>
                        </>
                        }
                        {receiveAlldone &&
                            <div className={Styles.success}>
                                <Alert variant={"enable"} className={`${Styles.success}${Styles.iconmd}`} type={"checkCircle"} heading={"All Done!"}
                                    paraSecond={"We'll let you know when Pickups are available in your neighborhood! You can let the now exit the app"} />
                            </div>
                        }

                    </div>
                </div>
            </form>

        </Modals>
    )
}

export default ReceiveService;