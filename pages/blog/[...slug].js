import readDirectory from "../../utils/readDirectory";
import { readContentSync } from "../../utils/readContent";
import Head from "../../components/Head";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const BlogPage = ({ params: { data, content }, slug }) => {
  return (
    <>
      <Head type="article" info={data} />

      <article
        className="px-4 py-10 mx-auto max-w-7xl"
        itemID="#"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <div className="w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2">
          <div className="pb-4 mb-4 border-b border-gray-200">
            <h1 className="mb-2 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl">
              {data.title}
            </h1>
            <span className="text-sm text-gray-500">
              {formatDate(data.date)}
            </span>
          </div>
          <img
            src={"/" + slug.join("/") + ".png"}
            className="w-full h-64 object-cover bg-center rounded"
            alt={data.title}
          />
        </div>
        <div
          className="w-full mx-auto prose prose-indigo md:w-3/4 lg:w-1/2"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </>
  );
};

export default BlogPage;

// Async Version
// export const getStaticProps = ({ params: { slug } }) => {
//   return new Promise((resolve, reject) => {
//     const filePath = "./content/" + slug.join("/") + ".md";

//     readContent(filePath)
//       .then((params) => resolve({ props: { params } }))
//       .catch((err) => reject(err));
//   });
// };

// Sync Version
export const getStaticProps = ({ params: { slug } }) => {
  const filePath = "./content/" + slug.join("/") + ".md";
  const params = readContentSync(filePath);
  return { props: { params, slug } };
};

export const getStaticPaths = async () => ({
  paths: await readDirectory("./content/"),
  fallback: false,
});
