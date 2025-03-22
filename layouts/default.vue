<template>
  <div class="nav">
    <div class="logo">
      <img src="../assets/image/gato menu.webp" alt="gato">
    </div>
    <div class="usuario"><img src="../assets/image/gato menu.webp" alt="gato"></div>
  </div>
</template>

<style>
.nav {
  width: calc(100% - 100px);
  height: 100px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 100px;
    height: 100px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .usuario {
    width: 80px;
    height: 80px;
    background-color: white;
    border-radius: 1000px;
    box-shadow: 0px 5px 30px -10px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>