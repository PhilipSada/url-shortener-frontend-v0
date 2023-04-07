import React, { useState } from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import './ValidationError.scss';

interface ValidationErrorProps {
    message: Array<string> | string
}

const ValidationError: React.FC <ValidationErrorProps> = ({message}) => {

    if(Array.isArray(message)){

        return (
            <div className="validation-error">
                {
                    message && <div className="mt-2">{message.map((elem, index) => <div className="validation-error__msg mb-1" key={index}>
                    <span><RiErrorWarningFill className="icon" /></span><span>{elem}</span>
                </div>)}</div>
                }
               
            </div>
    
        )

    }

    return (
        <div className="validation-error">
            {
                message &&  <div className="validation-error__msg mb-1">
                <span><RiErrorWarningFill className="icon" /></span><span>{message}</span>
            </div>
            }
           
        </div>

    )
}

export default ValidationError;