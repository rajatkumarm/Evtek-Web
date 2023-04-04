import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { BUTTONACTION } from './constant';

/** Render Button
* @param {string} variant
* @param {string} type
* @param {bool} block
 * @param {bool} disabled
* @param {func} btnHandler
 * @param {string} size
* @param {any} children
* @returns node
*/
const Button = ({
    variant,
    size,
    type,
    block,
    disabled,
    btnHandler,
    color,
    background,
    children,
    btnClass,

}) => {
    return (
        <button type={type}
            className={`${styles.button} ${styles[variant]} ${styles[size]} ${btnClass ? btnClass : ''} ${styles[color]} ${styles[background]}${block ? styles.block : ''
                } `}
            disabled={disabled}
            onClick={btnHandler}
        >
            {children}
        </button>
    );

};
Button.propTypes = {
    variant: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    btnHandler: PropTypes.func,
    children: PropTypes.any,
    text: PropTypes.string,
    color: PropTypes.string,
    btnClass: PropTypes.any,
};


Button.defaultProps = {
    variant: "solidPrimary",
    size: "sm",
    type: BUTTONACTION.BUTTON,
    block: false,
    disabled: false,
    children: 'Button Title',
}
export default Button;