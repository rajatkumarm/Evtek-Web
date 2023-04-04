import React from 'react'
import Styles from '../FormData/FormData.module.scss'
import PropTypes from 'prop-types';
import Text from '../Text';
import Icon from '../Icon';
import Radio from '../Radio';

export default function FormData({ type, text, heading, textSecond, iconClass, variant, label, id, textVariant, textColor, textVariantTwo, htmlfor,checked }) {
    return (
        <div className={Styles.formBox}>
            <div className={Styles.headingList}>
                <Text className={Styles.heading} variant="lgText" strong="strong6" >{heading}</Text>
                <Icon type={type} customClass={iconClass} />
            </div>
            <div className={Styles.radioBox}>
                <Radio size="xlgRadio" id={id} label={label} defaultChecked={checked} className={Styles.labelText} />
                <div className={Styles.textContentBox}>
                    <Text htmlfor={htmlfor} variant={textVariant} className={Styles.secondText}>{text}</Text>
                    <div>
                        <Text variant={textVariantTwo} color={textColor} className={Styles.secondText}>{textSecond}</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}


FormData.propTypes = {
    className: PropTypes.string,
    heading: PropTypes.string,
    para: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
    id: PropTypes.string,
}
