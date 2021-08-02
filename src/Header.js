import React from "react";
import "./sass/header.css";

import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from "@material-ui/core";
import gmail_icon from "./images/gmail.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img className="header__image" src={gmail_icon} alt="gmail image" />
        <h1 className="header__imageFont">Gmail</h1>
      </div>
      <div className="header__middle">
        <IconButton>
          <SearchIcon style={{ color: "gray" }} />
        </IconButton>
        <input placeholder="Search mail" type="text" />
        <IconButton>
          <ArrowDropDownIcon className="header__inputCaret" />
        </IconButton>
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon style={{ color: "gray" }} />
        </IconButton>
        <IconButton>
          <NotificationsIcon style={{ color: "gray" }} />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
