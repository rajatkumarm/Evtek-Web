import React from 'react'
import Styles from '../AccountBox/AccountBox.module.scss'
import PropTypes from 'prop-types';
import Image from '../Image';

function AccountBox({ heading, para, variant, src, count, imageClass }) {
    return (
        <div className={`${Styles.Account} ${Styles[variant]}`}>
            <div className={Styles.accountHead}>
                <div className={Styles.accountCount}>{count}</div>
                <div className={Styles.mainHeading}> {heading}</div>
            </div>
            <div className={Styles.content}>{para}</div>
            <div className={Styles.accountImage}><Image className={imageClass} src={src} /></div>
        </div>
    )
}

export default AccountBox

AccountBox.propTypes = {
    className: PropTypes.string,
    heading: PropTypes.string,
    para: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string

}