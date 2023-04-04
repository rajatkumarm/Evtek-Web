import React from 'react'
import Styles from '../ModelsList/ModelsList.module.scss'
import PropTypes from 'prop-types';
import Text from '../Text';
import Icon from '../Icon';
import Heading from '../Heading';

export default function ModelsList({ type, text, heading, textSecond,para, paraSecond,paraThird, textVariant, textColor, textVariantTwo, typeTwo,click }) {
    return (
        <div className={Styles.evtekModelContent}>
            <div className={Styles.modelHeading}>
                <div className={Styles.headContent}>
                    <Icon type={type} customClass={Styles.iconClass}  />
                    <Heading className={Styles.heading} headingType={"h2"} color={"primary2"} >{heading}</Heading>
                </div>
                <Icon type={typeTwo} customClass={Styles.iconClassTwo} click={click} />
            </div>
            <div className={Styles.paraText}>
                <Text variant={textVariant}  className={Styles.secondText}>{text}</Text>
                <Text variant={textVariant} color={textColor} className={Styles.secondText}>{para}</Text>
                <Text variant={textVariant}  className={Styles.secondText}>{paraSecond}</Text>

                <div className={Styles.learnMore}>
                    <Text variant={textVariantTwo}  className={Styles.secondText}>{textSecond}</Text>
                    <Text variant="smText" color="grayPrimary">{paraThird}</Text>
                </div>
            </div>
        </div>
    )
}


ModelsList.propTypes = {
    className: PropTypes.string,
    heading: PropTypes.string,
    para: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
}
