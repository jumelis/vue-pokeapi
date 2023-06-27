<script>
export default {
  name: 'SubComponent',
  props: {
    pokemons: Array,
    getColor: Function,
    formatNumber: Function,
    getPokemonType: Function,
    getPokemonAbility: Function
  }
}
</script>
<template>
    <div class="poke-container">
      <div class="pokemon" v-for="pokemon in pokemons" :style="{ backgroundColor: getColor(pokemon) }">
        <div class="frontal">
          <div class="screen-cont">
            <div class="power"><span class="power__text">BATTERY</span></div>
            <div class="screen">
              <div class="header"><span class="header__text">DOT MATRIX</span></div>
                <div class="info">
                  <h3 class="name">{{ pokemon.name }}</h3>
                </div>
                <div class="img-container">
                  <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
                </div>
                <div class="controls-cont">
                  <div class="btn-direction">
                    <div class="vertical"></div>
                    <div class="horizontal"></div>
                  </div>
                  <div class="btn-AB"></div>
                </div>
            </div>
          </div>
        </div>
        <div class="tracero">
          <h3 class="tracero__name">{{ pokemon.name }}</h3>
          <ul>
            <li><p>ID {{formatNumber(pokemon.id) }}</p></li> 
            <li><p>Type: <span>{{ getPokemonType(pokemon) }}</span></p></li>
            <li><p>Ability: <span>{{ getPokemonAbility(pokemon) }}</span></p></li>
          </ul>
        </div>
      </div>
    </div>
  </template>