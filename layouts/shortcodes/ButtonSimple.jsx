import Link from "next/link";

const Button = ({ href, rel, children }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel={`noopener noreferrer ${
        rel ? (rel === "follow" ? "" : rel) : "nofollow"
      }`}
    >
      {children}
    </Link>
  );
};

export default Button;
