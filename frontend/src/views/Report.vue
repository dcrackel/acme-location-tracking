<template>
  <div>
    <Banner :page="page" :message="message"/>
    <Reportlist :logs="logs" />
  </div>
</template>

<script>
import Banner from '../components/Banner';
import Reportlist from '../components/Reportlist';

export default {
  name: 'Report',
  components: {
    Banner,
    Reportlist
  },
  data(){
    return {
      logs: [],
      page: "report",
      message: "Location Report"
    }
  },
  methods: {
    formatDate(inDateString){
      return new Date(inDateString).toLocaleString("en-US")
    },
    async fetchLogs(){
      const res = await fetch('http://localhost:5000/api/log/')
      const data = await res.json()

      data.forEach((d) => {d.timestamp = this.formatDate(d.timestamp)})
      return data
    },
  },
  async created() {
    this.logs = await this.fetchLogs()
  }

}

</script>

<style>

</style>