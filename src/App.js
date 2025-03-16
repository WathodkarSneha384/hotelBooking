import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePages from "./components/HeroComponent.jsx/Pages/HomePages";


function App() {
  return (
   <Router>
         <Routes>
           <Route path="/" element={<HomePages />} />
           
         </Routes>
       </Router>
  );
}

export default App;
