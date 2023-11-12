"use client";

import "@/app/globals.css";

import { Float, Container, Navbar, Button } from "@/components";

export default function RootLayout({ children }) {
  return (
    <html className="bg-gray-50 text-gray-950">
      <body>
        <AppNavBar />
        {children}
      </body>
    </html>
  );
}

function AppNavBar() {
  return (
    <Navbar>
      <Float>
        <Float.Left>
          <Navbar.Group>
            <Navbar.Anchor href="/movies/">Movies</Navbar.Anchor>
            <Navbar.Anchor href="/tv-shows/">TV Shows</Navbar.Anchor>
            <Navbar.Anchor href="/latest/">Latest</Navbar.Anchor>
            <Navbar.Anchor href="/popular/">Popular</Navbar.Anchor>
            <Navbar.Anchor href="/my-list/">My List</Navbar.Anchor>
          </Navbar.Group>
        </Float.Left>
        <Float.Right>
          <Navbar.Group>
            <Navbar.Search />
            <Navbar.Anchor href="/profile/">Profile</Navbar.Anchor>
          </Navbar.Group>
        </Float.Right>
      </Float>
    </Navbar>
  );
}
