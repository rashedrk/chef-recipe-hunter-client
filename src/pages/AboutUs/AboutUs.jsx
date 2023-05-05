import React from 'react';

const AboutUs = () => {
    return (
        <div className='grid  md:grid-cols-2 bg-slate-100 mx-10 px-10 py-20 '>
            <div className='p-10'>
                <h2 className='text-2xl font-bold mb-5'>Who We Are</h2>
                <p>At DishDiscoveries, we're passionate about food and bringing people together around the table. Our website is a place where you can explore recipes from your favorite chefs and discover new culinary creations to try in your own kitchen.

                    Our team is made up of experienced chefs, food enthusiasts, and recipe developers who are dedicated to creating delicious and innovative dishes. We work tirelessly to bring you the best recipes, cooking tips, and culinary inspiration, so you can bring your own unique flavors to the table.

                    We believe that food is more than just fuel for the body. It's a way to connect with others, to explore new cultures and flavors, and to nourish both body and soul. That's why we're committed to sharing our love of food with you, and to helping you create memorable dining experiences with your friends and family.

                    Thank you for choosing DishDiscoveries. We look forward to sharing our passion for food with you!
                </p>
            </div>
            <img src="https://radiustheme.com/demo/wordpress/redchili/wp-content/uploads/2017/03/about1-banner2.jpg" alt="" />
            <img src="https://radiustheme.com/demo/wordpress/redchili/wp-content/uploads/2017/02/left-back-1-600x524.jpg" alt="" />
            <div className='p-10'>
                <h2 className='text-2xl mb-5 font-bold'>Our History</h2>
                <p><span className='text-xl text-red-600 font-semibold'>1989</span> when we first opened our doors as a small family-owned restaurant. From the beginning, we've been dedicated to creating delicious food with great culture and historic value.

                    Our founder, Mr.x, was passionate about preserving traditional recipes and cooking techniques that had been passed down through generations of his family. He believed that food was not just about nourishing the body, but also about preserving cultural heritage and creating connections between people.

                    Over the years, our restaurant became known for our authentic cuisine and warm, welcoming atmosphere. We hosted family gatherings, community events, and celebrations of all kinds, becoming a beloved fixture in the community.

                    We're proud of our history, and we look forward to continuing to share our love of food and culture with you for many years to come. Thank you for being a part of the DishDiscoveries community.</p>
            </div>
            
        </div>
    );
};

export default AboutUs;