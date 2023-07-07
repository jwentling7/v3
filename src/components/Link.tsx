import NextLink from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
import DoubleRightArrow from "@/icons/double_right_arrow.svg";
import RightArrow from "@/icons/right_arrow.svg";

type LinkProps = {
  children: ReactNode;
  href: string;
};

const Link = ({ children, href }: LinkProps) => {
  return (
    <NextLink href={href} className="hover:underline">
      {children}
    </NextLink>
  );
};

export default Link;
