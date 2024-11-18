"use client";

import React, { useEffect } from "react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { useQueryState } from "nuqs";

const categories = [
  "All",
  "Corporate Law",
  "Tax Law",
  "Intellectual Property",
  "Employment Law",
  "Data Privacy",
];

const featuredArticles = [
  {
    title:
      "Why it's important for startups to consider intellectual property early",
    author: "Emily Zhang",
    date: "3 days ago",
    readTime: "5 min read",
    image:
      "https://cdn.usegalileo.ai/stability/6a8f0a48-88b1-4f86-9b31-44cd49b29b86.png",
  },
  {
    title: "A guide to understanding the new data privacy laws in California",
    author: "John Schmidt",
    date: "2 days ago",
    readTime: "6 min read",
    image:
      "https://cdn.usegalileo.ai/stability/65d853c9-7453-4417-9c13-4c1d5976c093.png",
  },
  {
    title:
      "The tax implications of remote work for both employers and employees",
    author: "Olivia Nguyen",
    date: "1 week ago",
    readTime: "4 min read",
    image:
      "https://cdn.usegalileo.ai/stability/92aeb66b-0d2f-4d23-bc66-fcc0a277c949.png",
  },
  {
    title: "What founders need to know about equity compensation for employees",
    author: "Michael Davis",
    date: "5 days ago",
    readTime: "5 min read",
    image:
      "https://cdn.usegalileo.ai/stability/d409e97c-bd3b-4c89-8af5-5eaa30be39ac.png",
  },
];

const recentPosts = [
  {
    title:
      "Why it's important for startups to consider intellectual property early",
    author: "Emily Zhang",
    date: "3 days ago",
    readTime: "5 min read",
    image:
      "https://cdn.usegalileo.ai/stability/038248bc-7095-42b2-8104-aba7f3a7641d.png",
  },
  {
    title: "A guide to understanding the new data privacy laws in California",
    author: "John Schmidt",
    date: "2 days ago",
    readTime: "6 min read",
    image:
      "https://cdn.usegalileo.ai/stability/581d40ad-c015-47a6-9371-f49e8e7362c5.png",
  },
  {
    title:
      "The tax implications of remote work for both employers and employees",
    author: "Olivia Nguyen",
    date: "1 week ago",
    readTime: "4 min read",
    image:
      "https://cdn.usegalileo.ai/stability/4ef14268-fa40-4e69-ac04-433581376684.png",
  },
  {
    title: "What founders need to know about equity compensation for employees",
    author: "Michael Davis",
    date: "5 days ago",
    readTime: "5 min read",
    image:
      "https://cdn.usegalileo.ai/stability/5ce82859-c285-4965-a7d4-74638900251f.png",
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useQueryState("category");

  // useEffect(() => {
  //   console.log("selectedCategory :>> ", selectedCategory);
  // }, [selectedCategory]);

  const buttonClass = (category) => {
    if (
      (category === "All" && !selectedCategory) ||
      category === selectedCategory
    ) {
      return "bg-emerald-500";
    }
    return "bg-[#F4F4F4]";
  };

  const handleCategorySelect = (category) => {
    if (category === "All") {
      setSelectedCategory(null);
      return;
    }
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-neutral-500 flex border-none bg-[#F4F4F4] items-center justify-center pl-4 rounded-l-lg border-r-0">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </div>
            <input
              placeholder="Search legal insights"
              className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-[#141414] focus:outline-none focus:ring-0 border-none bg-[#F4F4F4] focus:border-none h-full placeholder:text-neutral-500 px-4 text-base font-normal leading-normal"
            />
          </div>
        </label>
      </div>

      <div className="flex gap-3 p-3 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg ${buttonClass(
              category
            )} px-4 hover:bg-emerald-500`}
            onClick={() => handleCategorySelect(category)}
          >
            <p className="text-[#141414] text-sm font-medium leading-normal">
              {category}
            </p>
          </button>
        ))}
      </div>

      <div className="space-y-4 p-4">
        {featuredArticles.map((article, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-stretch justify-between gap-4 rounded-lg"
          >
            <div className="flex flex-[2_2_0px] flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[#141414] text-base font-bold leading-tight">
                  {article.title}
                </p>
                <p className="text-neutral-500 text-sm font-normal leading-normal">
                  By {article.author}, {article.date} · {article.readTime}
                </p>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#F4F4F4] text-[#141414] text-sm font-medium leading-normal w-fit">
                <span className="truncate">Read More</span>
              </button>
            </div>
            <div
              className="w-full sm:w-1/3 aspect-video bg-cover bg-center bg-no-repeat rounded-lg"
              style={{ backgroundImage: `url("${article.image}")` }}
            ></div>
          </div>
        ))}
      </div>

      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Categories
      </h2>
      <div className="flex gap-3 p-3 overflow-x-auto">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#F4F4F4] px-4"
          >
            <p className="text-[#141414] text-sm font-medium leading-normal">
              {category}
            </p>
            <ChevronDownIcon className="h-5 w-5 text-[#141414]" />
          </button>
        ))}
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#F4F4F4] px-4">
          <p className="text-[#141414] text-sm font-medium leading-normal">
            More
          </p>
          <ChevronDownIcon className="h-5 w-5 text-[#141414]" />
        </button>
      </div>

      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Recent Posts
      </h2>
      <div className="space-y-2">
        {recentPosts.map((post, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between"
          >
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-14 h-14"
                style={{ backgroundImage: `url("${post.image}")` }}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#141414] text-base font-medium leading-normal line-clamp-1">
                  {post.title}
                </p>
                <p className="text-neutral-500 text-sm font-normal leading-normal line-clamp-2">
                  By {post.author}, {post.date} · {post.readTime}
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <ArrowRightIcon className="h-6 w-6 text-[#141414]" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
