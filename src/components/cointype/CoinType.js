// import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./CoinType.css";

function CoinType({ coinType, coinSrc}) {
  // const [coinInf, setInf] = useState([]);
  const dispatch = useDispatch();
  const handleImgClick = () => {
    // console.log("imgClick", coinType);
    dispatch({type: "SET_QUERY", payload: {opType: 1, opQuery: coinType}})
  };

  const handleLinkClick = () => {
    // console.log("LinkClick", coinType);
    dispatch({type: "SET_QUERY", payload: {opType: 1, opQuery: coinType}})
  };


  return (
    <div className="coin-block">
      <p className="coin-type">{coinType}</p>
      <Link to="/coinlist" onClick={handleLinkClick} >
            Show all
      </Link>
      <img
        src={coinSrc}
        alt=''
        className="coin-img" 
        onClick={handleImgClick}       
      />
    </div>
  );
}

export default CoinType;
