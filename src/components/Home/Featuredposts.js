import React from "react";
import { sortBlogsByDate } from "@/src/utils";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

export function Featuredposts({ blogs }) {
  const sortedBlogs = sortBlogsByDate(blogs);
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32  px-5 sm:px-10  md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className=" w-full inline-block capitalize text-2xl md:text-4xl font-bold text-dark dark:text-light">
        Featured Posts
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-6">
        <article className="col-span-2 sxl:col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
}
