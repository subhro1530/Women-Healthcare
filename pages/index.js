// index.js
import Head from "next/head";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Your Women's Health App</title>
        <meta name="description" content="Your app description here" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@400;700&display=swap"
        />
      </Head>

      <Navbar />

      <main>
        <h1>Welcome to your Women's Health App</h1>
        {/* Add your home page content here */}
      </main>
    </div>
  );
};

export default Home;
