import { useState } from "react";
import "./CoinBrief.css";
// import CoinDescription from "./CoinDescription";
import { Link } from "react-router-dom";

function CoinBrief(props) {
  const { coinSrc, coinShortDescr } = props;
  const coinName = props.coinType;
  const [fullDescription, setDescription] = useState();

  //   const handleButton = () => {
  //     console.log("fetch", coinName);
  //     fetch(`http://localhost:3000/description/${coinName}`)
  //         .then(response => {
  //             return response.json();
  //         })
  //         .then(data => {
  // //          console.log(data[0].desc_long);
  //           // console.log({...data});
  //             setDescription(data[0].desc_long);
  //         });
  //   };

  return (
    <div className="b-coin-block">
      <Link to={`/description/${coinName}`}>
        <img src={coinSrc} alt={coinName} className="b-coin-img" />
      </Link>
      <div className="b-inf-block">
        <p className="b-coin-type">{coinName}</p>
        <p className="b-coin-descr">{fullDescription || coinShortDescr}</p>
      </div>
      {/* <Link to={`/description/${coinName}`}>Show all information</Link> */}
    </div>
  );
}

export default CoinBrief;

//  white-space: pre-line;  /n/n  превращает в параграф
