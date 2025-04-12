import Footer from "./components/Sections/Footer";
import Navbar from "./components/Sections/Navbar";
import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Zenius",
  description: "Zenius provides all the tools that you need on your day to day life, whether its productivity, automation, AI assistence or anything else. Built by the visionary Pratik Jha.",
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
