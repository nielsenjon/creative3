<template>
<div class="item-page">
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <input v-model="searchText" />
      </form>
    </div>
  </div>
  <h1 class="subpage-title"> Items </h1>
  <ItemList :items="listItems" />
</div>
</template>


<script>
import ItemList from "../components/ItemList.vue"
export default {
  name: 'Items',
  components: {
    ItemList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    listItems() {
      return this.$root.$data.items.filter(item => item.game.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  }
}
</script>

<style scoped>
p {
  padding-left: 10px;
  margin: 0;
}

.wrapper {
  display: flex;
  padding-left: 10px;
  padding-top: 10px;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

.subpage-title {
  text-align: center;
  padding: 30px 10px;
}

</style>
