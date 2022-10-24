import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "../../../avatar/Avatar";

import "./styles.scss";

export const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__avatar">
        <Avatar />
        <h2>Berserker</h2>
      </div>
      <div className="slider__navbar">
        <nav>
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/certificates">
                Certificates
              </NavLink>
            </li>
            <li>
              <NavLink to="/experiences">
                Experiences
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-proyects">
                All proyects
              </NavLink>
            </li>
          </ul>
        </nav>
        <hr />
        <h3>My sites</h3>
        <ul>
          <li>
            <a href="/">LinkedIn</a>
          </li>
          <li>
            <a href="/">GitHub</a>
          </li>
          <li>
            <a href="/">FaceBook</a>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Patreon</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
