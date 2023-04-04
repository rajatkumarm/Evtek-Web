import React from 'react'
import Styles from "../Addcart/Addcart.module.scss"
import PropTypes from 'prop-types';
import Image from '../Image';
import Heading from '../Heading';
import Text from '../Text';
import Icon from '../Icon';
import Button from '../Button/Button';
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';


const Addcart = ({ heading, para, textTwo, textThree, textFour, textFive, textSix, textSeven, textEight, textNine, src, type, close, click, onClick }) => {
    const [counter, setCounter] = useState(1);
    const increase = () => {
        setCounter(count => count + 1);
    };
    const decrease = () => {
        if (counter === 0) {
            return;
        } setCounter(count => count - 1);
    };
    return (

        <div className={Styles.Account}>
            <div className={Styles.addcartMain}>
                <div className={Styles.cartImage}>
                    <Image className={Styles.mainImage} src={src} />
                    <div className={Styles.iconStyle}>
                        <Tooltip title="Currently, Click event is not developed">
                            <div>
                                <Icon type={type} customClass={Styles.infoIcon} />
                            </div>
                        </Tooltip>
                        <Text variant={"xxxlText"} className={Styles.first} color={"greenPrimary"}>{para} </Text>
                    </div>
                </div>
                <div className={Styles.addSecond}>
                    <Icon type={close} customClass={Styles.closeIcon} click={click} />
                    <div className={Styles.seconColumn}>

                        <div className={Styles.headingText}>
                            <div className={Styles.headBar}>
                                <Heading className={Styles.mainHead} headingType={"h1"} >{heading}</Heading>
                                <Text variant={"xxxlText"} className={Styles.second} color={"grayPrimary"}>{textTwo}</Text>
                            </div>
                            <div className={Styles.headcardBtn}>
                                <Button btnClass={`${Styles.cardGreenBtn} ${Styles.cardDisableBtn}`} size={"btnSm02"} color="primaryDisable"><Icon customClass={Styles} type='iconDollar' />{textThree}</Button>
                                <Button btnClass={Styles.cardGreenBtn} size={"btnSm02"}>{textFour}
                                    <Image className={Styles.recycleImage} src='images/homeIcon.png' />
                                </Button>
                            </div>
                        </div>
                        <div className={Styles.itemText}>
                            <Text variant={"xxxlText"} className={Styles.second}>{textFive}</Text>
                        </div>
                        <div>
                            <div className={Styles.allText}>
                                <Text variant={"xlText"} className={`${Styles.mr5} ${Styles.second}`} color={"grayPrimary"}>{textSix}</Text>
                                <div>  <Text variant={"xlText"} className={Styles.second} color={"grayPrimary"}>{textSeven}</Text></div>
                            </div>
                            <div className={Styles.allText}>
                                <Text variant={"xlText"} className={`${Styles.mr5} ${Styles.second}`} color={"grayPrimary"}>{textEight}</Text>
                                <div>
                                    <Text variant={"xlText"} className={Styles.second} color={"grayPrimary"}>{textNine}</Text>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.counterBtn}>
                            <Text variant={"big01Text"} className={Styles.second} color={"grayPrimary"} handleClick={decrease}>- </Text>
                            <Text variant={"xx5Text"} className={Styles.second} >{counter}</Text>


                            <Text variant={"big01Text"} className={Styles.second} color={"grayPrimary"} handleClick={increase}>+ </Text>
                        </div>
                        <div className={Styles.mainButton}>
                            <Button btnHandler={onClick} btnClass={Styles.addCart} variant="solidPrimary" size={"btnLg"}>Add to cart</Button>
                        </div>
                    </div>
                </div>
            </div>










        </div>

    )
}

export default Addcart;

Addcart.propTypes = {
    className: PropTypes.string,
    heading: PropTypes.string,
    para: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
    src: PropTypes.string,
    click: PropTypes.func,
    onClick: PropTypes.func,

}

