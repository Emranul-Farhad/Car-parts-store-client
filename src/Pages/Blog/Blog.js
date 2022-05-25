import React from 'react';
import './Blog.css'



const Blog = () => {


    return (
        <div className='mt-[150px] flex justify-center'>

            <article id="mz-accordion">

                <h1>Accordion with no input hack or Javascript</h1>

                <ul>

                    <li>
                        <details open>
                            <summary>
                                <p>No CSS "Input Hack"</p>
                            </summary>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.</p>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>
                                <p>No Javascript</p>
                            </summary>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.</p>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>
                                <p>Vanilla CSS</p>
                            </summary>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.</p>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>
                                <p><span>@counter-style</span> List Markers</p>
                            </summary>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.</p>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>
                                <p>Responsive & Mobile Friendly</p>
                            </summary>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.</p>
                        </details>
                    </li>

                </ul>

            </article>

        </div>
    );
};

export default Blog;