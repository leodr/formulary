import Head from "next/head";
import React from "react";
import Additionstheorem from "../sites/additionstheorem.md";
import Funktionen from "../sites/funktionen.md";
import Komplexe from "../sites/komplexe_zahlen.md";
import Matrizen from "../sites/matrizen.md";
import Potenzreihen from "../sites/potenzreihen.md";
import Reihen from "../sites/reihen.md";
import Taylorreihen from "../sites/taylorreihen.md";
import Vektoren from "../sites/vektoren.md";
import Induktion from "../sites/vollstaendige_induktion.md";

const Home = () => {
  return (
    <div className="markdown-body">
      <Head>
        <meta charset="utf-8"></meta>
      </Head>
      <div className="columns">
        <div className="firstcolumn">
          <Induktion />
          <Vektoren />
          <Reihen />
          <Taylorreihen />
          <Komplexe />
        </div>

        <div>
          <Matrizen />
          <Funktionen />
          <Potenzreihen />
          <Additionstheorem />
        </div>
      </div>
    </div>
  );
};

export default Home;
