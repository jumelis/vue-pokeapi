<template>
  <div>
    <SubComponent :pokemons="pokemons" :getColor="getColor" :formatNumber="formatNumber" :getPokemonType="getPokemonType" :getPokemonAbility="getPokemonAbility" />
  </div>
</template>

<script>
import SubComponent from '../components/subcomponente-tem-style.vue'
import { getColor, formatNumber, getPokemonType, getPokemonAbility } from '../api/script-card'

export default {
  name: 'MiComponente',
  components: {
    SubComponent
  },
  data() {
    return {
      pokemons: []
    };
  },
  async mounted() {
    this.pokemons = await this.fetchPokemon();
  },
  methods: {
    getColor,
    formatNumber,
    getPokemonType,
    getPokemonAbility,
      async fetchPokemon() {
        const pokemonCount = 898;
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
        const pokemons = [];
        for (let i = 810; i <= pokemonCount; i++) {
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
    }
  }
  </script>