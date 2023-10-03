import Container from "@/layout/container";
import React from "react";
import Contact from "./components/ContactForm";

export default function ContactPage() {
  return (
    <Container>
      <div className="mb-8 md:mb-16 text-gray-600 dark:text-gray-200">
        <h2 className="text-xl lg:text-3xl font-light text-center mb-4">
          {"Contact"}
        </h2>
        <p className="max-w-screen-md font-light md:text-lg text-center mx-auto">
          {"If you have any questions or suggestions, please contact me."}
        </p>
      </div>
      <Contact />
    </Container>
  );
}
