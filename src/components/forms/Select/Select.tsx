import React from 'react'
import './Select.scss';

interface SelectProps {
    value: any;
    options: any;
    name: string;
    onChange: (e: React.FormEvent<HTMLSelectElement>) => void
}

const Select: React.FC<SelectProps> = ({ name, options, value, onChange }) => {
    return (
        <>
            <select value={value} onChange={onChange} className="form-control form-select">
                {
                    options.map((item: any, index: any) => (
                        <option value={item.id} key={index}>{item[name]}</option>
                    ))
                }
            </select>
        </>

    )
}

export default Select;