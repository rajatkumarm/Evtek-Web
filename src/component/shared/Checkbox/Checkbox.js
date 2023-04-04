import React from "react";
import PropTypes from 'prop-types'
import Styles from './Checkbox.module.scss'
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

const Checkbox = ({ id, value, onChange, checked,className,label,variant,reference, }) => {
  return (
    <div className={Styles.Checkbox}>
      <input
        id={id}
        type="checkbox"
        value={value}
        onChange={onChange}
        className ={`${Styles.check} ${Styles[variant]}`}
        defaultChecked ={checked}
        reference={reference}
        {...reference}
          {...onChange}
        
      />
      <Label htmlFor={id} className={`${className} ${Styles.Checktext}`} value={label} />
    </div>
  );
}

 Checkbox.propTypes = {
  value:PropTypes.any,
  onChange:PropTypes.func,
  checked:PropTypes.bool,
  id:PropTypes.string,
  label:PropTypes.string,
  variant:PropTypes.string,
}

export default Checkbox;


