<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Pokeweb</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/search">Search</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Generations
              </a>
              <ul class="dropdown-menu">
                <li><RouterLink to="/FirstGen" class="dropdown-item">First Gen Kanto</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink to="/SecondGen" class="dropdown-item">Second Gen Johto</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink to="/ThirdGen" class="dropdown-item">Third Gen Hoenn</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink to="/FourthGen" class="dropdown-item">Fourth Gen Sinnoh</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink to="/FifthGen" class="dropdown-item">Fifth Gen Teselia</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink to="/SixthGen" class="dropdown-item">Sixth Gen Kalos</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink to="/SeventhGen" class="dropdown-item">Seventh Gen Alola</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink to="/EightGen" class="dropdown-item">Eight Gen Galar</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink to="/NinthGen" class="dropdown-item">Ninth Gen Paldea</RouterLink></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>