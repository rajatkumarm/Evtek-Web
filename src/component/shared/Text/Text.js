import React from 'react';
import PropTypes from 'prop-types';
import styles from './Text.module.scss';

/**
 * Name: Text
 * Desc: Render text
 * @param {node} children
 * @param {string} color
 * @param {isRequired} text
 * @param {string} variant
 * @param {string} className
 */

const Text = ({
  children,
  color,
  strong,
  variant,
  className,
  handleClick,
  htmlfor,
  family,
}) => {
  const fontColor = color ? styles[color] : ''
  const fontWeight = strong ? styles[strong] : ''
  const fontFamily = family ? styles[family] : ''
  return (
    <span
      htmlFor={htmlfor}
      className={`${styles[variant]} ${fontColor} ${fontWeight} ${fontFamily} ${[className]}`}
      onClick={handleClick}
    >
      {children}
    </span>
  )
}

// Default Props
Text.defaultProps = {
  variant: 'xxlText',
  className: '',
  color: 'primary',
  children: '',
  family:'',
  strong:'strong4'
}
// PropTypes Validation
Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  fontFamily: PropTypes.string,
}

export default Text
