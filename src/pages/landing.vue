<template>
  <!-- Repo List -->
  <div class="container" v-if="pageReady">
    <name-badge
      avatar="https://avatars1.githubusercontent.com/u/6780420?v=4"
      username="Ice Lam"
      githubLink="https://github.com/icelam"
    />
    <github-repo-card
      v-for="item in repoList"
      :key="item.id"
      :repoData="item"
    />
  </div>
  <!-- /Repo List -->

  <!-- Error Message -->
  <div v-else-if="pageError">
    <error-message message="Failed to get data from Github" />
  </div>
  <!-- /Error Message -->

  <!-- Loading -->
  <div v-else>
    <loading />
  </div>
  <!-- /Loading -->
</template>

<script>
import loading from '@components/loading';
import errorMessage from '@components/errorMessage';
import nameBadge from '@components/nameBadge';
import githubRepoCard from '@components/githubRepoCard';
import githubServices from '@services/github';

export default {
  components: {
    loading,
    errorMessage,
    nameBadge,
    githubRepoCard
  },
  data() {
    return {
      userInfoReady: false,
      repoListReady: false,
      pageError: false,
      githubUsername: process.env.VUE_APP_GITHUB_USERNAME,
      userInfo: undefined,
      repoList: []
    };
  },
  methods: {
    getUserInfo() {
      githubServices.getUserInfo(this.githubUsername).then(
        ({ data }) => {
          this.userInfo = data;
          this.userInfoReady = true;
        }
      ).catch(() => {
        this.pageError = true;
      });
    },
    getRepoList() {
      githubServices.getRepoList(this.githubUsername).then(
        ({ data }) => {
          this.repoList = data;
          this.repoListReady = true;
        }
      ).catch(() => {
        this.pageError = true;
      });
    }
  },
  mounted() {
    this.getUserInfo();
    this.getRepoList();
  },
  computed: {
    pageReady() {
      return this.userInfoReady && this.repoListReady;
    }
  }
};
</script>

<style lang='scss' scoped>
  .name-badge {
    margin: 0 0 1.875em 0;
  }
</style>
