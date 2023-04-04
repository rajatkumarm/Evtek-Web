import React from 'react'
import Styles from './MetricsList.module.scss';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import Button from '../Button/Button';
 const MetricsList = ({ className,heading,content,skipClick,nextHandler,backHandler }) => {

    return (
        <div className={`${className} ${Styles.mainBox}`}>
            <div className={Styles.skipText}>
                <Text handleClick={skipClick} family='raleway' variant={'xsText'} strong='strong8' color={"secondary"} > skip tutorial </Text>
            </div>
            <div className={Styles.mainHeading}>
                <Text family='raleway' strong='strong7' color={"secondary"} >{heading}</Text>
                <Text family='raleway' strong='strong5' color={"secondary"} >{content}</Text>
            </div>
            <div className={Styles.mainBtn}>
                <Button btnClass={Styles.btnOne} btnHandler={backHandler} size="sm0" color="navyPrimary">Back</Button>
                <div className={Styles.cnfBtn}>
                    <Button btnClass={Styles.btnOne} btnHandler={nextHandler} size="sm0" color="navyPrimary">Next</Button>
                </div>
            </div>

        </div>
    )
}
MetricsList.protoTypes = {
    className: PropTypes.string,
    heading: PropTypes.string,
    mcontent: PropTypes.string,
    skipClick: PropTypes.string,
    nextHandler: PropTypes.string,
    backHandler: PropTypes.string,

}
export default MetricsList
