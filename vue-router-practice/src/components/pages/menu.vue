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
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
