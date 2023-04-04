import React from 'react'
import Styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {
  Modals,
  Text,
  Label,
  Input,
  Button,
  Image,
} from '../../component/shared';


const Login = () => {
  // const history = useHistory();

  // const formHandler = () => {
  //     history.push('./');

  // }
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <Modals>
      <div className={Styles.Login}>
        <div className={Styles.logo}>
          <Image src='images/evtekLogo.png' alt={"Logo"} />
        </div>
        <div className={Styles.LoginText}>
          <Text>Login with your email and password</Text>
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
        <div className={Styles.pass} >
          <Label className={Styles.passText} value={"password"} />
          <Input type={"password"} className={Styles.passInput}
            name="name"
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
        <div className={Styles.btn}>
          <Button btnHandler={handleSubmit(onSubmit)} size={"xmd01"}>Login</Button>
        </div>
        <Link to={'reset-password'} className={Styles.forget} >forget Password</Link>
      </div>
    </Modals>
  )
}

export default Login
