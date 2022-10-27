import React from 'react';
import { Link } from 'react-router-dom';

const FrequentlyAskedQuestions = () => {
    return (
        <div className='shadow-xl py-16 flex justify-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex justify-center my-4'>
                <h2 className="card-title uppercase text-rose-900">About Us</h2>
                </div>
                <p>
                Every quarter, the PORTABLE LEARNING team analyzes and shares trends based on what employees are learning across our thousands of students around the world. With access to billions of data points, we can provide a unique perspective on the most in-demand job skills modern employees need to thrive in today’s dynamic workforce and how organizations can tie learning to business outcomes.
                </p>
                <div className="card-actions justify-center">
                <Link to='/courses'><button className="btn btn-primary">See Courses</button></Link>
                </div>
            </div>
            </div>            
        </div>
    );
};

export default FrequentlyAskedQuestions;