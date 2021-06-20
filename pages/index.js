import Head from "../components/Head";
import config from "../config";

const HomePage = () => {
  return (
    <>
      <Head type="page" info={{ title: "Home - Shivam Kumar Jha" }} />

      <main className="">
        <h1 className="text-2xl font-semibold text-center mt-8">
          COOMING SOON
        </h1>
      </main>
    </>
  );
};

export { config };
export default HomePage;
