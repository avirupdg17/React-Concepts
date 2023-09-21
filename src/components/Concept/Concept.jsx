import "./Concept.css";
const Concept = (props) => {
  return (
    <div className="concept">
      <img src={props.image} alt="TODO: TITLE" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};
export default Concept;
