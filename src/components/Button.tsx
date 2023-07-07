import Link from "next/link";
import { ReactNode } from "react";

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
    base: "relative flex items-center rounded px-6 py-2 transition duration-300 group",
    outlined:
      "text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-black-500",
    text: "hover:opacity-50",
  };

  const classNames = `${className.base} ${className[variant]}`;

  const Content = () => (
    <>
      {children}
      {variant === "text" && (
        /**
         * Took this SVG style from Stripe's website.
         * @link https://stripe.com/
         */
        <svg
          className="ml-3 stroke-white-500 stroke-2"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden="true"
        >
          <g fill-rule="evenodd">
            <path
              className="duration-300 opacity-0 group-hover:opacity-100"
              d="M0 5h7"
            ></path>
            <path
              className="duration-300 group-hover:translate-x-1"
              d="M1 1l4 4-4 4"
            ></path>
          </g>
        </svg>
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
