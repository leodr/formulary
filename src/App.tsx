import Additionstheorem from "./topics/additionstheorem.md";
import Funktionen from "./topics/funktionen.md";
import Komplexe from "./topics/komplexe_zahlen.md";
import Matrizen from "./topics/matrizen.md";
import Potenzreihen from "./topics/potenzreihen.md";
import Reihen from "./topics/reihen.md";
import Taylorreihen from "./topics/taylorreihen.md";
import Vektoren from "./topics/vektoren.md";
import Induktion from "./topics/vollstaendige_induktion.md";

function App() {
  return (
    <div className="markdown-body">
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
}

export default App;
