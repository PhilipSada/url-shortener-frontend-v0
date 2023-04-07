import React from 'react'
import './RadioButton.scss';

interface RadioButtonProps {
    id: string;
    checked: any;
    label?: string;
    withIcon?: boolean;
    icon?:any;
    value?:any;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void

}

const RadioButton: React.FC<RadioButtonProps> = ({ id, label, checked, withIcon, icon, value, onChange }) => {
    return (
        <div className="radio-button">
            {
                withIcon ? <div className="radio-btn-with-icon">
                    <input className="form-check-input" type="radio" id={id} checked={checked} value={value}
                        onChange={onChange} />
                    <label className="form-check-label mt-1" htmlFor={id}>
                        <div>{icon}</div>
                        <div> {label}</div>
                    </label>
                </div> :
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id={id} checked={checked}
                            onChange={onChange} />
                        <label className="form-check-label mt-1" htmlFor={id}>
                            {label}
                        </label>
                    </div>
            }

        </div>
    )
}

export default RadioButton