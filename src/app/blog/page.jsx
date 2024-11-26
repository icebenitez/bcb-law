import { Suspense } from "react";
import Blog from "./blog.client";

export default function BlogsPage() {
  return (
    <div className="flex flex-1 justify-center py-5 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col max-w-[960px] w-full">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <h1 className="text-[#141414] text-4xl font-black leading-tight tracking-[-0.033em]">
              Legal Insights
            </h1>
            <p className="text-neutral-500 text-base font-normal leading-normal">
              Stay up to date with the latest legal news, insights, and analysis
              from our team of experts.
            </p>
          </div>
        </div>

        <Suspense>
          <Blog />
        </Suspense>
      </div>
    </div>
  );
}
