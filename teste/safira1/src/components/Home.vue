<template>
  <div>
    <menu-superior />

    <div>
    <carousel />
    </div>

    <div>
    <pagina-inicial />
    </div>

  </div>
  

</template>

<script>
import MenuSuperior from './MenuSuperior.vue'
import Carousel from './Carousel.vue'
import PaginaInicial from './PaginaInicial.vue'


export default {
  name: 'App',
  components: {
    MenuSuperior,
    Carousel,
    PaginaInicial
  }
}
</script>

<style>
   body{
        background: black;
        color: white;
        margin-left: 20px;
        margin-right: 20px;
    }
</style>
