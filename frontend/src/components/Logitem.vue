<template>
  <div>
      <div class="logitembox" :class="getBackgroundColor()">
        <div class="userid item">{{log.user_id}}</div>
        <div class="name item">{{log.name}}</div>
        <div class="location item">{{log.location}}</div>
        <div class="timestamp item">{{log.timestamp}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Logitem",
  props: {
    log: Object,
    toggle: Boolean
  },
  methods:{
    getBackgroundColor(){
      return (this.toggle ? 'toggle1' : 'toggle2')
    }
  }


}
</script>

<style scoped>
.logitembox{
  display: flex;
  justify-content: space-evenly;
  padding: 5px 0px 5px 0px;
  color: #A46D29;
}
.logitembox:hover{
  background: #ff9c90;
  color: white;
}

.item{
  padding: 0px 10px 0px 10px;
}

.userid{
  width: 250px;
}

.name{
  width: 200px;
  text-align: left;
}

.location{
  width: 100px;
  text-align: left;
}

.timestamp{
  width: 250px;
  text-align: left;
}

.toggle1 {
  background: #FFDCB1;
}

.toggle2 {
  background: #FACD95;
}

</style>