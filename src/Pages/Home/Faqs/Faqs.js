import React from 'react';

const Faqs = () => {
    return (
        <div>
            <div>
            <h1 className='m-5 p-5 text-center text-2xl'>Frequently Asked questions</h1>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How can we trust this process?
                </div>
                <div className="collapse-content">
                    <p> The success of any business depends on trust. So, you will have to trust us on this.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                Is there any guarantee of these laptops?
                </div>
                <div className="collapse-content">
                    <p>No, you wont get any guarantee officially. But our sellers goes through a process that makes them trusworthy.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                Can i get products of any other company?
                </div>
                <div className="collapse-content">
                    <p>This question belongs to our expansion process. If we get enough support from our fellow sellers and buyers then its possible.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Faqs;