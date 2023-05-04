import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-xl font-semibold'>Tell us the differences between uncontrolled and controlled components.</h2>
            <p className='mb-5'>ans: The main difference between these two types of components is the level of control that the developer has over them. With uncontrolled components, the browser is in control of managing the state, which can make it harder to keep track of changes and to synchronize the state of different components. With controlled components, the developer has complete control over the state, which can make it easier to manage and manipulate.</p>
            <h2 className='text-xl font-semibold'>How to validate React props using PropTypes
            </h2>
            <p className='mb-5'>ans: by using this
                function ReactComponent <br />
                    ReactComponent.propTypes "
                
            </p>
            <h2 className='text-xl font-semibold'>Tell us the difference between nodejs and express js.</h2>
            <p className='mb-5'>ans: Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code on the server-side. <br />
            Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features for building web applications and APIs, such as routing, middleware, and templates. </p>
            <h2 className='text-xl font-semibold'>What is a custom hook, and why will you create a custom hook?</h2>
            <p className='mb-5'>ans: Custom hooks are reusable functions that use to add special and unique functionality to the React applications.</p>
        </div>
    );
};

export default Blog;