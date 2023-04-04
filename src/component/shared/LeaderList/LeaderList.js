import React from 'react'
import Styles from "../LeaderList/LeaderList.module.scss"
import PropTypes from 'prop-types';
import Image from '../Image';
import Heading from '../Heading';
import Text from '../Text';
import Icon from '../Icon';


const LeaderList = ({ heading, para, textTwo, textThird, textFourth, textFifth, variant, src, type, iconClass }) => {
    return (

        <div className={`${Styles.Account} ${Styles[variant]}`}>
            <div className={Styles.mainBox}>
                <Image className={Styles.mainImage} src={src} />
                <div className={Styles.contentBox}>
                    <Heading className={Styles.main} headingType={"h1"} >{heading}</Heading>
                    <div className={Styles.text}>
                        <Text variant={"smText"} className={Styles.first} >{para} </Text>
                        <div>
                            <Text variant={"smText"} className={Styles.second}>{textTwo}</Text>
                        </div>
                    </div>
                </div>
                 <div className={Styles.iconBox}>
                    <Icon className={`${Styles[variant]} `} type={type} customClass={iconClass} />
                </div>
            </div>

            <div className={Styles.bottomText}>
                <div>
                    <Text variant={"msmText"} className={Styles.third}>{textThird}</Text>
                </div>
                <div>
                    <Text variant={"msmText"} strong={'strong6'} className={Styles.fourth}>{textFourth}</Text>
                    <Text variant={"msmText"} strong={'strong6'} color={"primary2"} className={Styles.fourth}>{textFifth}</Text>
                </div>

            </div>
            </div>

    )
}

export default LeaderList;

LeaderList.propTypes = {
    className: PropTypes.string,
    heading: PropTypes.string,
    para: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
    src: PropTypes.string

}

