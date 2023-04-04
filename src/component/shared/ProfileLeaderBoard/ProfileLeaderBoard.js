import React from 'react'
import Styles from "../ProfileLeaderBoard/ProfileLeaderBoard.module.scss"
import PropTypes from 'prop-types';
import Image from '../Image';
import Text from '../Text';
import Icon from '../Icon';



const ProfileLeaderBoard = ({ type, text, number, variant, src, para, iconClass, textClass, textTwo ,textColortwo,onClick}) => {
    return (
        <div className={`${Styles.Account} ${Styles[variant]}  `} onClick={onClick}>
            <div className={Styles.MainBox}>
                <Icon className={`${Styles[variant]} `} type={type} customClass={iconClass} />
                <Text variant={"xx3Text"} className={Styles.first}>{number}</Text>
                <Image className={Styles.mainImage} src={src} />
                <Text variant={"mdText"} strong="strong5" className={Styles.first}>{para}</Text>
            </div>
            <div>
            <Text variant={"lgText"} strong="strong6" className={Styles.second} customClass={textClass}>{text}</Text>

            <Text variant={"lgText"} strong="strong9" color={textColortwo}  className={Styles.second} customClass={textClass}>{textTwo}</Text>
            </div>
        </div>

    )
}

export default ProfileLeaderBoard;

ProfileLeaderBoard.propTypes = {
    className: PropTypes.string,
    number: PropTypes.number,
    para: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
    src: PropTypes.string,


}

