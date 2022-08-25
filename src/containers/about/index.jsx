import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import image1 from './/IMG-20220706-WA0008.jpg';
import image2 from './/IMG-20220211-WA0009.jpg';
import image3 from './/plant-gfa39d9df7_1920.jpg';
import image4 from './/foot-gac50ee07d_1920.jpg';

import "./styles.scss";



const jobSummary =
  "Jag är mamma av två underbara barn.Jag studerade frontend utvecklare i yrkehögskolan och tog exament i juni 2022 , trots att jag studerade datavetenskap i Baghdad-Irak och arbetade som resurs med elever i Irsta skolan.Jag arbetade även som datakursledare och adminstrativ assistent.Jag har lång erfarenhet som (executive manager/Handel marknadschef) i marknadsföring på en plast och pappers industriföretag i Syrian.Jag tycker om att tilbaka till kodsliv.";

const personal = 
"Det som gör att jag anser mig vara rätt person för er är att jag har lång erfarenhet av att arbeta med arbetsuppgifter och kan utföra arbetsuppgifterna självständigt. För att lyckas i denna roll krävs att man är positiv, ordningsam och pålitlig.Jag har alltid känt ett stort ansvar för de arbetsuppgifter som jag har åtagit mig och är drivande vid genomförande av förändringar och arbetssätt.Som person är jag trygg och lugn. På min fritid lagar jag mat, bakar ,leker med mina barn och odling, även vara ute i naturen och ta en promenad. "
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="Om mig"
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Här är jag</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <p className="personalInformationHeaderText">
              {personal}
            </p>
           
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
  <div class="card-container">
  <div className="images">
  <img src= {image4} className=' image'  alt="first" /> 
  <img src= {image2} className=' image' alt="second" />
  <img src= {image3} className=' image' alt="" />    
  <img src= {image1} className=' image' alt="" />
  </div>
  </div>

            </Animate>

          
          
        </div>
      </div>
    </section>
  );
};
export default About;
