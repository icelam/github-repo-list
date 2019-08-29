<template>
  <div class="name-badge">
    <div class="name-badge__image">
      <img :src="avatar" :alt="username" />
    </div>
    <div class="name-badge__details">
      <div class="name-badge__username">{{username}}</div>
      <a class="name-badge__link" :href="githubLink" target="_blank">{{githubLink}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    githubLink: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang='scss' scoped>
  @import './nameBadge';
</style>
