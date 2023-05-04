import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 mt-16 bg-slate-200 text-base-content">
            <div>
                <a className="normal-case text-xl">Dish<span className='text-[#E6272C]'> Discoveries</span></a>
                <p>
                    <small>Find Your favorite food</small>
                </p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Home Delivery</a>
                <a className="link link-hover">Party</a>
                <a className="link link-hover">Birthday</a>
                <a className="link link-hover">Occasion</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;