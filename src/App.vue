<template>
  <div id="app">
    <div class="header-home">
      <div class="link-image">
        <img src="images/link.png" alt="Link" id="main-image">
      </div>
      <h1>The Legend of Zelda Wiki</h1>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/dungeons">Dungeons</router-link> |
      <router-link to="/items">Items</router-link>
    </div>
    <hr>
    <router-view />
    <div class="footer">
      <a href="https://github.com/nielsenjon/creative3.git">Github Link to Repository</a>
    </div>
  </div>
</template>

<script>

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: green;
}

hr {
  border-radius: 1px;
  border-color: black;
}

.header-home {
  color: #E7E481;
}

.link-image {
  width: 20%;
}

.link-image img {
  display: flex;
  width: 100%;
  margin: 0px !important;
}

body {
  background-color: /*#4D6E48 */#0e5135;
}

p {
  margin: 25px 25px 10px 25px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    color: #d4ce46;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #4D6E48;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 25px;
  color: #000;
  padding-bottom: 15px;
}

/* Mobile Styles */
@media only screen and (max-width: 800px) {
  .link-image {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .link-image img {
    width: 20%;
  }
  h1 {
    text-align: center;
  }
}

  /* Desktop Styles */
  @media only screen and (min-width: 801px) {
  .header-home {
    display: flex;
  }
  .header-home h1 {
    margin: auto;
    text-align: center;
    width: 80%;
  }
}

</style>
