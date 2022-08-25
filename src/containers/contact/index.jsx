import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import { BsFillTelephoneFill  } from "react-icons/bs";
import { GrMail  } from "react-icons/gr";
import {BsLinkedin} from 'react-icons/bs';
import ContactImg from "./contactimg.png";
import ContactForm from "./ContactForm/ContactForm";

import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Kontakta mig"
        />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
      <div className="contactContainer">
        <div className="contactMain">
          <div className="contactLeft">
            <div className="contactImgWrap">
              <img src={ContactImg} alt="Send email" className='contactIImg'/>
            </div>
            <div className="contactInfo">
              <div  className="infoItem">
                <a className='infoLink' href='tel:0700193061' target = "_blank" rel="noopener noreferrer">
                  <BsFillTelephoneFill className='infoIcon'/>
                  <p>0700 193 061</p>
                </a>
              </div>
              <div className="infoItem">
                <a className="infoLink" href={'mailto:ayat_manaa@yahoo.com'} target = "_blank" rel="noopener noreferrer">
                  <GrMail/>
                  <p>ayat_manaa@yahoo.com</p>
                </a>
              </div>
            
              <div className="infoItem">
                <a className="infoLink" href='https://www.linkedin.com/in/ayatmannaa-800585a0/' target = "_blank" rel="noopener noreferrer">
                  <BsLinkedin className='infoIcon'/>
                  <p>Linkedin</p>
                </a>
              </div>
            </div>
            </div>
            </div>
            <div className="contactRight">
            <ContactForm/>
          </div>
       </div>
        </Animate>
      </div>
    
    </section>
  );
};
export default Contact;
