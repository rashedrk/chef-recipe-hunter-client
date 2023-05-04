import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../chefCard/chefCard';

const Home = () => {
    //state for chef data
    const [chefs, setChefs] = useState([]);
    // loading chef data
    useEffect(() => {
        fetch('http://localhost:3000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
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
            
        </div>
    );
};

export default Home;