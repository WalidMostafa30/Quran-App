import React from "react";
import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";

export default function Tasabeh() {
  return (
    <div className="Tasabeh">
      <Title title={"تسابيح"}></Title>
      <div className="Tasabeh__container container">
        <Link className="Tasabeh__title" to={"/tasabehPage"}>
          تسابيح
        </Link>

        <Link className="Tasabeh__title" to={"/makeSebha"}>
          أنشئ سبحتك
        </Link>
      </div>
    </div>
  );
}
