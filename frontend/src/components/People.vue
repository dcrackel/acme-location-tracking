<template>
  <div class="topborder">
    <div class="roaster">
      <div class="rostertext">Today's Roster</div>
      <div class="peoplecontainer">
        <div class="peoplebox" v-for="person in people" :key="person._id">
          <Person :person="person" @change-location="reEmit" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Person from './Person'

export default {
  name: "People",
  props: {
    people: Array,
  },
  components: {
    Person
  },
  methods: {
    reEmit(obj){
      this.$emit('change-location',{pid: obj.pid, loc: obj.loc})
    }
  }
}
</script>

<style scoped>
.topborder{
  border-top: 5px solid #ffffff;
}

.roaster{
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  border: 1px solid #999999;
  border-radius: 10px;
  margin: 30px auto 30px auto;
  background: #FFE1BD;
}

.rostertext {
  padding: 0px 0 0px 0;
  font-size: 40pt;
  color: #ffffff;
  /*background: #f0533f;*/
  background: #FF9C8F;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid #999999;
}

.peoplecontainer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.peoplebox {
  display: block;
  width: 50%;
}
</style>