<template>
  <v-container class="nav">
    <h1><img src="~/assets/image/gear.svg" class="gear">PIA</h1>
  </v-container>
</template>

<style>
.nav {
  height: 100px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 60px;
    display: flex;
    align-items: center;
  }

  .gear {
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }

}
</style>