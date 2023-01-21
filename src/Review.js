import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const [disabled, setDisabled] = useState(null);

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;

      // if (newIndex > people.length - 1) {
      //   newIndex = 0;
      // }

      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;

      // if (newIndex < 0) {
      //   newIndex = people.length - 1;
      // }

      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    setIndex((index) => {
      let randomNumber = Math.floor(Math.random() * people.length);
      if (randomNumber === index) {
        randomNumber = index + 1;
      }
      setDisabled(true);
      return checkNumber(randomNumber);
    });

    setTimeout(() => {
      setDisabled(false);
    }, 500);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson} disabled={disabled}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
