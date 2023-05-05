import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../chefCard/chefCard';
import Testimonial from '../Testimonial/Testimonial';
import Recipes from '../Recipes/Recipes';

const Home = () => {
    //state for chef data
    const [chefs, setChefs] = useState([]);
    const [recipes, setRecipes] = useState([]);
    // loading chef data
    useEffect(() => {
        fetch('https://chef-recipe-server-rashedrk.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, []);

    useEffect(() => {
        fetch('https://chef-recipe-server-rashedrk.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);
    return (
        <div>
            <Banner></Banner>
            {/*--------------
                chef section  
            ----------------*/}
            <h2 className='text-center text-4xl font-bold mt-10'>Our Chefs</h2>
            <div className='grid md:grid-cols-3  gap-4 grid-cols-1'>
                {
                    chefs.map(chef => <ChefCard key={chef.chef_id} chef={chef}></ChefCard>)
                }
            </div>
            <div className='mt-20 ps-10 py-10 bg-slate-100'>
                <h2 className='text-center text-4xl font-bold '>Recipes</h2>
                <p className='text-center mt-1 text-xl font-medium '>Our amazing Recipes</p>
                <div className='grid md:grid-cols-3  gap-4 grid-cols-1'>
                    {
                        recipes.map(recipe => <Recipes key={recipe.recipe_id} recipe={recipe}></Recipes>)
                    }
                </div>
            </div>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;