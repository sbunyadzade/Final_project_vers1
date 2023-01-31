import CoinType from "../cointype/CoinType";
// import AdvancedFilter from "./AdvancedFilter";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { useDispatch } from "react-redux";
import { useState } from "react";

function HomePage() {
  const [kw, setInputValue] = useState();
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    dispatch({type: "SET_QUERY", payload: {opType: 2, opQuery: e.target.value}})
  };
  
  return (
    <form className="page-div">
      <header className="home-page-header">Homepage</header>
      <main className="main">
        <p className="input-header">Input field</p>
        <input
          type="text"
          className="input"
          value={kw}
          onChange={handleInputChange}
        />
        <Link to={`/coinlist`}>  
        {/* ?oper=2&que=${kw} */}

          <button className="button" >
            Search
          </button>
        </Link>
        <div>
          <Link to={"/advancedfilter"} className="advanced-filter">
            Advanced filter
          </Link>
        </div>
      </main>
      <footer className="page-footer">
        <CoinType
          coinType={"Bullion"}
          coinSrc={"/images/South Vietnamese Dong_1.png"}
        />
        <CoinType coinType={"Exclusive"} coinSrc={"/images/ISK_1.png"} />
        <CoinType coinType={"Commemorative"} coinSrc={"/images/Looney_1.png"} />
      </footer>
    </form>
  );
}

export default HomePage;
