// Generate markdown //
const generateMarkdown = require('./utils/generateMarkdown');

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const encodedLicense = encodeURI(license);
  return `![License](https://img.shields.io/badge/license-${encodedLicense}-green.svg)`;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const encodedLicense = encodeURI(license);
  return `[${license}](https://opensource.org/licenses/${encodedLicense})`;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License

This project is licensed under the ${renderLicenseLink(license)} license. See the [LICENSE](./LICENSE) file for details.

`;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contribution Guidelines

${data.contributing}

## Testing

${data.tests}

## Questions 

For questions or concerns, please contact [${answers.githubUsername}](https://github.com/${answers.githubUsername}) at ${answers.email}.

`;
}

module.exports = generateMarkdown;