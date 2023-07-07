import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
import DoubleRightArrow from "@/icons/double_right_arrow.svg";
import RightArrow from "@/icons/right_arrow.svg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: (props?: any) => void;
  variant?: "outlined" | "text";
};

const Button = ({
  children,
  href,
  onClick,
  variant = "outlined",
}: ButtonProps) => {
  const className = {
    base: "relative flex gap-4 items-center rounded px-5 py-2 transition duration-500 group",
    outlined:
      "text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-black-500",
    text: "hover:text-opacity-50",
  };

  const classNames = `${className.base} ${className[variant]}`;

  const Content = () => (
    <>
      {children}
      {variant === "text" && (
        <>
          <Image
            src={RightArrow}
            alt="right arrow"
            className="absolute right-0 transition duration-300 group-hover:opacity-0"
          />
          {/* <Image src={DoubleRightArrow} className="absolute right-0 transition duration-300 opacity-0 group-hover:opacity-100"/> */}
        </>
      )}
    </>
  );

  return (
    <>
      {href ? (
        <Link href={href} className={classNames}>
          <Content />
        </Link>
      ) : (
        <button onClick={onClick} className={classNames}>
          <Content />
        </button>
      )}
    </>
  );
};

export default Button;
