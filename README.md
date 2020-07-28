

<br />
<p align="center">

<img src="https://avatars2.githubusercontent.com/u/59339564?v=4"  alt="profile picture" width="150" height="150">

<h2 align="center">Readme Generator</h2>

<h3 align="center">
 Node, Github API, inquirer, Axios

</h3>

<br />
</p>


## Table of Contents
* [Project Description](#project-description)
* [Usage](#usage)
* [Installation](#installation)
* [Badges](#badges)
* [Contributing](#contributing)
* [License](#license)


## Project Description
This is a command-line application that dynamically generates a README.md from a user's input.

```
AS A developer

I WANT a README generator

SO THAT I can easily put together a good README for a new project
```

## Usage

The application will be invoked and run in terminal.

### Generate by user input
The user will be prompted for their GitHub username, which will be used to make a call to the GitHub API to retrieve their email and profile image. 

Users will then be prompted with questions about their project.Readme file will be generated based on users answer.
<img src="https://github.com/mila-mamat/homework8-read-me-generator/blob/master/gif/readme.gif" alt="Sample readme" width="600" height="300">


The sample readme file result:

<img src="https://github.com/mila-mamat/homework8-read-me-generator/blob/master/gif/readme%20result.gif" alt="Sample readme result" width="600" height="300">

### Generate by default value
If any question is not answered, the content will be set to default value.

<img src="https://github.com/mila-mamat/homework8-read-me-generator/blob/master/gif/readme-default.gif" alt="Default readme" width="600" height="300">

The default readme file result:

<img src="https://github.com/mila-mamat/homework8-read-me-generator/blob/master/gif/default%20readme%20result.gif" alt="Default readme result" width="600" height="300">



## Installation
### Prerequisites
  node.js  

### Installing and running 
  1. Clone the repo 
  2. Install NPM packages through command-line
 ```
 npm install 
```  
 3. Run index.js in command-line
 ```
 node index.js
 ```
## Badges
![node](https://img.shields.io/node/v/latest?style=plastic)
![code size](https://img.shields.io/github/languages/code-size/mila-mamat/homework8-read-me-generator)
![License](https://img.shields.io/github/license/mila-mamat/homework8-read-me-generator)

## Contributing
 Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 
 
 Please make sure to update tests as appropriate.

## License
Distributed under the MIT License. See `LICENSE` for more information.
  
