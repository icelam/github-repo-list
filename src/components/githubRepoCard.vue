<template>
  <div class="repo-card">
    <div class="repo-card__title">
      <a class="repo-card__name" :href="repoData.html_url">{{repoData.name}}</a>
      <span class="repo-card__seperator" v-if="repoData.language"> ・ </span>
      <span class="repo-card__language" v-if="repoData.language">{{repoData.language}}</span>
      <br/>
    </div>

    <div class="repo-card__statistics">
      <div class="repo-card__statistics__item">
        <i class="fas fa-star"></i>{{repoData.stargazers_count || 0}}
      </div>
      <div class="repo-card__statistics__item">
        <i class="fas fa-code-branch"></i>{{repoData.forks_count || 0}}
      </div>
      <div class="repo-card__statistics__item">
        <i class="far fa-clock"></i>{{formatDate(repoData.updated_at) || repoData.updated_at}}
      </div>
    </div>

    <div class="repo-card__description" v-if="repoData.description">{{repoData.description}}</div>
  </div>
</template>

<script>
import formatUtils from '@utils/format';

export default {
  props: {
    repoData: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate: formatUtils.formatDate,
  },
};
</script>

<style lang='scss' scoped>
  @import './githubRepoCard';
</style>
