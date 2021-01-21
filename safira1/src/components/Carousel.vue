<template>
<!--INÍCIO Carousel-->
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/logo.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/logo.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/logo.png" class="d-block w-100" alt="...">
        </div>
      </div>
    </div>
    <!--FINAL Carousel-->
</template>

<script>
export default {
  name: 'carousel'
}

</script>

<style scoped>
.carousel-item{
      width: 40%;
      margin-left: 30%;

    }


</style>
