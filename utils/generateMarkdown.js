// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

var typicalVar = "Tuis is my string" + variable
var templateLit = `This is my string ${variable}`

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.description}
## Description

${data.tableOfContents}
## Table of Contents

${data.usage}
## Usage

${data.installation}
##Installation

${data.license}
## License

${data.contributing}
## Contributing

${data.tests}
## Tests

${data.questions}
## Questions



If you have any questions, you can reach me on github at github.com/${data.github} or 

`;
}

module.exports = generateMarkdown;
