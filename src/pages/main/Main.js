import React from "react";
import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="Main">
      <Title title={"العناوين"}></Title>
      <div className="Main__container container">
        <Link to={"/quranKareem"} className="Main__card">
          <img
            className="Main__card-img"
            src={require(`../../Images/Quran.jpg`)}
            alt="img"
          />
          <h3 className="Main__card-title">الْقُرْآن الْكَرِيْم</h3>
        </Link>

        <Link to={"/ahadith"} className="Main__card">
          <img
            className="Main__card-img"
            src={require(`../../Images/hadis.jpg`)}
            alt="img"
          />
          <h3 className="Main__card-title">الأحاديث</h3>
        </Link>

        <Link to={"/azkar"} className="Main__card">
          <img
            className="Main__card-img"
            src={require(`../../Images/azkar.jpg`)}
            alt="img"
          />
          <h3 className="Main__card-title">الأذكار</h3>
        </Link>

        <Link to={"/adeya"} className="Main__card">
          <img
            className="Main__card-img"
            src={require(`../../Images/adeya.jpg`)}
            alt="img"
          />
          <h3 className="Main__card-title">الأدعية</h3>
        </Link>

        <Link to={"/tasabeh"} className="Main__card">
          <img
            className="Main__card-img"
            src={require(`../../Images/tasabeh.jpg`)}
            alt="img"
          />
          <h3 className="Main__card-title">تسابيح</h3>
        </Link>

        <Link to={"/salahTime"} className="Main__card">
          <img
            className="Main__card-img"
            src={require(`../../Images/clock.jpg`)}
            alt="img"
          />
          <h3 className="Main__card-title">أوقات الصلاة</h3>
        </Link>
      </div>
    </div>
  );
}
