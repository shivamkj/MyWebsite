import { readFileSync } from "fs";
import matter from "gray-matter";
import hljs from "highlight.js";
import marked from "marked";

marked.setOptions({
  highlight: (code, lang) => hljs.highlight(code, { language: lang }).value,
  headerIds: false,
});

const readContent = (filePath) => {
  const fileContent = readFileSync(filePath, "utf-8").toString();

  const { data, content } = matter(fileContent);
  // Convert date to string to avoid SerializableError in nextjs
  if (typeof data.date == "object") data.date = data.date.toISOString();
  const finalContent = marked(content);

  return { data, content: finalContent };
};

export default readContent;
