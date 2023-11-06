// links
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

import { RxLinkedinLogo, RxGithubLogo, RxEnvelopeClosed } from "react-icons/rx";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.instagram.com/satrio.tio99/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://github.com/satrio7Cloud"}
        className="hover:text-accent transition-all duration-300"
      >
        <RxGithubLogo />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/satrio-utomo-4104b1217"}
        className="hover:text-accent transition-all duration-300"
      >
        <RxLinkedinLogo />
      </Link>
      <Link
        href={"mailto:satriomozza@gmail.com"}
        className="hover:text-accent transition-all duration-300"
      >
        <RxEnvelopeClosed />
      </Link>
      {/* <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiFacebookBoxLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiDribbbleLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiBehanceLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiPinterestLine />
    </Link> */}
    </div>
  );
};

export default Socials;
