import React from 'react';
// import { PrimaryButton } from '../buttons/PrimaryButton/PrimaryButton';
import './ErrorFallback.scss';

interface ErrorFallbackProps {
    error: Error;
    resetErrorBoundary: (...args: Array<unknown>) => void;
}

const ErrorFallback: React.ComponentType<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert">

            <div className="container">
                <div className="row justify-content-center align-items-center body">
                    <div className="col-lg-5 col-md-8 col-sm-12">
                        <div className="p-5">
                            <h4 className="text-center mb-4">Oops, An Error Occurred!</h4>
                            <p>Please wait for a few seconds and try again or contact us if the error persists</p>
                            {/* <pre>{error.message}</pre> */}
                            {/* <button onClick={resetErrorBoundary}>Try again</button> */}
                            {/* <PrimaryButton size="large" onClick={()=>window.location.reload()}>Try Again</PrimaryButton> */}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorFallback;