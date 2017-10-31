
public class Pokedex extends PokeOperations {
	public String pokemonInfo(Pokemon pokemon) {
		return "Name: " + pokemon.getName() + ", Health: " + pokemon.getHealth() + ", Type: " + pokemon.getType();
	} 
}
