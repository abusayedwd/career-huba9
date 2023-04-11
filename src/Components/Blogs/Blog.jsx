import React from 'react';

const Blog = () => {
        return (
                <div className='w-[70%] m-auto mt-16'>
                        <p className='text-3xl font-bold text-center'>Question & Answer</p>
                        <h1 className='mt-5 text-1xl font-bold'><span className='text-2xl'>Question:</span>When should you use context API?</h1>
                        <h1 className='mt-2 text-1xl text-green-800 font-bold'><span className='text-2xl'> Answer:</span>
                          Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</h1>

                        <h1 className='mt-5 text-1xl font-bold'><span className='text-2xl'>Question:</span> What is custom hooks in react?</h1>
                        <h1 className='mt-2 text-1xl text-green-800 font-bold'><span className='text-2xl'> Answer:</span>  custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.J</h1>

                        <h1 className='mt-5 text-1xl font-bold'><span className='text-2xl'>Question:</span> What is useRef and useMemo hooks?</h1>
                        <h1 className='mt-2 text-1xl text-green-800 font-bold'><span className='text-2xl'> Answer:</span> The useRef Hook allows you to persist values between renders.

                                It can be used to store a mutable value that does not cause a re-render when updated.

                                It can be used to access a DOM element directly. <br />
                                useMemo, React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</h1>

                         
                </div>
        );
};

export default Blog;