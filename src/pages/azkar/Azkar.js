import React from "react";
import azkarTitle from "../../data/azkarTitle.json";
import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";
export default function Azkar() {
  return (
    <div className="Azkar">
      <Title title={"الأذكار"}></Title>
      <div className="Azkar__container container">
        {azkarTitle.map((azkar) => {
          return (
            <Link
              className="Azkar__title"
              to={`/azkar/${azkar.id}`}
              key={azkar.id}
            >
              {azkar.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
