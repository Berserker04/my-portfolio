import React from "react";
import { ExperienceView } from "./ExperienceView";

import logo from "../../assets/images/avatar.jpg";

const experiences = [
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
  let experiencesWithArrows = [];
  let isCard = true;

  const getIndex = (list) => list.findIndex((item) => item.left || item.right);
  const deleteLastArrows = (list) => (list[getIndex(list)] = { null: true });

  experiences.forEach((item, i) => {
    experiencesWithArrows.push(item);
    if (experiences.length > 1 && isCard) {
      experiencesWithArrows.push({ right: true });
      experiencesWithArrows.push({ left: true });
      isCard = false;
    } else {
      isCard = true;
    }
  });

  experiencesWithArrows.reverse();
  deleteLastArrows(experiencesWithArrows);
  if (experiences.length % 2 !== 0) deleteLastArrows(experiencesWithArrows);
  experiencesWithArrows.reverse();

  return <ExperienceView experiences={experiencesWithArrows} />;
};
