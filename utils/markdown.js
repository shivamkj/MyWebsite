const marked = require("marked");
const hljs = require("highlight.js");

// Override function
// const renderer = {
//   link(href, title, text) {
//     const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

//     return `
//             <h${level}>
//               <a name="${escapedText}" class="anchor" href="#${escapedText}">
//                 <span class="header-link"></span>
//               </a>
//               ${text}
//             </h${level}>
//         `;
//   },
// };

marked.setOptions({
  highlight: (code, lang) => hljs.highlight(code, { language: lang }).value,
  headerIds: false,
});

// marked.use({ renderer });

const parseMarkdown = (content) => marked(content);

module.exports = parseMarkdown;
