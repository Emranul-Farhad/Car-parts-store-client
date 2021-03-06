import React from 'react';
import './Blog.css'



const Blog = () => {


    return (
        <div className='mt-[150px] flex justify-center'>

            <article id="mz-accordion">

                <h1> Ans & question </h1>

                <ul>

                    <li>
                        <details open>
                            <summary>
                                <p> What are the different ways to manage a state in a React application? </p>
                            </summary>
                            <p> There are 4 kinds of react statesLocal state.
Global state.
Server state.
URL state.. First we have the local state. These are states local to a components and can be managed by the useState hook. Then we have global state, these are states that updates multiple components. We can lift the state to the parent component or use context api to share data between multiple components. Then we have server state. These are data coming form an external server and integrated in the ui. We use hooks like useEffect, or something like axios or react query to load them from the server and show them in the ui. Last but not least we have url state.Data that exists on our URLs, including the pathname and query parameters. These are data from the url itself. We can access them using hooks like useParams and manage their state in the ui</p>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>
                                <p>What is a unit test? Why should write unit tests?</p>
                            </summary>
                            <p>Unit testing is a process in software development where the project is broken down into smallest possible units and tested individually to make sure they work as intended. This makes it easier to identify proper operation and debug bugs issues. This testing methodology is done during the development process by the software developers and sometimes QA staff.</p>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>
                                <p> How will you improve the performance of a React Application? </p>
                            </summary>
                            <p>To improve the performance of a react application, we can provide a key prop to looping children components so that react can compare the virtual dom and the actual dom to only update the components that have changed. We can also use something like react query to cache the loaded data. Using reselect selectors, useMemo.as well We can use proper dependencies for useEffect to reduce the number of re renders.</p>
                        </details>
                    </li>

                   

                    <li>
                        <details>
                            <summary>
                                <p>Why you do not set the state directly in React?</p>
                            </summary>
                            <p> We should never set the state directly in react because if we do that, the state wont change immediately. Instead, it creates a pending state As a result, your app will behave abnormal or even crash. Most of the times, it won't affect your app because all the apps which we use for testing this are pretty small, and accessing it after will only return the present value. Also calling the setState function may replace the current value of the state. That is why we use the setState function to update a state.</p>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>
                                <p>How does prototypical inheritance work?
                                </p>
                            </summary>
                            <p> Prototypical inheritance means every object in JS has a hidden property called prototype.like Date objects inherit from Date.prototype.
Array objects inherit from Array.prototype.
Player objects inherit from Player.prototype. Using this property, it can extend properties from its parent object. In browsers, every object is an extension of the window object and can inherit methods like console, setInterval, alert etc.</p>
                        </details>
                    </li>

                </ul>

            </article>

        </div>
    );
};

export default Blog;