import React, { useState, useEffect } from "react";
import Menu from "./Components/Menu.js";
import Categories from "./Components/Categories.js";
import data from "./data.js";
import "./App.css";

function App() {
  
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>

          <div className="underline"></div>
        </div>
        <Categories data={data}></Categories>
        <div className="section-center">
          {data.map((menuItem) => (
            <Menu key={menuItem} data={menuItem}></Menu>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
