import Image from "next/image";
import React from "react";

export default function MessageCeo() {
  return (
    <div className="why-area-1 space bg-theme shape-mockup-wrap" style={{paddingBottom:"300px"}}>
      <div
        className="why-img-1-1 shape-mockup wow img-custom-anim-right animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", right: "0px", bottom: "140px" }}
      >
        <Image
          width={838}
          height={778}
          src="/assets/img/about/c3.png"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-45">
              <h2 className="sec-title">
              Message from our CEO and Managing Director
              </h2>
            </div>
            {/* <h4>We Love What We Do</h4> */}
            <p>
            Established in 2006 and headquartered in the UAE, Capital Engineering Consultancy is a leading multidisciplinary firm with a presence in KSA, Oman, Egypt, India, Iraq, and the UK. Blending tradition with innovation, we deliver practical and sustainable solutions across architecture, structural engineering, roads, infrastructure, and oil & gas.
            </p>
            <p>
            Driven by excellence, commitment, and perseverance, we reshape the engineering landscape through quality and innovation. Catering to both public and private sectors, we ensure exceptional value and transformative solutions worldwide.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}
