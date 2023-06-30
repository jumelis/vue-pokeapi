<template>
  <div>
    <header>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="pokemonID">
        <button class="btn btn-outline-success" type="button"
          @click="searchButtonText === 'Reset' ? resetPage() : searchPokemon()"> {{ searchButtonText }}</button>
      </form>
    </header>
    <main>
      <div v-if="filteredPokemon">
        <h2>{{ filteredPokemon.name }}</h2>
        <img :src="filteredPokemon.sprites.front_default" :alt="filteredPokemon.name" />
        <ul>
          <li v-for="type in filteredPokemon.types" :key="type.type.name">
            {{ type.type.name }}
          </li>
        </ul>
        <ul>
          <li v-for="stat in filteredPokemon.stats" :key="stat.stat.name">
            {{ stat.stat.name }} -> {{ stat.base_stat }}
          </li>
        </ul>
      </div>

      <div v-else>
        <ScriptHome :pokemons="pokemons" :getColor="getColor" :formatNumber="formatNumber"
          :getPokemonType="getPokemonType" />
      </div>
    </main>
  </div>
</template>

<script>
import ScriptHome from '../components/script-home.vue'
import SubComponent from '../components/subcomponente-tem-style.vue'
import { fetchPokemon, getColor, formatNumber, getPokemonType } from '../api/script-card'
import { pokeapi } from '../api/pokeapi';

export default {
  name: 'HomeView',
  components: {
    ScriptHome,
    SubComponent
  },
  data() {
    return {
      pokemons: [],
      pokemonID: '',
      filteredPokemon: null
    };
  },
  computed: {
    searchButtonText() {
      return this.filteredPokemon ? 'Reset' : 'Search';
    }
  },
  async mounted() {
    this.pokemons = await fetchPokemon();
  },
  methods: {
    getColor,
    formatNumber,
    getPokemonType,
    async searchPokemon() {
      if (this.filteredPokemon) {

        this.pokemonID = '';
        this.filteredPokemon = null;

      }
      else {

        try {
          const pokemonToFind = await fetch(`${pokeapi}/${this.pokemonID}`);
          const pokemon = await pokemonToFind.json();
          console.log(pokemon);
          this.filteredPokemon = pokemon;
        } catch (error) {
          alert('Pokemon ID does not exist!');


        }
      }
    },
    resetPage() {
      window.location.reload();
    }
  }
}
</script>
<style scoped>
.d-flex {
  display: flex !important;
  margin-bottom: 1rem;
  align-items: center;
  margin-left: 60%;
  margin-right: 4rem;
}
.btn {
  background-color: black;
}
</style>
