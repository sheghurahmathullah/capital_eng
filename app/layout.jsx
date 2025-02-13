"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";
import "../public/assets/css/vendor.css";
import "../public/assets/sass/style.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollTop from "@/components/common/ScrollTop";
import { Unbounded, Poppins } from "next/font/google";
import clarity from "@microsoft/clarity";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";
if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap.esm").then((module) => {
    // Module is imported, you can access any exported functionality if
  });
}
// wow js



const CLARITY_PROJECT_ID = "q93kym975x"; 

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--title-font",
});

// Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--body-font",
});

export default function RootLayout({ children }) {
  const path = usePathname();
  const pathname = usePathname();

  useEffect(() => {
      // Dynamically add Clarity script to the page
      const script = document.createElement("script");
      script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
      script.async = true;
      script.onload = () => {
          window.clarity("trackPageview");  // Track page view after script load
      };
      document.head.appendChild(script);

      return () => {
          document.head.removeChild(script); // Clean up the script on component unmount
      };
  }, [pathname]);

  let wow = null;
  useEffect(() => {
    const { WOW } = require("wowjs");
    wow = new WOW({
      live: false,
      mobile: false,
    });
    wow.init();
  }, [path]);
  //useEffect(() => {

  //wow?.sync();
  //}, [path]);
  return (
    <html lang="en">
      <body className={`body  ${poppins.variable} ${unbounded.variable}`}>
        <head>
    
<Script async src={`https://www.googletagmanager.com/gtag/js?id=G-TM7KY7962Z`}></Script>
<Script>
  {
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-TM7KY7962Z');`
  }
</Script>

<Script type="text/javascript">
   {
    ` (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "q93kym975x");`
   }
</Script>

        </head>
        <ParallaxProvider>{children}</ParallaxProvider>
        <ScrollTop />
        <ScrollTopBehaviour />
      </body>
    </html>
  );
}