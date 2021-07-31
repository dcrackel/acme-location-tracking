<template>
  <div>
      <div class="logitembox">
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
    log: Object
  }
}
</script>

<style scoped>
.logitembox{
  display: flex;
  margin: 5px 10px 5px 10px;
  width: 1000px;
}
.logitembox:hover{
  background: #5B919E;
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

</style>