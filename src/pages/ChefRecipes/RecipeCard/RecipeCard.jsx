import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Rating from 'react-rating';
import PlaceholderImage from '../../../assets/placeholderImg.webp';

const RecipeCard = ({ recipe, handleFav }) => {
    const { img, name, ingredients, cooking_method, rating } = recipe;
    const [disabled, setDisabled] = useState(false);
    const handleFavClick = () => {
        setDisabled(true);
        handleFav(name);
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <LazyLoadImage src={img} placeholderSrc={PlaceholderImage} className="rounded-xl h-60"></LazyLoadImage>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='my-3 font-semibold'>Ingredients: {ingredients}</p>
                <p className='font-semibold'>Cooking Methods</p>
                <ul className='ps-5'>
                    {
                        cooking_method.map(method => <li className='list-decimal'>{method}</li>)
                    }
                </ul>
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
                    <div>
                        <button onClick={handleFavClick} disabled={disabled} className="btn bg-red-600 border-none hover:bg-red-500">
                            <AiOutlineHeart className='text-xl' />
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default RecipeCard;