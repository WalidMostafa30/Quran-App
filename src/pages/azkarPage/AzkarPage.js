import React from "react";
import Title from "../../components/Title/Title";
import azkar from "../../data/azkar.json";
import { useParams } from "react-router-dom";
export default function AdeyaPage() {
  const param = useParams();
  return (
    <div className="azkarPage">
      <Title title={azkar[1][0].category} />
      <div className="azkarPage__container container">
        {azkar[param.azkarID].map((zkr, index) => {
          return (
            <div key={index} className="azkarPage__card">
              <div className="azkarPage__number">{`(${index + 1})`}</div>
              <div className="azkarPage__section">
                <h5 className="azkarPage__content">{zkr.content}</h5>
                <div className="azkarPage__description">
                  <p>عدد المرات : {parseInt(zkr.count, 10)}</p>
                  <p>{zkr.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
