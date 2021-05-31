import React, { useState } from "react";

function Search({searchcard}) {
  const[data,setData]=useState("")

  function handleSubmit(e) {
    e.preventDefault();
    searchcard(data);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        name={data}
        type="text"
        id="search"
        placeholder="search free stuff"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button type="submit" >🔍</button>
    </form>
  );
}

export default Search;
