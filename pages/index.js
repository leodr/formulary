import Head from "next/head";
import React from "react";
import Funktionen from "../sites/funktionen.md";
import Komplexe from "../sites/komplexe_zahlen.md";
import Matrizen from "../sites/matrizen.md";
import Potenzreihen from "../sites/potenzreihen.md";
import Reihen from "../sites/reihen.md";
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
          <Vektoren />
          <Reihen />
          <Potenzreihen />
          <Komplexe />
        </div>

        <div>
          <Matrizen />
          <Induktion />
          <Funktionen />
        </div>
      </div>
    </div>
  );
};

export default Home;
