import PropTypes from "prop-types";
import { PropsWithChildren } from "react";

type ContainerProps = {
  fullWidth?: boolean;
} & PropsWithChildren;

const Container = ({ children, fullWidth, ...customMeta }: ContainerProps) => {
  const meta = {
    title: "luanlaluot - Portfolio",
    type: "website",
    ...customMeta,
  };
  return (
    <>
      {/* <SEO meta={meta} /> */}
      <main
        className={`flex m-auto flex-grow h-full w-full transition-all ${
          !fullWidth ? "max-w-2xl px-4" : "px-4 md:px-24"
        }`}
      >
        {children}
      </main>
    </>
  );
};

export default Container;
