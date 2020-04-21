const inquirer = require("inquirer");

function collectInfo() {
  let userInput = {};
  return (userInput = inquirer.prompt([
    {
      message: "Enter project title:",
      name: "projectTitle",
      default: "Project Title",
    },
    {
      message: "Enter project description:",
      name: "projectDescription",
      default:
      "A short description explaining the what, why, and how. What was your motivation? Why did you build this project? ",
    },
    {
      message: "Enter project usage:",
      name: "projectUsage",
      default:
      "Provide instructions and examples for use. Include screenshots as needed.",
    },
    {
      message: "Enter project installation:",
      name: "projectInstallation",
      default: ` What are the steps required to install your project? Provide a step-by-step description of how to get the 
      development environment running.\n Example: \n ### Prerequisites\n  1. node.js  \n 2. ... \n ### Installing 
      step by step\n  1. Clone the repo \n  2. Install NPM packages\n `,
    },
    {
      message: "Enter project license:",
      name: "projectLicense",
      default: ` For your repository to be open source, you'll need to license it so that others are free to use, change, and distribute 
      the software. Please use https://choosealicense.com/ to choose a license if you need help)`,
    },
    {
      message: "Enter project contributing:",
      name: "projectContributing",
      default: `Example: \n Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to 
      change. \n Please make sure to update tests as appropriate.`,
    },
  ]));
}

module.exports = collectInfo;
