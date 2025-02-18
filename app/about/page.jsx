import Awards from "@/components/about/Awards";
import Breadcumb from "@/components/about/Breadcumb";
import Clients from "@/components/about/Clients";
import Contact from "@/components/contact/Contact";
import Facts from "@/components/about/Facts";
import Features from "@/components/about/Features";
import MessageCeo from "@/components/about/ceo-director";
import Vision from "@/components/about/vision";
import Philosophy from "@/components/about/philosophy"
import Team from "@/components/about/Team";
import MarqueeComponent from "./Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import React from "react";

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <Header3 />
      <Breadcumb />
      <Facts />
      <Features />
      <Philosophy/>
      <Awards />
      <MessageCeo/>
      <Vision />
      <Team />
      <Contact />
      <Clients />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
