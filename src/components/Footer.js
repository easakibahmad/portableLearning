import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
            <footer className="footer footer-center p-10 bg-gray-400 border-zinc-700 border-t-2 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <Link className="link link-hover">About us</Link> 
                <Link className="link link-hover">Contact</Link> 
                <Link className="link link-hover">Services</Link> 
                <Link className="link link-hover">Announcement</Link>
            </div> 
            <div>
                <div className="grid grid-flow-col gap-4">
                <Link className='text-primary'><FaFacebook></FaFacebook></Link> 
                <Link className='text-secondary'><FaLinkedin></FaLinkedin></Link> 
                <Link className='text-fuchsia-700'><FaInstagram></FaInstagram></Link>
                <Link className='text-orange-500'><FaTwitter></FaTwitter></Link>
                </div>
            </div> 
            <div>
                <p>Copyright © 2022 - All right reserved by PORTABLE LEARNING</p>
            </div>
            </footer>
    );
};

export default Footer;