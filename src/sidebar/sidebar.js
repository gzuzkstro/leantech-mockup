import React from "react";
import "./sidebar.scss";
import Toggle from "./toggle";

export default props => {
  const { className, filters, setFilters } = props;

  const handleToggleChange = (label, value) => {
    setFilters({ ...filters, [label]: !value });
  };

  return (
    <aside className={`sidebar ${className}`}>
      <h3 className="sidebar__title">
        <span role="img" aria-label="light bulb">
          💡
        </span>{" "}
        Smart filters
      </h3>
      <hr />
      {Object.entries(filters).map(filter => {
        const [label, value] = filter;
        return (
          <Toggle
            key={label}
            label={label}
            value={value}
            handleToggleChange={handleToggleChange}
          />
        );
      })}
      <hr />
      <h3 className="sidebar__title">Status</h3>
      <input className="sidebar__input" type="text" placeholder="🔍 Search" />
      <button className="is-full-width">Delivered</button>
    </aside>
  );
};
