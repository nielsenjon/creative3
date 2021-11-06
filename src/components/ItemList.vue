<template>
<div class="wrapper">
  <div class="items">
    <div class="item" v-for="item in items" :key="item.id">
      <div class="info">
        <h1>{{item.game}}</h1>
        <p>{{item.items}}</p>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    dungeons: Array
  },
}

</script>


<style scoped>
.info {
  padding-bottom: 15px;
}

/* Desktop Styles */
@media only screen and (min-width: 801px) {
  .info {
    display: flex;
    flex-direction: row;
  }
}
</style>
