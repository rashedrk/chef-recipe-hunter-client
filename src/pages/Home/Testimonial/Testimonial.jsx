import React from 'react';

const Testimonial = () => {
    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="grid h-20 card text-4xl font-bold rounded-box place-items-center">OUR CLIENT</div>
            <div className="divider text-red-500">WHAT OUR CLIENT SAY</div>
            <div className="carousel w-full md:w-96 mx-auto">
                <div id="item1" className="carousel-item w-full">
                    <div className='text-center'>
                        <img className='w-14 mx-auto' src="https://radiustheme.com/demo/wordpress/redchili/wp-content/uploads/2017/02/1-2.png" />
                        <p>A simple yet creative chicken meal mimics the popular Italian appetizer 'bruschetta' for a delicious entree reminiscent of romantic Italian evenings</p>
                        <h3 className='text-red-500 text-xl font-semibold'>Jeniffer Maria</h3>
                        <p className='text-red-500'>CEO, Canyon Brand</p>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className='text-center'>
                        <img className='w-14 mx-auto' src="https://radiustheme.com/demo/wordpress/redchili/wp-content/uploads/2017/02/1-2.png" />
                        <p>A simple yet creative chicken meal mimics the popular Italian appetizer 'bruschetta' for a delicious entree reminiscent of romantic Italian evenings</p>
                        <h3 className='text-red-500 text-xl font-semibold'>Jeniffer Maria</h3>
                        <p className='text-red-500'>CEO, Canyon Brand</p>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className='text-center'>
                        <img className='w-14 mx-auto' src="https://radiustheme.com/demo/wordpress/redchili/wp-content/uploads/2017/02/1-2.png" />
                        <p>A simple yet creative chicken meal mimics the popular Italian appetizer 'bruschetta' for a delicious entree reminiscent of romantic Italian evenings</p>
                        <h3 className='text-red-500 text-xl font-semibold'>Jeniffer Maria</h3>
                        <p className='text-red-500'>CEO, Canyon Brand</p>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <div className='text-center'>
                        <img className='w-14 mx-auto' src="https://radiustheme.com/demo/wordpress/redchili/wp-content/uploads/2017/02/1-2.png" />
                        <p>A simple yet creative chicken meal mimics the popular Italian appetizer 'bruschetta' for a delicious entree reminiscent of romantic Italian evenings</p>
                        <h3 className='text-red-500 text-xl font-semibold'>Jeniffer Maria</h3>
                        <p className='text-red-500'>CEO, Canyon Brand</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn bg-transparent text-black  btn-xs hover:bg-slate-100">1</a>
                <a href="#item2" className="btn bg-transparent text-black  btn-xs hover:bg-slate-100">2</a>
                <a href="#item3" className="btn bg-transparent text-black  btn-xs hover:bg-slate-100">3</a>
                <a href="#item4" className="btn bg-transparent text-black  btn-xs hover:bg-slate-100">4</a>
            </div>
        </div>

    );
};

export default Testimonial;