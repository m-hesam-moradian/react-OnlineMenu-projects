import React, { useState, useCallback, useEffect } from "react";

let activeButton = "shakes";

const Categories = ({ Allcategories, categotyMatcher }) => {
  const [wichActive, setWichActive] = useState("all");

  useEffect(() => {
    activeButton = wichActive;
  }, [wichActive]);

  return (
    <div className="btn-container">
      {Allcategories.map((catalogIndex) => (
        <button
          onClick={() => {
            setWichActive(catalogIndex);
            categotyMatcher(catalogIndex);
          }}
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

export { activeButton };

export default Categories;
