import React from 'react'
import Styles from '../DateSelection/DateSelection.module.scss'
import PropTypes from 'prop-types';
import Text from '../Text';

function DateSelection({text}) {
    return (
        <div className={`${Styles.dateBox} `}>
            <Text variant="xxlText" color={"secondary"} >Date Selected</Text>
            <div>
               <Text strong={"strong7"} color={"secondary"}>{text}</Text>
            </div>
          
        </div>

    )
}

export default DateSelection

DateSelection.propTypes = {
    text: PropTypes.string,
    className:PropTypes.string
   
}