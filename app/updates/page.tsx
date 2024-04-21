"use client";
import { marked } from "marked";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [updates, setUpdates] = useState<any | null>();
  useEffect(() => {
    fetch("/updates.md")
      .then((res) => res.text())
      .then((data) => {
        setUpdates(marked.parse(data));
      });
  });

  return (
    <div className="p-4 w-full overflow-y-auto">
      <div className="inline-flex items-center justify-center gap-3 flex-row h-fit">
        <Link
          href="/"
          className="py-2 px-4 btn group text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>{" "}
          Back
        </Link>
        <h1 className="mb-0 text-2xl font-bold">Updates</h1>{" "}
      </div>
      <div className="divider"></div>
      <div
        className="prose animate-in"
        dangerouslySetInnerHTML={{ __html: updates }}
      ></div>
    </div>
  );
}
