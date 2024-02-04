import React, { useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faCaretLeft,
  faCaretRight,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import titleSorah from "../../data/titleSorah.json";

export default function Sorah() {
  const params = useParams();

  // page states #########################

  const startPage = titleSorah[params.sorahID - 1].start_page;
  const endPage = titleSorah[params.sorahID - 1].end_page;
  const [page, setPage] = useState(startPage);
  const [realPage, setRealPage] = useState(1);

  // audio toggle #########################

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // fetch title of sorah #########################

  const title = titleSorah[params.sorahID - 1].name;

  // get params number for audio and add {00} before num #########################

  const par = String(params.sorahID).padStart(3, "0");

  // func play and pause audio #########################

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // inc and dec audio time #########################

  const increaseAudio = () => {
    audioRef.current.currentTime += 10;
  };
  const decreaseAudio = () => {
    audioRef.current.currentTime -= 10;
  };

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const numPages = endPage + 1 - startPage;

  // inc and dec page #########################

  const increasepage = () => {
    if (page === endPage) {
      setPage(startPage);
      setRealPage(1);
    } else {
      setPage(page + 1);
      setRealPage(realPage + 1);
    }
  };
  const decreasepage = () => {
    if (page === startPage) {
      setPage(endPage);
      setRealPage(numPages);
    } else {
      setPage(page - 1);
      setRealPage(realPage + 1);
    }
  };

  // get page number and add {00} before num #########################

  const st = String(page).padStart(3, "0");

  return (
    <div className="Sorah">
      <div className="Sorah__container container">
        {/* audio-Player */}
        <div className="Sorah__audio-Player">
          <h1 className="Sorah__title">{`{ سوره ${title} }`}</h1>

          <audio
            src={`http://download.quranicaudio.com/quran/ahmed_ibn_3ali_al-3ajamy/${par}.mp3`}
            className="Sorah__audio"
            controls
            ref={audioRef}
            onEnded={togglePlayPause}
          ></audio>

          <div className="Sorah__audio-btns">
            <div onClick={increaseAudio} className="Sorah__audio-btn">
              <FontAwesomeIcon
                className="Sorah__audio-btn-icon"
                icon={faForward}
              />
            </div>
            <div onClick={togglePlayPause} className="Sorah__audio-btn">
              {isPlaying ? (
                <FontAwesomeIcon
                  className="Sorah__audio-btn-icon"
                  icon={faPause}
                />
              ) : (
                <FontAwesomeIcon
                  className="Sorah__audio-btn-icon"
                  icon={faPlay}
                />
              )}
            </div>
            <div onClick={decreaseAudio} className="Sorah__audio-btn">
              <FontAwesomeIcon
                className="Sorah__audio-btn-icon"
                icon={faBackward}
              />
            </div>
          </div>
        </div>

        {/* ***************************************************************** */}
        <div className="Sorah__text">
          <div className="Sorah__text-btns">
            <button className="Sorah__text-btn" onClick={decreasepage}>
              <FontAwesomeIcon
                className="Sorah__text-btn-icon"
                icon={faCaretRight}
              />
              الصفحه السابقه
            </button>
            <div className="Sorah__text-num">
              {numPages}/{realPage}
            </div>
            <button className="Sorah__text-btn" onClick={increasepage}>
              الصفحه التاليه
              <FontAwesomeIcon
                className="Sorah__text-btn-icon"
                icon={faCaretLeft}
              />
            </button>
          </div>

          <div className="Sorah__img">
            <img
              src={`https://www.mp3quran.net/api/quran_pages_svg/${st}.svg`}
              alt="00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
