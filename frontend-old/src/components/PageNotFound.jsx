import React from "react";
import Navbar from "./Navbar";
import searching from "../animations/json/searching.json";
import Animation from "../animations/Animations";
import "../css/email.css";

function PageNotFound() {
  return (
    <div className="pagenotfound-parent">
      <Navbar name="Page Not Found" />
      <div className="pagenotfound-animation">
        <Animation name={searching} />
      </div>
      <div className="mainitems404page">
        <h1 className="pagenotfoundcode">{'404'}</h1>
        <h1 className="pagenotfound">{'Page not found'}</h1>
        <p className="lolnocookiesforyouhaha">
          {"Look where you have came searching for cookies! But looks like you won't be able to find some here :("}
        </p>
        <a className="returnhomewithoutcookieshaha" href="/">
          {'Return to home'}
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;
