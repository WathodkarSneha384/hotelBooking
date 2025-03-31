import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePages from "./components/HeroComponent.jsx/Pages/HomePages";
import { SpecialOffers } from "./components/specialoffers/SpecialOffers";
import ReviewList from "./components/review/ReviewList";
import HotelList from "./components/BodyComponent.jsx/HotelList";
import HotelDetail from "./components/BodyComponent.jsx/HotelDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/offers" element={<SpecialOffers />} />
        <Route path="/review" element={<ReviewList />} />
         <Route path=" " element={<HotelList/>}/>
         <Route path="detail/:cards_id" element={<HotelDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
