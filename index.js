const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");





async function userGithubInfo() {
    const {
        username
    } = await inquirer.prompt({
        message: "Enter your GitHub username:",
        name: 'username',
    })
    const queryUrl = `https://api.github.com/users/${username}`;
    try {
        return axios.get(queryUrl)
    } catch (err) {
        console.error(err)
    }
}



function collectInfo() {
    let userInput = {};
    return userInput = inquirer
        .prompt([{
                message: "Enter project title:",
                name: 'projectTitle',
            },
            {
                message: "Enter project description:",
                name: "projectDescription"
            },
            {
                message: "Enter project usage:",
                name: "projectUsage"
            },
            {
                message: "Enter badge (separate badges with comma):",
                name: "projectBadges"
            },
            {
                message: "Enter project license:",
                name: "projectLicense"
            },
            {
                message: "Enter project installation:",
                name: "projectInstallation"
            },
            {
                message: "Enter project contributing:",
                name: "ProjectContributing"
            }
        ])
}

async function readmeGenerator() {
    console.log("\n          Welcome to Readme Generator.\n");
    //collect user's github info to display user name for double check

    let githubResponse = await userGithubInfo();

    console.log("\n Hi, " + githubResponse.data.name + "\n");
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
    console.log(readmeContent)
    let file = generateFile(readmeContent);
    writeToFile("Read Me.md",file);
}



readmeGenerator();

function generateFile(input) {
    return `
 
    <br />
    <p align="center">
        
            <img src=" ${input.userAvatar}" alt="profile picture" width="80" height="80">

            <h3 align="center">${input.projectTitle}</h3>

        <br />
            <p align="center">
            By ${input.userName}
        </p>
        <p align="center">
        ${input.projectBadges}
        </p>

    </p>



## Table of Contents

* [Project Description](#project-description)
* [Usage](#usage)
* [Installation](#installation)
  * [Prerequisites](#prerequisites)
  * [Installing step by step](#installing-step-by-step)
* [Contributing](#contributing)
* [License](#license)
* [Badges](#badges)




## Project Description
your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? If your project has a lot of features, consider adding a heading called "Features" and listing them here.

## Usage
Provide instructions and examples for use. Include screenshots as needed.

## Installation
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

### Prerequisites

### Installing step by step
 


## Badges
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by shields.io. You may not understand what they all represent now, but you will in time.



## Contributing

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The Contributor Covenant is an industry standard, but you can always write your own.



## License
This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use https://choosealicense.com/
  `
}





function writeToFile(fileName, fileContent) {
    fs.writeFile(fileName, fileContent, function (err) {
        if (err) {
          return console.log(err)
        }
      
        console.log('Read Me file is created!')
      })
      

}

// function init() {}

// init();