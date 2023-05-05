import React from 'react';
import Pdf from 'react-to-pdf';
const Blog = () => {
    const ref = React.createRef();
    return (
        <div >
            <div ref={ref} className='w-5/6 mx-auto'>
                <h2 className='text-xl font-semibold'>Tell us the differences between uncontrolled and controlled components.</h2>
                <p className='mb-5'>ans: The main difference between these two types of components is the level of control that the developer has over them. With uncontrolled components, the browser is in control of managing the state, which can make it harder to keep track of changes and to synchronize the state of different components. With controlled components, the developer has complete control over the state, which can make it easier to manage and manipulate.</p>
                <h2 className='text-xl font-semibold'>How to validate React props using PropTypes
                </h2>
                <p className='mb-5'>ans:
                    we can valid any thing that we received from props.
                    <br />
                    1. add proptype to react
                    <div className="mockup-code my-2  w-96">
                        <pre data-prefix="$" ><code>npm install prop-types --save</code></pre>
                    </div>
                    2. Next we need to import Propstype
                    <div className="mockup-code my-2 w-96">
                        <pre  ><code>import PropTypes from 'prop-types';</code></pre>
                    </div>
                    3. next we can see the type of props by using <span className='font-bold'>ComponentName.propTypes</span>
                    <br /> 
                    here ComponentName is the component that has props in it. 
                </p>
                <h2 className='text-xl font-semibold'>Tell us the difference between nodejs and express js.</h2>
                <p className='mb-5'>ans: Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code on the server-side. <br />
                    Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features for building web applications and APIs, such as routing, middleware, and templates. </p>
                <h2 className='text-xl font-semibold'>What is a custom hook, and why will you create a custom hook?</h2>
                <p className='mb-5'>ans: Custom hooks are reusable functions that use to add special and unique functionality to the React applications.</p>
            </div>
            <h1 className='mt-10 text-lg font-bold'>Covert to pdf Here</h1>
            <Pdf targetRef={ref} filename="blog.pdf">
                {({ toPdf }) => <button className='btn border-none bg-red-600 hover:bg-red-500' onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
        </div>
    );
};

export default Blog;