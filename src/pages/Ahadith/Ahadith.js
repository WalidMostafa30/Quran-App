import React, { useState } from "react";
import Title from "../../components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import hadith from "../../data/hadith.json";

export default function Ahadith() {
  const [index, setIndex] = useState(0);
  const nextHadith = () => {
    index === 299 ? setIndex(0) : setIndex(index + 1);
  };
  const prevHadith = () => {
    index === 0 ? setIndex(299) : setIndex(index - 1);
  };
  return (
    <div className="Ahadith">
      <div className="Ahadith__container container">
        <Title title={"أحاديث"} />
        <div className="Ahadith__section">
          <div className="Ahadith__btns">
            <button className="Ahadith__btn" onClick={prevHadith}>
              <FontAwesomeIcon
                className="Ahadith__btn-icon"
                icon={faCaretRight}
              />
              السابق
            </button>
            <div className="Ahadith__num">300/{index + 1}</div>
            <button className="Ahadith__btn" onClick={nextHadith}>
              التالى
              <FontAwesomeIcon
                className="Ahadith__btn-icon"
                icon={faCaretLeft}
              />
            </button>
          </div>
          <div className="Ahadith__content">{hadith[index].arab}</div>
        </div>
      </div>
    </div>
  );
}
