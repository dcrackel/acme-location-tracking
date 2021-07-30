<template>
  <div>

    <div class="personbox">
      <div class="personimg" ><i class="fas fa-user-plus"></i></div>
      <div class="persontextbox">
        <div class="personname"></div>
        <div class="personlocation">CLick Here to add a New User</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Emptyperson',
  props: {
    person: Object
  },
  methods: {
  },
  data() {
    return {
    }
  },
  created() {

  }
}
</script>

<style scoped>
.personbox {
  display: flex;
  margin: 20px;
  padding: 8px;
  border-radius: 10px;
  background: #EDBA7C;
  border: 2px dotted;
  opacity: 0.4;
}

.personbox:hover{
  opacity: 0.9 !important;
}

.personimg {
  border-radius: 50%;
  border: 1px solid #999999;
  height: 80px;
  width: 100px;
  font-size: 30pt;
  padding: 7px 0px 0px 10px;
  background: #A16A27;
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
  font-size: 16pt;
  padding: 21px 0px 0px 0px;
  margin: 0px 14px 0px 14px;
  text-align: left;
}



</style>