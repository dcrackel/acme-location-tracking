<template>
  <div>
    <Header />
    <div v-if="!$auth.loading" class="hidden">{{setIsAdmin()}}</div>
    <People :people="people" :isAdminMode="isAdmin"
            @loging-in="setIsAdmin"
            @change-location="changeLocation"
            @update-person="updatePerson"
            @delete-person="deletePerson"
            @add-person="addPerson"
            @make-admin="makeOrRemoveAdmin"
    />
  </div>
</template>

<script>
import Header from '../components/Header';
import People from "../components/People";

export default {
  name: 'App',
  components: {
    People,
    Header,
  },
  data() {
    return {
      people: [],
      isAdmin: false
    }
  },
  methods: {
    async setIsAdmin(){
        if (this.$auth.isAuthenticated) {
          this.people.forEach((person) => {
            if (person.email === this.$auth.user.email)
              this.isAdmin = person.admin
          })
        }
    },
    async fetchPeople(){
      const res = await fetch('http://localhost:5000/api/people/')
      const data = await res.json()
      return data
    },
    async fetchPerson(id){
      const res = await fetch(`http://localhost:5000/api/people/${id}`)
      const data = res.json()
      return data
    },
    makeOrRemoveAdmin(inPerson) {
      inPerson.admin = !inPerson.admin
      this.updatePerson(inPerson)
    },
    async updatePerson(inPerson) {
      const res = await fetch(`http://localhost:5000/api/people/${inPerson._id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(inPerson)
      })
      const data = await res.json()

      this.people = this.people.map(
          (person) => (person._id === data.found._id) ? person = data.found : person
      )

    },
    async addPerson(){
      //get random person
      const randomPersonRes = await fetch(`https://randomuser.me/api/`)
      const randomData = await randomPersonRes.json()
      const randomPerson = randomData.results[0];

      //create person object this app uses
      const inPerson = {
        name: `${randomPerson.name.first} ${randomPerson.name.last}`,
        email: randomPerson.email,
        location: "home",
        picture: randomPerson.picture.medium,
        editname: false,
        edithemail: false
      }

      //add the new person
      const res = await fetch(`http://localhost:5000/api/people/`, {
        method: 'POST',
        headers: {
          'content-type':'application/json',
        },
        body: JSON.stringify(inPerson)
      })
      const data = await res.json()

      // spread collection and add new person to end
      this.people = [...this.people, data]
    },
    async deletePerson(inPerson) {
      if(confirm('Are you sure?')) {
        console.log("DELETE")
        const res = await fetch(`http://localhost:5000/api/people/${inPerson._id}`, {
          method: 'DELETE',
        })

        res.status === 200 ?
            (this.people = this.people.filter(
                (person) => person._id !== inPerson._id)
            ) : alert('Error Deleteing Task')
      }
    },
    async changeLocation(obj) {
      console.log(`changeLocation: ${obj.pid} ${obj.loc}`)
      const person = await this.fetchPerson(obj.pid)
      const updPerson = {...person[0], location: obj.loc}

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
    this.people = await this.fetchPeople()
    // console.log("RESULT: " + await this.fetchPeople().then((data) =>{this.setIsAdmin(data)}))
    // //this.isAdmin = await this.setIsAdmin();
  }
}
</script>

<style scoped>
.hidden{
  display: none;
}
</style>