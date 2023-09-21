import keyConceptsImage from "./assets/images/key-concepts.png";
import Concept from "./components/Concept/Concept";
import { Concepts } from "./utils/ConceptLists";

function App() {
  // console.log(Concepts);
  return (
    <div>
      <header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
      <ul id="concepts">
        {Concepts.map((concept) => {
          return <Concept {...concept}></Concept>;
        })}
      </ul>
    </div>
  );
}

export default App;
