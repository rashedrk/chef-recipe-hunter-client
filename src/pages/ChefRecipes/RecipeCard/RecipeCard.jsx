import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';


const RecipeCard = ({ recipe }) => {
    const { name, ingredients, cooking_method, rating } = recipe;
    //handle add to favorite click 
    const handleFav = () => {
        
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='my-3'>Ingredients: {ingredients}</p>
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
                        <p onClick={handleFav} className="btn bg-red-600 border-none hover:bg-red-500">
                            <AiOutlineHeart className='text-xl'/>
                        </p>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RecipeCard;