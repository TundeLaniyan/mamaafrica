import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({ basket }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    window.location = `/products?search=${search}`;
    setSearch("");
  };
  return (
    <header>
      <Link to="/">
        <img className="logo" src="/img/logo1.png" alt="" />
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-text">search</button>
      </form>
      <div className="icon-box">
        {/* <Link className="text" to="sign-in.html">
          {" "}
          login/register
        </Link> */}
        {/* <div className="icon icon-1 "></div> */}
        <div className="icon-text">
          <Link to="item-page.html">Cart</Link>
        </div>
        <div className="icon icon-2"></div>
        {basket.length > 0 && (
          <div className="cart-amount">
            <div className="cart-figure">{basket.length}</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
