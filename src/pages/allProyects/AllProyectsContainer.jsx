import React from "react";
import { AllProyectsView } from "./AllProyectsView";
import image from "../../assets/images/defaultImage.png";
import { useState, useEffect } from "react";

const allProyects = [
  {
    title: "Proyect 1",
    img: image,
    type: "movil",
    url: "#",
  },
  {
    title: "Proyect 2",
    img: image,
    type: "web",
    url: "#",
    date: "2018-06-23",
  },
  {
    title: "Proyect 3",
    img: image,
    type: "desktop",
    url: "#",
    date: "2018-06-23",
  },
  {
    title: "Proyect 4",
    img: image,
    type: "backend",
    url: "#",
    date: "2018-06-23",
  },
  {
    title: "Proyect 5",
    img: image,
    type: "backend",
    url: "#",
    date: "2018-06-23",
  },
  {
    title: "Proyect 6",
    img: image,
    type: "web",
    url: "#",
    date: "2018-06-23",
  },
];

export const AllProyectsContainer = () => {
  const [allProyectsFilter, setAllProyectsFilter] = useState(allProyects);
  const [valueSearch, setValueSearch] = useState("");
  const [valueFilter, setValueFilter] = useState("allProyects");

  const handleSearch = (value) => {
    setValueSearch(value);
  };

  const handleFilter = async (value) => {
    setValueFilter(value);
  };

  const filterAllProyects = () => {
    const filteredResult = allProyects.filter(
      (item) =>
        item.title.toLowerCase().includes(valueSearch.toLowerCase()) &&
        (item.type === valueFilter || valueFilter === "allProyects")
    );
    setAllProyectsFilter(filteredResult);
  };

  useEffect(() => {
    filterAllProyects();
  }, [valueSearch, valueFilter]);

  return (
    <AllProyectsView
      allProyects={allProyectsFilter}
      handleSearch={handleSearch}
      handleFilter={handleFilter}
    />
  );
};
