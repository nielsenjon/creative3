<template>
<div class="wrapper">
  <div class="dungeons">
    <div class="dungeon" v-for="dungeon in dungeons" :key="dungeon.id">
      <div class="info">
        <img :src="'/images/' +dungeon.image">
        <ul>
          <li><h2>{{dungeon.game}}</h2></li>
          <li><h3>{{dungeon.name}}</h3></li>
          <li>Boss: {{dungeon.boss}}</li>
          <li>Item(s): {{dungeon.items}}</li>
          <li>Enemies: {{dungeon.enemies}}</li>
        </ul>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'DungeonList',
  props: {
    dungeons: Array
  },
}

</script>


<style scoped>
.info {
  padding-bottom: 15px;
}
.info img {
  width: 100%;
}

/* Desktop Styles */
@media only screen and (min-width: 801px) {
  .info {
    display: flex;
    flex-direction: row;
  }
  .info img {
    width: 40%;
    height: 10%;
    margin-right: 10px;
  }
  .info ul {
    list-style-type: none;
  }
}
</style>
