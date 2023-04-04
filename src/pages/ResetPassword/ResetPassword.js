import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Styles from './ResetPassword.module.scss'
import { useForm } from "react-hook-form";
import {
  Text,
  Label,
  Input,
  Button,
  Heading,
  Image,
  Modals,

} from '../../component/shared'
const ResetPassword = () => {
  const { register, handleSubmit, formState: { errors },  watch } = useForm({
    mode: 'onChange',
  });
  const onSubmit = data => console.log(data);
  console.log(errors);
  // const { password } = getValues();
  const [showRec, setShowInfoRec] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showHideEmail, setShowHideEmail] = useState(true);
  const [success, setSuccess] = useState(false);
  const [hidebtn, setHidebtn] = useState(true);
  const [showbtn, setShowbtn] = useState(false);
  const [showHidePassword, setHidePassword] = useState(true);
  // const history = useHistory();
  const ShowInfo = () => {
    setShowInfoRec(true)
    setInterval(() => {
      setShowNewPassword(true)
      setShowHideEmail(false)
    }, 5000);
  }
  const SuccessMsg = () => {
    setSuccess(true)
    setHidePassword(false)
    setShowbtn(true);
    setHidebtn(false);
  }
  // const handleClick = () => {
  //   history.push('/');
  // }

  return (

    <Modals>
      <form onSubmit={handleSubmit(onSubmit)} className={Styles.Login}>
        <div className={Styles.logo}>
          <Image src='images/evtekLogo.png' alt="Logo" />
        </div>
        <Heading className={Styles.heading} >Password Reset</Heading>
        {showHideEmail && (
          <>
            <div className={Styles.LoginText}>
              <Text>Please enter your email below to get a password reset link</Text>
            </div>
            <div className={Styles.email}>
              <Label className={Styles.eText} value={"email"} />
              <Input className={Styles.textInput} type="email"
                name="email"
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
            <div className={Styles.btn}>
              <Button size={"xmd01"} variant={showRec ? 'teritaryGreen' : 'solidPrimary'} btnHandler={ShowInfo}>{showRec ? 'Resend Link' : 'Login'}</Button>
            </div>
            {showRec &&
              <Link to={'#'} className={Styles.resendLink} >We sent you a link at the email above. Please use it to set a new password</Link>
            }
          </>)}

        {showNewPassword && (
          <div>
            {showHidePassword && (
              <>
                <div className={Styles.pass} >
                  <Label className={Styles.passText} value={"new password"} />
                  <Input type={"password"} name="name"
                    reference={register("password", {
                      required: "*required",
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
                <div className={Styles.rePassword} >
                  <Label className={Styles.passText} value={"re-enter new password"} />
                  <Input size={"44"} type={"password"} name="cpassword" reference={register("cpassword", {
                    required: "*password required",
                    validate: (val) => {
                      if (watch('password') !== val) {
                        return "Your passwords do no match";
                      }
                    },
                  })} />

                  <div className={Styles.errorMsg}>

                    <p>{errors.cpassword?.message}</p>
                  </div>
                </div>
              </>
            )}

            {success &&
              <div className={Styles.passSuccess}>
                <Text color={"primary2"}  >Your password has been successfully changed</Text>
              </div>
            }
            <div className={Styles.btn}>
              {hidebtn ?
                <Button size={"xmd01"} btnHandler={SuccessMsg}>Save</Button>
                : null}
              {showbtn ?
                <Button size={"xmd01"}>Back to Login</Button>
                : null}
            </div>
          </div>
        )}
      </form>
    </Modals>
  )
}

export default ResetPassword
