import React, { useState } from "react";
import { CertificateView } from "./CertificateView";
import { CertificateModal } from "./components/CertificateModal";

import image from "../../assets/images/defaultImage.png";

const certificates = [
  {
    title: "Certificado 1",
    img: image,
    url: "#",
    date: "2018-06-23",
    by: "Platzi",
  },
  {
    title: "Certificado 2",
    img: image,
    url: "#",
    date: "2018-06-23",
    by: "Platzi",
  },
  {
    title: "Certificado 3",
    img: image,
    url: "#",
    date: "2018-06-23",
    by: "Platzi",
  },
  {
    title: "Certificado 4",
    img: image,
    url: "#",
    date: "2018-06-23",
    by: "Platzi",
  },
  {
    title: "Certificado 5",
    img: image,
    url: "#",
    date: "2018-06-23",
    by: "Platzi",
  },
  {
    title: "Certificado 6",
    img: image,
    url: "#",
    date: "2018-06-23",
    by: "Platzi",
  },
];

export const CertificateContainer = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <CertificateModal selected={selected} setSelected={setSelected}/>
      <CertificateView certificates={certificates} setSelected={setSelected} />
    </>
  );
};
