"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { clients } from "@/data/clients";

export default function Clients() {
  return (
    <div className="container-fluid space-bottom">
      {/* Section Title */}
      <div className="text-center mb-4">
      <h2 className="text-center my-4">Our Clients</h2>
        <p className="text-muted">Trusted by leading brands worldwide</p>
      </div>

      {/* Marquee Client Logos */}
      <div className="client-marquee-wrap">
        <Marquee pauseOnHover={true} speed={50} gradient={false}>
          {clients.map((client, index) => (
            <div key={index} className="client-logo mx-4">
              <a href={client.href}>
                <Image
                  src={client.img}
                  width={164}
                  height={45}
                  alt="Client Logo"
                  className="img-fluid"
                  style={{ objectFit: "contain", maxWidth: "140px" }}
                />
              </a>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .client-marquee-wrap {
          padding: 20px 0;
        }
        .client-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease-in-out;
        }
        .client-logo:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
