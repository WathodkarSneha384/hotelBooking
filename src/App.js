import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePages from "./components/HeroComponent.jsx/Pages/HomePages";
import { SpecialOffers } from "./components/specialoffers/SpecialOffers";
import ReviewList from "./components/review/ReviewList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/offers" element={<SpecialOffers />} />
        <Route path="/review" element={<ReviewList />} />
      </Routes>
    </Router>
  );
}

export default App;
