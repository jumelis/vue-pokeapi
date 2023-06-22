<template>
  <div id="app">
    <div class="tarjetas">
      <div class="tarjeta" v-for="pokemon in pokemons" :key="pokemon.id">
        <div class="frontal" :style="{ backgroundColor: getColor(pokemon) }">
          <div class="contenido">
            <div class="img-container">
              <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
            </div>
            <h3 class="name">{{ pokemon.name }}</h3>
            <small class="type">Type: <span>{{ getPokemonType(pokemon) }}</span></small>
          </div>
        </div>
        <div class="tracero">
          <div class="contenido">
            <p>Texto en la parte de atrás.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemons: []
    };
  },
  mounted() {
    this.fetchPokemon();
  },
  methods: {
    async fetchPokemon() {
      const pokemonCount = 151;
      const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
      for (let i = 1; i <= pokemonCount; i++) {
        try {
          const response = await fetch(apiUrl + i);
          const pokemon = await response.json();
          this.createPokemonCard(pokemon);
        } catch (error) {
          console.error(error);
        }
      }
    },
    createPokemonCard(pokemon) {
      this.pokemons.push(pokemon);
    },
    getColor(pokemon) {
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
    },
    getPokemonType(pokemon) {
      const types = pokemon.types.map(type => type.type.name);
      return types.join(', ');
    }
  }
};
</script>
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

.tarjetas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.tarjeta {
  width: 200px;
  margin: 1rem;

  perspective: 1000px;
  transform-style: preserve-3d;
}

.tarjeta .frontal,
.tarjeta .tracero {
  height: auto;
  min-height: 280px;

  background-size: cover;
  background-position: center;

  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);

  color: #fff;
  font-size: 1.5rem;
  text-align: center;

  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.tarjeta .frontal {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(https:unsplash.it/500/500/);
  background-color: #66D7D1;
  /* Posicion por defecto */
  transform: rotateY(0deg);
}
.tarjeta .tracero {
  width: 100%;

  background-color: #957DAD;

  top: 0;
  left: 0;
  position: absolute;
  /* Posicion por defecto */
  transform: rotateY(180deg);
}
/* Velocidad de trancicion */
.tarjeta:hover .frontal,
.tarjeta:hover .tracero {transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);}

/* Girar imagen */
.tarjeta:hover .frontal {transform: rotateY(-180deg);}
.tarjeta:hover .tracero {transform: rotateY(0deg);}


.tarjeta .contenido {
  width: 100%;
  position: absolute;

  padding: 2rem;
  box-sizing: border-box;

  top: 50%;
  left: 0;
  perspective: inherit;
  /* Posicion de texto central */
  transform: translateY(-50%) translateZ(60px) scale(0.94);
}
.frontal .contenido p {
  font-size: 2rem;
  position: relative;
  margin-bottom: .5rem;
}
.frontal .contenido hr {
  width: 4rem;
  height: 1px;

  background: #C6D4DF;

  margin: 0 auto;
  margin-bottom: 1.5rem;
}
.frontal .contenido span { color: rgba(255, 255, 255, 0.7); }
.frontal .contenido small { color: #E1ECF2; font-size: .8rem; }
.frontal .contenido small span {
  display: inline-block;
  background-color: #E1ECF2;
  padding: 2px 5px;
  border-radius: 2px;
  margin-left: .3rem;
  font-size: .75rem;
}

.tracero .contenido {
  padding: 2rem;
  transform: translateY(-50%) translateZ(-60px);
  background-color: #957DAD;
  backface-visibility: hidden;
}
.tracero .contenido p { font-size: 1.2rem; }
.tracero .contenido a {
  color: #AAB8C2;
  text-decoration: none;
  background-color: #6F84A6;
  padding: 8px 10px;
  border-radius: 5px;
  transition: background-color .2s ease, color .2s ease;
}
.tracero .contenido a:hover {
  background-color: #5B6F9D;
  color: #FFF;
}
</style>
