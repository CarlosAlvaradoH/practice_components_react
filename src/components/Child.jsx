import PropTypes from "prop-types";

export const Child = (props) => {
  
    const handleChangeName = () => {
    const newName = prompt("Ingresa un nuevo nombre");
    if(newName){
        console.log("Nombre nUevo: ", newName)
        props.setName(newName)
    }
  };

  return (
    <>
      <div>
        <h1>Child</h1>
        <p>Nombre actual: {props.name}</p>
        <button className="btn btn-primary" onClick={handleChangeName}>Cambiar Nombre</button>
      </div>
    </>
  );
};

export default Child;

Child.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func
};
