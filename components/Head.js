import NextHead from "next/head";

const Head = ({ type, info }) => {
  if (type == "article")
    return (
      <NextHead>
        <title>{info.title}</title>
      </NextHead>
    );
  else if (type == "page")
    return (
      <NextHead>
        <title>{info.title}</title>
      </NextHead>
    );
  else throw Error("type of Head is not Valid");
};

export default Head;
