<script>
import { pokeapi } from './api/pokeapi'

export default {
  name: 'App',
  data () {
    return {
      pokemonData: {},
      pokemonID: '',
    }
  },

  methods: {
    async searchPokemon () {
      try {
        const pokemonToFind = await fetch(`${pokeapi}/${this.pokemonID}`)
        const pokemon = await pokemonToFind.json()
        this.pokemonData = pokemon
        console.log(pokemon)
        return pokemon
      } catch (error) {
        alert('Pokemon no Encontrado')
      }
    }
  }
}
</script>

<template>
  <header class="header">
    <label for="pokemonInput">
      Tipo, Nombre o ID:
      <input
        type="text"
        id="pokemonInput"
        v-model="pokemonID"
      >
    </label>
    <button
      class="searchButton"
      v-on:click="searchPokemon"
    >
      Buscar
    </button>
  </header>

  <main
    class="main" 
    v-if="Object.entries(pokemonData).length > 0"
  >
    <section class="pokemonCard">
      <div class="nameImage">
        <h1 class="pokemonName">{{ pokemonData.name }}</h1>
        <img
          :src="pokemonData.sprites.front_default"
          :alt="pokemonData.name"
        >
      </div>
      <ul class="type">
        <h2>Tipo:</h2>
        <li
          v-for="(type,key) in pokemonData.types"
          :key="key"
          :class="type.type.name"
        >
          <span>{{ type.type.name }}</span>
        </li>
      </ul>
      <ul class="stats">
        <h2>Estadisticas:</h2>
        <li
          v-for="(stat, key) in pokemonData.stats"
          :key="key"
        >
          <span>{{ stat.stat.name}} -> {{stat.base_stat }}</span>
        </li>
      </ul>
    </section>
  </main>
</template>

