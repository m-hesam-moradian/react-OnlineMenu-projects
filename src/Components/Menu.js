import React from "react";

const Menu = (props) => {
  // console.log(props.data);
  return (
    <article
      key={props.data.id}
      category={props.data.category}
      className="menu-item"
    >
      <img src={props.data.img} className="photo" />
      <div className="item-info">
        <header>
          <h4>{props.data.title}</h4>
          <h4 className="price">${props.data.price}</h4>
        </header>
        <p className="item-text">{props.data.desc}</p>
      </div>
    </article>
  );
};
export default Menu;
