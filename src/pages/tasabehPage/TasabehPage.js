import React from "react";
import Title from "../../components/Title/Title";
import tasabeh from "../../data/tasabeh.json";
export default function TasabehPage() {
  return (
    <div className="TasabehPage">
      <Title title={tasabeh[1][0].category} />
      <div className="TasabehPage__container container">
        {tasabeh[1].map((tsbh, index) => {
          return (
            <div key={index} className="TasabehPage__card">
              <div className="TasabehPage__number">{`(${index + 1})`}</div>
              <div className="TasabehPage__section">
                <h5 className="TasabehPage__content">{tsbh.content}</h5>
                <div className="TasabehPage__description">
                  <p>عدد المرات : {parseInt(tsbh.count, 10)}</p>
                  <p>{tsbh.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
