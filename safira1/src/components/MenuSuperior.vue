<template>
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <img class="logo" src="../assets/logo.png" alt="logo">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link  class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Launch
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Carros</a></li>
            <li><a class="dropdown-item" href="#">Celular</a></li>
            <li><a class="dropdown-item" href="#">Fones de Ouvido</a></li>
            <li><a class="dropdown-item" href="#">Jogos</a></li>
            <li><a class="dropdown-item" href="#">notebook</a></li>
            <li><a class="dropdown-item" href="#">Monitores</a></li>
            <li><a class="dropdown-item" href="#">Motos</a></li>
            <li><a class="dropdown-item" href="#">Tv</a></li>
            

            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">....</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
</template>

<script>
export default {
  name: 'menu-superior'
}

</script>

<style scoped>
.navbar{
    background-color: black;
    }
.logo{
    width:12%;
}
.nav-link{
  color:white;
}
.dropdown-item{
  color:white;
}
.dropdown-item:hover{
  background:red;
  color:white; 
}
.dropdown-menu{
  background:black;
}


</style>
