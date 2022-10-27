import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FaFileDownload } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const IndividualCourseDetails = () => {

    const individualData = useLoaderData()

    const {coursePhotoURL, 
           courseName,
           courseDetails,
           currentPrice,
           previousPrice,
           instructor,
           studentFeedback,
           students,
           totalStudents,
           courseID
            } = individualData
    console.log(individualData)


    const download = `download ${courseName} file now`
    return (
        
            <div className='pt-12 pb-12 shadow-xl'>
                <div className="flex justify-around items-center px-8 py-12" >
                <div className='font-bold pr-2'>
                   <span className='text-xl pr-2'>Welcome to the best course</span> <span className='lg:text-4xl text-2xl text-yellow-700'>{courseName}</span> 
                </div>
                <Pdf targetRef={ref} filename={courseName}>
                     {({ toPdf }) => <Link onClick={toPdf}><span className='tooltip text-red-700' data-tip={download}><FaFileDownload></FaFileDownload></span></Link>}
                  </Pdf>
                </div>
                  
                <div ref={ref}>
                <div className="hero ">
                <div className="hero-content flex-col  lg:flex-row-reverse">
                    <img src={coursePhotoURL} className="w-72 lg:w-60 h-52 rounded-lg shadow-2xl" alt=''/>
                    <div>
                    <h1 className="lg:text-2xl text-xl font-bold text-rose-900">{courseName}</h1>
                    <div className='flex lg:justify-start justify-center mt-6'>
                    <div className="mr-4 badge badge-outline"><span className='text-xl text-pink-500 font-bold'>{currentPrice} $</span></div> 
                    <div className="badge badge-outline"><span className='text-2xl line-through font-bold text-pink-700'>{previousPrice} </span><span className='text-2xl text-pink-700 pl-1 font-bold'> $</span></div>
                    </div>
                    <div className='flex lg:justify-start justify-center'><button className="btn  bg-rose-900 btn-outline btn-success lg:mt-6 mt-6 ">Enroll Now</button></div>
                   
                    </div>
                </div>
            </div>


                <div className='grid grid-cols-5 m-8'>
                    <div className='col-span-1 text-sm text-rose-900 font-bold'>Already enrolled: </div>
                        <div className='col-span-1 lg:text-base text-sm'>{totalStudents} students</div>
                </div>

                <div className='m-8 grid grid-cols-5'>
                    <div className='col-span-1'>
                        <p className='text-sm text-rose-900 font-bold'>About our course:</p>
                    </div>
                        <div className='col-span-4 lg:pr-16'>
                            <p className='lg:text-base text-sm'>{courseDetails}</p>
                        </div>
                </div>

                <div  className='m-8 grid grid-cols-5 align-center'>
                <div className='col-span-1'>
                    <p className='text-sm text-rose-900 font-bold'>Instructor:</p>
                </div>
                <div className="card w-52 bg-black h-60 shadow-xl mx-auto col-span-4">
                <figure className="px-10 pt-10">
                    <img src={instructor?.instructorPhotoURL} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-rose-900 font-bold">{instructor.name}</h2>
                </div>
                </div>
                </div>

                <div className="grid grid-cols-4 m-8 align-center">
                    <div className='col-span-1'>
                    <p className='text-sm text-rose-900 font-bold'>Students feedback:</p>
                    </div>
                    <div className='col-span-3'>
                        <div className='lg:text-base text-sm lg:px-6'>"{studentFeedback}"</div>
                        <div className='text-center'>~{students}</div>
                    </div>
                </div>
                </div>
                <div className='flex justify-center mt-16'>
                    <Link to={`/checkout/${courseID}`}>
                        <button className="btn btn-wide btn-success hover:bg-warning text-black">Get premium access?</button>
                    </Link>
                </div>
            </div>
    );
};

export default IndividualCourseDetails;