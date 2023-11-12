import Link from "next/link";

import { Container, Float, Kbd, Button as _Button } from "@/components";
import { Search as SearchIcon } from "lucide-react";

export function Navbar({ children }) {
  return (
    <div className="py-2 bg-gray-50 border-b border-gray-150 whitespace-nowrap">
      <Container>{children}</Container>
    </div>
  );
}

function Group({ children }) {
  return <div className="space-x-4 flex items-center h-full">{children}</div>;
}

function Item({ children }) {
  return <span>{children}</span>;
}

function Anchor({ children, href }) {
  return (
    <Item>
      <Link
        href={href}
        className="text-gray-500 hover:text-gray-900 active:text-gray-400 transition-colors duration-200"
      >
        {children}
      </Link>
    </Item>
  );
}

function Search() {
  return (
    <button className="transition-all duration-200 py-2 px-4 space-x-4 flex items-center rounded-2xl bg-gray-200/50 hover:bg-gray-300/50 active:bg-gray-400/50">
      <span className="flex space-x-2 items-center text-gray-500">
        <SearchIcon size={20} />
        <span>Quick Search</span>
      </span>
      <Kbd>⌘K</Kbd>
    </button>
  );
}

Navbar.Group = Group;
Navbar.Item = Item;
Navbar.Anchor = Anchor;
Navbar.Search = Search;
