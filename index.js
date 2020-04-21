const fs = require("fs");

const userGithubInfo = require("./util/userGithubInfo");
const generateFile = require("./util/generateFile");
const collectInfo = require("./util/collectInfo");

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

  let file = generateFile(readmeContent);
  writeToFile(file);
}
readmeGenerator();

function writeToFile(fileContent) {
  fs.writeFile("README.md", fileContent, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("Read Me file is created!");
  });
}
