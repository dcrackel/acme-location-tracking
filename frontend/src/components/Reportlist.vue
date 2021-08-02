<template>
  <div>
    <div class="topborder">
      <div id="roster" class="roster">
        <div id="rostertext" class="rostertext">Change Log</div>
        <div id="search-wrapper" class="search-wrapper">
          <input class="searchinput" type="text" v-model="search" placeholder="Search by: entering a name, location or date"/>
        </div>
        <div class="reportcontainer">
          <div class="headerbox">
            <div>Id</div>
            <div class="hname">Name</div>
            <div>Location</div>
            <div>Timestamp</div>
          </div>
          <tbody v-for="(log, index) in filteredList" :key="log._id">
            <Logitem :log="log" :toggle="index % 2 === 0 ? true : false"/>
          </tbody>
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
      indy: 0,
      toggle: true,
    }
  },
  methods: {
  },
  computed: {
    filteredList() {
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
@media screen and (max-width: 1000px) {
  #roster {
    width: 100% !important;
    border: 0px solid #999999 !important;
    border-radius: 0px;
    margin: 0px auto 0px auto !important;
  }

  #rostertext {
    font-size: 20pt !important;
    border-radius: 0px !important;
    text-align: center;
  }

  #search-wrapper{
    width: 100% !important;
  }
  .searchinput {
    width: 100% !important;
  }
}

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