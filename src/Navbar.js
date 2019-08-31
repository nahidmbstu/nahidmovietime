import React, { useState, useEffect } from "react";
import { api_key } from "./api";
import { Link } from "react-router-dom";

import M from "materialize-css/dist/js/materialize.min.js";
import { AuthStatus, Auth } from "./Auth";

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});

const Navbar = () => {
  let [user, setUser] = useState(null);

  // useEffect(() => {
  //   async function getAccountInfo() {
  //     let url = "https://api.themoviedb.org/3/account?api_key=" + api_key;
  //     let res = await fetch(url);
  //     let data = await res.json();
  //     return data;
  //   }

  //   getAccountInfo()
  //     .then(data => {
  //       console.log(data);

  //       setUser(data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link to={{ pathname: "/" }} className="brand-logo">
            ShowTime
          </Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to={{ pathname: "/" }}>Home</Link>
            </li>
            <li>
              <Link to={{ pathname: "/tvshows" }}>tvshows</Link>
            </li>
            <li>
              <Link to={{ pathname: "/favorite" }}>Favorite</Link>
            </li>
            <li>
              <AuthStatus />
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to={{ pathname: "/" }}>Home</Link>
        </li>
        <li>
          <Link to={{ pathname: "/tvshows" }}>tvshows</Link>
        </li>
        <li>
          <Link to={{ pathname: "/favorite" }}>Favorite</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
