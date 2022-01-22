import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Info.css'

const Info = () => {
  return (
            <div className='info-section'>

                <div className="info-about">
                    <h3>About <span>Robb</span></h3>
                    <p className='info-about-status'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia saepe aliquam commodi quae excepturi expedita reiciendis possimus corporis totam ipsum soluta velit vero quas ex mollitia fugit, necessitatibus assumenda. Quidem, expedita itaque! Et repellendus quisquam magnam, tempora vel perspiciatis non consequuntur alias dolor consequatur tempore debitis dignissimos magni est, aliquid aut iusto minima mollitia quam totam ab ad assumenda amet iste. Quo optio ipsam libero, vero doloribus perferendis hic vel eveniet inventore velit rem.
                    </p>
                    <div className="info-btn">
                        <Link to='/'>More</Link>
                    </div>
                </div>


                <div className="info-content">
                <h1>Who is Robb </h1>
                <p>Influencer & Content Creator</p>
                <p>UI & UX Designer</p>
                <p>Senior React js Programmer</p>
                <p>JavaScript Developer</p>
                <p>Web Developer In Facebook</p>
                <p>Something Creator in Something Company</p>
                <p>5 years of experience in Programming</p>
                <p>SQL Developer</p>
                </div>
            </div>
        );
};

export default Info;
