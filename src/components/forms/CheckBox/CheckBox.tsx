import React from 'react'
import './CheckBox.scss';

interface CheckBoxProps {
    id: string;
    checked: any;
    label?: string;
    withIcon?: boolean;
    icon?:any;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void

}

const CheckBox: React.FC<CheckBoxProps> = ({ id, label, checked, withIcon, icon, onChange }) => {
    return (
        <div className="checkbox">
            {
                withIcon ? <div className="checkbox__with-icon">
                    <input className="form-check-input" type="checkbox" id={id} checked={checked}
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

export default CheckBox