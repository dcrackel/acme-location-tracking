<template>
  <div class="topborder">
    <div id="roster" class="roaster">
      <div id="rostertext" class="rostertext">Today's Roster</div>
      <div class="peoplecontainer">
        <div id="peoplebox" class="peoplebox" v-for="person in people" :key="person._id">
          <Person :person="person" :isAdmin="isAdminMode"
                  @change-location="reEmit"
                  @update-person="$emit('update-person', person)"
                  @delete-person="$emit('delete-person', person)"
                  @make-admin="$emit('make-admin', person)"
          />
        </div>
       <Emptyperson id="peoplebox" class="peoplebox" v-if="isAdminMode" @add-person="$emit('add-person')" />
      </div>
    </div>
  </div>
</template>

<script>
import Person from './Person'
import Emptyperson from './Emptyperson'

export default {
  name: "People",
  props: {
    people: Array,
    isAdminMode: Boolean
  },
  components: {
    Person,
    Emptyperson
  },
  methods: {
    reEmit(obj) {
      this.$emit('change-location', {pid: obj.pid, loc: obj.loc})
    },

  }
}
</script>

<style scoped>

@media screen and (max-width: 1000px) {
  #roster {
    width: 100%;
    border: 0px solid #999999;
    border-radius: 0px;
    margin: 0px auto 0px auto;
  }

  #rostertext {
    font-size: 20pt;
    border-radius: 0px;
  }

  #peoplebox {
     width: 100% !important;
  }
}

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