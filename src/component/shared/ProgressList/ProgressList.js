
import React from 'react'
import Styles from "../ProgressList/ProgressList.module.scss"
import PropTypes from 'prop-types';
import Image from '../Image';
import Text from '../Text';
import Icon from '../Icon';



const ProgressList = ({ type, text, number, variant, src, para, iconClass, textClass }) => {
    return (
        <div className={`${Styles.Account} ${Styles[variant]}`}>
            <div className={Styles.MainBox}>
                <Icon className={`${Styles[variant]} `} type={type} customClass={iconClass} />
                <Text variant={"xx3Text"} className={Styles.first}>{number}</Text>
                <div className={Styles.listBox}>
                    <Image className={Styles.mainImage} src={src} />
                    <Text variant={"xsText"} className={Styles.first}>{para}</Text>
                    <Text variant={"msmText"} strong="strong6" className={Styles.second} customClass={textClass}>{text}</Text>
                </div>
            </div>
        

        </div>

    )
}

export default ProgressList;

ProgressList.propTypes = {
    className: PropTypes.string,
    number: PropTypes.number,
    para: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
    src: PropTypes.string,


}

