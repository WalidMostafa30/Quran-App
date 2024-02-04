import React from "react";
import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";
import nameSorah from "../../data/nameSorah.json";

export default function QuranKareem() {
  return (
    <div className="Quran-kareem">
      <div className="Quran-kareem__container container">
        <Title title={"الْقُرْآن الْكَرِيْم"} />
        <div className="Quran-kareem__content">
          {nameSorah.map((sor) => {
            return (
              <Link
                to={`/quranKareem/surah/${sor.number}`}
                className="Quran-kareem__sorah-name"
                key={sor.number}
              >
                <p>{sor.name}</p>
                <p>{sor.englishName}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
