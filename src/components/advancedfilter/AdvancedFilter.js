import "../homepage/HomePage.css";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function AdvancedFilter() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [kw, setInputValue] = useState();

  const [metalValue, setMetal] = useState();
  const handleMetalChange = (e) => {
    setMetal(e.target.value);
  };

  const [qualityValue, setQuality] = useState();
  const handleQualityChange = (e) => {
    setQuality(e.target.value);
  };

  const [countryValue, setCountry] = useState();
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const [priceFromValue, setPriceFrom] = useState();
  const handlePriceFromChange = (e) => {
    setPriceFrom(e.target.value);
  };

  const [priceToValue, setPriceTo] = useState();
  const handlePriceToChange = (e) => {
    setPriceTo(e.target.value);
  };

  const [yearFromValue, setYearFrom] = useState();
  const handleYearFromChange = (e) => {
    setYearFrom(e.target.value);
  };

  const [yearToValue, setYearTo] = useState();
  const handleYearToChange = (e) => {
    setYearTo(e.target.value);
  };

  const [countryInf, setInfCountry] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/coinlist?oper=3`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInfCountry(data);
      });
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const dispatch = useDispatch();
  const handleAdvSearch = () => {
    let searchStr = '';
    if (kw) searchStr += kw;
    if (countryValue) searchStr += `&cntry=${countryValue}`;
    if (metalValue) searchStr += `&mtl=${metalValue}`;
    if (qualityValue) searchStr += `&qual=${qualityValue}`;
    if (priceFromValue) searchStr += `&prcfrom=${priceFromValue}`;
    if (priceToValue) searchStr += `&prcto=${priceToValue}`;
    if (yearFromValue) searchStr += `&yearfrom=${yearFromValue}`;
    if (yearToValue) searchStr += `&yearto=${yearToValue}`;
    console.log(searchStr);
    dispatch({type: "SET_QUERY", payload: {opType: 2, opQuery: searchStr}})
  }

  return (
    <div className="page-div">
      <header className="home-page-header">Advanced Filter</header>
      <main className="main">
        <p className="input-header">Input field</p>
        <input type="text" className="input" onChange={handleInputChange} value={kw}/>
        <Link to={`/coinlist`}>
        <button className="button" onClick={handleAdvSearch}>Search</button>
        </Link>
        <div>
          <Link onClick={goBack}>Back</Link>
        </div>
        <div className="advanced-string">
          <div className="advanced-country">
            <p className="input-header">Issuing country</p>
            <select
              value={countryValue}
              onChange={handleCountryChange}
              className="input"
              >
              <option value={""}>All</option>
            
              {countryInf.map((elem) => (
                <option value={elem.country_id}>{elem.country}</option>
              ))}
            </select>
          </div>
          <div className="advanced-country">
            <p className="input-header advanced-label">Price</p>
            <label className="advanced-label">
              from
              <input className="advanced-input" onChange={handlePriceFromChange} value={priceFromValue}/>
            </label>
            <label className="advanced-label">
              to
              <input className="advanced-input" onChange={handlePriceToChange} value={priceToValue}/>
            </label>
          </div>
        </div>
        <div className="advanced-string">
          <div>
        <p className="input-header">Metal</p>
        <select
          value={metalValue}
          onChange={handleMetalChange}
          className="input"
        >
          <option value={""}>All</option>
          <option value="1">Nickel</option>
          <option value="2">Steel</option>
          <option value="3">Gold</option>
          <option value="5">Silver</option>
        </select>
        </div>
        <div>
            <p className="input-header advanced-label">Year of issue</p>
            <label className="advanced-label">
              from
              <input className="advanced-input" onChange={handleYearFromChange} value={yearFromValue}/>
            </label>
            <label className="advanced-label">
              to
              <input className="advanced-input" onChange={handleYearToChange} value={yearToValue}/>
            </label>
          </div>
        </div>
        <p className="input-header">Quality of the coin</p>
        <select
          value={qualityValue}
          onChange={handleQualityChange}
          className="input"
        >
          <option value={""}>All</option>
          <option value="BU">BU</option>
          <option value="null">null</option>
        </select>
      </main>
    </div>
  );
}

export default AdvancedFilter;
