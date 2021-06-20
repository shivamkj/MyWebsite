const { readFile, readFileSync } = require("fs");
const matter = require("gray-matter");
const parseMarkdown = require("./markdown");

const readContentSync = (filePath) => {
  const fileContent = readFileSync(filePath, "utf-8").toString();

  const { data, content } = matter(fileContent);
  // Convert date to string to avoid SerializableError in nextjs
  if (typeof data.date == "object") data.date = data.date.toISOString();
  const parsedContent = parseMarkdown(content);

  return { data, content: parsedContent };
};

const readContent = (filePath) => {
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, fileContent) => {
      if (err) reject(err);

      const { data, content } = matter(fileContent);
      // Convert date to string to avoid SerializableError in nextjs
      if (typeof data.date == "object") data.date = data.date.toISOString();
      const parsedContent = parseMarkdown(content);

      resolve({ data, content: parsedContent });
    });
  });
};

module.exports = { readContent, readContentSync };
