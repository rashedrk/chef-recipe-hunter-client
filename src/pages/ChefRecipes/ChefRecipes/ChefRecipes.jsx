import React, { useEffect, useState } from 'react';
import { AiTwotoneLike } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChefRecipes = () => {
    const [toast, setToast] = useState([])

    const [recipes, setRecipes] = useState([])
    // get chef data 
    const chefData = useLoaderData();
    const { chef_id,chef_pic, name, bio, years, recipes_no, likes } = chefData;

    // load recipe data 
    useEffect(() => {
        fetch(`http://localhost:3000/recipes/${chef_id}`)
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[]);

    
    return (
        
        <div>
            {/*-------------- Banner section -------------- */}
            <div className="hero bg-slate-100 py-11 mb-5">
                <div className="hero-content flex-col gap-10 lg:flex-row">
                    <img src={chef_pic} className="max-w-md rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{bio}</p>
                        <p className='flex py-1 items-center'><BiTimeFive className='text-lg me-1 text-red-400' /> {years} years Experience</p>
                        <p className='flex py-1 items-center'><IoFastFoodOutline className='text-lg me-1 text-red-400' />{recipes_no}+ recipes</p>
                        <p className='flex py-1 items-center'><AiTwotoneLike className='text-lg me-1 text-red-500' /> {likes} Likes</p>
                    </div>
                </div>
            </div>

            {/* ---------- Recipe card section ------------ */}
            <div className="grid md:grid-cols-3 gap-2">
            {
                recipes.map(recipe => <RecipeCard key={recipe.key} recipe={recipe}></RecipeCard>)
            }
            <ToastContainer />
            </div>
        </div>
    );
};

export default ChefRecipes;