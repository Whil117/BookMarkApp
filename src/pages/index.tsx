import BookMark from "./BookMark";
import Head from "next/head";
const Home = () => {
  return (
    <>
      <Head>
        <title>BookMark</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content="Book Mark Homework" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="BookMarkWhil" />
      </Head>
      <BookMark />
    </>
  );
};
export default Home;
