
function generateFile(content) {
  return `

<br />
<p align="center">

<img src="${content.userAvatar}"  alt="profile picture" width="150" height="150">

<h2 align="center">${content.projectTitle}</h2>

<p align="center">
By ${content.userName}
</p>
<br />
</p>


## Table of Contents
* [Project Description](#project-description)
* [Usage](#usage)
* [Installation](#installation)
* [Contributing](#contributing)
* [License](#license)
* [Badges](#badges)

## Project Description
${content.projectDescription}
## Usage
${content.projectUsage}
## Installation
${content.projectInstallation}
## Badges
Check out the badges hosted by shields.io. 

## Contributing
${content.projectContributing}

## License
${content.projectLicense}
  `;
}
module.exports = generateFile
