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


<style scoped>
h1 {
  letter-spacing: 3px;
}
.poke-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 2rem auto;
}
.pokemon {
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  padding: 20px;
  text-align: center;
}
.pokemon .img-container {
  margin: 0 auto;
}
.frontal[data-v-e16acd80], .tracero[data-v-e16acd80] {
  left: -0.3rem;
  top: -0.05rem;
}
.pokemon {
  max-width: 95%;
  margin-top: 20px;
  position: relative;
  perspective: 1000px;
}
.pokemon .number {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 0.8em;
}
.pokemon .info .name {
  letter-spacing: 1px;
}
.frontal,
.tracero {
  position: absolute;
  left: 3px;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
  transform: rotateY(180deg);
  text-align: center;
  display: flex;
  flex-direction: column;
}
.frontal {
  transform: rotateY(0deg);
  left: 20px;
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
.info {
  display: flex;
  justify-content: center;
  align-items: center;
}
.name {
  margin: 0;
  font-size: 0.5rem;
  position: absolute;
  top: 7px;
}
.img-container {
  width: 6rem;
  padding: 0;
  position: absolute;
  top: 12px;
  right: 5px;
}
.tracero {
  padding-top: 1rem;
}
.tracero ul {
  list-style: none;
  margin-top: 40px;
  margin-right: 40px;
}
.tracero li {
  font-size: 0.5rem;
  letter-spacing: 0.1rem;
  color: #E2E69F;
  background-color: #8B8B8B;
  padding: 0.2rem;
  margin: 0.4rem;
  border-radius: 0.5rem;
}
.tracero h2{
  margin-right: 35px;
}
.tracero__name {
  text-align: center;
  font-size: 1rem;
}

/* GAMEBOY */
.screen-cont {
  position: relative;
  top: 0px;
  left: 15px;
  width: 171px;
  height: 136px;
  background-color: #777;
  border-radius: 13px 13px 50px 13px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.screen {
  position: relative;
  top: 20px;
  margin-left: auto;
  margin-right: auto;
  background: #bdae58;
  width: 112px;
  height: 102px;
  box-shadow: inset 3px 3px rgba(0, 0, 0, 0.15);
}
.header {
  position: relative;
  top: -30px;
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  text-align: right;
  font-size: 8px;
}
.header:before{
  content: "";
  position: absolute;
  left: -20px;
  top: 17px;
  width: 60px;
  height: 1px;
  background-color: #8b1d90;
  box-shadow: 0 4px 0 #283593;
}
.header:after {
  content: "";
  position: absolute;
  right: -20px;
  top: 17px;
  width: 30px;
  height: 1px;
  background-color: #8b1d90;
  box-shadow: 0 4px 0 #283593;
}
.header__text{
  position: relative;
  top: 16px;
  left: -15px;
  color: white;
  font-size: 0.3rem;

}
.power {
  content: "";
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 7px;
  height: 7px;
  top: 60px;
  left: 10px;
  border-radius: 100%;
  background-color: #b98181;
  transition: background-color 300ms linear;
  font-size: 4px;
}
.power__text {
  position: absolute;
  top: 10px;
  left: -5px;
  color: white;
  font-size: 0.2rem;
} 
.controls-cont {
  display: block;
  position: relative;
  left: -80px;
  top: 80px;
}
/* Pad */
.btn-direction {
  position: relative;
  top: 60px;
  left: 35px;
}
.btn-direction:before {
  content: "";
  position: absolute;
  z-index: 1;
  top: 15px;
  left: 30px;
  width: 15px;
  height: 15px;
  background-color: #353535;
  border-radius: 100%;
  }
.vertical, .horizontal {
  position: absolute;
  left: 30px;
  width: 15px;
  height: 45px;
  background: #444;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.horizontal {
  rotate: 90deg;
  box-shadow: 2px -2px 2px 1px rgba(0, 0, 0, 0.2);
}
.btn-AB {
  position: absolute;
  top: 72px;
  left: 160px;
  width: 75px;
  height: 30px;
  background: #dfdfdfc6;
  border-radius: 30px;
  -webkit-transform: rotate(-25deg);
  box-shadow: 1px 3px 2px 1px rgba(0, 0, 0, 0.2);
}
.btn-AB:after {
  content: "";
  position: absolute;
  top: 4px;
  right: 2px;
  width: 22px;
  height: 22px;
  background: #A93671;
  box-shadow: 45px 0 #A93671;
  border-radius: 100%;
  -webkit-transform: rotate(180deg);
}  
</style>