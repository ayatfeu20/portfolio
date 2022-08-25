import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.png";
import ImageFour from "../../images/image4.png";
import ImageFive from "../../images/image5.png";
import ImageSex from "../../images/image6.png";
import ImageSeven from "../../images/image7.png";
import ImageEight from "../../images/image8.png";
import ImageNine from "../../images/image9.png";
import ImageTen from "../../images/image10.png";
import {FaGithub} from "react-icons/fa"
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Kalleklinik",
    image: ImageOne,
    description: "Jag byggde den genom att använda React och MERN stack för online boking ",
    link: "https://github.com/ayatfeu20/Kalleklinik.git",
  },
  {
    id: 2,
    name: "Goodminton",
    link: "https://github.com/ayatfeu20/Goodminton.git",
    description: "Några kreativa förslag hur goodminton.se websida skulle förbättras /React",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Monday",
    image: ImageThree,
    link: "https://github.com/ayatfeu20/Monday..git",
    description:"Site Monday relations ha en modern design och vara mobil anpassad /React",
  },
  {
    id: 2,
    name: "MarkDown previewer",
    image: ImageFour,
    link: "https://github.com/ayatfeu20/Admin.git",
    description:"Ett externt MD-bibliotek, för att konvertera värdet i <textarea> i realtid",
  },
  {
    id: 2,
    name: "TODO",
    image: ImageFive,
    description:"TODO app och fetcha data från JSON fil",
    link: "https://github.com/ayatfeu20/TODO.git",
  },
  {
    id: 2,
    name: "Digitalt CV",
    image: ImageSex,
    link: "https://github.com/ayatfeu20/Digitalt-CV.git",
    description:"Enkelt digitalt CV /Angular",
  },
  {
    id: 2,
    name: "Registiration form",
    image: ImageSeven,
    link: "https://github.com/ayatfeu20/Registering-form.git",
    description:" Validation registiration formulär",
  },
  {
    id: 3,
    name: "Form",
    image: ImageEight,
    link: "https://github.com/ayatfeu20/form.git",
    description:"HTML / CSS",
  },
  {
    id: 3,
    name: "Jood",
    image: ImageNine,
    link: "https://github.com/ayatfeu20/Jood.git",
    description:"HTML / CSS",
  },
  {
    id: 3,
    name: "DentialClinic",
    image: ImageTen,
    link: "https://github.com/ayatfeu20/DentialClinic.git",
    description:"HTML / CSS",
  },



];

const filterData = [
  {
    filterId: 1,
    label: "Alla",
  },
  {
    filterId: 2,
    label: "Utveckling",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <h4>{item.name}</h4>
                    <br/>
                    <p>{item.description}</p>
                    <br/><br/><br/><br/>
                    <a 
                    href={item.link}
                    target="_blank"
                    rel="noreferrer">
            <FaGithub className="git" color="#000" size={30}/>
          </a>
          
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
