<template>
  <nav class="navbar">
      <div><img class="logo" src="../assets/ACME-logo.png" /></div>
      <div class="buttonbar">
        <div class="login"><i class="fas fa-sign-in-alt"></i></div>
        <div class="logintext">Login</div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
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
}
</style>