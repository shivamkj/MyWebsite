const fs = require("fs");
const path = require("path");
// import { test } from "gray-matter";

const readDirectory = (directory) => {
  return new Promise((resolve, reject) => {
    fs.readdir(directory, (err, files) => {
      const allFiles = [];
      if (err) reject(err);
      files.forEach((fileName) => {
        var filePath = path.join(directory, fileName);
        var isFile = fs.statSync(filePath).isFile();
        if (isFile) allFiles.push(fileName);
      });
      resolve(allFiles);
    });
  });
};

(async () => {
  const testFolder = "./content/";
  const files = await readDirectory(testFolder);
  console.log(files);
})();

module.exports = { readDirectory };
