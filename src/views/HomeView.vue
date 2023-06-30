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

<template>
    <section id="search">
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Type ID" aria-label="Search" v-model="pokemonID">
        <button class="btn btn-outline-success" type="button"
          @click="searchButtonText === 'Reset' ? resetPage() : searchPokemon()"> {{ searchButtonText }}</button>
      </form>
    </section>
    <main>
      <section v-if="filteredPokemon" id="filteredSection">
        <h2>{{ filteredPokemon.name }}</h2>
        <img :src="filteredPokemon.sprites.front_default" :alt="filteredPokemon.name" />
          <section class="info dflex">
            <section class="propContainer">
            <h5>ID</h5>
              <div class="dflex">
                <span class="prop">
                  {{ filteredPokemon.id }}
                </span>
              </div>
            </section>
            <section class="propContainer">
            <h5>Type</h5>
              <div class="sections dflex">
                <span v-for="type in filteredPokemon.types" :key="type.type.name" class="dflex prop">
                    {{ type.type.name }}
                </span>
              </div>
            </section>
            <section class="propContainer">
            <h5>Abilities</h5>
              <div class="sections dflex">
                <span v-for="abilty in filteredPokemon.abilities" :key="abilty.ability.name" class="dflex prop">
                  {{ abilty.ability.name }}
                </span>
              </div>
            </section>
          </section>
      </section>

      <section v-else>
        <ScriptHome :pokemons="pokemons" :getColor="getColor" :formatNumber="formatNumber"
          :getPokemonType="getPokemonType" />
      </section>
    </main>
</template>

<style scoped>
#search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
#search input,
#search button {
  font-size: 0.5rem;
}
input:active {
  outline: none;
}
.btn {
  background-color: #70C8A0;
  color: white;
  transition: 0.4s;
}
.btn:hover {
  background-color: white;
  color: #70C8A0;
}
#filteredSection {
  margin: 2rem;
  padding: 3rem;
  background-color: rgb(112, 200, 160, 0.7);
  backdrop-filter: blur(5px);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dflex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h5 {
  font-size: 1rem;
  color: white;
}
.info {
  padding: 1rem;
}
.propContainer {
  margin: 0.5rem;
}
.prop {
  padding: 0.3rem;
  font-size: 0.8rem;
}
</style>
