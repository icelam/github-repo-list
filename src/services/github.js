import axios from 'axios';

const getUserInfo = (username) => axios.get(`https://api.github.com/users/${username}`);

const getRepoList = (username) => axios.get(`https://api.github.com/users/${username}/repos?sort=created`);

export default { getUserInfo, getRepoList };
