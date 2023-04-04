import React from "react";
import PropTypes from 'prop-types';
import Styles from './Input.module.scss'

/** Render TextField
 * @param {string} variant
 * @param {string} type
 * @param {string} label
 * @param {string} inputId
 * @param {string} name
 * @param {string} placeholder
 * @param {string} disabled
 * @param {any} reference
 * @param {string} value
 * @param {any} onChange
 * @param {any} maxLength
 * @param {string} pattern
 * @param {string} className
 * @param {number} rows
 * @param {any} inputProps
 * @param {any} readOnly
 * @returns node
 */
const Input = ({ label,defaultChecked, pattern, defaultValue,autoComplete, inputProps , onChange, reference, readOnly, onKeyUp, onKeyPress, maxLength, variant, name, inputId, disabled, value, type, className, rows, cols, placeholder,onClick }) => {
  switch (type) {
    case "textarea":
      return (
        <textarea
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          className={`${Styles[variant]} ${Styles.Input}  ${[className]}`}
          rows={rows}
          cols={cols}
          id={inputId}
          inputProps={inputProps}
          name={name}
          defaultChecked={defaultChecked}
        ></textarea>
      );
    default:
      return (
        <input
          label={label}
          autoComplete={autoComplete}
          type={type}
          placeholder={placeholder}
          className={`${Styles[variant]} ${Styles.Input}   ${className}`}
          value={value}
          id={inputId}
          disabled={disabled}
          defaultValue={defaultValue}
          name={name}
          maxLength={maxLength}
          onKeyUp={onKeyUp}
          onKeyPress={onKeyPress}
          readOnly={readOnly}
          defaultChecked={defaultChecked}
          {...reference}
         onChange= {onChange}
          {...pattern}
          onClick={onClick}
        />
      );
  }
};

Input.propTypes = {
  variant: PropTypes.string,
  inputId: PropTypes.string,
  type: PropTypes.any,
  className: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.any,
  pattern: PropTypes.string,
  disabled: PropTypes.string,
  inputProps: PropTypes.any,
  autocomplete: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.any,
  reference: PropTypes.any,
  defaultChecked:PropTypes.any,
  onClick:PropTypes.func
}

export default Input;

