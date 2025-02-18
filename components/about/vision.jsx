import Image from "next/image";
import React from "react";

export default function Vision() {
  return (
    <div className="service-area-1 space bg-theme shape-mockup-wrap ">
      <div
        className="service-img-1-1 shape-mockup wow img-custom-anim-left animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", left: "0px", bottom: "140px" }}
        data-left="0"
        data-top="-100px"
        data-bottom="140px"
      >
        <Image
          width={838}
          height={788}
          src="/assets/img/about/team.png"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end ">
          <div className="col-lg-6">
            <div className="about-content-wrap">
              <div className="title-area mb-0">
                <h2 className="sec-title">
                Our Team Behind the Vision
                </h2>
                <p className="sec-text mt-35 mb-40">
                Capital Engineering Consultancy's success is driven by a dedicated team of experts in architecture, structural engineering, MEP services, BIM, roads, and infrastructure, committed to delivering innovative and high-quality solutions.
                </p>

                <p className="sec-text mt-35 mb-40">
                By embracing challenges and continuous learning, we stay at the forefront of industry advancements, blending creativity and precision to create lasting impacts for clients, stakeholders, and communities.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
