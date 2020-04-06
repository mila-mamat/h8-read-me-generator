
function contentFormat(content) {
  //if project title exist, change first letter of each word to upper case,if not use "Project Title"

  if (content.projectTitle) {
    const oldTitle = content.projectTitle.split(" ");
    let newTitle= []
    for (word of oldTitle) {
        word = word.charAt(0).toUpperCase()+ word.slice(1);
        newTitle.push(word)
    }
    content.projectTitle = newTitle.join(" ");
  } else {
    content.projectTitle = "Project Title";
  }

  //if description isn't provided, display default example 
  if (!content.projectDescription) content.projectDescription = "A short description explaining the what, why, and how. What "
  +" was your motivation? Why did you build this project? ";
 
  //if usage isn't provided, display default example 
  if (!content.projectUsage) content.projectUsage = "Provide instructions and examples for use. Include screenshots as needed.";

  //if installation isn't provided, display default example 
  if (!content.projectInstallation)
    content.projectInstallation =
      " What are the steps required to install your project? Provide a step-by-step description of how"
      + " to get the development environment running.\n Example: \n"
      +"### Prerequisites\n  1. node.js  \n 2. ... \n"
      +"### Installing step by step\n  1. Clone the repo \n  2. Install NPM packages\n ```sh \n npm install \n```  \n 3. ....";

  //if usage isn't provided, display default example 
  if (!content.projectLicense) content.projectLicense = "For your repository to be open source, you'll need to "
  +"license it so that others are free to use, change, and distribute the software. Please use https://choosealicense.com/ "
  +"to choose a license if you need help)";


  //if contributing isn't provided, display default example 
  if (!content.projectContributing) content.projectContributing = "Example: \n Pull requests are welcome. For major changes, "
  + "please open an issue first to discuss what you would like to change. \n Please make sure to update tests as appropriate.";

}

module.exports = contentFormat
