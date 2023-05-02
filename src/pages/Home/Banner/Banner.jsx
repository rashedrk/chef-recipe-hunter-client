import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Awesome <span className='text-red-500'>Delicious</span> food</h1>
                    <p className="mb-5">" Explore the world of food like never before with our in-depth guides on ingredients, cooking techniques, and Bangladeshi cuisines. Join our community of food enthusiasts and elevate your culinary skills to new heights. Get ready to savor every bite and let your love for food flourish."</p>
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;