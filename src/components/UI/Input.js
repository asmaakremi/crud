import { useState } from 'react';
import classes from './Input.module.css';

const Input = ({label ,formErrors,errorMessage ,onChange ,id , ...input}) => {
 const [focused, setFocused]=useState(false)
  const handleFocus=()=>{
    setFocused(true);
  }
  return (
    <div className={classes.input}>
      <label >{label}</label>
        <input {...input} onChange={onChange}  onBlur={handleFocus} focused={focused.toString()}  />
        <span className={classes.error}>{errorMessage}</span>
        {formErrors && input.name=="name" && <span className={classes.form__error} >{formErrors} </span>}
    </div>
  );
};

export default Input;
