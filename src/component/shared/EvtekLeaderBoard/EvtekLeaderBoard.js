import React from 'react'
import Styles from "../EvtekLeaderBoard/EvtekLeaderBoard.module.scss"
import PropTypes from 'prop-types';
import Image from '../Image';
import Heading from '../Heading';
import Text from '../Text';
import Icon from '../Icon';


const EvtekLeaderBoard = ({ heading, para, textTwo, textThird, textFourth, variant, src, type, iconClass }) => {
    return (
        <div>
            <div className={`${Styles.Account} ${Styles[variant]}`}>
                <Image className={Styles.mainImage} src={src} />
                <div className={Styles.contentBox}>
                    <Heading className={Styles.main} headingType={"h2"} color={"orangeprof"}>{heading}</Heading>
                    <Text variant={"mdText"} className={Styles.first} color={"orangeprof"}>{para} </Text>
                    <div>
                        <Text variant={"smText"} color={"grayPrimary"} className={Styles.second}>{textTwo}</Text>
                    </div>
                    <div className={Styles.bottomText}>
                        <Text variant={"msmText"} color={"grayPrimary"} className={Styles.third}>{textThird}</Text>
                        <Text variant={"msmText"} strong={'strong6'} className={Styles.fourth}>{textFourth}</Text>
                    </div>
                </div>
                <div className={Styles.iconBox}>
                    <Icon className={`${Styles[variant]} `} type={type} customClass={iconClass} />
                </div>
            </div>
        </div>
    )
}

export default EvtekLeaderBoard;

EvtekLeaderBoard.propTypes = {
    heading: PropTypes.string,
    para: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
    textTwo: PropTypes.string,
    textThird: PropTypes.string,
    textFourth: PropTypes.string,
    src: PropTypes.string

}

