import { useState, forwardRef } from 'react';
import './formInput.css'

const FormInput = ({value, type, name, label, className, required = false, handleChange, readOnly, placeholder, forwardRef, errorMessage, maxLength, ...props }) => {
    
  const [touched, setTouched] = useState(false)

  return (
    <div className='input-wrapper'>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className={`form-input ${className}`}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleChange}
        onBlur={() => required ? setTouched(true) : setTouched(false)} // ! required true kelsa va required parameterini qoniqtirmasa input borderi qizil ranga o'zgaradi
        onFocus={() => name === 'confirmPassword' && setTouched(true)}
        touched={touched.toString()}
        maxLength={maxLength}
        readOnly={readOnly}
        ref={forwardRef}
        {...props}
      />
      {(required && errorMessage) && <div className="errorMessage">{errorMessage}</div>} 
    </div>
  );
};

export default FormInput;
