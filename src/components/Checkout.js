import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const premiumCourseData = useLoaderData()
    console.log(premiumCourseData)
    return (
            <div className='lg:shadow-xl h-full'>
                <div className="card mx-auto my-12 w-72 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cookies!</h2>
                        <p>We are using cookies for no reason.</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Accept</button>
                        <button className="btn btn-ghost">Deny</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Checkout;