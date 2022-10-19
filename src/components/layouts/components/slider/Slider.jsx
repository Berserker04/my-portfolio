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
              <NavLink to="/" end activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeClassName="active">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" activeClassName="active">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/certificates" activeClassName="active">
                Certificates
              </NavLink>
            </li>
            <li>
              <NavLink to="/experiences" activeClassName="active">
                Experiences
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-proyects" activeClassName="active">
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
