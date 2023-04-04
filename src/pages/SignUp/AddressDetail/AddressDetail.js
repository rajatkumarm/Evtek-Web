import React from 'react';
import { Button, Heading, Label, Modals, Text ,Radio, Image} from '../../../component/shared';
import Styles from './AddressDetail.module.scss';
// import {useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";

const AddressDetail = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    // let history = useHistory();

    // function handleClick() {
    //     history.push("/verify-email");
    // }
    return (
        <div>
            <Modals>
                <div className={Styles.modal}>
                    <div className={Styles.logoText}>
                        <Image src="images/evtekMain.png" alt='evtekMain' />
                        <Heading className={Styles.headText} >Create an Account - Account Details</Heading>
                    </div>
                    <div className={Styles.addressMain}>
                        <div className={Styles.headTxt}>
                            <Text children={"Please verify your address"} className={Styles.mainTxt} />
                        </div>
                        <div className={Styles.radioHead} >
                        <Radio name="radio" id="radioOne" type="radio"
                                reference={register("radio", { required: "*required" })}
                            />
                            <div className={Styles.errorMsg}>
                                {errors.radio ? <div>{errors.radio.message}</div> : null}
                            </div>
                            <div className={Styles.radioMain}>
                                <div>
                                    <Label htmlFor="radio" className={Styles.radioText} value={"You entered:"} />
                                </div>
                                <div className={Styles.addressChange}>
                                    <Text htmlFor="radio" children={"23 Evtek Street, Brooklyn, NY 11205"} className={Styles.addressTxt} />
                                </div>
                            </div>
                        </div>
                        <div className={Styles.radioHead} >
                            <Radio  name="radio" id="radioTwo" type="radio"
                                reference={register("radio", { required: "*required" })}
                            />
                            <div className={Styles.errorMsg}>
                                {errors.radio ? <div>{errors.radio.message}</div> : null}
                            </div>
                            <div className={Styles.radioMain}>
                                <div>
                                    <Label htmlFor="radioBtm" className={Styles.radioText} value={"Suggested:"} />
                                </div>
                                <div className={Styles.addressLine}>
                                    <Text htmlFor="radioBtm" children={"23 Evtek Street, Brooklyn, NY 11205-11753"} className={Styles.addressTxt} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.radioBtn}>
                        <Button size="xmd01" variant='solidPrimary'  btnHandler={handleSubmit(onSubmit)}>Confirm</Button>
                    </div>
                </div>
            </Modals>
        </div>
    );
}

export default AddressDetail;
