import React from "react";
import PropTypes from 'prop-types';
import Styles from './Radio.module.scss'
import Label from "../Label";

export default function Radio({ value, radioLabel, onChange, id, size, variant, label, className, color, checked, disabled, reference, radioClass, labelColor,onClick }) {

  return (
    <div className={Styles.radioMain}>
      <input
        type="radio"
        name="radio"
        value={value}
        className={`${Styles[size]} ${Styles[variant]} ${Styles[color]} ${radioClass} `}
        label={radioLabel}
        defaultChecked={checked}
        onChange={onChange}
        id={id}
        disabled={disabled}
        reference={reference}
        {...reference}
        {...onChange}
        onClick={onClick}
      />
      <Label htmlFor={id} className={`${Styles.radioTxt} ${className} ${Styles[labelColor]}`} value={label} />
    </div>

  );
}
Radio.defaultProps = {
  size: "smRadio",
}
Radio.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.any,
  id: PropTypes.any,
  radioName: PropTypes.string,
  radioLabel: PropTypes.string,
  checked: PropTypes.any,
  disabled: PropTypes.any,
  labelVariant: PropTypes.string,

}
