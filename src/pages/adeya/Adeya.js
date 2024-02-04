import React from "react";
import adeyaTitle from "../../data/adeyaTitle.json";
import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";

export default function Adeya() {
  return (
    <div className="Adeya">
      <Title title={"الأذكار"}></Title>
      <div className="Adeya__container container">
        {adeyaTitle.map((adeya) => {
          return (
            <Link
              className="Adeya__title"
              to={`/adeya/${adeya.id}`}
              key={adeya.id}
            >
              {adeya.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
