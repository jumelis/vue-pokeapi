
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
      fire: '#FDDFDF',
      grass: '#DEFDE0',
      electric: '#FCF7DE',
      water: '#DEF3FD',
      ground: '#f4e7da',
      rock: '#d5d5d4',
      fairy: '#fceaff',
      poison: '#98d7a5',
      bug: '#f8d5a3',
      dragon: '#97b3e6',
      psychic: '#eaeda1',
      flying: '#F5F5F5',
      fighting: '#E6E0D4',
      normal: '#F5F5F5'
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