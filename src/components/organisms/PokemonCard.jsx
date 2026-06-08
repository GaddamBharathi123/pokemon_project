function PokemonCard({ pokemon }) {
  return (
    <div>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        width="120"
      />

      <h2>{pokemon.name}</h2>

      <p>Type: {pokemon.type}</p>
    </div>
  );
}

export default PokemonCard;