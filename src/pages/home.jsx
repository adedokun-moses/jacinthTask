//import { useState } from "react";
import "./App.css";
import Navbar from "./Nav";
import featuredimg from "./featuredimg.png"
import Categories from "./categories";
import Bestselling from "./bestselling";
import Featured from "./featured";
import Mainfooter from "./mainfooter";
const Home = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="categoriesTab">
        <h5>Featured</h5>
         <img src={featuredimg} /> 
      </div>
      <Categories />
      <Bestselling />
      <Featured></Featured>
      <div className="w-1/2 mx-auto text-center newsletter pb-10">
        <p>Newsletter</p>
        <h4>
          Stay Updated with the <br></br> Latest News!
        </h4>
        <div className="searchBar mt-7">
          <input type="text" placeholder="Enter your Email" />
          <button>Subscribe</button>
        </div>
      </div>
      <Mainfooter />
    </div>
  );
};

export default Home;
