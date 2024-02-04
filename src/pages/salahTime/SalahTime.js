import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";

export default function SalahTime() {
  const [time, settime] = useState([]);
  const day = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const year = new Date().getDate();
  useEffect(() => {
    fetch(
      `https://api.aladhan.com/v1/timingsByCity/${day}-${month}-${year}?city=cairo&country=Egypt&method=8`
    )
      .then((res) => res.json())
      .then((data) => settime(data.data["timings"]));
  }, [day, month, year]);
  return (
    <div className="salahTime">
      <Title title={"اوقات الصلاة"} />
      <div className="salahTime__container container">
        <div className="salahTime__card">
          <h1 className="salahTime__card-time">{time.Sunrise}</h1>
          <h4 className="salahTime__card-name">الشروق</h4>
        </div>

        <div className="salahTime__card">
          <h1 className="salahTime__card-time">{time.Fajr}</h1>
          <h4 className="salahTime__card-name">الفجر</h4>
        </div>

        <div className="salahTime__card">
          <h1 className="salahTime__card-time">{time.Dhuhr}</h1>
          <h4 className="salahTime__card-name">الضهر</h4>
        </div>

        <div className="salahTime__card">
          <h1 className="salahTime__card-time">{time.Asr}</h1>
          <h4 className="salahTime__card-name">العصر</h4>
        </div>

        <div className="salahTime__card">
          <h1 className="salahTime__card-time">{time.Maghrib}</h1>
          <h4 className="salahTime__card-name">المغرب</h4>
        </div>

        <div className="salahTime__card">
          <h1 className="salahTime__card-time">{time.Isha}</h1>
          <h4 className="salahTime__card-name">العشاء</h4>
        </div>
      </div>
    </div>
  );
}
