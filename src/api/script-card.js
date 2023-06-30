
export async function fetchPokemon() {
    const pokemonCount = 20;
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    const pokemons = [];
    for (let i = 1; i <= pokemonCount; i++) {
      try {
        const response = await fetch(apiUrl + i);
        const pokemon = await response.json();
        pokemons.push(pokemon);
      } catch (error) {
        console.error(error);
      }
    }
    return pokemons;
  }
  
  export function getColor(pokemon) {
    const colors = {
      fire: '#F05030',
      grass: '#78C850',
      electric: '#F8D030',
      water: '#3899F8',
      ground: '#E9D6A4',
      rock: '#B8A058',
      fairy: '#E79FE7',
      poison: '#B058A0',
      bug: '#A8B820',
      dragon: '#7860E0',
      psychic: '#F870A0',
      flying: '#98A8F0',
      fighting: '#A05038',
      normal: '#A8A090'
    };
    const types = pokemon.types.map(type => type.type.name);
    const type = types[0];
    return colors[type];
  }
  
  export function formatNumber(number) {
    return number.toString().padStart(3, '0');
  }
  
  export function getPokemonType(pokemon) {
    const types = pokemon.types.map(type => type.type.name);
    return types.join(', ');
  }

  export function getPokemonAbility(pokemon) {
    const abilities = pokemon.abilities.map(ability => ability.ability.name);
    return abilities.join(', ');
  }