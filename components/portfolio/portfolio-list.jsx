"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PortfolioList({ portfolioItems }) {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "All";

  const filteredItems =
    currentCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => {
          return item.categories?.some(
            (category) => category.title === currentCategory
          );
        });

  if (!filteredItems || filteredItems.length === 0) {
    return <p>No portfolio items found for this category.</p>;
  }

  return (
    <div className="row gy-40 gx-60 justify-content-center">
      {filteredItems.map((item) => (
        <div key={item._id} className="col-xl-4 col-lg-4 col-md-6">
          <Link href={`/project-details/${item.slug}`}>
            <div className="portfolio-wrap">
              {item.mainImage && (
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "12px",
                    border: "2px solid #ddd", // Added border to the image container
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <img
                    src={item.mainImage.asset.url}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "230px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border 0.3s ease-in-out", // Transition for the border
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.05)";
                      e.target.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
                      e.target.style.border = "2px solid #007bff"; // Blue border on hover
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                      e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.15)";
                      e.target.style.border = "2px solid #ddd"; // Revert to original border on mouse leave
                    }}
                  />
                </div>
              )}
              <h4
                className="pt-2"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "15px",
                  color: "#333",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#007bff"; // Change text color on hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#333"; // Revert text color
                }}
              >
                {item.title}
              </h4>
              {item.slug && (
                <p className="slug" style={{ display: "none" }}>
                  {item.slug.current}
                </p>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
