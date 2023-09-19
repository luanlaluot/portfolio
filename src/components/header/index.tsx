import Link from "next/link";
import React from "react";
import { NAV } from "./nav";
import { useRouter } from "next/router";
import { Home, Languages, Lightbulb, LogOut, Menu } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
import LangSwitcher from "./LangSwitcher";
import Image from "next/image";

function Nav() {
  const router = useRouter();
  const [showMenu, setShowMenu] = React.useState(false);

  let activeMenu = "";
  if (router.query.slug) {
    activeMenu = "/" + router.query.slug;
  } else {
    activeMenu = router.pathname;
  }
  return (
    <div className="flex">
      {/* Desktop nav */}
      <ul className="hidden md:flex md:gap-1">
        {NAV.map(
          (link) =>
            link.show && (
              <Link passHref href={link.to} key={link.id} scroll={false}>
                <li
                  className={`${
                    activeMenu === link.to ? "bg-gray-200 dark:bg-gray-700" : ""
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

      <div className="nav-func-btn block">
        <ThemeSwitcher />
        <LangSwitcher />
      </div>

      {/* Mobile nav */}
      <div className="md:hidden mr-2 block ">
        <button
          type="button"
          aria-label="Menu"
          onClick={() => setShowMenu((showMenu: boolean) => !showMenu)}
          className="hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block p-2 -mr-3 md:pb-3"
        >
          <Menu className="inline-block mb-1 h-5 w-5" />
        </button>
        {showMenu && (
          <div className="absolute right-0 w-40 mr-4 mt-2 bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600 rounded-md shadow-lg outline-none">
            <div className="py-1">
              {NAV.map(
                (link) =>
                  link.show && (
                    <Link passHref key={link.id} href={link.to} scroll={false}>
                      <button
                        onClick={() =>
                          setShowMenu((showMenu: boolean) => !showMenu)
                        }
                        className="text-left hover:bg-gray-100 dark:hover:bg-gray-600 font-light block justify-between w-full px-4 py-2 leading-5"
                      >
                        {link.icon}
                        <span className="m-1">{link.name}</span>
                      </button>
                    </Link>
                  )
              )}
            </div>
            <div className="px-4 py-4">
              <Home />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const Header = ({ navBarTitle, fullWidth }: any) => {
  const [showTitle, setShowTitle] = React.useState(false);

  const navRef = React.useRef<HTMLDivElement | null>(null);
  const sentinelRef = React.useRef<HTMLDivElement | null>(null);
  const handler = React.useCallback(([entry]: any) => {
    if (navRef.current) {
      navRef.current?.classList.toggle(
        "sticky-nav-full",
        !entry.isIntersecting
      );
    } else {
      (navRef.current as any)?.classList?.add("remove-sticky");
    }
  }, []);
  React.useEffect(() => {
    const sentinelEl = sentinelRef.current;
    const observer = new window.IntersectionObserver(handler);
    observer.observe(sentinelEl as any);

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 400) {
        setShowTitle(true);
      } else {
        setShowTitle(false);
      }
    });
    return () => {
      sentinelEl && observer.unobserve(sentinelEl);
    };
  }, [handler, sentinelRef]);
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinelRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? "max-w-3xl px-4" : "px-4 md:px-24"
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link passHref href="/" scroll={false} aria-label={"Luan"}>
            <div className="h-[50px] w-[50px]">
              <Image
                className="rounded-[50%]"
                alt="luanlaluot"
                src={require("@/assets/images/avatar.png")}
              />
            </div>
          </Link>
          {navBarTitle ? (
            <p
              className={`ml-2 font-medium ${
                !showTitle ? "hidden" : "hidden xl:block"
              }`}
            >
              {navBarTitle}
            </p>
          ) : (
            <p
              className={`ml-2 font-medium ${
                !showTitle ? "hidden" : "hidden xl:block"
              }`}
            >
              {"Luan Test"}, <span className="font-normal">{"Mo6 ta3 ne"}</span>
            </p>
          )}
        </div>
        <Nav />
      </div>
    </>
  );
};
export default Header;
