<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Where are you productive today?</h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'header',
  components: {
  }
}
</script>

<style scoped>
.hero {
  text-align: center;
  background-image: url('../assets/WE9T5C.jpg');
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
.subtitle {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
  font-size: 30px;
}
.button-block {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  bottom: -150px;
  .button {
    margin-right: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }
  .welcome {
    width: 400px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}
.is-xl {
  font-size: 1.7rem;
}
</style>