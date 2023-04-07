import React from 'react';
import './Button.scss';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children?: React.ReactNode; // make the component able to receive children elements
    className?: string;
};


export const Button = ({
    onClick,
    children,
    className,
    ...restProps
 
}: ButtonProps) => {
  
    const getButtonClasses = () => {

        // primary ? buttonClass += " button--primary" : null;
        // secondary ? buttonClass += " button--secondary" : null;
        // tertiary ? buttonClass += " button--tertiary" : null;
        // auth ? buttonClass += " button--auth" : null;
        // transparent ? buttonClass += " button--transparent" : null;
        // size === "sm" ? buttonClass += " button--sm" : null;
        // size === "md" ? buttonClass += " button--md" : null;
        // size === "lg" ? buttonClass += " button--lg" : null;
        // fullWidth ? buttonClass += " button--full-width" : null;
        // disabled ? buttonClass += " button--disabled" : null;
    }

    return (
        <button
            onClick={onClick}
            className={className}
            {...restProps}>
            {children}
        </button>
    )
}