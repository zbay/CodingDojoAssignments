public class PokeTest {
	public static void main(String[] args){
		Pokemon p1 = new Pokemon("Pikachu", 100, "Electric");
		Pokemon p2 = new Pokemon("Charmander", 120, "Fire");
		Pokemon p3 = new Pokemon("Bulbasaur", 120, "Grass");
		
		Pokedex pokedex = new Pokedex();
		Pokemon p4 = pokedex.createPokemon("Squirtle", 120, "Water");
		System.out.println(pokedex.pokemonInfo(p1));
		pokedex.attackPokemon(p1);
		System.out.println(pokedex.pokemonInfo(p1));
	}
}