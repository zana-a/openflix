"use client";

import Link from "next/link";

export function Button({ children, href, onClick }) {
  if (href && onClick) {
    throw new Error("Can't use both href and onClick on the same button");
  }

  if (href) {
    return <Link href={href}>{children}</Link>;
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={
          "transition-all duration-200 py-2 px-4 rounded-2xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
        }
      >
        {children}
      </button>
    );
  }

  throw new Error("You must provide href or onClick");
}
