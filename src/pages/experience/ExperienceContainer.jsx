import React from "react";
import { ExperienceView } from "./ExperienceView";

import logo from "../../assets/images/avatar.jpg";

const experiencias = [
  {
    logo: logo,
    buiness: "Sena (fabrica de software)",
    laboured: "6 months",
    position: "Software developer",
  },
  {
    logo: logo,
    buiness: "Sena (fabrica de software)",
    laboured: "6 months",
    position: "Software developer",
  },
  {
    logo: logo,
    buiness: "Sena (fabrica de software)",
    laboured: "6 months",
    position: "Software developer",
  },
  {
    logo: logo,
    buiness: "Sena (fabrica de software)",
    laboured: "6 months",
    position: "Software developer",
  },
  {
    logo: logo,
    buiness: "Sena (fabrica de software)",
    laboured: "6 months",
    position: "Software developer",
  },
  {
    logo: logo,
    buiness: "Sena (fabrica de software)",
    laboured: "6 months",
    position: "Software developer",
  },
  {
    logo: logo,
    buiness: "Sena (fabrica de software)",
    laboured: "6 months",
    position: "Software developer",
  },
  {
    logo: logo,
    buiness: "Sena (fabrica de software)",
    laboured: "6 months",
    position: "Software developer",
  },
];

export const ExperienceContainer = () => {
  let newList = [];
  let isCard = true;

  experiencias.forEach((item, i) => {
    newList.push(item);
    if (experiencias.length > 1 && isCard) {
      newList.push({ right: true });
      newList.push({ left: true });
      isCard = false;
    } else {
      isCard = true;
    }
  });

  newList.reverse();

  newList[newList.findIndex((item) => item.left || item.right)] = {
    null: true,
  };

  if (experiencias.length % 2 !== 0) {
    newList[newList.findIndex((item) => item.left || item.right)] = {
      null: true,
    };
  }

  newList.reverse();

  return <ExperienceView experiencias={newList} />;
};
