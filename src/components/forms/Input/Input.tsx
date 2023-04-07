import React from 'react'
import './Input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    extraElements?:any;
    iconClassName?:string;
    inputWrapperClassName?:string;
}

const Input: React.FC<InputProps> = ({type, placeholder, value, onChange, extraElements, size, disabled, inputWrapperClassName, iconClassName, className, ...restProps})=>{
    return (
        <div className="input">
            {
                extraElements ? 
                <div className="input__wrapper">
                    <input disabled={disabled} type={type} className={className} placeholder={placeholder} value={value} onChange={onChange} {...restProps}/>
                    {extraElements}
                </div>:
                <input type={type} disabled={disabled} className={className} placeholder={placeholder} value={value} onChange={onChange} {...restProps}/>
            }
        
        </div>
    )
}

export default Input