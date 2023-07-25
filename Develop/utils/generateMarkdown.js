function renderLicenseBadge(license) {

  return '![Static Badge](https://img.shields.io/badge/License:-' + license + '-green:badgeContent)'
}

function renderLicenseLink(license) {
  licenseLink = {
    No_License: 'This project has not been listed under a license',
    Academic_Free_License_v3_0: 'You can read about the specifications of this license here: https://opensource.org/license/afl-3-0-php/',
    Apache_license_2_0: 'You can read about the specifications of this license here: https://www.apache.org/licenses/LICENSE-2.0',
    Artistic_license_2_0: 'You can read about the specifications of this license here: https://opensource.org/license/artistic-2-0/',
    Boost_Software_License_1_0: 'You can read about the specifications of this license here: https://www.tldrlegal.com/license/boost-software-license-1-0-explained',
    The_2_Clause_BSD_License: 'https://opensource.org/license/bsd-2-clause/',
    BSD_3_Clause_New_or_Revised_License: 'https://spdx.org/licenses/BSD-3-Clause.html',
    BSD_3_Clause_Clear_License: 'https://opensource.org/license/BSD-3-clause/',
    Creative_Commons_License_Family: 'https://creativecommons.org/licenses/',
    Creative_Commons_Zero_v1_0_Universal: 'https://creativecommons.org/publicdomain/zero/1.0/',
    Do_What_The_Fck_You_Want_To_Public_License: 'https://choosealicense.com/licenses/wtfpl/',
    Microsoft_Public_License: 'https://choosealicense.com/licenses/ms-pl/#:~:text=Microsoft%20Public%20License%20%28Ms-PL%29%20%20This%20license%20governs,accept%20the%20license%2C%20do%20not%20use%20the%20software.',
    MIT: 'You can read about the specifications of this license here: https://www.mit.edu/~amini/LICENSE.md',
    Mozilla_Public_License_2_0: 'https://www.mozilla.org/en-US/MPL/2.0/',
    Open_Software_License_3_0: 'https://opensource.org/license/osl-3-0-php/',
    SIL_Open_Font_License_1_1: 'https://scripts.sil.org/cms/scripts/page.php?id=OFL'
  }
  return licenseLink[license]
}


function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

# Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#licenses)
- [Contribution](#contribution)
- [Tests](#test)
- [Username](#username)
- [Profile](#profile)
- [Questions](#questions)

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## License:
The license for this project is: ${data.license}.
${renderLicenseLink(data.license)}.

## Contribution:
${data.contribution}

## Test:
${data.test}

## Questions
My GitHub username is ${data.profile}, and you can view my profile here: https://github.com/${data.profile}/.
<br>
To get in contact with me, please email me here: ${data.email}.
`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  generateMarkdown
}


