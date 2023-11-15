import React from "react";
import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs";


const Experience = () => {
    return (<section id="experience">
        <h5>What Skills I have</h5>
        <h2>My Experience</h2>

        <div className="container experience_container">
            <div className="experience_frontend">
                <h3>Frontend Development</h3>
                <div className="experience_content">

                    <article className="experience_details">
                        <BsPatchCheckFill  className="experience_details-icon" />
                        <div>
                            <h4>HTML</h4>
                            <small className="text_light">Experience</small>
                        </div>
                    </article>

                    <article className="experience_details">
                        <BsPatchCheckFill  className="experience_details-icon" />
                        <div>
                            <h4>CSS</h4>
                            <small className="text_light">Experience</small>
                        </div>
                    </article>

                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <div>
                            <h4>Javascript</h4>
                            <small className="text_light">Experience</small>
                        </div>
                    </article>

                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <div>
                            <h4>Flutter</h4>
                            <small className="text_light">Experience</small>
                        </div>
                    </article>

                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <div>
                            <h4>Tailwind</h4>
                            <small className="text_light">Experience</small>
                        </div>
                    </article>

                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <div>
                            <h4>Bootstrap</h4>
                            <small className="text_light">Experience</small>
                        </div>
                    </article>

                    <article className="experience_details">
                        <BsPatchCheckFill  className="experience_details-icon" />
                        <div>
                            <h4>React</h4>
                            <small className="text_light">Intermediate</small>
                        </div>
                    </article>
                   


                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <div>
                            <h4>Next Js</h4>
                            <small className="text_light">Experience</small>
                        </div>
                    </article>

                </div>

            </div>

            <div className="experience_backend">

                <h3>Backend Development</h3>
                <div className="experience_content">
                    <article className="experience_details">
                        <BsPatchCheckFill  className="experience_details-icon"/>
                        <div>
                            <h4>PHP</h4>
                            <small className="text_light">Experience</small>
                        </div>
                    </article>

                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <div>
                            <h4>Laravel</h4>
                            <small className="text_light">Experience</small>
                        </div>
                    </article>

                  

                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <div>
                            <h4>Python</h4>
                            <small className="text_light">Experience</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <div>
                            <h4>Node</h4>
                            <small className="text_light">Experience</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <div>
                            <h4>Exppress </h4>
                            <small className="text_light">Experience</small>
                        </div>
                    </article>


                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <div>
                            <h4>SQL</h4>
                            <small className="text_light">Experience</small>
                        </div>
                    </article>

                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <div>
                            <h4>MongoDB</h4>
                            <small className="text_light">Experience</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <div>
                            <h4>Postgres</h4>
                            <small className="text_light">Experience</small>
                        </div>
                    </article>
                    

                </div>

            </div>

        </div>


    </section>);
}

export default Experience;