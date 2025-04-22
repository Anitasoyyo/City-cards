import CityCard from "./CityCard";
import "./App.css";

function App() {
  return (
    <div className="card-container">
      <CityCard
        cityName="La Ciudad de las Cien Torres"
        tagline="Descubre la Magia"
        description="Praga, la capital de la República Checa, es una ciudad encantadora y llena de historia."
        imageUrl="./imagenes/praga.jpg"
        commentsCount={18}
        likesCount={322}
      />
      <CityCard
        cityName="Roma"
        tagline="La Ciudad Eterna"
        description="Roma fascina con su energía que vibra en cada rincón."
        imageUrl="./imagenes/rom.jpg"
        commentsCount={10}
        likesCount={20}
      />
    </div>
  );
}

export default App;
