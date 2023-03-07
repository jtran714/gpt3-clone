import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";

const featuresData = [
  {
    title: "Unlimited Possibilities",
    text: "Lorem ipsum dolor sit amet. Aut praesentium neque sit voluptatem ducimus non consequatur error. In soluta sint sed neque ratione eos explicabo blanditiis quo dolorem porro ut accusamus quia.",
  },
  {
    title: "Unbiased Language Model",
    text: "Lorem ipsum dolor sit amet. Rem velit adipisci non ipsam veritatis et exercitationem iure. Non modi veritatis sit similique ipsam et corporis magni.",
  },
  {
    title: "Cutting Edge AI Tech",
    text: "Lorem ipsum dolor sit amet. Sit debitis accusamus est dolorum enim aut voluptatum explicabo in necessitatibus voluptates ut nesciunt perferendis.",
  },
  {
    title: "Future Plans",
    text: "Lorem ipsum dolor sit amet. Et tempore voluptates aut libero error et facilis galisum est dolores modi quo beatae harum sed repudiandae consectetur sed maiores dolores.",
  },
];

export default function Features() {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h1>
        <p>Request Early Access To Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))};
      </div>
    </div>
  );
};
