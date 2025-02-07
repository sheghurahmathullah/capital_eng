import Image from "next/image";
import React from "react";
import vision from "@/public/assets/img/bg/vision.jpg";
// import mission from "@/public/assets/img/bg/mission.jpg"; // Replace with the actual path to the mission image

export default function Features() {
  return (
    <div className="why-area-1 space bg-theme shape-mockup-wrap">
      <div className="container">
        <div className="row align-items-center">
          {/* Vision Section */}
          <div className="col-lg-6">
            <div className="title-area mb-45">
              <h2 className="sec-title">Our Vision</h2>
            </div>
            <p>
              To be the leading multidisciplinary consultancy, recognized globally as a trusted partner in shaping the construction landscape through innovative, reliable, and
              sustainable solutions that drive progress and excellence.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="why-img-1-1 shape-mockup wow img-custom-anim-right animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
              {/* <Image
                src=""
                alt="Vision Image"
                layout="responsive"
                width={200}
                height={100}
                className="rounded-lg shadow-md"
              /> */}
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-5">
          {/* Mission Section */}
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="why-img-1-1 shape-mockup wow img-custom-anim-left animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
              {/* <Image
                src={mission}
                alt="Mission Image"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              /> */}
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
            <div className="title-area mb-45">
              <h2 className="sec-title">Our Mission</h2>
            </div>
            <p>
              To deliver unparalleled value and excellence through tailored, innovative engineering solutions.
              By leveraging advanced technologies, a skilled team, and a commitment to sustainability, we address
              complex challenges with precision and efficiency. Our mission is to enhance the built environment,
              foster sustainable development, and create lasting value for our clients, stakeholders, and communities worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
