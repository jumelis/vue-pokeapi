<template>
  <div>
    <SubComponent :pokemons="pokemons" :getColor="getColor" :formatNumber="formatNumber" :getPokemonType="getPokemonType" />
  </div>
</template>

<script>
import SubComponent from '../components/subcomponente-tem-style.vue'
import { fetchPokemon, getColor, formatNumber, getPokemonType } from '../api/script-card'

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
    this.pokemons = await fetchPokemon();
  },
  methods: {
    getColor,
    formatNumber,
    getPokemonType
  }
}
</script>