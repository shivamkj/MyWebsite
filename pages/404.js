import Head from "../components/Head";
import config from "../config";

const NotFoundPage = () => {
  return (
    <>
      <Head type="page" info={{ title: "Not Found" }} />

      <div>
        <h1 className="text-2xl font-semibold text-center my-8">
          404 - Page Not Found
        </h1>
      </div>
    </>
  );
};

export { config };
export default NotFoundPage;
