import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetail = ({course}) => {

    const {
        courseName,
        courseDetails,
        coursePhotoURL,
        currentPrice,
        review,
        instructor,
        identity
    } = course

    console.log(identity)

    return (
            <Link to={`/courses/${identity}`} className="card lg:w-72 bg-base-100 shadow-xl lg:mx-16 lg:mb-8 lg:mt-16 mt-8 my-6 mx-auto md:w-4/6 w-5/6">
                <figure className='border-pink-300 border-b-2'><img className='w-full h-36' src={coursePhotoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h6 className="card-title">
                    <span className='text-sm text-pink-600'>{courseName}</span>
                    </h6>

                    <div className="flex items-center">
                        <div><img className='h-6 w-6 rounded-full' src={instructor?.instructorPhotoURL} alt="" /></div>
                        <div className='ml-2 text-sm font-bold'>{instructor?.name}</div>
                    </div>

                    <p>{courseDetails?.slice(0,80)}...<Link className='text-primary'>see details</Link></p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline"><span className='text-xl text-pink-500 font-bold'>{currentPrice} $</span></div> 
                    <div className="badge badge-outline"><span className='text-sm font-bold text-purple-400'>{review}</span></div>
                    </div>
                </div>
            </Link>
    );
};

export default CourseDetail;