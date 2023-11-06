// next img
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <title>MyPortofolio</title>
      </Head>
      <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[120px]">
        <div className="container mx-auto ">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
            {/* logo */}
            <Link href={"/"}>
              <div
                style={{
                  width: "220px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "white", fontSize: "50px" }}>
                  Satrio<span className="text-accent">.</span>
                </span>
              </div>
            </Link>
            {/* socials */}
            <Socials />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
