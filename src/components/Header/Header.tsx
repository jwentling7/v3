"use client";

import Link from "next/link";
import { Fragment } from "react";
import routes from "./routes";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <header className="sticky top-0 flex justify-center px-16 bg-green-500">
      <nav className="flex items-center h-20 w-full max-w-screen-2xl">
        <div className="flex-1">logo</div>
        <ul className="flex gap-12 items-center">
          {routes.map(({ name, href, Component }) => {
            return (
              <Fragment key={name}>
                {Component ? (
                  <Component />
                ) : (
                  <li>
                    <Link
                      href={href}
                      className={
                        path === href
                          ? "underline underline-offset-8 decoration-pink-500"
                          : ""
                      }
                    >
                      {name}
                    </Link>
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
