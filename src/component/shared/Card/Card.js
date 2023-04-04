import React from 'react'
import Styles from './Card.module.scss'
import propTypes from 'prop-types'
import { Image, Icon, Text,Button } from '../index'

const Card = ({src,cardHead,cardText,cardDisableBtn,greyText,onClick,imageClass }) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.cardImage}>
                <Text color={"greyPrimary"}>{greyText}</Text>
                <Image className={`${imageClass} ${Styles.cardGarbageImage}`} src={src} />
                <Icon click={onClick} type='iconAdd' customClass={Styles.addIcon} />
            </div>
            <div>
                <Text variant={"xxlText"}>{cardHead}</Text>
            </div>
            <div>
                <Text variant={"lgText"} color={"greyPrimary"} >{cardText}</Text>
            </div>
            <div className={Styles.cardBtn}>
                <Button size={"btnSm02"} color="primaryDisable"><Icon type='iconDollar' /> {cardDisableBtn}</Button>
                <Button btnClass={Styles.cardGreenBtn} size={"btnSm02"}>750 
                <Image className={Styles.recycleImage} src='images/homeIcon.png'/>
                </Button>
            </div>
            <div>
            </div>
        </div>
    )
}

Card.propTypes = {
    greyText:propTypes.string,
    src:propTypes.string,
    cardHead:propTypes.string,
    cardText:propTypes.string,
    cardDisableBtn:propTypes.string,
    onClick:propTypes.func,
    imageClass:propTypes.string,
}

export default Card
