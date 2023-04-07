import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './SharedLayout.scss';
import { useNavigate } from 'react-router-dom';

type SharedLayoutProps = {
    children?: React.ReactNode;
};


const SharedLayout: React.FC<SharedLayoutProps> = ({ children}) => {

    return (
        <div className='shared-layout'>

            <div className="row">
                <div className="col-md-12">
                    <Header />
                    <div className="pt-4">{children}</div>
                </div>
            </div>
        </div>
    )
}


export default SharedLayout;