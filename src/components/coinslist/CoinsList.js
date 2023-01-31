import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CoinBrief from "../coinbrief/CoinBrief";
import "../homepage/HomePage.css";

function CoinsList(props) {
  // const { coin } = useParams();
  const operType = useSelector((state) => state.opType);
  const operQuery = useSelector((state) => state.opQuery);
  const dispatch = useDispatch();
  const [coinInf, setInf] = useState([]);
  const [inputValue, setInputValue]= useState();
  // if (operType === 2) {setInputValue(operQuery)};
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    dispatch({type: "SET_QUERY", payload: {opType: 2, opQuery: e.target.value}})
  };
 
  useEffect(() => {
    // console.log(`oper=${operType}&que=${operQuery}`);
    fetch(`http://localhost:3000/coinlist?oper=${operType}&que=${operQuery}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInf(data);
      });
  }, [operQuery, operType]);
  return (
    <div className="page-div">
      <header className="home-page-header">List of the coins</header>
      <main className="main">
        <p className="input-header">Input field</p>
        <input type="text" className="input" value={inputValue} onChange={handleInputChange}/>
        <button className="button">Search</button>
        <div>
          <Link to={"/advancedfilter"} className="advanced-filter">
            Advanced filter
          </Link>
          <Link to={"/"}  className="advanced-filter">Back to Homepage</Link>
        </div>
      </main>
      <footer className="l-page-footer">
        {coinInf.map((elem) => (
        <CoinBrief
          key = {elem.id}
          coinType = {elem.name}
          coinSrc={`/images/${elem.name}_1.png`}
          coinShortDescr={elem.desc_short} />
          ))}        
      </footer>
    </div>
  );
}

export default CoinsList;

