import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Team() {
  return (
    <div className="team-area-1 space overflow-hidden">
      <div className="container">
        <h3 className="pb-3">Executive Profiles</h3>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/balaskandan-raghunathan">
              <div className="team-card_img">
  <Image
    src="/assets/img/team/Balaskandan Raghunathan.png"
    alt="Team Image"
    width={308}
    height={380}
    layout="fixed" // Ensures the image uses exact dimensions
  />
</div>
                <h4 style={{ color: "#081761" }}>Balaskandan Raghunathan</h4>
              </Link>
              <span className="fw-bold">CEO/Founder</span>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/mr-krishna-t">
                <div className="team-card_img">
                  <Image
                    width={305}
                    height={380}
                    src="/assets/img/team/team-1-2.png"
                    alt="Team Image"
                  />
                </div>
                <h4 style={{ paddingBottom: "30px", color: "#081761" }}>
                  Mr. Krishna T
                </h4>
              </Link>
              <span className="fw-bold">Operations Director</span>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/mohammed-ibrahim-jawad-al-ridha">
                <div className="team-card_img">
                  <Image
                    width={305}
                    height={380}
                    src="/assets/img/team/Mohammed Ibrahim Jawad Al Ridha.png"
                    alt="Team Image"
                  />
                </div>
                <h4 style={{ color: "#081761" }}>
                  Mohammed Ibrahim Jawad Al Ridha
                </h4>
              </Link>
              <span className="fw-bold">Partner</span>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/ali-khalid-al-hammadi">
                <div className="team-card_img">
                  <Image
                    width={305}
                    height={380}
                    src="/assets/img/team/Ali Khalid Al Hammadi.png"
                    alt="Team Image"
                  />
                </div>
                <h4 style={{ color: "#081761" }}>Ali Khalid Al Hammadi</h4>
              </Link>
              <span className="fw-bold">Partner & Executive Director</span>
            </div>
          </div>
        </div>

        <h3 className="pb-3 pt-100">Board of Directors</h3>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/balaskandan-raghunathan">
                <h4 style={{ color: "#081761" }}>Balaskandan Raghunathan</h4>
              </Link>
              <span className="fw-bold">CEO/Founder</span>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/mr-krishna-t">
                <h4 style={{ paddingBottom: "30px", color: "#081761" }}>
                  Mr. Krishna T
                </h4>
              </Link>
              <span className="fw-bold">Operations Director</span>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/team/daniyel-karlos">
                <h4 style={{ color: "#081761" }}>Daniyel Karlos</h4>
              </Link>
              <span className="fw-bold">Web Developer</span>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/team/daniyel-karlos">
                <h4 style={{ color: "#081761" }}>Daniyel Karlos</h4>
              </Link>
              <span className="fw-bold">Web Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
