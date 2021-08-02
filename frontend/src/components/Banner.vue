<template>
  <div class="home">
    <section :class="[(page === 'home') ? 'hero' : 'hero2']">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{message}}</h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    page: String,
    message: String
  },
  components: {
  }
}
</script>

<style scoped>
@media screen and (max-width: 1000px) {
  .title{
    font-size: 40px !important;
  }
}

@media screen and (max-width: 900px) {
  .title{
    font-size: 30px !important;
  }

  .hero{
    height: 200px !important;
  }

  .hero2{
    height: 200px !important;
  }
}

@media screen and (max-width: 500px) {
  .hero{
    height: 100px !important;
  }

  .hero2{
    height: 100px !important;
  }
}

.hero {
  text-align: center;
  background-image: url('../assets/WE9T5C.jpg');
  background-size: cover;
  background-position: 0px -50px;
  background-repeat: no-repeat;
  height: 300px;
}

.hero2 {
  text-align: center;
  background-image: url('../assets/presentation.jpeg');
  background-size: cover;
  background-position: 0px -50px;
  background-repeat: no-repeat;
  height: 300px;
}
.hero-body .title {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 40px 0 20px 0;
  font-size: 60px;
  color: #ffffff;
}

</style>