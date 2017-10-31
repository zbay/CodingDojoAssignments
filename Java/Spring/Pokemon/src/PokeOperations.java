
public abstract class PokeOperations implements PokeManager {
	public void createPokemon(String name, int health, String type) {
		Pokemon p = new Pokemon(name, health, type);
	}
	public void attackPokemon(Pokemon pokemon) {
		pokemon.setHealth(pokemon.getHealth() - 10);
	}
}
