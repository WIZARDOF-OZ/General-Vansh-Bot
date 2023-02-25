
/**
 * @INFO
 * Bot Coded by WIZARD OF OZᶫᵒᵛᵉᵧₒᵤ#4090 | https://discord.gg/PqdEhECCZX
 * Please mention me when using this Code!
 * @INFO
 */

const fs = require('fs');
const path = require('path');

module.exports = (directory, foldersOnly = false) => {
  let fileNames = [];

  const files = fs.readdirSync(directory, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(directory, file.name);

    if (foldersOnly) {
      if (file.isDirectory()) {
        fileNames.push(filePath);
      }
    } else {
      if (file.isFile()) {
        fileNames.push(filePath);
      }
    }
  }

  return fileNames;
};