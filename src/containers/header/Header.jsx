import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai_vid from "../../assets/ai_vid.mp4";

export default function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's build something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet. Cum corporis rerum et doloribus
          perspiciatis ut sunt sunt aut architecto ipsum qui soluta aliquid! Quo
          consequuntur sunt ex Quis quos hic ipsum velit et officiis nesciunt
          est molestias dolores. 33 quasi voluptatibus sit ipsum aliquid et
          doloremque maiores. In perspiciatis unde quo aspernatur explicabo aut
          commodi porro aut consequatur quasi et voluptas quia et sunt autem.
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
        <video
          src={ai_vid}
          muted
          autoPlay={"autoplay"}
          preload="auto"
          loop
        />
      </div>
    </div>
  );
};
