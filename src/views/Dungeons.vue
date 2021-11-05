<template>
<div class="dungeon-page">
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <input v-model="searchText" />
      </form>
    </div>
  </div>
    <p>Search for your favorite game here.</p>
  <h1 class="subpage-title"> Dungeons </h1>
  <DungeonList :dungeons="listDungeons" />
</div>
</template>


<script>
import DungeonList from "../components/DungeonList.vue"
export default {
  name: 'Dungeons',
  components: {
    DungeonList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    listDungeons() {
      return this.$root.$data.dungeons.filter(dungeon => dungeon.game.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
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
