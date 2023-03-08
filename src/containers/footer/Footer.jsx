import React from 'react';
import "./footer.css";
import gptLogo from "../../assets/lfl.png"

export default function Footer() {
  return (
    <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gptLogo} alt="gpt3_logo" />
        <p>Middle Field Labs</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
        <p>Careers</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>123 Culver Dr, Irvine CA 92222</p>
        <p>(714)443-1234</p>
        <p>info@mfl.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 Middle Field Labs. All rights reserved.</p>
    </div>
  </div>
  );
};
