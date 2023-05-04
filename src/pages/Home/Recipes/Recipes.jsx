import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Recipes = ({ recipe }) => {
    const { name, rating, img } = recipe;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="h-60 rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <hr />
                <div className="flex items-center">
                    <div className='flex-1'>
                        <Rating
                            className='me-2 text-orange-500'
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        />
                        <span>{rating}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Recipes;