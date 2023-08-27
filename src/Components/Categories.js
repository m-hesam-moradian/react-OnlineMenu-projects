import React, { useState, useCallback, useEffect } from "react";

const Categories = (props) => {
  const [catalog, setCatalog] = useState([]);
  const [wichActive, setWichActive] = useState("All");

  useEffect(() => {
    let catalogs = [];
    props.data.map(
      (index) => (catalogs = ["All", ...catalogs, index.category])
    );
    const catalogsSeted = new Set(catalogs);

    setCatalog(Array.from(catalogsSeted));
  }, []);
  const catalogHandler = (event, catalogIndex) => {
    setWichActive(catalogIndex);
  };
  return (
    <div className="btn-container">
      {catalog.map((catalogIndex) => (
        <button
          onClick={(event) => catalogHandler(event, catalogIndex)}
          key={catalogIndex}
          type="button"
          // highlight class  for highlight main category
          className={`filter-btn    ${
            wichActive == catalogIndex && "highlight"
          }`}
        >
          {catalogIndex}
        </button>
      ))}
    </div>
  );
};

export default Categories;
