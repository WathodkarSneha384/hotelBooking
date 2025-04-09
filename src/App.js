import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePages from "./components/HeroComponent.jsx/Pages/HomePages";
import { OfferList } from "./components/specialoffers/OfferList";
import ReviewList from "./components/review/ReviewList";
import HotelList from "./components/BodyComponent.jsx/HotelList";
import HotelDetail from "./components/BodyComponent.jsx/HotelDetail";
import LoginRegister from "./components/login_register/LoginRegister";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/offers" element={<OfferList />} />
        <Route path="/review" element={<ReviewList />} />
        <Route path=" " element={<HotelList />} />
        <Route path="detail/:cards_id" element={<HotelDetail />} />
        <Route path="/login_register" element={<LoginRegister />} />
        <Route path="footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
