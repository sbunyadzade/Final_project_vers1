function SearchBar({ onSearchClicked, onInputChanged }) {
  return (
    <div>
      <p className="input-header">Input field</p>
      <input
        type="text"
        className="input"
        value={kw}
        onChange={handleInputChange}
      />
      <Link to={`/coinlist/${2 + kw}`}>  
      {/* History push */}
        <button className="button">Search</button>
      </Link>
    </div>
  );
}
