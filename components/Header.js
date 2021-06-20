import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const HeaderLink = ({ name, href }) => (
  <Link href={href}>
    <a className="text-indigo-600 p-2">{name}</a>
  </Link>
);

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-md">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <Link href="/">
          <a title="Home Page" className="font-bold text-indigo-600">
            Shivam
          </a>
        </Link>
        <div className="flex items-center">
          <div className="hidden md:inline-flex">
            <HeaderLink name="Blog" href="/blog" />
            <HeaderLink name="About" href="#" />
          </div>
          <div className="inline-flex md:hidden">
            <button
              className="flex-none px-2 btn btn-link btn-sm"
              onClick={() => setOpen(true)}
            >
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Open Menu</span>
            </button>
            {isOpen && (
              <div className="absolute top-0 left-0 right-0 flex flex-col p-2 pb-4 m-2 z-50 bg-white rounded shadow">
                <button
                  className="self-end flex-none px-2 ml-2 btn btn-link btn-icon"
                  onClick={() => setOpen(false)}
                >
                  <XIcon className="h-5 w-5" />
                  <span className="sr-only">Close Menu</span>
                </button>
                <HeaderLink name="Blog" href="/blog" />
                <HeaderLink name="About" href="#" />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
