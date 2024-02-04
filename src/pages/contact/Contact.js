import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__container container">
        <div className="contact__social">
          <h3 className="contact__link">01065254159</h3>
          <FontAwesomeIcon className="contact__icon" icon={faWhatsapp} />
        </div>

        <div className="contact__social">
          <a
            className="contact__link"
            href="https://www.facebook.com/profile.php?id=100011538554307&mibextid=ViGcVu"
          >
            Walid Mostafa
          </a>
          <FontAwesomeIcon className="contact__icon" icon={faFacebook} />
        </div>

        <div className="contact__social">
          <a
            className="contact__link"
            href="https://instagram.com/walid_mostafa10?igshid=M2RkZGJiMzhjOQ=="
          >
            walid_mostafa30
          </a>
          <FontAwesomeIcon className="contact__icon" icon={faInstagram} />
        </div>

        <div className="contact__social">
          <a
            className="contact__link"
            href="https://www.linkedin.com/in/walid-mostafa-bb3567295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            Walid Mostafa
          </a>
          <FontAwesomeIcon className="contact__icon" icon={faLinkedin} />
        </div>

        <div className="contact__social">
          <a className="contact__link" href="https://github.com/WalidMostafa30">
            Walid_Mostafa30
          </a>
          <FontAwesomeIcon className="contact__icon" icon={faGithub} />
        </div>
      </div>
    </div>
  );
}
