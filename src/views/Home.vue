<template>
<div>
  <div class="content-home">
    <p>Welcome viewers and gamers to an ALL-NEW Zelda Website! To learn more about
      the games, use the links above!</p>
  </div>

  <div class="about-us-pics">
    <div class="about-us-pics-item">
      <img src="images/CatBackground.jpg"/>
      <p>Pictured: Johnny Nelson and Jonas Nielsen, authors of the website.</p>
    </div>
    <div class="about-us-pics-item">
      <img src="images/stork.png"/>
    </div>
  </div>

  <p>In the era of the internet, video games have become a hot topic of conversation
  for many people. There exist countless fan pages, message boards, and wikis for
  different games. These pages are all made by fans, not by professionals, so
  some of these pages are well built, and functional while others are hard to
  read and unintuitive. Even though the Legend of Zelda is one of the most famous
  video game series in the world, none of its fan wikis are well built. The two
  of us decided to change that. We made a new Zelda Wiki for all to see. We hope
  that it is built well, and gives you all the information you need to understand
  the Legend of Zelda series!</p>
</div>
</template>

<script>
export default {
  name: 'Home',
}
</script>


<style scoped>
.about-us-pics-item img {
  width: 100%;
}

/* Desktop Styles */
@media only screen and (min-width: 801px) {
.about-us-pics-item {
  width: 40%;
}
.about-us-pics {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
}
</style>
