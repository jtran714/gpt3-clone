import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature";

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
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet. Et sint voluptates non Quis praesentium ut dignissimos quod est dolorem quos et aperiam voluptatem non accusamus beatae non similique quia. Ut cumque voluptatem quo obcaecati veniam qui numquam delectus." />
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet. Ea autem repudiandae eum iusto explicabo vel incidunt atque. Sed distinctio nihil cum minus exercitationem vel cupiditate laboriosam ut blanditiis error sit tempora totam At voluptas asperiores et maxime nisi. Id laborum aspernatur sed animi ducimus rem saepe accusantium est atque aspernatur? Cum tempora consectetur et mollitia debitis id quam sint quo recusandae quibusdam?" />
        <Feature title="Education" text="Lorem ipsum dolor sit amet. Id distinctio similique et dolores laudantium aut voluptatem voluptates sit laboriosam iste qui fugit sunt eos blanditiis aliquam. Non fuga nobis non libero quia in maxime eaque a quia aspernatur ut aliquam voluptas. Aut minima repudiandae ut labore fuga a minima consequatur? Quo quia necessitatibus eum ratione ipsam et rerum nobis aut provident expedita." />
      </div>
    </div>
  );
}
