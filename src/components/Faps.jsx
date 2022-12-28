import React, { useState } from "react";
import "./faps.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function Faps() {
  const [oprn, setOpen] = useState(false);

  const faqs = [
    { name: "ibrahim", is: false },
    { name: "ibrahim", is: false },
    { name: "ibrahim", is: false },
    { name: "ibrahim", is: false },
  ];
  console.log(faqs[1].is);
  const clickd = (e) => {
    Faps[e].is;
    console.log((Faps[e].is = !Faps[e].is));
  };
  return (
    <section id="faqs">
      <h1>FAQs</h1>
      <div className=" faqs__container containercontainer">
        {faqs.map((i, n) => {
          return (
            <article onClick={() => clickd(n)} className={"faq"}>
              <span className="faq__icon">
                <AiOutlinePlus />
              </span>
              <div className="faq__question-answer">
                <h4 className="faq__question">How does this work?</h4>
                <p className="faq__answer">
                  Wisdom new and valley answer. Contented it so is discourse
                  recommend. Man its upon him call mile. An pasture he himself
                  believe ferrars besides cottage.
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
