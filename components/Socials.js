import Link from "next/link";
import {
  RiInstagramLine,
  RiWhatsappLine
} from "react-icons/ri";
import { RxLinkedinLogo, RxGithubLogo, RxDownload, RxEnvelopeClosed } from "react-icons/rx";

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
      <Link
        href="https://wa.me/6285156419062"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiWhatsappLine />
      </Link>
       <Link
        href="/satrio-cv.pdf"
        download
        className="hover:text-accent transition-all duration-300"
      >
        <RxDownload />
      </Link>
    </div>
  );
};

export default Socials;
