import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorRoute = () => {
    const error = useRouteError(); 
    return (
        <div >
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=1060&t=st=1669477773~exp=1669478373~hmac=0e3114fe6dab2bc7f1361762ed526aab5443f829adaa47ad0661ca69e85c7a72")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Ooops</h1>
                        <p className="mb-5">{error.statusText || error.message}</p>
                        <Link to='/'><button className="btn btn-error">Go back Home? (recommended)</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorRoute;