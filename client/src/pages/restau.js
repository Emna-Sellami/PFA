import React, { useState } from "react";
import Menu from "../components/menu";
import Categories from "../components/categories";
import items from "../components/data";
import logo from "../assets/logo.JPG";
import "../assets/css/Restau.css"

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function Restau () {

  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    
      <div >
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <div className="menu-items">
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        </div>
        <div className="menu-items">
           <Menu items={menuItems} />
          </div>
      </div>

  );
};


