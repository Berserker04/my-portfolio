import React from "react";
import { AllProyectsView } from "./AllProyectsView";
import image from "../../assets/images/defaultImage.png";

const allProyects = [
  {
    title: "Proyect 1",
    img: image,
    url: "#",
  },
  {
    title: "Proyect 2",
    img: image,
    url: "#",
    date: "2018-06-23",
  },
  {
    title: "Proyect 3",
    img: image,
    url: "#",
    date: "2018-06-23",
  },
  {
    title: "Proyect 4",
    img: image,
    url: "#",
    date: "2018-06-23",
  },
  {
    title: "Proyect 5",
    img: image,
    url: "#",
    date: "2018-06-23",
  },
  {
    title: "Proyect 6",
    img: image,
    url: "#",
    date: "2018-06-23",
  },
];

export const AllProyectsContainer = () => {
  return <AllProyectsView allProyects={allProyects} />;
};
