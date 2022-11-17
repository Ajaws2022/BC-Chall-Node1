  // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    MIT:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',

    Apache:'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',

    CC_BY_NC_4:'[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)'
  }
  if(license === ""){
    return ""
  } else{ 
    return badges[license]
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT:'https://choosealicense.com/licenses/mit/',
    Apache: 'https://choosealicense.com/licenses/apache-2.0/',
    CC_BY_NC_4: 'https://creativecommons.org/licenses/by-nc/4.0/legalcode'
  }
  if(renderLicenseBadge(license) === ""){
    return ""
  } else{
    return licenseLinks[license]
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === ""){
    return ""
  } else{
    return `License information: ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(`${renderLicenseBadge(data.license)}`)
  return `
# ${data.title}
${renderLicenseBadge(data.license)}
  
## Table Of Contents
- [Description](#Description)
- [Installation](#Install)
- [Usage](#Usage)
- [License](#License)
- [Contribute](#Contributions)
- [Questions](#Questions)
  
## Description
${data.description}

## Installation
${data.install}
  
## Usage
${data.usage}

Video Demonstration: [${data.vid}](${data.vid})
  
## Contributions
${data.contribute}
  
## Questions
Email questions to: [${data.email}](mailto:${data.email})
  
GitHub link: [${data.github}](https://github.com/${data.github})  
  
## License
${renderLicenseSection(data.license)}
  
`
  
}

module.exports = generateMarkdown;
