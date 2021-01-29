<template>
<!--INÍCIO Carousel-->
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/carousel/welcome.png" class="d-block1" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/carousel/corolla.jpg" class="d-block2" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/carousel/iPhone.jpg" class="d-block3" alt="...">
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
      margin-top: 20px;

    }
.d-block1{
  width: 90%;
}
.d-block2{
  width: 75%;
}
.d-block3{
  width: 107%;
}

</style>
