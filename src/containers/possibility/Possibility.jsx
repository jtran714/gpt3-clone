import React from 'react';
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

export default function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilites are <br /> beyond your imagination</h1>
        <p>Lorem ipsum dolor sit amet. Et dolor cupiditate in exercitationem dolorem aut nisi cumque quo neque voluptas et eaque galisum. Sed rerum reprehenderit ab facere perspiciatis ad quia rerum ut magnam atque et molestias voluptatum.</p>
        <h4>Request Early Access to get Started</h4>
      </div>
    </div>
  );
};
