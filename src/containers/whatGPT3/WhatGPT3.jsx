import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature";

const featureData = [
  {
    title: "Chatbots",
    text: "Lorem ipsum dolor sit amet. Aut praesentium neque sit voluptatem ducimus non consequatur error. In soluta sint sed neque ratione eos explicabo blanditiis quo dolorem porro ut accusamus quia.",
  },
  {
    title: "Knowledgebase",
    text: "Lorem ipsum dolor sit amet. Rem velit adipisci non ipsam veritatis et exercitationem iure. Non modi veritatis sit similique ipsam et corporis magni.",
  },
  {
    title: "Education",
    text: "Lorem ipsum dolor sit amet. Sit debitis accusamus est dolorum enim aut voluptatum explicabo in necessitatibus voluptates ut nesciunt perferendis.",
  },
];

export default function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet. Ut atque porro sed veritatis aliquam ut fugiat voluptas sed quam velit. Qui molestiae repellendus id dignissimos sunt ab optio totam quo nesciunt nihil aut veritatis mollitia ea commodi quam. Et tempore doloribus aut magni porro ex natus tempore qui voluptatibus voluptatum in quia dolore ut iure dolores hic eveniet galisum. Et repellat velit aut nesciunt explicabo nam maiores iste est repudiandae expedita rem fuga consequatur et recusandae culpa."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        {featureData.map((item, index) => (
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
