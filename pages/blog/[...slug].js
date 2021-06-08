import Head from "next/head";

const BlogPage = ({ params }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <main>
        <h1 className="text-2xl">{params}</h1>
      </main>
    </>
  );
};

export default BlogPage;

export async function getStaticProps({ params }) {
  return {
    props: {
      params: params.slug,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: ["sample"] } },
      { params: { slug: ["go", "getting-started"] } },
    ],
    fallback: false,
  };
}
