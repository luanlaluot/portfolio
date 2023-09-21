import { Facebook, Github } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Social() {
  return (
    <div className="flex gap-4">
      <Link
        href={`/`}
        scroll={false}
        target="_blank"
        aria-label="Twitter"
        className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
      >
        <Facebook />
      </Link>

      <Link
        href={`/`}
        scroll={false}
        target="_blank"
        aria-label="Github"
        className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
      >
        <Github />
      </Link>
    </div>
  );
}
