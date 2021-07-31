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
    async fetchLogs(){
      const res = await fetch('http://localhost:5000/api/log/')
      const data = await res.json()
      return data
    },
  },
  async created() {
    this.logs = await this.fetchLogs()
  }

}

</script>

<style scoped>

</style>