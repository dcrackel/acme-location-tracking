<template>
  <nav class="navbar">
      <div><img class="logo" src="../assets/ACME-logo.png" /></div>
      <div class="buttonbar">

        <span class="nav-item dropdown" v-if="$auth.isAuthenticated">
          <div @click.prevent="logout">
            <img :src="$auth.user.picture" alt="User's profile picture" class="profileimg" />
            <div class="logouttext" @click.prevent="logout">Log out</div>
          </div>
        </span>

        <span v-if="!$auth.isAuthenticated && !$auth.loading" class="nav-item">
          <div class="login" @click.prevent="login"><i class="fas fa-sign-in-alt"></i></div>
          <div class="logintext" @click.prevent="login">Login</div>
        </span>

      </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout();
      this.$router.push({ path: "/" });
    }
  }
}
</script>

<style scoped>
nav {
  /*margin-top: 25px;*/
  /*margin-bottom: 30px;*/
}

.navbar
{
  display: flex;
  justify-content: space-between;
  border-bottom: 5px solid #FFFFFF;
}

.login {
  border: 1px solid #666666;
  width: 40px;
  font-size: 19pt;
  height: 40px;
  border-radius: 50%;
  padding: 0px 0px 0px 5px;
  margin: 10px;
  background: #f0533f;
  color: #ffffff;
  cursor: pointer;
}

.profileimg {
  border: 1px solid #666666;
  width: 40px;
  font-size: 19pt;
  height: 40px;
  border-radius: 50%;
  padding: 0px 0px 0px 0px;
  margin: 10px;
  background: #f0533f;
  color: #ffffff;
  cursor: pointer;
}

.logo {
  display: block;
  width: 100px;
  margin: 0px 0px 0px 20px;
}

.login:hover {
  background: #FF7765;
  border: 1px solid #aaaaaa;
}

.logintext
{
  margin: -8px 0px 0px 14px;
  font-size: 10pt;
  cursor: pointer;
}

.logouttext
{
  margin: -17px 0px 0px 5px;
  font-size: 10pt;
  cursor: pointer;
}

</style>