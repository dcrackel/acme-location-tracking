<template>
  <div>
    <Nav />
    <Header />
    <People :people="people" @change-location="changeLocation"/>/>
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
  methods: {
    async fetchPeople(){
      const res = await fetch('http://localhost:5000/api/people/')
      const data = res.json()
      return data
    },
    async fetchPerson(id){
      const res = await fetch(`http://localhost:5000/api/people/${id}`)
      const data = res.json()
      return data
    },
    async changeLocation(obj) {
      console.log(`changeLocation: ${obj.pid} ${obj.loc}`)
      const person = await this.fetchPerson(obj.pid)
      const updPerson = {...person[0], location: obj.loc}

      console.log(`CALLING UPDATE...`)
      const res = await fetch(`http://localhost:5000/api/people/${updPerson._id}`, {
        method: 'PUT',
        headers: {
          'content-type':'application/json',
        },
        body: JSON.stringify(updPerson)
      })
      const data = await res.json()

      this.people = this.people.map((person) => (person._id === data.found._id)
         ? {...person, location: data.found.location} : person)
    }
  },
  async created() {
    this.people = await this.fetchPeople();
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
