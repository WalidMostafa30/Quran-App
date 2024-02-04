import React, { useState } from "react";
// import toast from "react-hot-toast";

export default function AddContent({ toggleModale, setContent, setGoal }) {
  const [inputName, setinputName] = useState("");
  const [Inputgol, setInputgol] = useState("");

  const onChangeEditContent = (e) => {
    setinputName(e.target.value);
  };

  const onChangeEditGoal = (e) => {
    setInputgol(e.target.value);
  };

  function submitEditHandler(e) {
    e.preventDefault();
    if (
      inputName.trim().length > 0 &&
      Inputgol.trim().length > 0 &&
      !isNaN(parseFloat(Inputgol)) &&
      isFinite(Inputgol)
    ) {
      setContent(inputName);
      setGoal(Inputgol);
      toggleModale();
    }
  }

  return (
    <div className="Add-content">
      <div className="Add-content__BG" onClick={toggleModale} />
      <form className="Add-content__form" onSubmit={submitEditHandler}>
        <label className="Add-content__label">المضمون</label>
        <input className="Add-content__input" onChange={onChangeEditContent} />
        <label className="Add-content__label">الهدف</label>
        <input className="Add-content__input" onChange={onChangeEditGoal} />
        <div className="Add-content__group-btns ">
          <button className="Add-content__btn Add-content__btn--post">
            Edit
          </button>
          <button
            className="Add-content__btn Add-content__btn--close"
            type="button"
            onClick={toggleModale}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
