import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...oprs})=> (
    <div className="group">
        <input type="text" className="form-input" onChange={handleChange}{...oprs} />
        { 
          label ? 
          (<label className={`${oprs.value.length ? 'shrink': ''} form-input-label`} >{label}</label>)
          :null 
        }
    </div>
)
export default FormInput;