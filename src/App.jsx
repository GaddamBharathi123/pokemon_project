import SearchBar from "./components/molecules/SearchBar";
import PokemonCard from "./components/organisms/PokemonCard";

function App() {
  const pokemon = {
    name: "Pikachu",
    type: "Electric",
    image:
      "https://i.pinimg.com/736x/13/07/58/13075840a64a0580ae9eaf7c4d750316.jpg",
  };

  return (
    <div>
      <h1>Pokemon Show Characters Data</h1>

      <SearchBar />

      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;
