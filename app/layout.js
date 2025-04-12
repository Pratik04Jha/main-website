import Footer from "./components/Sections/Footer";
import Navbar from "./components/Sections/Navbar";
import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Zenius",
  description:
    "Zenius provides all the tools that you need on your day to day life, whether its productivity, automation, AI assistence or anything else. Built by the visionary Pratik Jha.",
  icons: { icon: "/xlogo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="description"
          content="Welcome to ZeniusVerse – An all-in-one AI universe powered by Zenius. Experience the smartest chatbot, text-to-image, text-to-video, quote generator, and image enhancer in one powerful app. Built by the visionary Pratik Jha."
        />
        <meta
          name="keywords"
          content="AI chatbot, ZeniusVerse, AI tools, text to image, text to video, quote generator, image enhancer, Zenius, AI website, Next.js AI app, Pratik Jha"
        />
        <meta name="author" content="Pratik Jha" />
        <meta
          property="og:title"
          content="ZeniusVerse – The Ultimate AI Universe"
        />
        <meta
          property="og:description"
          content="All-in-one AI platform built by Pratik Jha. Chatbot, text to image/video, quote maker, image enhancer – all powered by Zenius."
        />
        <meta property="og:image" content="/icon.png" />
        <meta
          property="og:url"
          content="https://artificial-intelligence-beta.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ZeniusVerse – The Ultimate AI Universe"
        />
        <meta
          name="twitter:description"
          content="Explore ZeniusVerse – the smartest all-in-one AI experience. Created by Pratik Jha."
        />
        <meta name="twitter:image" content="/icon.png" />
        <link rel="shortcut icon" href="/xlogo.png" />
      </Head>
      <body className="bg-black text-white" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
