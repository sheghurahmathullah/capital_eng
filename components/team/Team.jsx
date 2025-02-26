import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Team() {
  const teamData = {
    executiveProfiles: [
      {
        name: "Engr. Aman Alqaisy ",
        role: "Head of Operations (Sharjah)",
        image: "/assets/img/team/Engr. Aman Alqaisy - Head of Operations (Sharjah).webp",
        link: "/balaskandan-raghunathan",
      },
      {
        name: "Engr. Senthilram Palavesamuthu",
        role: "Head of Operations (Abu Dhabi)",
        image: "/assets/img/team/Engr. Senthilram Palavesamuthu - Head of Operations (Abu Dhabi).webp",
        link: "/mr-krishna-t",
      },
      {
        name: "Engr. Shobanbaabu Arumugam",
        role: "Head of Operations (Saudi Arabia)",
        image: "/assets/img/team/Engr. Shobanbaabu Arumugam - Head of Operations (Saudi Arabia).webp",
        link: "/mohammed-ibrahim-jawad-al-ridha",
      },
      {
        name: "Mr. Subith Sreenivasan",
        role: "Head of Operations (Umm Al Quwain)",
        image: "/assets/img/team/Mr. Subith Sreenivasan - Head of Operations (Umm Al Quwain).webp",
        link: "/ali-khalid-al-hammadi",
      },
      {
        name: "Engr. Eslam Mohammed Ali",
        role: "Head of Operations (Dubai & Egypt)",
        image: "/assets/img/team/Engr. Eslam Mohammed Ali - Head of Operations (Dubai & Egypt).JPG",
        link: "/ali-khalid-al-hammadi",
      },
      {
        name: "Arch.  B.K. Kulkarni",
        role: "Architectural Design Director",
        image: "/assets/img/team/Arch.  B.K. Kulkarni - Architectural Design Director.JPG",
        link: "/ali-khalid-al-hammadi",
      },
      {
        name: "Engr. Navas Mohammed",
        role: "Head of Operations (Oman)",
        image: "/assets/img/team/Engr. Navas Mohammed - Head of Operations (Oman).JPG",
        link: "/ali-khalid-al-hammadi",
      },
      {
        name: "Engr. Ravikumar M",
        role: "Head of Operations (Ras Al Khaimah)",
        image: "/assets/img/team/Engr. Ravikumar M. - Head of Operations (Ras Al Khaimah).JPG",
        link: "/ali-khalid-al-hammadi",
      },
      {
        name: "Mr. Saravanan Ellappan",
        role: "Operations Manager",
        image: "/assets/img/team/Mr. Saravanan Ellappan - Operations Manager.JPG",
        link: "/ali-khalid-al-hammadi",
      },
      {
        name: "Engr. Rolan Cabahug Carpi",
        role: " Head of Operations (Ajman)",
        image: "/assets/img/team/Engr. Rolan Cabahug Carpi - Head of Operations (Ajman).JPG",
        link: "/ali-khalid-al-hammadi",
      },
      {
        name: "Engr. Anurag Varun",
        role: "MEP Manager",
        image: "/assets/img/team/Engr. Anurag Varun - MEP Manager.JPG",
        link: "/ali-khalid-al-hammadi",
      },
    ],
    boardOfDirectors: [
      {
        name: "Engr. Balaskandan Raghunathan",
        role: "Founder & Managing Director",
        image:"/assets/img/team/Engr. Balaskandan Raghunathan - Founder & Managing Director.JPG",
        link: "/balaskandan-raghunathan",
      },
      {
        name: "Mr. Krishna Thyagarajan",
        role: "Operations Director",
        image:"/assets/img/team/Mr. Krishna Thyagarajan - Operations Director.JPG",
        link: "/balaskandan-raghunathan",
      },
    ],
  };

  // Function to render each team section
  const renderTeamSection = (title, teamMembers, showImages = true) => (
    <>
      <h3 className="pb-3">{title}</h3>
      <div className="row gy-4 justify-content-center">
        {teamMembers.map(({ name, role, image, link }) => (
          <div className="col-lg-3 col-md-6" key={name}>
            <div className="team-card">
              <Link href={link}>
                {showImages && (
                  <div className="team-card_img">
                    <Image
                      src={image}
                      alt={name}
                      width={305}
                      height={380}
                      layout="fixed"
                    />
                  </div>
                )}
                <h4 style={{ color: "#081761" }}>{name}</h4>
              </Link>
              <span className="fw-bold">{role}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="team-area-1 space overflow-hidden">
      <div className="container">
        {renderTeamSection("Executive Profiles", teamData.executiveProfiles)}
        <div className="pt-100">
          {renderTeamSection("Board of Directors", teamData.boardOfDirectors)}
        </div>
      </div>
    </div>
  );
}
