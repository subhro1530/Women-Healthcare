// index.js
import Head from "next/head";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
// import Navbar from "../components/Navbar";
// import ToastMessage from "@/components/ToastMessage";
// import HeroSection from "@/components/HeroSection";
// import Footer from "@/components/Footer";
// import Details from "@/components/Details";
// import SubNavbar from "@/components/SubNavbar";
// import FAQ from "@/components/FAQ";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: false,
});
const Details = dynamic(() => import("@/components/Details"), {
  ssr: false,
});
const SubNavbar = dynamic(() => import("@/components/SubNavbar"), {
  ssr: false,
});
const ToastMessage = dynamic(() => import("@/components/ToastMessage"), {
  ssr: false,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  ssr: false,
});

const Home = () => {
  const [showToast, setShowToast] = useState(true);

  return (
    <Box scrollBehaviour="smooth">
      <Head>
        <title>Home | FemWellCare</title>
        <meta name="description" content="Your app description here" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@400;700&display=swap"
        />
      </Head>

      <Navbar />
      <SubNavbar />
      {showToast && (
        <ToastMessage
          message="Welcome to FemWellCare. We are upgrading ourselves to manage a platform which is available throughout the globe to meet high demands."
          onClose={() => setShowToast(false)}
        />
      )}

      <HeroSection />
      <Details />
      <FAQ />
      <Footer />
    </Box>
  );
};

export default Home;
