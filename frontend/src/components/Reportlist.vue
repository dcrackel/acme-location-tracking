<template>
  <div>
    <div class="topborder">
      <div class="roaster">
        <div class="rostertext">Change Log</div>
        <div class="reportcontainer">
          <div v-for="log in logs" :key="log._id">
            <Logitem :log="log" />
          </div>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
import Logitem from '../components/Logitem'

export default {
  name: "Report",
  props: {
    logs: Array
  },
  components: {
    Logitem
  },
  data() {
    return {

    }
  },
  methods: {

  },
  created() {
    console.log("ReportList1")
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

.reportcontainer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.reportbox {
  display: block;
  width: 50%;
}

</style>