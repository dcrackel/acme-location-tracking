<template>
  <div>

    <div class="personbox">
      <img class="personimg" :src="person.picture" /><i :class="getIcon(person.location)"></i>
      <div class="persontextbox">
        <input v-if="person.editemail === true && shouldBeInEditMode()" v-model="person.email" @blur="updatePerson(person); $emit('update-person', person)" v-focus class="personemailedit" />
        <div v-else :class="shouldBeInEditMode() ? 'personemail cursor' : 'personemail'"  @click="setEdit(person, 'email')">{{person.email}}</div>

        <input v-if="person.editname === true && shouldBeInEditMode()" v-model="person.name" @blur="updatePerson(person); $emit('update-person', person)" v-focus class="personnameedit" />
        <div v-else :class="shouldBeInEditMode() ? 'personname cursor' : 'personname'"  @click="setEdit(person, 'name')">{{person.name}}</div>

        <div class="personlocation">Is working from
          <div class="dropdown" >
            <button :class="getColor(person.location, shouldBeInEditMode())">{{ person.location }}</button>
            <div class="dropdown-content" v-if="shouldBeInEditMode()">
              <a v-for="item in items" :key="item.id" @click="$emit('change-location', {pid: person._id, loc: item.title})">{{item.title}}</a>
            </div>
          </div>

        </div>
      </div>
      <div v-if="shouldBeInAdminMode()" class="iconbox" >
          <div :class="person.admin ? 'isAdmin' : 'makeAdmin'" @click="$emit('make-admin', person)">
            <i class="fas fa-users-cog"></i>
          </div>
          <div class="deleteperson" @click="$emit('delete-person', person)">
            <i class="fas fa-times-circle"></i>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Person',
  props: {
    person: Object
  },
  methods: {
    shouldBeInEditMode(){
      let retVal = false
      if (this.$auth.isAuthenticated) {
        (this.person.admin ? retVal = true : retVal = (this.$auth.user.email === this.person.email))
        return retVal
      }
      return retVal
    },
    shouldBeInAdminMode(){
      let retVal = false
      if (this.$auth.isAuthenticated) {
        (this.person.admin ? retVal = true : retVal = false)
        return retVal
      }
      return retVal
    },
    setEdit(person, fromfield){
      if (fromfield == 'name') person.editname = true
      if (fromfield == 'email') person.editemail = true
    },
    updatePerson(person){
      person.editname = false
      person.editemail = false
    },
    getIcon(locationname) {
      switch (locationname) {
        case "home":
          return "fas fa-home smallicon lightblue";
        case "lab":
          return "fas fa-flask smallicon lightgreen";
        case "office":
          return "fas fa-building smallicon lightpurple";
      }
    },
    getColor(locationname, auth){
        switch(locationname){
          case "home":
            return (auth ? "dropbtn lightblue dropdown2" : "dropbtn lightblue");
          case "lab":
            return (auth ? "dropbtn lightgreen dropdown2" : "dropbtn lightgreen");
          case "office":
            return (auth ? "dropbtn lightpurple dropdown2" : "dropbtn lightpurple");
        }
    }
  },
  data() {
    return {
      items: [],
    }
  },
  created() {
    this.items = [
      {
        id: 1,
        title: 'home',
      },
      {
        id: 2,
        title: 'office',
      },
      {
        id: 3,
        title: 'lab'
      }
    ]
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<style scoped>
.personbox {
  display: flex;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  background: #EDBA7C;
}

.personimg {
  border-radius: 50%;
  border: 1px solid #999999;
  height: 80px;
}

.smallicon{
  color: white;
  margin: 41px 0px 0px -23px;
  border-radius: 50%;
  height: 30px;
  width: 34px;
  padding: 4px 0px 0px 0px;
  border: 1px solid #666;
  font-size: 13pt;
}

input {border:0;outline:0;}
input:focus {outline:none!important;}


.personnameedit
{
  line-height: 40px;
  background: #C58E4A;
  border-width: 0px;
  border: none;
  border-radius: 5px;
  padding: 0 20px;
  font-size: 18pt;
  color: #efefef;
  margin: 6px 0px 6px 0px;
  transition: all .4s ease;
  width: 85%;
}

.personemailedit
{
  line-height: 20px;
  background: #C58E4A;
  border-width: 0px;
  border: none;
  border-radius: 5px;
  padding: 0 20px;
  font-size: 11pt;
  color: #efefef;
  margin: 0px 0px 0px 0px;
  transition: all .4s ease;
  width: 80%;
}

.lightblue {
  background: #5B919E;
}

.lightgreen {
  background: #6CBF82;
}

.lightpurple {
  background: #9889C1;
}

.iconbox {
  display: flex;
  flex-direction: row;
  flex-flow: row;
}

.makeAdmin {
  display: block;
  color: #705EA3;
  width: 31px;
  height: 30px;
  margin: -6px 0px 0px 0px;
  padding: 3px 0px 0px 0px;
  cursor: pointer;
  border-radius: 50%;
}
.makeAdmin:hover {
  color: #dcdcdc;
  background: #38246F;
}

.isAdmin {
  display: block;
  color: #dcdcdc;
  background: #9889C1;
  width: 31px;
  height: 30px;
  margin: -6px 0px 0px 0px;
  padding: 3px 0px 0px 0px;
  cursor: pointer;
  border-radius: 50%;
}
.isAdmin:hover {
  color: #dcdcdc;
  background: #38246F;
}

.deleteperson {
  display: block;
  color: #C2494F;
  width: 30px;
  height: 30px;
  margin: -6px 0px 0px 4px;
  padding: 3px 0px 0px 0px;
  cursor: pointer;
  border-radius: 50%;
}
.deleteperson:hover {
  color: #dcdcdc;
  background: #9F262C;
}

.cursor {
  cursor: pointer;
}

.cursor:hover {
  border: 1px solid #C58E4A !important;
  border-radius: 5px;
  padding: 0 5px;
  /*transition: all .4s ease;*/
  width: 90%;
}

.persontextbox{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 0px 0px 10px;
  text-align: left;
}

.personname {
  font-size: 20pt;
  margin: 0px 0px 0px 0px;
  width: 82%;
}

.personemail {
  font-size: 10pt;
  margin: -8px 0px -6px 0px;
  color: #C58E4A;
  width: 80%;
}
.personlocation {
  font-size: 12pt;
}

.dropbtn {
  color: white;
  padding: 7px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 10px;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border-radius: 10px;
}

.dropdown-content a:hover {background-color: #ddd;}
.dropdown:hover .dropdown-content {display: block;}
.dropdown:hover {

}

.dropdown2:hover {
  border-radius: 10px;
  background: #FF7765;
}

</style>