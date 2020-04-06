const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateFile = require("./generateFile.js")
const contentFormat = require("./contentFormat.js")


async function readmeGenerator() {
    console.log("\nWelcome to Readme Generator.\n");
    //collect user's github info to display user name for double check
  
    let githubResponse = await userGithubInfo();
  
    console.log("\nHi, " + githubResponse.data.name + "\n");
    console.log(
      "Please answer the questions below to create a Readme for your project."
    );
    console.log(
      "Any questions that are not answered, will be set to default value."
    );
    console.log("Enter control+c to exit at any stage. \n");
    //collect readme contents to display
    let readmeContent = await collectInfo();
  
    readmeContent.userName = githubResponse.data.name;
    readmeContent.userAvatar = githubResponse.data.avatar_url;
    readmeContent.userEmail = githubResponse.data.email;
   
    contentFormat(readmeContent);
    let file = generateFile(readmeContent);
    writeToFile(readmeContent.projectTitle, file);
  }
  
readmeGenerator();
  

async function userGithubInfo() {
  const { username } = await inquirer.prompt({
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


function collectInfo() {
  let userInput = {};
  return (userInput = inquirer.prompt([
    {
      message: "Enter project title:",
      name: "projectTitle",
    },
    {
      message: "Enter project description:",
      name: "projectDescription",
    },
    {
      message: "Enter project usage:",
      name: "projectUsage",
    },
    {
        message: "Enter project installation:",
        name: "projectInstallation",
      },
    {
      message: "Enter project license:",
      name: "projectLicense",
    },
    {
      message: "Enter project contributing:",
      name: "projectContributing",
    },
  ]));
}



function writeToFile(fileName, fileContent) {
  fs.writeFile("README "+fileName+".md", fileContent, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("Read Me file is created!");
  });
}

