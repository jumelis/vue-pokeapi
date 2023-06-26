
<script>
import { fetchPokemon, getColor, formatNumber, getPokemonType } from '../api/script-card'

export default {
  name: 'MiComponente',
  data() {
    return {
      pokemons: []
    };
  },
  async mounted() {
    this.pokemons = await fetchPokemon();
  },
  methods: {
    getColor,
    formatNumber,
    getPokemonType
  }
}
</script>
<template>
  <div class="poke-container">
    <div class="pokemon" v-for="pokemon in pokemons" :style="{ backgroundColor: getColor(pokemon) }">
      <div class="frontal">
        <div class="img-container">
          <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        </div>
        <div class="info">
          <span class="number">{{ formatNumber(pokemon.id) }}</span>
          <h3 class="name">{{ pokemon.name }}</h3>
          <small class="type">Type: <span>{{ getPokemonType(pokemon) }}</span></small>
        </div>
      </div>
      <div class="tracero">
        <h2>Estadísticas</h2>
        <ul>
          <li>HP: {{ pokemon.stats[0].base_stat }}</li>
          <li>Attack: {{ pokemon.stats[1].base_stat }}</li>
          <li>Defense: {{ pokemon.stats[2].base_stat }}</li>
          <li>Special Attack: {{ pokemon.stats[3].base_stat }}</li>
          <li>Special Defense: {{ pokemon.stats[4].base_stat }}</li>
          <li>Speed: {{ pokemon.stats[5].base_stat }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lato:300,400&display=swap");

* {
  box-sizing: border-box;
}

body {
  background: #efefbb;
  background: linear-gradient(to right, #d4d3dd, #efefbb);
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
}

h1 {
  letter-spacing: 3px;
}

.poke-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.pokemon {
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  padding: 20px;
  text-align: center;
}

.pokemon .img-container {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;
  margin: 0 auto;
}

.pokemon .img-container img {
  max-width: 90%;
  margin-top: 20px;
}

.pokemon .info {
  margin-top: 20px;
}

.pokemon .info .number {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.8em;
}

.pokemon .info .name {
  margin: 15px 0 7px;
  letter-spacing: 1px;
}
.pokemon {
  position: relative;
  perspective: 1000px;
}

.frontal,
.tracero {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
}

.frontal {
  transform: rotateY(0deg);

}

.tracero {
  transform: rotateY(180deg);
}

.pokemon:hover .frontal {
  transform: rotateY(-180deg);
}

.pokemon:hover .tracero {
  transform: rotateY(0deg);
}
.pokemon {
  position: relative;
  perspective: 1000px;
  height: 300px;
}
.tracero ul {
  list-style: none;
  margin-top: 40px;
  margin-right: 40px;
}
.tracero h2{
  margin-right: 35px;
}
.img-container .number .name .type{
  margin-right: 80px;
}
</style>