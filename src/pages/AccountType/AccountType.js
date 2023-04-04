import React from 'react'
import Styles from './AccountType.module.scss';
import { useForm } from "react-hook-form";

import {

  Modals,
  Button,
  Label,
  Text,
  Input,
  Radio,
  Icon,
  Image,

} from '../../component/shared/index'
// import { useHistory } from 'react-router-dom';
import { useState } from 'react';
const AccountType = () => {
  const [show, setShow] = useState(false);
  // const history = useHistory();

  // const handleClick = () => {
  //   history.push('/zipcode');
  // }
  const { register, handleSubmit, formState: { errors }, } = useForm({
    mode: 'onChange',
  });
  const onSubmit = data => console.log(data);
  return (
    <Modals>
      <form className={Styles.AccountTypeMain}>
        <div className={Styles.logo}>
          <Image src='images/evtekLogo.png' alt={"Logo"} />
        </div>
        <div className={Styles.serviceText} >
          <Text>Let’s check if Evtek currently services you neighborhood</Text>
        </div>
        <div className={Styles.account}>
          <Label className={Styles.accountText} value={"Account type"} />
          <span className={Styles.labelStar}>*</span>
        </div>
        <div className={Styles.radiobtn}>
          <div className={Styles.radioContent}>
            <Radio color={"radioTxt"} id={"radio1"} className={Styles.radioText} label={"Individual"} reference={register("radioOne", { required: "*required" })} />
            <Radio id={"radio2"} className={Styles.radioTextTwo} label={"Business"} reference={register("radioOne", { required: "*required" })} />
          </div>
          <div className={Styles.errorMsg}>
            {errors.radioOne ? <div>{errors.radioOne.message}</div> : null}
          </div>
        </div>

        {/* zipcode  start*/}
        <div className={Styles.account} >
          <Label className={Styles.accountText} value={"zipcode"} />
          <span className={Styles.labelStar}>*</span>
        </div>
        <div className={Styles.AccountInputMain}>
          <Input onClick={() => setShow(!show)} className={Styles.zipInput} reference={register("zipcode", {
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
            {errors.zipcode ? <div>{errors.zipcode.message}</div> : null}
          </div>
          {show &&
            <div className={Styles.zipMain}>
              <div className={Styles.zipOne}>
                <Text variant={"mdText"}>11201</Text>
                <Icon customClass={Styles.rightIcon} type="iconFill" />
              </div>

              <div className={Styles.zipTwo}>
                <Text variant={"mdText"}>11223</Text>
                <Icon customClass={Styles.actionIcon} type="iconFill" />
              </div>

            </div>
          }
        </div>


        {/* Log in Button */}


        <div className={Styles.btn}>
          <Button btnHandler={handleSubmit(onSubmit)}>Continue</Button>
        </div>
      </form>
    </Modals>







  )
}











export default AccountType