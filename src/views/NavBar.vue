<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     <main class="main" v-if="Object.keys(pokemonData).length > 0">
        <section class="pokemonCard">
          <div class="nameImage">
            <h1 class="pokemonName">{{ pokemonData.name }}</h1>
            <img :src="pokemonData.sprites.front_default" :alt="pokemonData.name">
          </div>
          <ul class="type">
            <h2>Type:</h2>
            <li v-for="(type, key) in pokemonData.types" :key="key" :class="type.type.name">
              <span>{{ type.type.name }}</span>
            </li>
          </ul>
          <ul class="stats">
            <h2>Statistics:</h2>
            <li v-for="(stat, key) in pokemonData.stats" :key="key">
              <span>{{ stat.stat.name }} -> {{ stat.base_stat }}</span>
            </li>
          </ul>
        </section>
      </main>
  </div>
</template>

<script>
import { pokeapi } from '../api/pokeapi'

export default {
  name: 'Navbar',
  data() {
    return {
      pokemonData: {},
      pokemonID: '',
    }
  },
  methods: {
    async searchPokemon() {
      try {
        const pokemonToFind = await fetch(`${pokeapi}/${this.pokemonID}`)
        const pokemon = await pokemonToFind.json()
        this.pokemonData = pokemon
        console.log(pokemon)
      } catch (error) {
        alert('Pokemon not found')
      }
    }
  }
}
</script>
