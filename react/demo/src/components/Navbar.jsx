import React from "react";
import owlImg from '../img/owl.png';

export default function Navbar() {
    return (
      <div id="topnav">
        <a id="logo" href="index.html">
          <img id="logo-img" src={owlImg} alt="" />
          <span className="orangeText largerFont">Owl</span>
          <span className="greenText largerFont">Books</span>
        </a>
        <form id="searchForm">
          <input type="text" placeholder="Search.." id="search" />
          <a className="btn searchBtn" href="search.html"><i className="fas fa-search marginRight"></i>Search</a>
        </form>
        <div>
          <a className="btn" href="cart.html"><i className="fas fa-basket-shopping marginRight"></i>Basket</a>
          <a className="btn" href="admin.html"><i className="fas fa-lock marginRight"></i>Admin</a>
        </div>
      </div>
    );
}