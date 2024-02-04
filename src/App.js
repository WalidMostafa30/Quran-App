import React from "react";
import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Ahadith from "./pages/Ahadith/Ahadith";
import QuranKareem from "./pages/QuranKareem/QuranKareem";
import Sorah from "./pages/Sorah/Sorah";
import Main from "./pages/main/Main";
import Azkar from "./pages/azkar/Azkar";
import Adeya from "./pages/adeya/Adeya";
import AzkarPage from "./pages/azkarPage/AzkarPage";
import AdeyaPage from "./pages/adeyaPage/AdeyaPage";
import Tasabeh from "./pages/tasabeh/Tasabeh";
import TasabehPage from "./pages/tasabehPage/TasabehPage";
import SalahTime from "./pages/salahTime/SalahTime";
import MakeSebha from "./pages/makeSebha/MakeSebha";
import Contact from "./pages/contact/Contact";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/ahadith" element={<Ahadith />} />
          <Route path="/quranKareem" element={<QuranKareem />} />
          <Route path="/quranKareem/surah/:sorahID" element={<Sorah />} />
          <Route path="/azkar" element={<Azkar />} />
          <Route path="/azkar/:azkarID" element={<AzkarPage />} />
          <Route path="/adeya" element={<Adeya />} />
          <Route path="/adeya/:adeyaID" element={<AdeyaPage />} />
          <Route path="/tasabeh" element={<Tasabeh />} />
          <Route path="/tasabehPage" element={<TasabehPage />} />
          <Route path="/makeSebha" element={<MakeSebha />} />
          <Route path="/salahTime" element={<SalahTime />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
