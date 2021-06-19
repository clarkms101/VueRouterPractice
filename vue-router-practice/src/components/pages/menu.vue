<template>
  <div class="hello my-3">
    <label>menu</label>
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/page/card1">卡片 1</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/page/card2">卡片 2</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/page/card3">卡片 3</router-link>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="updatePath"
          >切換到指定卡片</a
        >
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="beforePath"
          >回到前一張卡片</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    updatePath() {
      this.$router.replace("/page/card2");
    },
    beforePath() {
      this.$router.back();
    }
  }
};
</script>
