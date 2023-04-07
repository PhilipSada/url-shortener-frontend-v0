import React from 'react'

interface InputProps extends React.LabelHTMLAttributes<HTMLLabelElement>{
    name: string
}

const Label: React.FC<InputProps> = ({name, ...restProps})=>{
    return (
        <>
          <label className="form-label" {...restProps}>{name}</label>
        </>
    )
}

export default Label