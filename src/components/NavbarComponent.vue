<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand col-1" href="/">
          <img src="../assets/logoPokeWeb.png" alt="Logo PokeWeb" class="img-fluid w-75 me-0">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 pe-3 text">
            <li class="nav-item">
              <RouterLink to="/" class="text-light" id="text__hover">Home</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-light" id="text__hover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Generations
              </a>
              <ul class="dropdown-menu">
                <li><RouterLink to="/FirstGen" class="dropdown-item" id="text__hover">First Gen Kanto</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink to="/SecondGen" class="dropdown-item" id="text__hover">Second Gen Johto</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink to="/ThirdGen" class="dropdown-item" id="text__hover">Third Gen Hoenn</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink to="/FourthGen" class="dropdown-item" id="text__hover">Fourth Gen Sinnoh</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink to="/FifthGen" class="dropdown-item" id="text__hover">Fifth Gen Teselia</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink to="/SixthGen" class="dropdown-item" id="text__hover">Sixth Gen Kalos</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink to="/SeventhGen" class="dropdown-item" id="text__hover">Seventh Gen Alola</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink to="/EightGen" class="dropdown-item" id="text__hover">Eight Gen Galar</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink to="/NinthGen" class="dropdown-item" id="text__hover">Ninth Gen Paldea</RouterLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  padding: 0.3rem 5rem;
  background-color: #70C8A0;
  color: white;
}
.text {
  display: flex;
  gap: 1rem;
  align-items: center;
  color: white;
}
#text__hover:hover {
  color: orange;
}
form button,
form input::placeholder {
  font-size: 0.6rem;
}
.dropdown-item{
  font-size: 0.4rem;
}
</style>
