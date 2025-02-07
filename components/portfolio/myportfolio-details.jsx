"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { sanityClient2 } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

const ProjectDetails = ({slug }) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        try {
          const query = `*[_type == "post" && slug.current == $slug][0]{
            title,
            body,
            categoryName,
            location,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            }
          }`;
          console.log("hello");
          const data = await sanityClient2.fetch(query, { slug });
          console.log("This is ", data);

          setProject(data);
        } catch (error) {
          console.error("Error fetching project details:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="project-details-page-area space">
      <div className="container">
        <div className="col-xl-12">
          <div className="project-inner-thumb mb-80">
            {project.mainImage?.asset?.url && (
              <Image
                width={1296}
                height={700}
                className="w-100"
                src={project.mainImage.asset.url}
                alt={project.title}
              />
            )}
          </div>
        </div>
        <div className="row justify-content-center flex-row-reverse">
          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h2 className="sec-title" style={{ color: "#081761" }}>{project.title}</h2>
              
            </div>
          </div>

          <div className="col-lg-8">
            <div className="title-area mb-35">
            <div>
            <h4 className="sec-title" style={{ display: "inline-block", marginRight: "10px" }}>
  Category :
</h4>
<p style={{ display: "inline-block", fontSize:"20px" }}>
  {project.categoryName}
</p>
            </div>

              <h4 className="sec-title" style={{ display: "inline-block", marginRight: "10px" }}>Location : </h4> 
              <p style={{ display: "inline-block", fontSize:"20px" }}>
  {project.location}
</p>
              <span
 
 
  style={{ display: 'inline-block', cursor: 'pointer' }}
>
  <h4 className="sec-title">Description :</h4>
  <p><PortableText value={project.body} /></p>
</span>
              <div className="sec-text mt-30">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
