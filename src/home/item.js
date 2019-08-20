import React from "react";
import "./item.scss";

export default props => {
  const { date, from, to, price, amount, favorite, handleToggle } = props;
  return (
    <article className="item">
      <label className="item__favorite">
        <input
          type="checkbox"
          className="item__favorite-input"
          checked={favorite}
          onChange={handleToggle}
        />
        <svg className="item__favorite-icon">
          <use xlinkHref="/sprite.svg#icon-check" />
        </svg>
      </label>
      <div className="item__content">
        <time className="item__date">{date.toDateString()}</time>
        <div className="item__route">
          <svg className="item__send-icon">
            <use xlinkHref="sprite.svg#icon-send" />
          </svg>
          <div className="item__route-from">{from}</div>
          <svg className="item__route-icon">
            <use xlinkHref="sprite.svg#icon-arrow-down" />
          </svg>
          <div className="item__route-from">{to}</div>
        </div>
        <div className="item__price">
          <svg className="item__price-icon">
            <use xlinkHref="sprite.svg#icon-truck" />
          </svg>
          <div className="item__price-amount">{price}</div>
        </div>
        <div className="item__amount">{amount}</div>
        <button className="item__actions">
          <svg className="item__actions-icon">
            <use xlinkHref="sprite.svg#icon-dot-menu" />
          </svg>
        </button>
      </div>
    </article>
  );
};
