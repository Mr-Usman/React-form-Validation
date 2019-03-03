import React from 'react'
import "./Input.css";

 const Input = (props) => {
     const {type , value , id , name , errors , onChange, label} = props;
   return(
      <div className="inputContainer">
         <label htmlFor={id}>
           <span className={label}>{label}</span>
               <div className="inputWrapper">
                   <input
                       type={type}
                       value={value}
                       id={id}
                       name={name}
                       onChange={(e) => onChange && onChange(e)} />
               </div>
         </label>
           <div>
               {errors && errors.errorsObj[name] && <div className="error-wrapper">
                   <p className="error">{errors.errorsObj[name].message}</p>
               </div>}
           </div>
      </div>
   ) 
 }

 export default  Input;