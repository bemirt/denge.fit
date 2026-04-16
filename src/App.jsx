import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {
  GuideArticleBloating,
  GuideArticleDesk,
  GuideArticleInsulin,
  GuideArticlePregnancy,
  GuideArticlePcos,
  GuideArticleSweet,
} from "./pages/GuideArticles";
import Guides from "./pages/Guides";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import ScrollToTop from "./components/ScrollToTop";
import { Footer, Header } from "./shared/layout";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f1e8] text-neutral-900">
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rehberler" element={<Guides />} />
        <Route path="/araclar" element={<Tools />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route
          path="/rehberler/insulin-direnci-gunluk-beslenme"
          element={<GuideArticleInsulin />}
        />
        <Route
          path="/rehberler/tatli-istegi-nasil-azaltilir"
          element={<GuideArticleSweet />}
        />
        <Route
          path="/rehberler/masa-basi-beslenme-hatalari"
          element={<GuideArticleDesk />}
        />
        <Route
          path="/rehberler/gebelik-planlayan-kadinlar-icin-beslenme"
          element={<GuideArticlePregnancy />}
        />
        <Route
          path="/rehberler/pcos-beslenme-yaklasimi"
          element={<GuideArticlePcos />}
        />
        <Route
          path="/rehberler/siskinlik-icin-gunluk-beslenme-onerileri"
          element={<GuideArticleBloating />}
        />
      </Routes>

      <Footer />
    </div>
  );
}
