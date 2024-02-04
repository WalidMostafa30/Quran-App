import React from "react";
import Title from "../../components/Title/Title";
import adeya from "../../data/adeya.json";
import { useParams } from "react-router-dom";
export default function AzkarPage() {
  const param = useParams();
  return (
    <div className="AdeyaPage">
      <Title title={adeya[1][0].category} />
      <div className="AdeyaPage__container container">
        {adeya[param.adeyaID].map((ade, index) => {
          return (
            <div key={index} className="AdeyaPage__card">
              <div className="AdeyaPage__number">{`(${index + 1})`}</div>
              <div className="AdeyaPage__section">
                <h5 className="AdeyaPage__content">{ade.content}</h5>
                <div className="AdeyaPage__description">
                  <p>عدد المرات : {parseInt(ade.count, 10)}</p>
                  <p>{ade.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
