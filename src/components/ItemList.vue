<template>
<div class="wrapper">
  <div class="items">
    <div class="item" v-for="item in items" :key="item.id">
      <div class="info">
        <img :src="'/images/' +item.photo">
        <h3>{{item.items}}</h3>
        <p>{{item.game}}</p>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    items: Array
  },
}

</script>


<style scoped>
.wrapper {
  padding: 10px;
  justify-content: center;
  align-items: center;
}

.items {
  display: flex;
  flex-direction: column;
}
.item {
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.item img {
  width: 100%;
}
.info {
  text-align: center;
}

/* Desktop Styles */
@media only screen and (min-width: 801px) {
  .items {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  }
  .item {
  display: flex;
  flex-direction: column;
  width: 250px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  }
}
</style>
