import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Team() {
  return (
    <div className="team-area-1 space overflow-hidden">
      <div className="container">

      <h3 className="pb-3">Board of Directors</h3>
        <div className="row gy-4 justify-content-center">
          {/* Board of Directors */}
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/engr-balaskandan-raghunathan">
                <div className="team-card_img">
                  <Image
                    src="/assets/img/team/Engr. Balaskandan Raghunathan - Founder & Managing Director.JPG"
                    alt="Engr. Balaskandan Raghunathan"
                    width={308}
                    height={380}
                    layout="fixed"
                  />
                </div>
                <h4 style={{ color: "#081761" }}>Engr. Balaskandan Raghunathan</h4>
              </Link>
              <span className="fw-bold">Founder & Managing Director</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/mr-krishna-thyagarajan">
                <div className="team-card_img">
                  <Image
                    src="/assets/img/team/Mr. Krishna Thyagarajan - Operations Director.JPG"
                    alt="Mr. Krishna Thyagarajan"
                    width={308}
                    height={380}
                    layout="fixed"
                  />
                </div>
                <h4 style={{ color: "#081761" }}>Mr. Krishna Thyagarajan</h4>
              </Link>
              <span className="fw-bold">Operations Director</span>
            </div>
          </div>
        </div>

        <h3 className="pb-3  pt-100">Executive Profiles</h3>
        <div className="row gy-4 justify-content-center">
          {/* Executive Profiles */}
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/engr-aman-alqaisy">
                <div className="team-card_img">
                  <Image
                    src="/assets/img/team/Engr. Aman Alqaisy - Head of Operations (Sharjah).webp"
                    alt="Engr. Aman Alqaisy"
                    width={308}
                    height={380}
                    layout="fixed"
                  />
                </div>
                <h4 style={{ color: "#081761" }}>Engr. Aman <br /> Alqaisy</h4>
              </Link>
              <span className="fw-bold">Head of Operations <br />Sharjah</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/engr-senthilram-palavesamuthu">
                <div className="team-card_img">
                  <Image
                    src="/assets/img/team/Engr. Senthilram Palavesamuthu - Head of Operations (Abu Dhabi).webp"
                    alt="Engr. Senthilram Palavesamuthu"
                    width={308}
                    height={380}
                    layout="fixed"
                  />
                </div>
                <h4 style={{ color: "#081761" }}>Engr. Senthilram Palavesamuthu</h4>
              </Link>
              <span className="fw-bold">Head of Operations <br />Abu Dhabi</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/engr-shobanbaabu-arumugam">
                <div className="team-card_img">
                  <Image
                    src="/assets/img/team/Engr. Shobanbaabu Arumugam - Head of Operations (Saudi Arabia).webp"
                    alt="Engr. Shobanbaabu Arumugam"
                    width={308}
                    height={380}
                    layout="fixed"
                  />
                </div>
                <h4 style={{ color: "#081761" }}>Engr. Shobanbaabu Arumugam</h4>
              </Link>
              <span className="fw-bold">Head of Operations <br />Saudi Arabia</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/mr-subith-sreenivasan">
                <div className="team-card_img">
                  <Image
                    src="/assets/img/team/Mr. Subith Sreenivasan - Head of Operations (Umm Al Quwain).webp"
                    alt="Mr. Subith Sreenivasan"
                    width={308}
                    height={380}
                    layout="fixed"
                  />
                </div>
                <h4 style={{ color: "#081761" }}>Mr. Subith Sreenivasan</h4>
              </Link>
              <span className="fw-bold">Head of Operations <br /> Umm Al Quwai</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/engr-eslam-mohammed-ali">
                <div className="team-card_img">
                  <Image
                    src="/assets/img/team/Engr. Eslam Mohammed Ali - Head of Operations (Dubai & Egypt).JPG"
                    alt="Engr. Eslam Mohammed Ali"
                    width={308}
                    height={380}
                    layout="fixed"
                  />
                </div>
                <h4 style={{ color: "#081761" }}>Engr. Eslam Mohammed Ali</h4>
              </Link>
              <span className="fw-bold">Head of Operations <br />Dubai & Egypt</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/engr-rolan-cabahug-carpi">
                <div className="team-card_img">
                  <Image
                    src="/assets/img/team/Engr. Rolan Cabahug Carpi - Head of Operations (Ajman).JPG"
                    alt="Engr. Rolan Cabahug Carpi"
                    width={308}
                    height={380}
                    layout="fixed"
                  />
                </div>
                <h4 style={{ color: "#081761" }}>Engr. Rolan Cabahug Carpi</h4>
              </Link>
              <span className="fw-bold">Head of Operations <br />Ajman</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/engr-navas-mohammed">
                <div className="team-card_img">
                  <Image
                    src="/assets/img/team/Engr. Navas Mohammed - Head of Operations (Oman).JPG"
                    alt="Engr. Navas Mohammed"
                    width={308}
                    height={380}
                    layout="fixed"
                  />
                </div>
                <h4 style={{ color: "#081761" }}>Engr. Navas Mohammed</h4>
              </Link>
              <span className="fw-bold">Head of Operations <br />Oman</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/engr-ravikumar-m">
                <div className="team-card_img">
                  <Image
                    src="/assets/img/team/Engr. Ravikumar M. - Head of Operations (Ras Al Khaimah).JPG"
                    alt="Engr. Ravikumar M"
                    width={308}
                    height={380}
                    layout="fixed"
                  />
                </div>
                <h4 style={{ color: "#081761" }}>Engr. Ravikumar M</h4>
              </Link>
              <span className="fw-bold" style={{ marginTop: "27px", display: "inline-block" }}>
  Head of Operations <br /> Ras Al Khaimah
</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/mr-saravanan-ellappan">
              <div className="team-card_img" style={{ height: "458px", overflow: "hidden" }}>
  <Image
    src="/assets/img/team/Mr. Saravanan Ellappan - Operations Manager.JPG"
    alt="Mr. Saravanan Ellappan"
    width={308}
    height={450} // Increased height to 450
    layout="fixed"
    style={{ height: "450px", objectFit: "cover" }} // Ensure inline height is applied
  />
</div>

                <h4 style={{ color: "#081761" }}>Mr. Saravanan Ellappan</h4>
              </Link>
              <span className="fw-bold">Operations Manager</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/arch-bk-kulkarni">
                <div className="team-card_img">
                  <Image
                    src="/assets/img/team/Arch.  B.K. Kulkarni - Architectural Design Director.JPG"
                    alt="Arch. B.K. Kulkarni"
                    width={308}
                    height={380}
                    layout="fixed"
                  />
                </div>
                <h4 style={{ color: "#081761" }}>Arch. B.K. <br /> Kulkarni</h4>
              </Link>
              <span className="fw-bold">Architectural Design Director</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <Link href="/engr-anurag-varun">
                <div className="team-card_img">
                  <Image
                    src="/assets/img/team/Engr. Anurag Varun - MEP Manager.JPG"
                    alt="Engr. Anurag Varun"
                    width={308}
                    height={380}
                    layout="fixed"
                  />
                </div>
                <h4 style={{ color: "#081761" }}>Engr. Anurag <br />Varun</h4>
              </Link>
              <span className="fw-bold">MEP Manager</span>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}