import Social from "@/components/common/Social";
import Container from "@/layout/container";
import { Contact, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProfilePage() {
  return (
    <Container>
      <div className="container mx-auto flex px-5 py-2 mb-10 md:flex-row flex-col">
        <div className="w-3/6">
          <div className="relative h-3/4 w-3/4">
            <Image
              className="rounded-[50%]"
              alt="luanlaluot"
              src={require("@/assets/images/avatar.png")}
            />
          </div>
        </div>
        <div className="flex flex-col md:w-3/6 md:items-start mb-6 md:mb-0 text-left">
          <div className="mb-6">
            <p className="text-lg text-gray-600 dark:text-day mb-1">
              {" Hi, I'm Luan, Nguyen A Luan"}
            </p>
            <p className="text-sm text-gray-600 dark:text-day mb-1">
              {`I'm a cheerful and enthusiastic person. I have a strong desire to
              learn from previous generations in order to enhance my skills and
              broaden my perspectives. I aspire to work in a professional
              environment where I can utilize and fully exploit my potential.`}
            </p>
          </div>
          <Social />
          <div className="flex flex-row sm:justify-center gap-4 mt-6">
            <Link passHref href="/" scroll={false}>
              <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center">
                <Download className="inline-block text-gray-600 dark:text-day h-7 w-7 mt-1" />
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 dark:text-day mb-1">
                    My CV
                  </span>
                  <span className="font-medium">Download</span>
                </span>
              </button>
            </Link>
            <Link passHref href="/contact" scroll={false}>
              <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center">
                <Contact className="inline-block text-gray-600 dark:text-day h-7 w-7 mt-1" />
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 dark:text-day mb-1">
                    More
                  </span>
                  <span className="font-medium">Contact</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative mb-8">
        <header className="flex flex-col justify-between md:items-baseline mb-3">
          <h2 className="text-xl md:text-2xl font-medium  text-black dark:text-gray-100">
            Education
          </h2>
        </header>
        <div className="mb-3">
          <div className="mb-2">
            <div className="mb-2">
              <span className="text-white text-sm px-2 py-1 bg-slate-400 rounded-sm ">
                01/2019 - 01/2022
              </span>
            </div>

            <p className="text-lg font-semibold">FPT Polytechnic </p>
            <p className="text-sm text-gray-500">Fresher android probation</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <header className="flex flex-col justify-between md:items-baseline mb-3">
          <h2 className="text-xl md:text-2xl font-medium text-black dark:text-gray-100">
            Working Experience
          </h2>
        </header>
        <div className="mb-3">
          <div className="mb-2">
            <div className="mb-2">
              <span className="text-white text-sm px-2 py-1 bg-slate-400 rounded-sm ">
                02/2021 - 04/2021
              </span>
            </div>
            <p className="text-lg font-semibold">Unit Corp</p>
            <p className="text-sm text-gray-500">Fresher android probation</p>
          </div>
          <p>Developing applications using Kotlin</p>
          <p>Task allocation with Trello.</p>
          <p>How to develop a project following the SCRUM methodology.</p>
          <p>Debugging applications with Android Studio</p>
          <p>
            Learning about Singleton Pattern, Threads in Android, and Android
            Permissions
          </p>
        </div>
        <div className="mb-3">
          <div className="mb-2">
            <div className="mb-2">
              <span className="text-white text-sm px-2 py-1 bg-slate-400 rounded-sm ">
                05/2021 - 08/2023
              </span>
            </div>
            <p className="text-lg font-semibold">SCS Solutions</p>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>
          <p>Developing applications using Kotlin</p>
          <p>Task allocation with Trello.</p>
          <p>How to develop a project following the SCRUM methodology.</p>
          <p>Debugging applications with Android Studio</p>
          <p>
            Learning about Singleton Pattern, Threads in Android, and Android
            Permissions
          </p>
        </div>
      </div>
    </Container>
  );
}
