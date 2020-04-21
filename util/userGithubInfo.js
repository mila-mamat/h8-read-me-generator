const inquirer = require("inquirer");
const axios = require("axios");


async function userGithubInfo() {
    const {
      username
    } = await inquirer.prompt({
      message: "Enter your GitHub username:",
      name: "username",
    });
    const queryUrl = `https://api.github.com/users/${username}`;
    try {
      return axios.get(queryUrl);
    } catch (err) {
      console.error(err);
    }
  }

  module.exports = userGithubInfo
