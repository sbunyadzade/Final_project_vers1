import HomePage from "./components/homepage/HomePage";
import AdvancedFilter from "./components/advancedfilter/AdvancedFilter";
import { Route, Routes } from "react-router-dom";
import CoinsList from "./components/coinslist/CoinsList";
import CoinDescription from "./components/coindescription/CoinDescription";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/advancedfilter" element={<AdvancedFilter />} />
        <Route path="/coinlist" element={<CoinsList />} />
        <Route path="/description/:id" element={<CoinDescription />} />
      </Routes>
    </div>
  );
}

export default App;
