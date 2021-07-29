<template>
  <div>
    <div class="personbox">
      <img class="personimg" :src="person.picture" /><i :class="getIcon(person.location)"></i>
      <div class="persontextbox">
        <div class="personname">{{person.name}}</div>
        <div class="personlocation">Is working from <b>{{person.location}}</b></div>
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
    getIcon(locationname){
      switch(locationname){
        case "home":
          return "fas fa-home smallicon lightblue";
        case "lab":
          return "fas fa-flask smallicon lightgreen";
        case "office":
          return "fas fa-building smallicon lightpurple";
      }
      console.log(locationname);
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

.lightblue {
  background: #cce4ee;
}

.lightgreen {
  background: #bce3b7;
}

.lightpurple {
  background: #BDBFDF;
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
</style>