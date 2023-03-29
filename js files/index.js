// Packages for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Use inquirer to prompt user input before generating markdown file
inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are the usage instructions?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Enter the license for your project:',
  },
  {
    type:'input',
    name: 'contributing',
    message: 'Enter contribution guidelines for your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter instructions for testing:'
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  }
  // Callback function to write README file with user input
])
.then((data) => {
  const markdown = generateMarkdown(data);
  fs.writeFile('README.md', markdown, (err) => {
    if (err) throw err;
    console.log('README file has been created!');
  });
})
.catch((error) => {
  console.error(error);
});
