import React from "react";
import { Outlet } from "react-router-dom";
import { SomeSkill } from "../someSkills/SomeSkill";
import { Slider } from "./components/slider/Slider";

import "./styles.scss"

export const Layout = () => {
  return (
    <div className="container">
      <div>
        <Slider />
      </div>
      <div className="main">
        <Outlet />
      </div>
      <div>
        <SomeSkill />
      </div>
    </div>
  );
};
