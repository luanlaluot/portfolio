import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { NAV } from "../header/nav";
import Social from "../common/Social";
import { FOOTER_NAV } from "./nav";

const Footer = ({ fullWidth }: any) => {
  const router = useRouter();
  const { locale } = useRouter();

  let activeMenu = "";
  if (router.query.slug) {
    activeMenu = "/" + router.query.slug;
  } else {
    activeMenu = router.pathname;
  }

  const d = new Date();
  const y = d.getFullYear();

  return (
    <motion.div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-600 dark:text-gray-300 transition-all ${
        !fullWidth ? "max-w-3xl md:px-8" : "px-4 md:px-24"
      }`}
    >
      <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-b dark:border-gray-600 py-1">
          <ul className="flex flex-wrap justify-center md:justify-start md:gap-1">
            {FOOTER_NAV.map(
              (link) =>
                link.show && (
                  <Link passHref key={link.id} href={link.to} scroll={false}>
                    <li
                      key={link.id}
                      className={`${
                        activeMenu === link.to
                          ? "bg-gray-200 dark:bg-gray-700"
                          : ""
                      } hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block py-1 px-2 nav`}
                    >
                      <div className="font-light">
                        {link.icon}
                        <span className="inline-block m-1">{link.name}</span>
                      </div>
                    </li>
                  </Link>
                )
            )}
          </ul>
          <div className="hidden md:flex">
            <Social />
          </div>
        </div>

        <div className="text-gray-400 text-xs font-light py-4">
          {"© 2022 - 2023 | 左蓝"}
          <p className="md:float-right">
            {"This site is licensed under the"}
            <a
              className="underline"
              href={`https://creativecommons.org/licenses/by-sa/4.0/`}
            >
              {" CC BY-SA 4.0"}
            </a>
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
