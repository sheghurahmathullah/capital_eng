import BlogList1 from "@/components/blog/BlogList1";
import Breadcumb from "@/components/blog/Breadcumb-blog";
import MarqueeComponent from "@/components/common/Marquee";
import { Suspense } from "react";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import React from "react";

export const metadata = {
  title: "Capital Engineering Consultancy",
};
export default function BlogPage1() {
  return (
    <>
      <Header3 />
      <Breadcumb />
      <Suspense fallback={<div>Loading...</div>}>
      <BlogList1 />
      </Suspense>
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
