import React from "react";
import { Animate } from "react-simple-animate";
import image from "./IMG-20220615-WA0073 update.jpg";
import {FaLinkedin,FaGithub} from "react-icons/fa";
import "./styles.scss";

const Home = () => {
 

  return (
    <section id="home" >
    <div className="home container">
     <div className="left">
      <div className="home__text-wrapper">
        <h1>
         <br />
          Hej! Jag är Ayat
        </h1>
      </div>
      <div className="home__paragraph">
        <br/>
      <p>Frontend utvecklare </p>
      
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
        
        <a href='https://www.dropbox.com/s/fdkzc99p99ja783/CV-%20Ayat%20Mannaa.pdf?dl=0' target = "_blank" rel="noopener noreferrer"  className="flat-button ">
            Mitt CV
          </a>
          
          <a href='https://www.dropbox.com/s/z7fd1n0l8rqd16q/Personligt%20brev%20Ayat%20Mannaa.pdf?dl=0' target = "_blank" rel="noopener noreferrer" className="flat-button ">
            Personligt brev
          </a>
        </div>
        
      </Animate>
       <div className="home__icons">        
          <a
            href="https://www.linkedin.com/in/ayatmannaa-800585a0/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="link" color="#ffd700" />
          </a>
        
          <a
            href="https://github.com/ayatfeu20"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="link" color="#ffd700" />
          </a>
        </div>
      </div>
      <div className="right">
      <div className='home__bild '>
     <img src= {image} className='rounded' alt="" /> 
     </div>

      </div>
      </div>
    </section>
  );
};
export default Home;
