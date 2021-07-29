<template>
  <div>
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav';

export default {
  name: 'App',
  components: {
    Nav
  },
  data() {
    return {

    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
  background: #ebe8df;
}

</style>
