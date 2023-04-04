import React from "react";
import PropTypes from 'prop-types'
import Styles from './RadioCheckBox.module.scss'
import Label from "../Label";

/**
 * Render Custom CheckBox
 * @param {func} onChange
 * @param {bool} defaultChecked
 * @param {any} value
 * @param {string} id
 * * @param {string} label
 * @returns node
 */

const RadioCheckBox = ({ id, value, onChange, checked,className,label,variant,color,disabled }) => {
  return (
    <div className={Styles.Checkbox}>
      <input
        id={id}
        type="checkbox"
        value={value}
        onChange={onChange}
        className={`${Styles[variant]} ${[Styles.check]} ${Styles[color]}` }
        defaultChecked ={checked}
        disabled={disabled}
      />
      <Label htmlFor={id} className={`${className} ${Styles.Checktext}  `} value={label} />
    </div>
  );
}

 RadioCheckBox.propTypes = {
  value:PropTypes.any,
  onChange:PropTypes.func,
  defaultChecked:PropTypes.bool,
  id:PropTypes.any,
  label:PropTypes.string,
  color:PropTypes.string,
  disabled:PropTypes.string,

}

export default RadioCheckBox;


