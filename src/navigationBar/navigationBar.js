import React from "react";
import { Link } from "react-router-dom";

import "./navigationBar.scss";

export default props => {
  const navigationItems = [
    { to: "/", label: "Home", icon: "home" },
    { to: "/messages", label: "Messages", icon: "envelop" },
    { to: "/wishlist", label: "Wishlist", icon: "star" },
    { to: "/settings", label: "Settings", icon: "config" },
    { to: "/my-account", label: "My Account", icon: "user" }
  ];

  const { className } = props;

  return (
    <nav className={`navigation-bar ${className}`}>
      {navigationItems.map(item => (
        <Link to={item.to} key={item.label} className="navigation-bar__item">
          <svg className="navigation-bar__icon">
            <use xlinkHref={`/sprite.svg#icon-${item.icon}`} />
          </svg>
          <span className="navigation-bar__label">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};
