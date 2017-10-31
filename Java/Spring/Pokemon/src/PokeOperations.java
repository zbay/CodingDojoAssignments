
public abstract class PokeOperations implements PokeManager {
	@Override
	public Pokemon createPokemon(String name, int health, String type) {
		return new Pokemon(name, health, type);
	}
	@Override
	public void attackPokemon(Pokemon pokemon) {
		pokemon.setHealth(pokemon.getHealth() - 10);
	}
}
