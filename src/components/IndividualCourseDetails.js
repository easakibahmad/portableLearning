import React from 'react';
import { useLoaderData } from 'react-router-dom';

const IndividualCourseDetails = () => {

    const individualData = useLoaderData()
    console.log(individualData)
    return (
        <div>
            details
        </div>
    );
};

export default IndividualCourseDetails;