import React from 'react';

const CourseDetail = () => {
    return (
            <div className="card lg:w-72 bg-base-100 shadow-xl lg:mx-16 lg:mb-8 lg:mt-16 mt-8 my-6 mx-auto md:w-4/6 w-5/6">
                <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div> 
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
    );
};

export default CourseDetail;