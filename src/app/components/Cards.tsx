import React from "react";
import fetchAllPosts from "../../../lib/allposts";
const Cards = async () => {
  const allposts: Promise<[]> = fetchAllPosts();
  const blogs: post[] = await allposts;

  return (
    <section className="w-full ">
      {blogs.map((blog) => (
        <>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" className="block w-full h-full">
              <img
                alt="blog photo"
                src=""
                class="object-cover w-full max-h-40"
              />
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="font-medium text-indigo-500 text-md"></p>
                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                 {blog.title}
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  {blog.body.slice(0,50)}...
                </p>
              </div>
            </a>
          </div>
        </>
      ))}
    </section>
  );
};

export default Cards;
