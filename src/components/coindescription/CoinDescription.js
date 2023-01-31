import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./CoinDescription.css";

function CoinDescription() {
    const { id } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const [coinData, setData] = useState([]);
    console.log("coinType 77- ", id);
    useEffect(() => {
      fetch(`http://localhost:3000/description/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            console.log("data - ", data[0]);
            setData(data[0]);
        });
    }, [id]);
      return(
        <div className="wrapper">
            <div className="coins">
                <img src={`/images/${coinData.name}_1.png`} alt="p1" className="img" />
                <img src={`/images/${coinData.name}_2.png`} alt="p2" className="img" />
            </div>
            <div className="inf">
                <p className="coin-title">{coinData.name}</p>
                <p className="coin-desc">{coinData.desc_short}</p>
                <p className="coin-desc">{coinData.desc_long}</p>
                {/* <ul>
                    <li className="liDesc"> Country      - {coinData.country} </li>
                    <li className="liDesc"> Composition  - {coinData.material} </li>
                    <li className="liDesc"> Quality      - {coinData.quality} </li>
                    <li className="liDesc"> Denomination - {coinData.denomination} </li>
                    <li className="liDesc"> Year         - {coinData.issue_year} </li>
                    <li className="liDesc"> Weight       - {coinData.weight} g </li>
                    <li className="liDesc"> Price        - {coinData.price}$ </li>
                </ul> */}
                <table className="tbl-desc">
                    <tbody>
                        <tr>
                            <td>Country</td>
                            <td>{coinData.country}</td>
                        </tr>
                        <tr>
                            <td>Composition</td>
                            <td>{coinData.material}</td>
                        </tr>
                        <tr>
                            <td>Quality</td>
                            <td>{coinData.quality}</td>
                        </tr>
                        <tr>
                            <td>Denomination</td>
                            <td>{coinData.denomination}</td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>{coinData.issue_year}</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>{coinData.weight}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{coinData.price}</td>
                        </tr>
                    </tbody>
                </table>
                <footer>
                    <Link onClick={goBack}>Back</Link>
                </footer>
            </div>
        </div>
    )
}

export default CoinDescription;
