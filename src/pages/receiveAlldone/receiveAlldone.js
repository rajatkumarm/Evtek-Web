import React from 'react'
import Styles from './receiveAlldone.module.scss';
import {
    Modals, Text,Label, Input,Alert, Heading,Checkbox,Image} from '../../component/shared/index'

const receiveAlldone = () => {
    return (
        <Modals>
            <div className={Styles.Receive}>
                <div className={Styles.logoText}>
                    <Image src='images/evtekLogo2.png' alt={"Logo"} className={Styles.Logo} />
                    <Heading className={Styles.heading} >Receive Service Updates</Heading>
                </div>

                <div className={Styles.Login}>

                    <Text className={Styles.receiveText} >Enter your name and email below to sign up for updates</Text>
                    <div className={Styles.email}>
                        <Label className={Styles.eText} value={"name"} />
                        <Input className={`${Styles.textInput} ${Styles.textInput01}`} />
                    </div>
                    <div className={Styles.pass} >
                        <Label className={Styles.passText} value={"email"} />
                        <Input type={"email"} className={Styles.textInput01}/>
                    </div>

                    <Checkbox id="check" type="checkbox" label={"receive Evtek’s weekly newsletter"}/>
                    <div className={Styles.success}>
                        <Alert variant={"enable"} className={`${Styles.success}${Styles.iconmd}`} type={"checkCircle"} heading={"All Done!"}
                            paraSecond={"We'll let you know when Pickups are available in your neighborhood! You can let the now exit the app"} />
                    </div>
                </div>
            </div>

        </Modals>
    )
}

export default receiveAlldone;