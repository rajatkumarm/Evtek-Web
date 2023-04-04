import React from 'react'
import Styles from './Modals.module.scss'
import propTypes from 'prop-types';
import Icon from '../Icon';
import Image from '../Image';

const Modals = ({ children, isIcon,onClick,isImage }) => {
    return (
        <div className={Styles.BgMain}>
            <div className={Styles.main}>
                {isIcon && <Icon click={onClick} type={"iconclose"} customClass={Styles.Close}/>}
                {isImage &&
                <>
                <Image className={Styles.left} src='images/RefreshmentFirst.png' alt="refreshment" />
                <Image className={Styles.Right} src='images/RefreshmentSecond.png' alt="refreshment" />
                <Image className={Styles.RightSecond} src='images/RefreshmentThird.png' alt="refreshment" />
                </>
                }
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
Modals.defaultProps = {
    isIcon: true,
    isImage: true
}
Modals.protoType = {
    childern: propTypes.string,
    isIcon: propTypes.bool,
    isImage: propTypes.bool,
    onClick: propTypes.func,
}

export default Modals
