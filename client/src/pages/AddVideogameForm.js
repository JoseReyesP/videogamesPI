import "../pages/addVideogameForms.css";
import axios from "axios";

const AddVideoGameForm = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const description = document.getElementById("description");
    const platforms = document.getElementById("platforms");
    const image = document.getElementById("image");
    const launchDate = document.getElementById("launch");
    const rating = document.getElementById("rating");

    const newGame = {
      name: name.value,
      description: description.value,
      platforms: platforms.value,
      image: image.value,
      launchDate: launchDate.value,
      rating: rating.value,
    };

    axios
      .post("http://localhost:3001/videogames", newGame)
      .then((response) => {
        // Manejar la respuesta exitosa del servidor
        console.log(response.data);
        alert(response.data);
      })
      .catch((error) => {
        // Manejar errores de la solicitud
        console.error("Error en la solicitud:", error);
        alert(error);
      });
  };
  return (
    <div className="center">
      <form onSubmit={onSubmitHandler}>
        <div className="center">
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" id="name" />
          <br />
        </div>
        <div className="center">
          <label htmlFor="description">Description:</label>
          <textarea name="description" id="description"></textarea>
          <br />
        </div>
        <div className="center">
          <label htmlFor="plataforms">Plataformas:</label>
          <textarea name="plataforms" id="platforms"></textarea>
          <br />
        </div>
        <div className="center">
          <label htmlFor="image">Imagen URL:</label>
          <input type="text" name="image" id="image" />
          <br />
        </div>
        <div className="center">
          <label htmlFor="launch">Fecha de Lanzamiento:</label>
          <input type="text" name="launch" id="launch" />
          <br />
        </div>
        <div className="center">
          <label htmlFor="rating">Rating:</label>
          <input type="text" name="rating" id="rating" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddVideoGameForm;

// id: {
//   type: DataTypes.INTEGER,
//   autoIncrement: true,
//   primaryKey: true,
// },
// name: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
// description: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
// plataforms: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
// image: {
//   type: DataTypes.STRING,
//   isUrl: true,
//   allowNull: false,
// },
// launchDate: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
// rating: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
// });
