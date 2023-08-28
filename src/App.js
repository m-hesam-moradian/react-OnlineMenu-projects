import React, { useState, useEffect } from "react";
import Menu from "./Components/Menu.js";
import Categories, { activeButton } from "./Components/Categories.js";
import data from "./data.js";
import "./App.css";

const Allcategories = ["all", ...new Set(data.map((menu) => menu.category))];
function App() {
  const [menuData, setmenuData] = useState(data);
  const categotyMatcher = (category) => {
    if (category == "all") {
      setmenuData(data);
    } else {
      setmenuData(data.filter((obj) => obj.category == category));
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>

          <div className="underline"></div>
        </div>
        <Categories
          Allcategories={Allcategories}
          categotyMatcher={categotyMatcher}
        ></Categories>
        <div className="section-center">
          {menuData.map((menuItem) => (
            // console.log(activeButton == menuItem.category);
            <Menu key={menuItem} data={menuItem}></Menu>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
