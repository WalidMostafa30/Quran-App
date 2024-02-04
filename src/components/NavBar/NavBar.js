import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [toggleNav, setToggleNav] = useState(false);
  const openNav = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <nav className="nav">
      <div className="nav__container container">
        <Link className="nav__logo" to={"/"}>
          المصطفى
        </Link>

        <ul
          className={toggleNav ? "nav__links open" : "nav__links"}
          onClick={openNav}
        >
          <Link className="nav__link" to={"/"}>
            الصفحه الرئيسيه
          </Link>

          <Link className="nav__link" to={"/quranKareem"}>
            الْقُرْآن الْكَرِيْم
          </Link>

          <Link className="nav__link" to={"/ahadith"}>
            أحاديث
          </Link>

          <Link className="nav__link" to={"/main"}>
            العناوين
          </Link>

          <Link className="nav__link" to={"/contact"}>
            تواصل معنا
          </Link>
        </ul>

        <div
          onClick={openNav}
          className={toggleNav ? "nav__brg-icon open" : "nav__brg-icon"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
