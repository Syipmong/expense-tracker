import React from 'react';
import './404.css';

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Oops! The page you are looking for does not exist.</p>
            <img src="/images/404-image.png" alt="404 Error" className="not-found-image" />
            <a href="/" className="not-found-link">Go back to homepage</a>
            {/* Images not configured yet */}
        </div>
    );
};

export default NotFoundPage;    
