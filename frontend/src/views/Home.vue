<template>
  <div>
    <Banner :page="page" :message="message"/>
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
import Banner from '../components/Banner';
import People from "../components/People";

export default {
  name: 'App',
  components: {
    People,
    Banner,
  },
  data() {
    return {
      people: [],
      isAdmin: false,
      page: "home",
      message: "Where are you productive today?"
    }
  },
  methods: {
    validateEmail(email) {
      return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
    },
    emailFoundInCollection(email)
    {
      this.people.forEach((person) => {
        if (person.email.toLowerCase() === email.toLowerCase()) {
          return true
        }
      })
      return false
    },
    async ifNotFoundThenAdd(email) {
      if (!this.validateEmail(email)) return
      if (this.emailFoundInCollection(email)) return

      const picNo = Math.floor(Math.random() * 99);
      const tag = (Math.floor(Math.random() * 2) === 1 ? 'women' : 'men')
      const inPerson = {
        name: this.$auth.user.name,
        email: this.$auth.user.email,
        location: "home",
        picture: `https://randomuser.me/api/portraits/${tag}/${picNo}.jpg`,
        editname: false,
        edithemail: false
      }

      await this.addPersonWithData(inPerson)
    },
    async ifFoundSetAdmin(email){
      this.people.forEach((person) => {
        if (person.email.localeCompare(email.toLowerCase()) === 0) {
          this.isAdmin = person.admin
          return true
        }
      })

      return false
    },
    async setIsAdmin(){
      //this is the authorization method. If they have a auth0 login, and are flagged as a admin
      //they will have admin rights. email in the DB, must match email from auth0
        if (this.$auth.isAuthenticated) {
          if (this.people.length > 0) {
            if (!await this.ifFoundSetAdmin(this.$auth.user.email)) {
              await this.ifNotFoundThenAdd(this.$auth.user.email)
            }
          }
        }
    },
    async fetchPeople(){
      const res = await fetch('http://localhost:5000/api/people/')
      const data = await res.json()
      return data
    },
    async fetchPerson(id){
      const res = await fetch(`http://localhost:5000/api/people/${id}`)
      const data = await res.json()
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
    async addPerson() {
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
      console.log("addPerson" + JSON.stringify(inPerson))
      await this.addPersonWithData(inPerson)
    },
    async doesPersonExistInDB(email) {
      const data = await this.fetchPerson(email)
      return (data[0] === undefined? false : true)
    },
    async addPersonWithData(inPerson){
      if (await this.doesPersonExistInDB(inPerson.email)){
        return
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
        const res = await fetch(`http://localhost:5000/api/people/${inPerson._id}`, {
          method: 'DELETE',
        })

        res.status === 200 ?
            (this.people = this.people.filter(
                (person) => person._id !== inPerson._id)
            ) : alert('Error Deleteing Task')
      }
    },
    async addNewLogEntry(updPerson){
      const log = {
        user_id: updPerson._id,
        name: updPerson.name,
        location: updPerson.location
      }

      const res = await fetch(`http://localhost:5000/api/log`, {
        method: 'POST',
        headers: {
          'content-type':'application/json',
        },
        body: JSON.stringify(log)
      })

      if (res.status !== 200) alert('Error addNewLogEntry')
    },
    async changeLocation(obj) {
      const person = await this.fetchPerson(obj.pid)
      const updPerson = {...person[0], location: obj.loc}

      await this.addNewLogEntry(updPerson)
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
  }
}
</script>

<style scoped>
.hidden{
  display: none;
}
</style>