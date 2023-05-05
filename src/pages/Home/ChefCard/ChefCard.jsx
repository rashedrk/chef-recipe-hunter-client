import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { AiTwotoneLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlaceholderImage from '../../../assets/placeholderImg.webp';


const ChefCard = ({ chef }) => {
    const { chef_id, chef_pic, name, years, recipes, likes } = chef
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10  pt-10">
                    <LazyLoadImage src={chef_pic} placeholderSrc={PlaceholderImage} className="rounded-xl h-60"></LazyLoadImage>
            </figure>
            <div className="card-body  text-left">

                <h2 className="card-title">{name}</h2>
                <p className='flex items-center'><BiTimeFive className='text-lg me-1 text-red-400' /> {years} years Experience</p>
                <p className='flex items-center'><IoFastFoodOutline className='text-lg me-1 text-red-400' />{recipes}+ recipes</p>
                <p className='flex items-center'><AiTwotoneLike className='text-lg me-1 text-red-500' /> {likes}</p>


                <div className="card-actions">
                    <Link to={`/chef/${chef_id}`} className="btn border-none bg-red-600 hover:bg-red-500">View recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;