<template>
  <div>
    <div class="personbox">
      <img class="personimg" :src="person.picture" /><i :class="getIcon(person.location)"></i>
      <div class="persontextbox">
        <div class="personname">{{person.name}}</div>
        <div class="personlocation">Is working from <b>

          <div class="dropdown">
            <button :class="getColor(person.location)">{{ person.location }}</button>
            <div class="dropdown-content" >
              <a v-for="item in items" :key="item.id" @click="$emit('change-location', {pid: person._id, loc: item.title})">{{item.title}}</a>
            </div>
          </div>

        </b>
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
    getColor(locationname){
        switch(locationname){
          case "home":
            return "dropbtn lightblue";
          case "lab":
            return "dropbtn lightgreen";
          case "office":
            return "dropbtn lightpurple";
        }
    },
    onChange(key) {
      this.newTodoText = "id:"+this.items[key-1].id+"/title:"+this.items[key-1].title;
    }
  },
  data() {
    return {
      newTodoText: '',
      items: []
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

.lightblue {
  background: #5B919E;
}

.lightgreen {
  background: #6CBF82;
}

.lightpurple {
  background: #8967AC;
}

.persontextbox{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 0px 0px 10px;
  text-align: left;
}

.personname {
  font-size: 22pt;
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
.dropdown:hover .dropbtn {background-color: #3e8e41;}

</style>