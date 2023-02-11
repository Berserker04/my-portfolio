import React from "react";

import "./styles.scss";
import logo_1 from "../../assets/images/logos/angular.jpg";
import logo_2 from "../../assets/images/logos/github.png";
import logo_3 from "../../assets/images/logos/laravel.jpg";
import logo_4 from "../../assets/images/logos/mongo.jpg";
import logo_5 from "../../assets/images/logos/mysql.jpg";
import logo_6 from "../../assets/images/logos/nodejs.png";
import logo_7 from "../../assets/images/logos/react.jpg";
import logo_8 from "../../assets/images/logos/springboot.png";

export const SomeSkill = () => {
  return (
    <div className="some-skill">
      <h3>Some Skills</h3>
      <div className="some-skill__1">
        <img src={logo_1} alt="logo 1" />
      </div>
      <div className="some-skill__2">
        <img src={logo_2} alt="logo 2" />
      </div>
      <div className="some-skill__3">
        <img src={logo_3} alt="logo 3" />
      </div>
      <div className="some-skill__4">
        <img src={logo_4} alt="logo 4" />
      </div>
      <div className="some-skill__5">
        <img src={logo_5} alt="logo 5" />
      </div>
      <div className="some-skill__6">
        <img src={logo_6} alt="logo 6" />
      </div>
      <div className="some-skill__7">
        <img src={logo_7} alt="logo 7" />
      </div>
      <div className="some-skill__8">
        <img src={logo_8} alt="logo 8" />
      </div>
    </div>
  );
};
