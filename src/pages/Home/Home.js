import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container container">
        <h1 className="home__title">
          مرحبا بك فى <br />
          موقع المصطفى الإسلامي
        </h1>
        <Link to={"/main"} className="home__btn">
          إبدأ التصفح
          <FontAwesomeIcon className="home__btn-icon" icon={faBackward} />
        </Link>
      </div>
    </div>
  );
}
