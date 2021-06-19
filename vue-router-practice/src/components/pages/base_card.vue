<template>
  <div>
    <img :src="user.picture.large" class="card-img-top" alt="loading..." />
    <div class="card-body">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        picture: {},
      }
    };
  },
  created() {
    const id = this.$route.params.id;
    console.log(id);
    this.$http.get('https://randomuser.me/api/').then(response => {
      console.log(response);
      this.user = response.data.results[0];
    });
  }
};
</script>
