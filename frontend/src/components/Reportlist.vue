<template>
  <div>
    <div class="topborder">
      <div class="roaster">
        <div class="rostertext">Change Log</div>
        <div class="search-wrapper">
          <input class="searchinput" type="text" v-model="search" placeholder="Search by: entering a name, location or date"/>
        </div>
        <div class="reportcontainer">
          <div class="headerbox">
            <div>Id</div>
            <div class="hname">Name</div>
            <div>Location</div>
            <div>Timestamp</div>
          </div>
          <div v-for="log in filteredList" :key="log._id">
            <Logitem :log="log" :toggle="getToggle()" />
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
      search: '',
      toggle: true,
    }
  },
  methods: {
    getToggle() {
      return this.toggle = !this.toggle
    }
  },
  computed: {
    filteredList() {
      console.log(this.search)
      return this.logs.filter(log => {
        return (log.name.toLowerCase().includes(this.search.toLowerCase()) ||
                log.location.toLowerCase().includes(this.search.toLowerCase()) ||
                log.timestamp.toLowerCase().includes(this.search.toLowerCase())
        )
      })
    }
  }
}
</script>

<style scoped>
.topborder{
  border-top: 5px solid #ffffff;
}
.search-wrapper {
  display: block;
  border-bottom: 1px solid #A46D29;
  padding: 10px;
}

.searchinput{
  line-height: 20px;
  background: #EDBB7D;
  border-width: 0px;
  border: none;
  border-radius: 5px;
  padding: 5px 20px 5px 20px;
  font-size: 11pt;
  color: #efefef;
  margin: 0px 0px 0px 0px;
  transition: all .4s ease;
  width: 60%;
  text-align: center;
}

::placeholder {
  color: white;
}

.roaster{
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  border: 1px solid #A46D29;
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
  flex-direction: column;
  min-height: 600px;
}

.reportbox {
  display: block;
  width: 50%;
}

.headerbox{
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #A46D29;
  justify-content: space-evenly;
  font-size: 10pt;
  color: #A46D29;
}

.hname{
  width: 100px;
}

</style>