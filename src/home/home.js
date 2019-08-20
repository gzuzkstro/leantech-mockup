import React from "react";
import Item from "./item";
import "./home.scss";

export default props => {
  const { items, setItems } = props;

  const randomDate = () => {
    const start = new Date();

    const end = new Date(
      start.getFullYear() + 2,
      start.getMonth(),
      start.getDate()
    );

    let date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );

    return date;
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        date: randomDate(),
        from: "Houston, TX, 33619",
        to: "Atlanta, GA, 30123",
        price: "$250.00",
        amount: 1,
        favorite: false
      }
    ]);
  };

  return (
    <div className="home">
      <label className="item__favorite">
        <input type="checkbox" className="item__favorite-input" />
        <svg className="item__favorite-icon">
          <use xlinkHref="/sprite.svg#icon-check" />
        </svg>
      </label>
      <div className="home__search">
        <input
          className="home__search-field"
          type="text"
          placeholder="🔍 Search"
        />
      </div>
      <div className="home__items">
        {items.map(item => (
          <Item
            key={`${item.date.toString()}`}
            handleToggle={() => {
              setItems(
                items.map(it => {
                  if (it === item) {
                    return { ...item, favorite: !it.favorite };
                  } else {
                    return it;
                  }
                })
              );
            }}
            {...item}
          />
        ))}
      </div>
      <button className="home__add-item" onClick={addItem}>
        <svg className="home__add-item-icon">
          <use xlinkHref="/sprite.svg#icon-plus" />
        </svg>
      </button>
    </div>
  );
};
