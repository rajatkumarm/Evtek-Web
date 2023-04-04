import React from 'react'
import Styles from '../CancleBox/CancleBox.module.scss'
import PropTypes from 'prop-types';
import Text from '../Text';
import Heading from '../Heading';
import Button from '../Button/Button';


function CancleBox({ heading, textOne,btnSize,btnName }) {
    return (
        <div className={`${Styles.canclePickup} `}>
            <div className={Styles.mainBox}>
                <div className={Styles.headingBox}>
                    <div className={Styles.cnfHeading}>
                        <Heading >{heading}</Heading>
                    </div>
                    <div className={Styles.cnfText}>
                        <Text>{textOne}</Text>
                    </div>
                </div>
                
                <div className={Styles.mainBtn}>
                    <Button size="pinkLg" color="pinkPrimary">Cancel</Button>
                    <div className={Styles.cnfBtn}  >
                        <Button size={btnSize} color="solidPrimary">{btnName}</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CancleBox

CancleBox.propTypes = {
    className: PropTypes.string,
    heading: PropTypes.string,
    textOne: PropTypes.string,
    variant: PropTypes.string,
    btnSize:PropTypes.string,
    btnName:PropTypes.string,

}