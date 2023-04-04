import React from 'react';
import {
  Modals,
  Text,
  Input,
  Button,
  Heading,
  Image
} from '../../component/shared/index';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import Styles from './Email.module.scss';
import { useHistory } from 'react-router-dom';
import Spinner from './Spinner/Spinner';
import Icon from '../../component/shared/Icon/Icon';
export default function Email() {
  
  const [input, setInput] = useState("");
  const [valid, setValid] = useState(false);
  const [show, setShow] = useState(true);
  const [img, setImg] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showcaptcha, setShowCaptcha] = useState(true);
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  function handleClick() {
      history.push("/verify-phone");
  }
  useEffect(() => {
    loadCaptchaEnginge(6);
    console.log("loading captcha...");
  }, []);


  useEffect(() => {
    if (loading) {
      setInterval(() => {
        setLoading(false);
        setImg(true)
      }, 1000);
    }
  }, [loading]);

  const onSubmit = (event) => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(!loading);
      setShow(false);
    }, 0);
    event.preventDefault();
    console.log(validateCaptcha(input));
    if (validateCaptcha(input) === true) { setValid("Captcha Matched") }
    else { setValid("Invalid captcha") }
    setInput("");
    setVisible(true);
    setShowCaptcha(false);
  };
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const debounceHandler = useCallback((func, timeout) => {
    return debounce(func, timeout);
  }, []);
  return (
    <Modals isIcon={false}>
      <div className={Styles.email}>
        <div className={Styles.emailHead}>
          <Image src='images/evtekMain.png' alt={"Logo"} />
          <Heading className={Styles.emailHeading} headingType={"h4"} Verify Email >Verify Email</Heading>
        </div>
        <div className={Styles.emailContent} >
          <div>
            <Text>We sent a verification code to the email</Text>
          </div>
          <div>
            <Text className={Styles.emailIdTxt} >evtek.verify@gmail.com</Text>
          </div>
        </div>
        <Input type={"text"} className={Styles.textInput} />
        <div className={Styles.emailCaptcha} >
          <Text className={Styles.emailCaptchaText} >How many aluminum cans do you see?</Text>
          <div className={Styles.captchaCode}>
            {
              showcaptcha ? 
            <LoadCanvasTemplate reloadText="Resend Captcha" />
          : null  
          }
            </div>
          <div >
            <form onSubmit={onSubmit} className={Styles.emailCaptchaInfo}>
              <Input name="captcha" autocomplete="off" inputId="user_captcha_input"
                onChange={debounceHandler(handleChange, 200)}
                val={input}
                type={"text"} className={Styles.captchaInput}
              />
              {show ? <Button type="submit" variant='solidPrimary'>Submit</Button> : null}
              {loading ? <Spinner /> : null}
              {img ? <Icon type={"iconGreentick"} customClass={Styles.successImg} /> : null}
            </form>
          </div>
          {valid ? <div className={Styles.showMsg}>{String(valid)}</div> : null}
        </div>

        <div className={Styles.emailCaptchaResend}>
        {
        visible ? 
          <Button  variant='solidPrimary' size={'xmd01'} btnHandler={handleClick} className={Styles.captchaBtn}>Next</Button>
          : null
        } 
          </div>
      </div>

    </Modals>
  )
}

//All comment code for react-hook-form library.