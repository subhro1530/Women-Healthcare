// index.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import ToastMessage from "@/components/ToastMessage";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Home = () => {
  const [showToast, setShowToast] = useState(true);
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

      {showToast && (
        <ToastMessage
          message="Babylon US clinical services and appointments are no longer available. For details about your health plan benefits and to find a new provider, contact your health plan."
          onClose={() => setShowToast(false)}
        />
      )}

      <HeroSection />
      <Footer />
    </div>
  );
};

export default Home;
