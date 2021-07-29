<template>
  <div>
    <Nav />
    <Header />
    <People :people="people" />
  </div>
</template>

<script>
import Nav from './components/Nav';
import Header from './components/Header';
import People from "./components/People";

export default {
  name: 'App',
  components: {
    People,
    Header,
    Nav
  },
  data() {
    return {
      people: []
    }
  },
  created() {
      this.people = [
        {
          _id : 1,
          name : "John Doe",
          email : "johndoe@gmail.com",
          location: "home",
          picture: "https://randomuser.me/api/portraits/men/10.jpg"
        },
        {
          _id : 2,
          name : "Stella Staplenaple",
          email : "StellStaplenapple@gmail.com",
          location: "office",
          picture: "https://randomuser.me/api/portraits/women/8.jpg"
        },
        {
          _id : 3,
          name : "Bob Gritter",
          email : "bobgritter@gmail.com",
          location: "lab",
          picture: "https://randomuser.me/api/portraits/men/22.jpg"
        },
      ];
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
