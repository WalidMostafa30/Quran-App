import React, { useState } from "react";
import Title from "../../components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import AddContent from "../../components/Add-Content/EditTask";
import toast from "react-hot-toast";

export default function MakeSebha() {
  const [content, setContent] = useState("");
  const [goal, setGoal] = useState("");
  const [counter, setCounter] = useState(0);
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    if (counter === goal - 1) {
      setCounter(0);
      toast.success("احسنت.. لقد انهيت التسبيح");
    } else if (goal) {
      setCounter(counter + 1);
    }
  };

  const resetcounter = () => {
    setCounter(0);
  };

  const deg = (counter / goal) * 100;

  const toggleModale = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="MakeSebha">
        <Title title={"انشئ سبحتك"} />
        <div className="MakeSebha__container container">
          <div className="MakeSebha__section">
            <div className="MakeSebha__content">
              <h3 className="MakeSebha__content-title">المضمون</h3>
              <h3 className="MakeSebha__content-input">
                {content.length > 0 ? content : "فارغ ..."}
              </h3>
            </div>
            <div className="MakeSebha__content">
              <h3 className="MakeSebha__content-title">الهدف</h3>
              <h3 className="MakeSebha__content-input">
                {goal.length > 0 ? goal : "فارغ ..."}
              </h3>
            </div>
            <div onClick={toggleModale} className="MakeSebha__content-btn">
              ادخل مضمون التسبيح
            </div>
          </div>
          <div className="MakeSebha__counter">
            <div
              className="MakeSebha__counter-goal"
              style={{
                background: `conic-gradient(black ${deg * 3.6}deg,lightgray  ${
                  deg * 3.6
                }deg)`,
              }}
            >
              <div className="MakeSebha__counter-goalNum">{counter}</div>
              <button
                className="MakeSebha__counter-resetBtn"
                onClick={resetcounter}
              >
                <FontAwesomeIcon icon={faRotateRight} />
              </button>
            </div>
            <button
              className="MakeSebha__counter-clickBtn"
              onClick={handleClick}
            >
              اضغط <br /> للتسبيح
            </button>
          </div>
        </div>
      </div>
      {modal && (
        <AddContent
          toggleModale={toggleModale}
          setContent={setContent}
          goal={goal}
          setGoal={setGoal}
        />
      )}
    </>
  );
}
