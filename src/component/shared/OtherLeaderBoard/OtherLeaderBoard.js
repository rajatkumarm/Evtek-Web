import React from 'react'
import Styles from "../OtherLeaderBoard/OtherLeaderBoard.module.scss"
import PropTypes from 'prop-types';
import Image from '../Image';
import Heading from '../Heading';
import Text from '../Text';
import Icon from '../Icon';


const OtherLeaderBoard = ({ heading, para, variant, src, type, paraSecond, iconClass }) => {
    return (
        <div className={Styles.container}>
            <div className={`${Styles.OtherLeader} ${Styles[variant]}`}>
                <Image src={src} />
                <div className={Styles.contentBox}>
                    <Heading className={Styles.heading} >{heading}</Heading>
                    <div className={Styles.accountBox}>
                        <Text variant={"xsText"} color="secondary" className={Styles.mainText}>{para}</Text>
                    </div>
                </div>
                <div className={Styles.iconBox}>
                    <Icon className={`${Styles[variant]} `} type={type} customClass={iconClass} />
                    <Text color="grayPrimary" className={Styles.secondText}>{paraSecond}</Text>
                </div>
            </div>
        </div>
    )
}

export default OtherLeaderBoard;

OtherLeaderBoard.propTypes = {
    className: PropTypes.string,
    heading: PropTypes.string,
    para: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
    src: PropTypes.string

}

