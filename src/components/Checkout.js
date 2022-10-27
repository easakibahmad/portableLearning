import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const premiumCourseData = useLoaderData()
    console.log(premiumCourseData)
    return (
            <div className='lg:shadow-xl py-16 h-full'>
                <p className="mb-16 text-center text-xl text-rose-900 font-bold">Build yourself up, we are with you</p>

                <div className='m-8 lg:grid lg:grid-cols-5 align-center'>
                <div className='lg:col-span-1'>
                    <p className='text-rose-900 text-center text-sm font-bold pb-8'>Selected Course:</p>
                </div>
                <div className="lg:col-span-4 card mx-auto w-72 bg-neutral text-neutral-content">
                        <div className="card-body items-center">
                            <h2 className="card-title text-sm uppercase text-warning font-bold">{premiumCourseData[0].courseName}</h2>
                            <p className="text-center text-warning">by</p>
                            <div className='flex justify-center items-center'>
                                <div>
                                    <img className='rounded-full h-12 w-12' src={premiumCourseData[0].instructor.instructorPhotoURL} alt="instructor" />
                                </div>
                                <div className='text-sm ml-2 uppercase text-warning'>
                                    {premiumCourseData[0].instructor.name}
                                </div>
                            </div>
                            <div className="text-neutral-50 text-xl uppercase">
                                <span className='text-sm'>price:</span> <span className='text-2xl font-bold'>{premiumCourseData[0].currentPrice}$</span>
                            </div>
                            <div className="card-actions justify-end">
                            <button className="btn btn-wide btn-outline btn-warning">Proceed to payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default Checkout;