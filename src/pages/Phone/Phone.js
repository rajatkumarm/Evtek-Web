import React from 'react';
import {
    Modals,
    Text,
    Input,
    Button,
    Heading,
    Image
} from '../../component/shared/index';
import styles from '../Email/Email.module.scss';
import Styles from './Phone.module.scss';
import { useHistory } from 'react-router-dom';

export default function Phone() {
    const history = useHistory();

    function handleClick() {
        history.push("/congratulation");
    }
    return (
        <Modals isIcon={false}>
            <div className={styles.email}>
                <div className={styles.emailHead}>
                    <Image src='images/evtekMain.png' alt={"Logo"} />
                    <Heading className={styles.emailHeading} headingType={"h4"}>Verify Phone</Heading>
                </div>
                <div className={styles.emailContent} >
                    <div>
                        <Text >We sent a verification code to the email</Text>
                    </div>
                    <div>
                        <Text className={styles.emailIdTxt}>347-000-0000</Text>
                    </div>
                </div>
                <Input type={"text"} className={`${styles.textInput} ${Styles.phoneTextInput}`} />

                <div className={`${styles.emailCaptchaResend} ${Styles.phoneBtnContent}`} >
                    <div>
                        <Button size='xmd01' btnHandler={handleClick}>Next</Button>
                    </div>
                    <div className={Styles.phoneResendBtn}>
                        <Button size='xmd01' variant='primaryDisable' className={`${styles.captchaBtn} `}>Resend Code</Button>
                    </div>
                </div>
            </div>
        </Modals>
    )
}

