import { Facebook, Github, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Social() {
  return (
    <div className="flex gap-3">
      <Link
        href={`https://www.facebook.com/Lunalu27`}
        scroll={false}
        target="_blank"
        aria-label="Facebook"
        className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
      >
        <Facebook />
      </Link>

      <Link
        href={`https://github.com/luanlaluot`}
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
