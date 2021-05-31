import React from "react";
import Search from "./Search";

function Header({searchcard}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchcard={searchcard}/>
    </header>
  );
}

export default Header;
