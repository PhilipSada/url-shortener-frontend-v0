import React from 'react';
import CreateLinkForm from './components/CreateLinkForm/CreateLinkForm';
import './Home.scss';

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="home__hero-container">
                <div className="home__hero-text">
                    <h2>The URL Shortener <span>you need</span> to use</h2>
                    <p className="mt-4">Linkrplus is a good URL shortener that would make shortening various urls easy. Get started today</p>
                </div>
                <div className="home__hero-form mt-5">
                    <CreateLinkForm />
                </div>
            </div>
        </div>

    )
}

export default Home;