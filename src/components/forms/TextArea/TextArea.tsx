import React from 'react'
import './TextArea.scss';

interface TextAreaProps{
    placeholder?: string
    value: any
    hasIcon?:boolean
    icon?:any
    size?:"lg"|"default";
    onChange: (e:React.FormEvent<HTMLTextAreaElement>) => void

}

const TextArea: React.FC<TextAreaProps> = ({placeholder, value, onChange, hasIcon, icon, size})=>{
    return (
        <div className="text-area">
              <textarea className={size === "lg" ? "form-control form-control-lg":"form-control"} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    )
}

export default TextArea