import Head from "next/head";
import config from "../config";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>

      <div>
        <h1 className="text-2xl font-semibold text-center mt-8">
          404 - Page Not Found
        </h1>
      </div>
    </>
  );
};

export { config };
export default NotFoundPage;
