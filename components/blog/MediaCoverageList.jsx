"use client";
import React from "react";
import BlogSerchbar from "./BlogSerchbar";
import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Tags from "./Tags";
import Link from "next/link";
import Pagination from "./Pagination";
import Image from "next/image";
import { sanityClient5 } from "@/lib/sanity";
import { useSearchParams } from "next/navigation";
import { PortableText } from "@portabletext/react";

export default async function BlogList2() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "All";
  const currentTag = searchParams.get("tag");

  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
       projectDescription,
      "slug": slug.current,
      publishedAt,
     projectOverview,
     link {
      url,
      label
    },
      body,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      categories[]->{
        _id,
        title
      },
      tags[]->{
        _id,
        title
      }
    }`;

    const posts = await sanityClient5.fetch(query);

    // Filter posts based on query parameters
    const filteredPosts = posts.filter((post) => {
      const categoryMatch =
        currentCategory === "All" ||
        post.categories?.some((cat) => cat.title === currentCategory);
      const tagMatch =
        !currentTag || post.tags?.some((tag) => tag.title === currentTag);
      return categoryMatch && tagMatch;
    });

    if (!filteredPosts || filteredPosts.length === 0) {
      return (
        <section className="blog__area space">
          <div className="container">
            <p>No blog posts found for the selected category or tag.</p>
          </div>
        </section>
      );
    }

    return (
      <section className="blog__area space">
        <div className="container">
          <div className="blog__inner-wrap">
            <div className="row">
            <div className="col-70">
  <div className="blog-post-wrap">
    <div className="row gy-50 gutter-24">
      {filteredPosts.map((post) => (
        <div
          key={post?.slug?.current || `post-${Math.random()}`}
          className="col-12" // Full-width column for single row
        >
          <div className="blog-post-item-2 d-flex align-items-center">
            {/* Image Section */}
            <div className="blog-post-thumb me-4" style={{ flex: "1" }}>
              <Link scroll={false} href={`/press-release-details/${post.slug}`}>
                {post.mainImage?.asset?.url && (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    width={300} // Adjust for left-side image
                    height={200}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                )}
              </Link>
            </div>

            {/* Content Section */}
            <div className="blog-post-content" style={{ flex: "2" }}>
              <div className="blog-post-meta">
                <ul className="list-wrap">
                  <li>
                    Published on &nbsp;
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </li>
                  {post.categories?.length > 0 && (
                    <li>
                      {post.categories.map((category, index) => (
                        <span key={index}>
                           {category.title}
                          {index < post.categories.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </li>
                  )}
                </ul>
              </div>
              <h3 className="title" style={{ fontSize: "20px" }}>
                <Link
                  scroll={false}
                  href={`/blog1-details/${post.slug.current}`}
                >
                  {/* {post.title}   title is here  */}  
                </Link>
              </h3>
              {post.link?.url && (
            <a
              href={post.link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#0070f3',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              {post.link.label || 'Read More'} {/* Use label if provided */}
            </a>
          )}
              <p><PortableText value={post.body} /></p>
              <Link
                scroll={false}
                href={`/blog1-details/${post.slug.current}`}
                className="link-btn"
              >
                <span className="link-effect">
                  <span className="effect-1">READ MORE</span>
                  <span className="effect-1">READ MORE</span>
                </span>
                <Image
                  width={13}
                  height={13}
                  src="/assets/img/icon/arrow-left-top.svg"
                  alt="icon"
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Pagination />
  </div>
</div>

              <div className="col-30">
                <aside className="blog__sidebar">
                  <BlogSerchbar />
                  <Categories />
                  <RecentPosts />
                  <Tags />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return (
      <section className="blog__area space">
        <div className="container">
          <p>Error loading blog posts. Please try again later.</p>
        </div>
      </section>
    );
  }
}
