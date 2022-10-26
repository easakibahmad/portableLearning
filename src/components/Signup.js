import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';


const Signup = () => {

            const [error, setError] = useState()

            const googleProvider = new GoogleAuthProvider()

            const location = useLocation()
            const from = location.state?.from?.pathname || '/'
        
            const navigate = useNavigate()

            const {createUser, updateUserProfile, googlePopupSignIn} = useContext(AuthContext)

            const handleSubmit = event => {

                event.preventDefault();


                const form = event.target
                const email = form.email.value
                const password = form.password.value
                const name = form.name.value
                const photoURL = form.photoURL.value
                console.log(email, password)


                const handleProfileInfo = (name) =>{
                    const profile = {
                        displayName: name,
                        photoURL: photoURL
                    }
                    updateUserProfile(profile)
                    .then(() =>{
                        console.log('updated')
                    })
                    .catch(error=>{
                        setError(error.message)
                    })
                }

                if(password.length < 6){
                    setError('password should be at least 6 characters')
                    return
                }

                createUser(email, password)
                .then(result => {
                    const user = result.user
                    console.log(user)
                    form.reset()
                    setError('')
                    form.reset()
                    handleProfileInfo(name, photoURL)
                    navigate(from, {replace: true})
                })
                .catch(error=>{
                    console.log(error)
                    setError(error.message)
                })
            }

            const handlePopUpSignIn = () =>{
                googlePopupSignIn(googleProvider)
                .then(result=> {
                    const user = result.user
                    console.log(user)
                    navigate(from, {replace: true})
                })
                .catch(error=>{
                    console.log(error)
                })
            }


    return (
        <div className="hero py-4 shadow-xl">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <p className="text-3xl text-rose-900 font-bold">Sign Up</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body bg-gray-400">
                                        
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" name='name' placeholder="your name" className="input input-bordered" required/>
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name='photoURL' type="text" placeholder="photo url" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input  name='password' type="password" placeholder="password" className="input input-bordered" required/>
                    </div>

                    <p className='text-red-700'><small>{error}</small></p>

                    <div className="form-control mt-6">
                    <button className="btn btn-success text-rose-900">Signup</button>
                    </div>

                    <button onClick={handlePopUpSignIn} className="mt-2 btn btn-outline btn-secondary  mb-3 bg-grey-400"><FaGoogle></FaGoogle><span className='ml-2'>Google Sign In</span></button>

                    <button onClick={handlePopUpSignIn} className="mt-2 btn btn-outline btn-primary  mb-3 bg-grey-400"><FaGithub></FaGithub><span className='ml-2'>Github Sign In</span></button>

                    <p><small><span className='pr-2 font-bold'>Already have an account?</span><Link to='/login' className='text-pink-500 font-bold'>log in now</Link></small></p>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;