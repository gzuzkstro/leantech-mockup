import React from "react";
import "./toggle.scss";

export default props => {
  const { label, value, handleToggleChange } = props;

  return (
    <label className="toggle" key={label}>
      <input
        className="toggle__input"
        type="checkbox"
        checked={value}
        onChange={() => {
          handleToggleChange(label, value);
        }}
      />
      <svg className="toggle__icon">
        <use xlinkHref={`/sprite.svg#icon-${label}`} />
      </svg>
      <span className="toggle__visual" />
    </label>
  );
};
