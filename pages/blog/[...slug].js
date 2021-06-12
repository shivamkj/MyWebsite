import Head from "next/head";
import readDirectory from "../../utils/readDirectory";
import readContent from "../../utils/readContent";

const BlogPage = ({ params: { data, content } }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      <main
        className="mt-8 mx-auto prose prose-indigo"
        dangerouslySetInnerHTML={{ __html: content }}
      />
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
  const params = readContent(filePath);
  return { props: { params } };
};

export const getStaticPaths = async () => ({
  paths: await readDirectory("./content/"),
  fallback: false,
});
