import React from 'react';
import './MyWork.css';
import theme from "../../assets/theme_pattern.svg";
import mywork_data from '../../assets/mywork_data';
import arrow from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Projects</h1>
            <img src={theme} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => (
                <div key={index} className="work-item">
                    <img src={work.w_img} alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam excepturi nisi aliquid illum sit quod, quidem ut! Tempora facere ut earum voluptatem enim ratione libero? Optio suscipit aperiam nam sunt.</p> {/* Add a description here, replace `work.description` with actual text */}
                    <div className="work-buttons">
                        <button className="work-button">View More</button>
                        <button className="work-button">Visit Site</button>
                    </div>
                </div>
            ))}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow} alt="" />
        </div>
    </div>
  );
};

export default MyWork;
