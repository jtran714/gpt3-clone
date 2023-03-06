import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

export default function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's build something amazing with GPT-3 OpenAI
        </h1>
        <p>
          GPT-3 is a language processing model developed by OpenAI that
          generates human-like text using deep learning neural networks. With
          175 billion parameters, it is the largest and most powerful language
          model developed to date, capable of performing a wide range of natural
          language processing tasks. GPT-3's ability to generate text that is
          often indistinguishable from text written by a human has many
          potential applications in fields such as customer service, content
          generation, and language translation.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  );
};
