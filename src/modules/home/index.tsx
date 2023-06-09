import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <p>Hello</p>
      </main>
    </>
  );
};

export default Home;
