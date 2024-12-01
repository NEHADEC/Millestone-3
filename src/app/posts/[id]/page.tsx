"use client";
import { useParams } from "next/navigation";

import AuthoreCard from "@/components/AuthoreCard";
import CommentSection from "@/components/CommentSection";
import React from "react";
import Footer from "@/components/Footer";



const posts = [
  {
    id: "1",
    title: "HTML: The Backbone of Web Development",
    description:
      "Explore the fundamentals of HTML, the structure behind every web page.",

    image: "../images/img-1.webp",
  },
  {
    id: "2",
    title: "CSS: Bringing Style to the Web",
    description:
      "Learn how CSS makes web pages visually appealing with powerful styling techniques.",

    image: "../images/img-2.webp",
  },
  {
    id: "3",
    title: "JavaScript: Adding Interactivity to Websites",
    description:
      "Discover how JavaScript transforms static pages into dynamic user experiences.",

    image: "../images/img-3.webp",
  },
  {
    id: "4",
    title: "Bootstrap: Simplifying Responsive Design",
    description:
      "Dive into Bootstrap, a powerful framework for creating responsive websites quickly.",

    image: "../images/img-4.webp",
  },
  {
    id: "5",
    title: "Tailwind CSS: Utility-First Design",
    description:
      "Master the utility-first approach to styling with Tailwind CSS.",

    image: "../images/img-5.webp",
  },
  {
    id: "6",
    title: "React: Building Modern User Interfaces",
    description:
      "Understand React's component-based architecture for crafting reusable UI elements.",

    image: "../images/img-6.webp",
  },
  {
    id: "7",
    title: "Node.js: JavaScript on the Server",
    description:
      "Explore Node.js, enabling server-side programming with JavaScript.",

    image: "../images/img-7.webp",
  },
  {
    id: "8",
    title: "Next.js: The React Framework for Production",
    description:
      "Learn Next.js for building SEO-friendly and high-performance web applications.",

    image: "../images/img-8.webp",
  },
  {
    id: "9",
    title: "Python: The Versatile Language",
    description:
      "Discover the versatility of Python for web development, data science, and more.",

    image: "../images/img-9.webp",
  },
  {
    id: "10",
    title: "Django: Web Development with Python",
    description:
      "Get started with Django, a powerful Python framework for backend development.",

    image: "../images/img-10.jfif",
  },
  {
    id: "11",
    title: "Express.js: Lightweight Node.js Framework",
    description:
      "Learn how Express.js simplifies backend development with Node.js.",

    image: "../images/img-11.jfif",
  },
  {
    id: "12",
    title: "MongoDB: NoSQL Database for Developers",
    description:
      "Understand MongoDB's flexible data model for modern applications.",

    image: "../images/img-12.jfif",
  },
  {
    id: "13",
    title: "Git and GitHub: Version Control Made Easy",
    description:
      "Master Git and GitHub to collaborate and manage code effectively.",

    image: "../images/img-13.jfif",
  },
  {
    id: "14",
    title: "TypeScript: Typed JavaScript at Scale",
    description:
      "Explore TypeScript's features for creating robust and scalable JavaScript applications.",

    image: "../images/img-14.jfif",
  },
  {
    id: "15",
    title: "Web Accessibility: Building for Everyone",
    description:
      "Learn the principles of web accessibility to create inclusive user experiences.",

    image: "../images/img-15.jfif",
  },
];
 export default function Post ({ params }: {params: {id: string}}) {
  const { id } = params;
  const post = posts.find((p) => p.id=== id);

  if (!post) {
    return (
      <h2 className="text-2x1 font-bold text-center mt-10">Post Not Found</h2>
    );
  }
  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}</p>
    ));
  };
   return (
     <div className="max-w-3x1 max-auto p-5">
      <h1 className="md:text-4x1 text-3x1 font-bold text-red-600 text-center"> {post.title}


      </h1>
      {post.image && (
        <img
        src={post.image}
        alt={post.title}
        className="w-full h-auto rounded-md mt-4"/>
      )}
      <div className="mt-6 text-lg text-alate-700">
        {renderParagraphs(post.description)}

      </div>
      <CommentSection postId={post.id} />
      <AuthoreCard />
      <Footer/>
     </div>
   );
}
  
     


