import React from 'react';

const Blog = () => {
    return (
        <div className='lg:shadow-xl h-full'>
            <h1 className='w-3/4 mx-auto pt-16 text-xl text-center text-rose-900 font-bold'>Some important questions and answers</h1>

            <div className="card w-3/4 mx-auto my-16 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is cors?</h2>
                    <p>CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests. 
                    CORS is typically required to build web applications that access APIs hosted on a different domain or origin. You can enable CORS to allow requests to your API from a web application hosted on a different domain.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>

            <div className="card w-3/4 mx-auto my-16 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">The purpose of using firebase?</h2>
                    <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                    <ul className='font-sm'>
                    <p className='font-bold'>some most important part of firebase</p>
                        <li> Cloud Messaging for Cross-Platform Apps</li>
                        <li>Higher Website Traffic with App Indexing</li>
                        <li>Swift and Secured Web Hosting</li>
                        <li>Higher Accessibility to Machine Learning APIs</li>
                        <li>Crash Reporting for Swift Bugs Fixing</li>
                        <li>Optimized App Performance</li>
                        <li>Push Notifications for Target Messaging</li>
                    </ul>
                    <>
                    <p className='font-bold'>Firebase Authentication provides the following auth methods:</p>
                    <p>Email/password.</p>
                    <p>Phone.</p>
                    <p>OAuth 2. Google. Facebook. Twitter. Github.</p>
                    <p>Anonymous.</p>
                    <p>Custom auth.</p>
                    </>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>

            <div className="card w-3/4 mx-auto my-16 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Hoe does private route work?</h2>
                    <p>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. This is how we can easily protect our route where user can't access directly. Private route provide some vital rule to protect our specific route.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>


            <div className="card w-3/4 mx-auto my-16 shadow-lg bg-base-100">
                <div className="card-body">
                    <h2 className="card-title">What is Node js and how does it work?</h2>
                    <p>
                    It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node. This is the main purpose of node js</p>
                    <p>
                    Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests. Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”. Node JS Web Server internally has a Component, known as “Event Loop”. Thats the main process how node js work internally.
                    </p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
                
        </div>
    );
};

export default Blog;