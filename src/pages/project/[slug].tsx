import Project from "@/components/Project";
import Social from "@/components/common/Social";
import Container from "@/layout/container";
import { Contact, Download, Facebook, Github, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { firebaseStore } from "@/service";
import { take } from "lodash";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [projects, setProjects] = React.useState<any[]>([]);
  React.useEffect(() => {
    getProject();
  }, []);
  const getProject = async () => {
    const data = await getDocs(collection(firebaseStore, "project"));
    let arr: any[] = [];
    data.forEach((doc) => {
      arr.push(doc.data());
    });
    setProjects(arr);
  };

  return (
    <Container>
      <div className="container mx-auto flex py-2 mb-10 md:flex-row flex-col items-center">
        <div className="relative h-[300px] w-full mb-2">
          <Image
            alt="'project-banner"
            layout="fill"
            src={"https://random.imagecdn.app/500/300"}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <article>
        <div className="relative mt-auto">
          <header className="flex flex-col justify-between md:items-baseline mb-5">
            <h2 className="text-3xl md:text-4xl font-medium mb-2 text-black dark:text-gray-100">
              Smart Salon Project
            </h2>
            <span className="text-color-fix font-light  text-gray-600 dark:text-gray-400">
              An application for checking in/out and managing employees in the
              Nail system.
            </span>
          </header>
          <body>
            <div className="mb-3">
              <h3 className=" text-xl md:text-2xl font-semibold mb-2">
                Technology
              </h3>
              <div className="flex flex-wrap">
                {Array(5)
                  .fill(0)
                  .map((_, index) => {
                    return (
                      <p
                        className="p-2 bg-slate-200 hover:bg-slate-300 cursor-pointer select-none mr-2 mb-2 rounded-md"
                        key={index.toString()}
                      >
                        {"React"}
                      </p>
                    );
                  })}
              </div>
            </div>
            <div className="mb-3">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Experience
              </h3>
              <div>
                <p>- Developing mobile applications with React Native.</p>
                <p>- Developing mobile applications with React Native.</p>
                <p>- Developing mobile applications with React Native.</p>
                <p>- Developing mobile applications with React Native.</p>
                <p>- Developing mobile applications with React Native.</p>
                <p>- Developing mobile applications with React Native.</p>
              </div>
            </div>
            <div className="mb-3">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Review</h3>
              <div>
                <p>
                  Source code:{" "}
                  <span className="italic text-gray-400">Private</span>
                </p>
                <p>
                  Product:{" "}
                  <a href="https://play.google.com/store/apps/details?id=com.smartSalonStylist&hl=vi&gl=US">
                    <span className="hover:text-blue-700">
                      Smart Salon Inhouse -Google Play Application
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </body>
          {/* w-4/5  */}
        </div>
      </article>
    </Container>
  );
}
